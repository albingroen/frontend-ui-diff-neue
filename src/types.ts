/* eslint-disable camelcase */
import { RouteProps } from 'react-router-dom'

export interface NamedRoute extends RouteProps {
  name: string;
}

export type Chunk = string[] | React.ReactElement[];

export interface IUser {
  _id: string;
  name: string;
  email: string;
  stripeCustomerId: string;
  avatar: string;
  socialId: string;
  createdAt: string;
  updatedAt: string;
  teams?: ITeam[];
}

export type QueryString = string | string[] | null | undefined;

export interface IPasswordReset {
  _user: string;
  validThru: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IImage {
  _id: string;
  diff: boolean;
  default: string;
  small: string;
  large: string;
  publicId: string;
  name: string;
  env: string;
}

export interface IProject {
  _id: string;
  name: string;
  _createdBy: string;
  apiKey: string;
  createdAt: Date;
  updatedAt: Date;
  images?: IImage[];
  _team?: string;
}

export interface ITeamMember {
  _id: string;
  _user: string | IUser;
  role: string;
}

export interface ITeam {
  _id: string;
  name: string;
  members: ITeamMember[];
  createdAt: Date;
  updatedAt: Date;
  logo: string;
  stripeCustomerId: string;
}

export interface IPlan {
  id: string;
  object: string;
  active: boolean;
  aggregate_usage: boolean;
  amount: number;
  amount_decimal: string;
  billing_scheme: string;
  created: number;
  currency: string;
  interval: string;
  interval_count: number;
  livemode: boolean;
  metadata: { [key: string]: any };
  nickname: string;
  product: string;
  tiers: unknown;
  tiers_mode: unknown;
  transform_usage: unknown;
  trial_period_days: number;
  usage_type: string;
}

export interface ISubscription {
  id: string;
  object: string;
  application_fee_percent?: any;
  billing_cycle_anchor: number;
  billing_thresholds?: any;
  cancel_at?: any;
  cancel_at_period_end: boolean;
  canceled_at?: any;
  collection_method: string;
  created: number;
  current_period_end: number;
  current_period_start: number;
  customer: string;
  days_until_due?: any;
  default_payment_method?: any;
  default_source?: any;
  default_tax_rates: any[];
  discount?: any;
  ended_at?: any;
  items: any;
  latest_invoice?: any;
  livemode: boolean;
  metadata: { [key: string]: any };
  next_pending_invoice_item_invoice?: any;
  pause_collection?: any;
  pending_invoice_item_interval?: any;
  pending_setup_intent?: any;
  pending_update?: any;
  plan: IPlan;
  quantity: number;
  schedule?: any;
  start_date: number;
  status: string;
  tax_percent?: any;
  trial_end?: any;
  trial_start?: any;
}

export interface IPaymentMethodAddress {
  city?: any;
  country?: any;
  line1?: any;
  line2?: any;
  postal_code: string;
  state?: any;
}

export interface IPaymentMethodBillingDetails {
  address: IPaymentMethodAddress;
  email: string;
  name?: any;
  phone: string;
}

export interface IPaymentMethodChecks {
  address_line1_check?: any;
  address_postal_code_check?: any;
  cvc_check: string;
}

export interface IPaymentMethodThreeDSecureUsage {
  supported: boolean;
}

export interface IPaymentMethodCard {
  brand: string;
  checks: IPaymentMethodChecks;
  country: string;
  exp_month: number;
  exp_year: number;
  fingerprint: string;
  funding: string;
  generated_from?: any;
  last4: string;
  three_d_secure_usage: IPaymentMethodThreeDSecureUsage;
  wallet?: any;
}

export interface Metadata {
  order_id: string;
}

export interface IPaymentMethod {
  id: string;
  object: string;
  billing_details: IPaymentMethodBillingDetails;
  card: IPaymentMethodCard;
  created: number;
  customer?: any;
  livemode: boolean;
  metadata: Metadata;
  type: string;
}

export type TeamsById = { [key: string]: ITeam | IUser };
