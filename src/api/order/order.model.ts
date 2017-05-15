/**
 * @export
 * @type Order
 */
export type Order = {
  Id: string,
  Total: number,
  Status: number,
  BookId: string,
  Quantity: number,
  BookTitle: string,
  Timestamp: string,
  CustomerId: string,
  CustomerName: string,
  StatusTimestamp: string,
};

/**
 * @export
 * @type OrderForm
 */
export type OrderForm = {
  total: number;
  bookId: string;
  quantity: number;
  bookTitle: string;
  customerId: string;
  customerName: string;
};

/**
 * @export
 * @type OrderId
 */
export type OrderId = {
  Id: string;
};
