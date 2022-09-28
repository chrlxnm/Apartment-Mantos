import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const APARTMENT_DIRECTION = {
  NORTH: "NORTH",
  NORTHEAST: "NORTHEAST",
  EAST: "EAST",
  SOUTHEAST: "SOUTHEAST",
  SOUTH: "SOUTH",
  SOUTHWEST: "SOUTHWEST",
  WEST: "WEST",
  NORTHWEST: "NORTHWEST",
};

export const APARTMENT_STATUS = {
  AVAILABLE: "AVAILABLE",
  RENTED: "RENTED",
  SOLD: "SOLD",
  UNAVAILABLE: "UNAVAILABLE",
};

export const APARTMENT_RENT_SCHEMA = {
  DAILY: "DAILY",
  WEEKLY: "WEEKLY",
  MONTHLY: "MONTHLY",
};

export const MARITAL_STATUS = {
  SINGLE: "SINGLE",
  TAKEN: "TAKEN",
  MARRIED: "MARRIED",
  DIVORCED: "DIVORCED",
  JONES: "JONES",
};

export const DUMMY_LIST = [
  {
    id: 1,
    unitCode: "A01",
    floor: 17,
    rooms: 87,
    direction: APARTMENT_DIRECTION.NORTH,
    status: APARTMENT_STATUS.AVAILABLE,
    balcony: true,
    furnished: true,
    rentPrice: 500000,
    rentSchema: APARTMENT_RENT_SCHEMA.MONTHLY,
    sellPrice: 2000000,
  },
  {
    id: 2,
    unitCode: "A01",
    floor: 17,
    rooms: 87,
    direction: APARTMENT_DIRECTION.NORTH,
    status: APARTMENT_STATUS.AVAILABLE,
    balcony: true,
    furnished: true,
    rentPrice: 500000,
    rentSchema: APARTMENT_RENT_SCHEMA.MONTHLY,
    sellPrice: 2000000,
  },
  {
    id: 3,
    unitCode: "A01",
    floor: 17,
    rooms: 87,
    direction: APARTMENT_DIRECTION.NORTH,
    status: APARTMENT_STATUS.AVAILABLE,
    balcony: true,
    furnished: true,
    rentPrice: 500000,
    rentSchema: APARTMENT_RENT_SCHEMA.MONTHLY,
    sellPrice: 2000000,
  },
  {
    id: 4,
    unitCode: "A01",
    floor: 17,
    rooms: 87,
    direction: APARTMENT_DIRECTION.NORTH,
    status: APARTMENT_STATUS.AVAILABLE,
    balcony: true,
    furnished: true,
    rentPrice: 500000,
    rentSchema: APARTMENT_RENT_SCHEMA.MONTHLY,
    sellPrice: 2000000,
  },
  {
    id: 5,
    unitCode: "A01",
    floor: 17,
    rooms: 87,
    direction: APARTMENT_DIRECTION.NORTH,
    status: APARTMENT_STATUS.AVAILABLE,
    balcony: true,
    furnished: true,
    rentPrice: 500000,
    rentSchema: APARTMENT_RENT_SCHEMA.MONTHLY,
    sellPrice: 2000000,
  },
];

export const DUMMY_TRANSACTION = [
  {
    id: '1',
    floor: '10',
    unit: 'A01' ,
    resident: 'ANA',
    transactionDate: '24-09-2022',
    rentalSchema: APARTMENT_RENT_SCHEMA.DAILY,
    rentStartDate: '25 SEPTEMBER',
    rentEndDate:'30 SEPTEMBER',
    billingDate: '30 SEPTEMBER',
    period: '5hari',
    price: '50.000.000',
    profit: '20.000.000'
  },
  {
    id: '2',
    floor: '10',
    unit: 'A02' ,
    resident: 'ANI',
    transactionDate: '29-09-2022',
    rentalSchema: APARTMENT_RENT_SCHEMA.MONTHLY,
    rentStartDate: '30 SEPTEMBER',
    rentEndDate:'02 OKTOBER',
    billingDate: '02 OKTOBER',
    period: '2Bulan',
    price: '100.000.000',
    profit: '50.000.000'
  },
  {
    id: '3',
    floor: '10',
    unit: '10AA' ,
    resident: 'BUDI',
    transactionDate: '04-10-2022 ',
    rentalSchema: APARTMENT_RENT_SCHEMA.DAILY,
    rentStartDate: '04 OKTOBER',
    rentEndDate:'14 OKTOBER',
    billingDate: '04 OKTOBER',
    period: '10hari',
    price: '30.000.000',
    profit: '5.000.000'
  },
  {
    id: '4',
    floor: '10',
    unit: '10AB' ,
    resident: 'DION',
    transactionDate: '08-10-2022 ',
    rentalSchema: APARTMENT_RENT_SCHEMA.MONTHLY,
    rentStartDate: '10 OKTOBER',
    rentEndDate:'10 NOVEMBER',
    billingDate: '10 OKTOBER',
    period: '1Bulan',
    price: '60.000.000',
    profit: '4.000.000'
  },
  {
    id: '5',
    floor: '10',
    unit: '10BB' ,
    resident: 'DIAN',
    transactionDate: '10-10-2022 ',
    rentalSchema: APARTMENT_RENT_SCHEMA.MONTHLY,
    rentStartDate: '30 SEPTEMBER',
    rentEndDate:'30 OKTOBER',
    billingDate: '30 SEPTEMBER',
    period: '1Bulan',
    price: '100.000.000',
    profit: '50.000.000'
  }
];

export const RESIDENT = [
  {
    id: 1,
    fullname: "Jessi",
    email: "jessi@gmail.com",
    phone: "636547",
    maritalStatus: MARITAL_STATUS.SINGLE,
    dependents: 1,
    birthDate: "Jul 25 2000",
  },
  {
    id: 2,
    fullname: "Dodi",
    email: "dodi@gmail.com",
    phone: "67896688",
    maritalStatus: MARITAL_STATUS.SINGLE,
    dependents: 1,
    birthDate: "Jul 25 2000",
  },
  {
    id: 3,
    fullname: "Muliadi",
    email: "muliadi@mail.com",
    phone: "098088",
    maritalStatus: MARITAL_STATUS.SINGLE,
    dependents: 1,
    birthDate: "Jul 20 2000",
  },
];

export const URL_PREFIX = "http://localhost:3344/final/";
