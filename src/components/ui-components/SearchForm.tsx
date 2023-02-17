import { debounce } from "lodash";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { FormGroup, Input, Label, ListGroup, ListGroupItem } from "reactstrap";
import nbaApi from "../../api/nbaApi";

interface SearchResults {
  id: number;
  firstname: string;
  lastname: string;
}

/** Search Form Component
 * Handles input changes and searches for results matching user input
 * Renders list of results if found
 * Use lodash debounce to delay the search to avoid unnecessary API calls
 * { App } -> { AppList } -> { PlayerProfile } -> { SearchForm }
 *
 * @returns styled Form Component
 */
function SearchForm() {
  const [playerList, setPlayerList] = useState<Array<SearchResults>>([]);

  async function search(name: string) {
    const resp = await nbaApi.getPlayers(name);
    // filter out inactive players
    return resp.response.filter((player) => player.nba.pro !== 0);
  }

  const debouncedSearch = useRef(
    debounce(async (name) => {
      const players = await search(name);
      setPlayerList(
        players.map((player) => ({
          id: player.id,
          firstname: player.firstname,
          lastname: player.lastname,
        }))
      );
    }, 300)
  ).current;

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  /** Ensure that the value is not empty before passing it to the search function */
  async function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length > 0) debouncedSearch(e.target.value);
  }

  return (
    <FormGroup>
      <Label for="search"></Label>
      <Input
        id="seach"
        name="search"
        className="small"
        bsSize="sm"
        placeholder="Search for player by last name, ex: James for Lebron James"
        type="search"
        onChange={handleChange}
      />
      <ListGroup className="glossary py-2">
        {playerList.map((player) => (
          <ListGroupItem key={player.id} action href={`${player.id}`} tag="a">
            {player.firstname} {player.lastname}
          </ListGroupItem>
        ))}
      </ListGroup>
    </FormGroup>
  );
}

export default SearchForm;
