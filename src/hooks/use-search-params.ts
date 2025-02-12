import { parseAsString, useQueryState } from "nuqs";

// const [x,setX] = useState();
// const [urlX,setUrlX] = useQueryState();

// setUrlX(undefined);
// ?urlX=undefined --> so we used clear on   default option

export function useSearchParam() {
  return useQueryState(
    "search", // hard coded key
    parseAsString.withDefault("").withOptions({ clearOnDefault: true })
  );
}
