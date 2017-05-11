/**
 * @export
 * @type Order
 */
export type Order = {
  Id: string,
  BookId: string,
  BookTitle: string,
  CustomerId: string,
  CustomerName: string,
  Quantity: number,
  Timestamp: string,
  Total: number,
  Status: number,
  StatusTimestamp: string,
};

/**
 * @export
 * @type OrderForm
 */
export type OrderForm = {
  bookId: string,
  quantity: number,
  customerId: string,
  customerName: string,
  bookTitle: string,
  total: number
};

/**
 * @export
 * @type OrderId
 */
export type OrderId = {
  Id: string
};
