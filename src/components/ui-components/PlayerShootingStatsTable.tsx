import { Fragment, useMemo } from "react";
import {
  HeaderGroup,
  Row as R,
  useExpanded,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { Button, Col, Input, Row, Table } from "reactstrap";
import { PlayerStatsData } from "../../types/playerStats";
import { SortDown, SortUp, SortUpDown } from "./extended/Sort";

interface PlayerStatsTableProps {
  data: PlayerStatsData[];
  season: string;
  renderRowSubComponent: (row: R<PlayerStatsData>) => JSX.Element;
}

interface RowProp {
  row: R<PlayerStatsData>;
}

/** Table component that displays player shooting stats
 * { App } -> { NavBar, RouteList } -> { PlayerProfile } -> { PlayerShootingStatsTable }
 * useMemo for optimization -> colums
 * @param {PlayerStatsTableProps} { data, season, renderRowSubComponent }
 * @returns styled, paginated, sortable and expandable table
 */
function PlayerShootingStatsTable({ data, season, renderRowSubComponent }: PlayerStatsTableProps) {
  const columns = useMemo(
    () => [
      {
        Header: "game",
        id: "expander", // id is required
        disableSortBy: true,
        Cell: ({ row }: RowProp) => (
          <span {...row.getToggleRowExpandedProps()}>{row.isExpanded ? "👇" : "👉"}</span>
        ),
      },
      { Header: "pts ", accessor: "points" },
      { Header: "pos ", disableSortBy: true, accessor: "pos" },
      { Header: "min ", accessor: "min" },
      { Header: "fgm ", accessor: "fgm" },
      { Header: "fga ", accessor: "fga" },
      { Header: "fg% ", accessor: "fgp" },
      { Header: "ftm ", accessor: "ftm" },
      { Header: "fta ", accessor: "fta" },
      { Header: "ft% ", accessor: "ftp" },
      { Header: "3pm ", accessor: "tpm" },
      { Header: "3pa ", accessor: "tpa" },
      { Header: "3p% ", accessor: "tpp" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    visibleColumns,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    useExpanded,
    usePagination // usePagination always placed AFTER useExpanded hook
  );

  const onChangeInSelect = (event: { target: { value: any } }) => {
    setPageSize(Number(event.target.value));
  };

  const onChangeInInput = (event: { target: { value: any } }) => {
    const page = event.target.value ? Number(event.target.value) - 1 : 0;
    gotoPage(page);
  };

  const generateSortingIndicator = (col: HeaderGroup<PlayerStatsData>) => {
    if (col.disableSortBy) return "";
    return col.isSorted ? col.isSortedDesc ? <SortDown /> : <SortUp /> : <SortUpDown />;
  };

  return (
    <Fragment>
      <h3>Shooting stats per Game ({season})</h3>
      <Table size="sm" hover striped {...getTableProps()} title="Shooting stats per Game">
        <caption>Player shooting stats per Game</caption>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((col) => (
                <th {...col.getHeaderProps(col.getSortByToggleProps())}>
                  {col.render("Header")}
                  {generateSortingIndicator(col)}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <Fragment key={row.getRowProps().key}>
                <tr>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                  })}
                </tr>
                {row.isExpanded && (
                  <tr>
                    <td colSpan={visibleColumns.length}>{renderRowSubComponent(row)}</td>
                  </tr>
                )}
              </Fragment>
            );
          })}
        </tbody>
      </Table>
      <Row style={{ maxWidth: 1000, textAlign: "center" }} className="pb-3">
        <Col md={3}>
          <Button size="sm" color="primary" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {<span className="pagination">{"<<"}</span>}
          </Button>
          <Button size="sm" color="primary" onClick={previousPage} disabled={!canPreviousPage}>
            {<span className="pagination">{"<"}</span>}
          </Button>
        </Col>
        <Col md={2} style={{ marginTop: 5 }} className="smaller">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </Col>
        <Col md={2}>
          <Input
            className="smaller"
            bsSize="sm"
            type="number"
            min={1}
            style={{ width: 70 }}
            max={pageOptions.length}
            defaultValue={pageIndex + 1}
            onChange={onChangeInInput}
          />
        </Col>
        <Col md={2}>
          <Input
            className="smaller"
            bsSize="sm"
            type="select"
            value={pageSize}
            onChange={onChangeInSelect}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </Input>
        </Col>
        <Col md={3}>
          <Button size="sm" color="primary" onClick={nextPage} disabled={!canNextPage}>
            {<span className="pagination">{">"}</span>}
          </Button>
          <Button
            size="sm"
            color="primary"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {<span className="pagination">{">>"}</span>}
          </Button>
        </Col>
      </Row>
      {/*
      <Table size="sm">
        <thead>
          <tr style={{ fontSize: "x-small" }}>
            <th>#</th>
            <th>offReb</th>
            <th>defReb</th>
            <th>totReb</th>
            <th>assists</th>
            <th>pFouls</th>
            <th>steals</th>
            <th>turnovers</th>
            <th>blocks</th>
            <th>plusMinus</th>”
          </tr>
        </thead>
        <tbody>
          {stats.map((stat) => (
            <tr key={stat.game.id + "T2"}>
              <th scope="row">{stat.game.id}</th>
              <td>{stat.offReb}</td>
              <td>{stat.defReb}</td>
              <td>{stat.totReb}</td>
              <td>{stat.assists}</td>
              <td>{stat.pFouls}</td>
              <td>{stat.steals}</td>
              <td>{stat.turnovers}</td>
              <td>{stat.blocks}</td>
              <td>{stat.plusMinus}</td>
            </tr>
          ))}
        </tbody>
      </Table> */}
    </Fragment>
  );
}

export default PlayerShootingStatsTable;
