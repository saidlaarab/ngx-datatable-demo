# Ngx Datatable Demo
This a project is aimed to sum up what I have learned on `angular-based` library ngx-datatable.

## nxg-datatable's attributes:
`rows`   (array) : the array of elements populating the selected page.

`offset` (number): the index of the selected page (start from zero!)

`limit`   (number): the size of each page.

`count`  (number): the total number of elements makin the list.

`externalPaging` (boolean): 'true' for server-side pagination. the default value is 'false'

## nxg-datatable's events:
`page`  : represent the event of selecting a page, it returns and object containing the following properties regarding the state of pagination
{
  offset,
  
}


