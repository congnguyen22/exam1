// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

import { ListMenuNew } from "../store/slice/getItemsNews/type";
import { ListMenu } from "../store/slice/getNewsItemList/type";

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
  stateCard?: ListMenu;
  itemsNews?: ListMenuNew;
}
