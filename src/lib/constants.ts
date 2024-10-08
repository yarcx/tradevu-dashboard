import { IPendingActionsProps, IRecentTrxnProps, ITrxnStatus } from "./types";

export const NAV_LINKS = [
  { active: true, link: "Dashboard" },
  { active: false, link: "Pay" },
  { active: false, link: "Finance" },
  { active: false, link: "Flex" },
];

export const PRINT_OPTIONS = [
  { label: "Pending", value: "Pending" },
  { label: "Completed", value: "Completed" },
  { label: "Failed", value: "Failed" },
];

export const PENDING_ACTIONS_OPTIONS = [
  { label: "All", value: "all" },
  { label: "Offer", value: "Offer" },
  { label: "Quote", value: "Quote" },
  { label: "Shipment", value: "Shipment" },
];

export const CURRENCY_OPTIONS = [{ label: "NGN", value: "NGN", img: "/img/NG.png" }];

export const RECENT_TRXN: IRecentTrxnProps[] = [
  {
    to: "Emina Odette",
    date: "Today",
    pendingAmount: "₦ 4,350,000.20",
    sentAmount: "- ₦ 10,000.00",
    status: ITrxnStatus["Pending"],
    time: "7:18 AM",
  },
  {
    to: "Archibald Holdings",
    date: "Yesterday",
    pendingAmount: "₦ 4,350,000.20",
    sentAmount: "- ₦ 65,000.00",
    status: ITrxnStatus["Completed"],
    time: "7:18 AM",
  },
  {
    to: "Bass Industries",
    date: "Fri 19 Jul",
    pendingAmount: "₦ 4,350,000.20",
    sentAmount: "- ₦ 10,000.00",
    status: ITrxnStatus["Failed"],
    time: "7:18 AM",
    more: [
      {
        from: "S&B Incorporated",
        pendingAmount: "₦ 4,350,000.20",
        sentAmount: "+ ₦ 190,000.00",
        time: "7:18 AM",
      },
      {
        to: "Humphrey & Co. ",
        pendingAmount: "₦ 4,350,000.20",
        sentAmount: "- ₦ 30,000.00",
        status: ITrxnStatus.Completed,
        time: "7:18 AM",
      },
    ],
  },
];

export const PENDING_ACTIONS: IPendingActionsProps[] = [
  {
    offer: "You’ve received an offer of ",
    amount: "₦ 3,000,000",
    type: "Invoice Factoring",
    company: "Moetown Purchase Order",
    date: "Today",
  },
  {
    quote: "You’ve received a quote of ",
    amount: "₦ 1,000,00",
    type: "Velcro Packaging",
    company: "Bass Industries",
    date: "Yesterday",
  },
  {
    shipment: "Your shipment is pending ",
    shipmentStatus: "confirmation",
    shipmentTicket: "TPO-14",
    type: "Trucking",
    company: "Tradevu Commerce",
    date: "Fri 19 Jul",
    more: [
      {
        payment: "You’ve received an offer of ",
        amount: "₦ 280,000",
        type: "Working Capital",
        company: "Maersk Haulage",
      },
    ],
  },
];

export const NOTIFICATION_LIST = [
  { active: true, msg: "S&B Inc. signed the lender’s agreement", date: "Today" },
  { active: true, msg: "Humphrey & Co. confirmed your purchase order #21", date: "04:27 pm" },
  { active: false, msg: "You received $20 from Bass Industries", date: "Yesterday" },
  {
    active: false,
    msg: "Archibald Holdings completed payment for Invoice #46",
    date: "09/02/2024",
  },
];
