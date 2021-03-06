import * as info from "../action/BookmarkTreeOverview";

const BookmarkTreeOverviewReducer = (state = info.getInitData(), action) => {
  switch (action.type) {
    case info.CLOSE_MODAL:
    case info.SET_IS_EDIT:
    case info.UPDATE_TREEDATA:
    case info.CHANGE_CHECKED_KEYS:
    case info.CHANGE_EXPANDED_KEYS:
    case info.CHANGE_CURRENT_CLICK_ITEM:
    case info.ADD_NODE:
    case info.EDIT_NODE:
    case info.CHANGE_LOADED_KEYS:
    case info.REFRESH:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

export default BookmarkTreeOverviewReducer;
