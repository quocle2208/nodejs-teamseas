
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateDonationInput {
    count: number;
    createdAt?: Nullable<DateTime>;
    displayName?: Nullable<string>;
    email?: Nullable<string>;
    mobile?: Nullable<string>;
    message?: Nullable<string>;
    team?: Nullable<string>;
}

export class UpdateDonationInput {
    id: number;
}

export class OrderByParams {
    field?: Nullable<string>;
    direction?: Nullable<string>;
}

export class Donation {
    id: number;
    count: number;
    displayName?: Nullable<string>;
    email?: Nullable<string>;
    mobile?: Nullable<string>;
    team?: Nullable<string>;
    message?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
}

export abstract class IQuery {
    abstract donations(orderBy?: Nullable<OrderByParams>): Nullable<Donation>[] | Promise<Nullable<Donation>[]>;

    abstract donation(id: number): Nullable<Donation> | Promise<Nullable<Donation>>;

    abstract totalDonations(): number | Promise<number>;
}

export abstract class IMutation {
    abstract createDonation(createDonationInput: CreateDonationInput): Donation | Promise<Donation>;
}

export class Result {
    total: number;
}

export abstract class ISubscription {
    abstract totalUpdated(): Nullable<Result> | Promise<Nullable<Result>>;
}

export type DateTime = any;
type Nullable<T> = T | null;