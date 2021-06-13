/* eslint-disable no-shadow */
export enum EBloodTypes {
  'A+',
  'A-',
  'B+',
  'B-',
  'O+',
  'O-',
  'AB+',
  'AB-',
}

export enum EServiceState {
  'AGENDADO',
  'REALIZADO',
  'CANCELADO',
}

export interface IBloodType {
  id: string;
  typeOf: string;
}

export interface IServiceState {
  id: string;
  state: string;
}

export interface IAddress {
  id: string;
  city: string;
  state: string;
  street: string;
  district: string;
  numberOf: string;
  postcode: string;
}

export interface IClient {
  id: string;
  cpf: string;
  name: string;
  phone: string;
  email: string;
  address: IAddress;
  bloodtype: IBloodType;
}

export interface ISpecialist {
  id: string;
  name: string;
  email: string;
  registry: string;
  phone: string;
  cell: string;
  specialties: {
    id: string;
    specialty: string;
    text: string;
    created_at: string;
    updated_at: string;
  }[];
  address_id: {
    id: string;
    city: string;
    state: string;
    street: string;
    district: string;
    numberOf: string;
    postcode: string;
    created_at: string;
    updated_at: string;
  };
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
}

export interface IShowDialog {
  title: string;
  subText: string;
  positive?: () => void;
  negative?: () => void;
}
