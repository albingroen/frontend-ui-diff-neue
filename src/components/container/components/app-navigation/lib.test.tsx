import { translateAppNavigationLists } from "./lib";
import { appNavigationItems } from ".";

test("transform object structure to header input structure", () => {
  const headerLists = translateAppNavigationLists(appNavigationItems);
  console.log(headerLists[0].items[0]);
  expect(headerLists[0].items[0].key).toStrictEqual(1);
});
