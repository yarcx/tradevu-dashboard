export type ICustomOptions = {
  label: string;
  value: string;
  img?: string;
};

export interface ICustomProps {
  classNames?: string;
  placeholder: string;
  options: ICustomOptions[];
  label?: string;
}

export enum ITrxnStatus {
  "Pending",
  "Completed",
  "Failed",
}

export interface IRecentTrxnProps {
  date?: string;
  to?: string;
  from?: string;
  sentAmount: string;
  pendingAmount: string;
  time: string;
  status?: ITrxnStatus;
  more?: IRecentTrxnProps[];
}

export interface IPendingActionsProps {
  date?: string;
  offer?: string;
  quote?: string;
  shipment?: string;
  shipmentStatus?: string;
  shipmentTicket?: string;
  payment?: string;
  amount?: string;
  type: string;
  company: string;
  more?: IPendingActionsProps[];
}

export interface INotify {
  active: boolean;
  msg: string;
  date: string;
}
