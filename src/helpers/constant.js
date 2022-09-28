import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

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
export const APARTMENT_DIRECTION_OPTION = [
  "NORTH",
  "NORTHEAST",
  "EAST",
  "SOUTHEAST",
  "SOUTH",
  "SOUTHWEST",
  "WEST",
  "NORTHWEST",
];

export const APARTMENT_STATUS_OPTION = [
  "AVAILABLE",
  "RENTED",
  "SOLD",
  "UNAVAILABLE",
];

export const APARTMENT_RENT_SCHEMA_OPTION = [
  "DAILY",
  "WEEKLY",
  "MONTHLY",
];

export const MARITAL_STATUS_OPTION = [
  "SINGLE",
  "TAKEN",
  "MARRIED",
  "DIVORCED",
  "JONES",
];

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
    unit: '10AA',
    resident: "Paijo",
    status: 'SOLD',
    price: 'IDR 500000000',
    profit: 'IDR 50.000.000',
    transactionDate: '19 September 2022',
    rentalSchema: '-',
    startEndDate: '-',
    period: '-',
    billingDate: '20 Oktober 2022'
  },
  {
    id: '2',
    floor: '10',
    unit: '10AA',
    resident: "Susi",
    status: 'RENT',
    price: 'IDR 500000000',
    profit: 'IDR 30.000.000',
    transactionDate: '21 September 2022',
    rentalSchema: 'monthly',
    startEndDate: '21 September 2022 / 21 November 2022',
    period: '2 months',
    billingDate: '21 September 2022'
  },
  {
    id: '3',
    floor: '10',
    unit: '10BB',
    resident: "Abdi",
    status: 'SOLD',
    price: 'IDR 500000000',
    profit: 'IDR 10.000.000',
    transactionDate: '30 September 2022',
    rentalSchema: '-',
    startEndDate: '-',
    period: '-',
    billingDate: '30 September 2022'
  },
  {
    id: '4',
    floor: '10',
    unit: '10BA',
    resident: "Abi",
    status: 'RENT',
    price: 'IDR 500000000',
    profit: 'IDR 5.000.000',
    transactionDate: '28 September 2022',
    rentalSchema: 'monthly',
    startEndDate: '29 September 2022 / 29 Desember 2022',
    period: '3 months',
    billingDate: '28 September 2022'
  }
]
export const RESIDENT = [
  {
    id: 1,
    fullName: "Jessi",
    email: "jessi@gmail.com",
    phone: "63547",
    maritalStatus: MARITAL_STATUS.SINGLE,
    dependents: 1,
    birthDate: "Jul 25 2000",
  },
  {
    id: 2,
    fullName: "Dodi",
    email: "dodi@gmail.com",
    phone: "67896688",
    maritalStatus: MARITAL_STATUS.SINGLE,
    dependents: 1,
    birthDate: "Jul 25 2000",
  },
]

export const URL_PREFIX = "http://localhost:3344/";
