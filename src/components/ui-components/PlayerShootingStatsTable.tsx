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
import { CollapseIcon, ExpandIcon } from "./extended/Chevron";
import { SortDown, SortUp, SortUpDown } from "./extended/Sort";

interface PlayerStatsTableProps {
  data: PlayerStatsData[];
  season: string;
  renderRowSubComponent: (row: R<PlayerStatsData>) => JSX.Element;
}

interface RowProp {
  row: R<PlayerStatsData>;
}

/** Displays a sorting indicator for a given column based on sorting state
 * @params col
 * @returns styled sorting indicator
 */
function generateSortingIndicator(col: HeaderGroup<PlayerStatsData>) {
  return col.disableSortBy ? (
    ""
  ) : col.isSorted ? (
    col.isSortedDesc ? (
      <SortDown />
    ) : (
      <SortUp />
    )
  ) : (
    <SortUpDown />
  );
}

/** Table component that displays player shooting stats
 * { App } -> { NavBar, RouteList } -> { PlayerProfile } -> { PlayerShootingStatsTable }
 *
 * @param {PlayerStatsTableProps} { data, season, renderRowSubComponent }
 * @returns styled, paginated, sortable and expandable table
 */
function PlayerShootingStatsTable({
  data,
  season,
  renderRowSubComponent,
}: PlayerStatsTableProps) {
  const columns = useMemo(
    () => [
      {
        Header: "game",
        id: "expander", // id is required
        disableSortBy: true,
        Cell: ({ row }: RowProp) => (
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? <CollapseIcon /> : <ExpandIcon />}
          </span>
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
      { Header: "or ", accessor: "offReb" },
      { Header: "dr ", accessor: "defReb" },
      { Header: "reb ", accessor: "totReb" },
      { Header: "ast ", accessor: "assists" },
      { Header: "pf ", accessor: "pFouls" },
      { Header: "stl ", accessor: "steals" },
      { Header: "to ", accessor: "turnovers" },
      { Header: "blk ", accessor: "blocks" },
      { Header: "+/- ", accessor: "plusMinus", sortType: "basic" },
    ],
    []
  );

  /** Custom props and hooks for react-table */
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

  function onChangeInSelect(event: { target: { value: any } }) {
    setPageSize(Number(event.target.value));
  }

  function onChangeInInput(event: { target: { value: any } }) {
    const page = event.target.value ? Number(event.target.value) - 1 : 0;
    gotoPage(page);
  }

  return (
    <Fragment>
      <h3>
        Shooting stats per Game ({season}-{Number(season) + 1})
      </h3>
      <details>
        <summary>more info</summary>
        <p className="smaller">
          <i>
            Games are pre-sorted, most recent games appearing first. Click on
            the hand icon to get game details. Stats can be sorted by clicking
            the arrow icon next to each stat.
          </i>
        </p>
      </details>
      <div>
        <Table
          responsive
          size="sm"
          hover
          striped
          {...getTableProps()}
          title="Shooting stats per Game"
        >
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
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                  {row.isExpanded && (
                    <tr>
                      <td colSpan={visibleColumns.length}>
                        {renderRowSubComponent(row)}
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </Table>
      </div>
      <Row style={{ textAlign: "center" }} className="pb-3">
        <Col xs={3} sm={3} md={3}>
          <Button
            className="mx-1 px-1"
            size="sm"
            color="primary"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {<span className="pagination">{"<<"}</span>}
          </Button>
          <Button
            size="sm"
            color="primary"
            onClick={previousPage}
            disabled={!canPreviousPage}
          >
            {<span className="pagination">{"<"}</span>}
          </Button>
        </Col>
        <Col xs={2} sm={2} md={2} style={{ marginTop: 5 }} className="smaller">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </Col>
        <Col xs={1} sm={1} md={1}>
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
        <Col xs={3} sm={3} md={2}>
          <Input
            className="smaller"
            bsSize="sm"
            min={1}
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
        <Col xs={3} sm={3} md={3}>
          <Button
            size="sm"
            color="primary"
            onClick={nextPage}
            disabled={!canNextPage}
          >
            {<span className="pagination">{">"}</span>}
          </Button>
          <Button
            className="mx-1 px-1"
            size="sm"
            color="primary"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {<span className="pagination">{">>"}</span>}
          </Button>
        </Col>
      </Row>
    </Fragment>
  );
}

export default PlayerShootingStatsTable;
