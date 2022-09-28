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
  {
    value: 0,
    label: "NORTH"
  },
  {
    value: 1,
    label: "NORTHEAST",
  },
  {
    value: 2,
    label: "EAST"
  },
  {
    value: 3,
    label: "SOUTHEAST"
  },
  {
    value: 4,
    label: "SOUTH"
  },
  {
    value: 5,
    label: "SOUTHWEST"
  },
  {
    value: 6,
    label: "WEST"
  },
  {
    value: 7,
    label: "NORTHWEST"
  }
];

export const APARTMENT_STATUS_OPTION = [
  "AVAILABLE",
  "RENTED",
  "SOLD",
  "UNAVAILABLE",
];

export const APARTMENT_RENT_SCHEMA_OPTION = ["DAILY", "WEEKLY", "MONTHLY"];

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
    picture:
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    unitCode: "A02",
    floor: 17,
    rooms: 87,
    direction: APARTMENT_DIRECTION.NORTH,
    status: APARTMENT_STATUS.AVAILABLE,
    balcony: true,
    furnished: true,
    rentPrice: 500000,
    rentSchema: APARTMENT_RENT_SCHEMA.MONTHLY,
    sellPrice: 2000000,
    picture:
      "https://images.unsplash.com/photo-1600585154166-d8897c8f930d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 3,
    unitCode: "A03",
    floor: 17,
    rooms: 87,
    direction: APARTMENT_DIRECTION.NORTH,
    status: APARTMENT_STATUS.AVAILABLE,
    balcony: true,
    furnished: true,
    rentPrice: 500000,
    rentSchema: APARTMENT_RENT_SCHEMA.MONTHLY,
    sellPrice: 2000000,
    picture:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 4,
    unitCode: "A04",
    floor: 17,
    rooms: 87,
    direction: APARTMENT_DIRECTION.NORTH,
    status: APARTMENT_STATUS.AVAILABLE,
    balcony: true,
    furnished: true,
    rentPrice: 500000,
    rentSchema: APARTMENT_RENT_SCHEMA.MONTHLY,
    sellPrice: 2000000,
    picture:
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 5,
    unitCode: "A05",
    floor: 17,
    rooms: 87,
    direction: APARTMENT_DIRECTION.NORTH,
    status: APARTMENT_STATUS.AVAILABLE,
    balcony: true,
    furnished: true,
    rentPrice: 500000,
    rentSchema: APARTMENT_RENT_SCHEMA.MONTHLY,
    sellPrice: 2000000,
    picture:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 6,
    unitCode: "A06",
    floor: 17,
    rooms: 87,
    direction: APARTMENT_DIRECTION.NORTH,
    status: APARTMENT_STATUS.AVAILABLE,
    balcony: true,
    furnished: true,
    rentPrice: 500000,
    rentSchema: APARTMENT_RENT_SCHEMA.MONTHLY,
    sellPrice: 2000000,
    picture:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  },
];

export const DUMMY_TRANSACTION = [
  {
    id: 1,
    unit: "A01",
    resident: "Anjasmara",
    status: "Sold",
    price: "550000000",
    profit: "50000000",
    transactionDate: "19-Sep-2022",
    rentalScema: APARTMENT_RENT_SCHEMA.MONTHLY,
    startDate: "20-Sep-2022",
    endDate: "19-Mar-2022",
    period: "6 Months",
    billingDate: "20-Oct-2022",
  },
  {
    id: 2,
    unit: "A01",
    resident: "Yurlanda",
    status: "Sold",
    price: "650000000",
    profit: "70000000",
    transactionDate: "19-Sep-2022",
    rentalScema: APARTMENT_RENT_SCHEMA.MONTHLY,
    startDate: "20-Sep-2022",
    endDate: "19-Mar-2022",
    period: "6 Months",
    billingDate: "20-Oct-2022",
  },
];

export const URL_PREFIX = "http://localhost:3344/";
