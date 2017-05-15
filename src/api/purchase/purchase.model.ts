/**
 * @export
 * @type Purchase
 */
export type Purchase = {
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
 * @type PurchaseForm
 */
export type PurchaseForm = {
  bookId: string,
  quantity: number,
  customerId: string,
  customerName: string,
  bookTitle: string,
  total: number
  id: string;
};

export type PurchaseId = {
  Id: string
};