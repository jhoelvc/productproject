import { Filter } from "./filter"
import { Paging } from "./paging"

export interface FilterPagination {
  paging: Paging,
  filters: Filter
}