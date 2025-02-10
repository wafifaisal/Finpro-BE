
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model PropertyImages
 * 
 */
export type PropertyImages = $Result.DefaultSelection<Prisma.$PropertyImagesPayload>
/**
 * Model RoomTypes
 * 
 */
export type RoomTypes = $Result.DefaultSelection<Prisma.$RoomTypesPayload>
/**
 * Model RoomImages
 * 
 */
export type RoomImages = $Result.DefaultSelection<Prisma.$RoomImagesPayload>
/**
 * Model Unavailable
 * 
 */
export type Unavailable = $Result.DefaultSelection<Prisma.$UnavailablePayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model ReviewReplies
 * 
 */
export type ReviewReplies = $Result.DefaultSelection<Prisma.$ReviewRepliesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PaymentMethod: {
  Manual: 'Manual',
  Midtrans: 'Midtrans'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const BookingStatus: {
  new: 'new',
  completed: 'completed',
  canceled: 'canceled',
  waiting_payment: 'waiting_payment'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]

}

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propertyImages`: Exposes CRUD operations for the **PropertyImages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyImages
    * const propertyImages = await prisma.propertyImages.findMany()
    * ```
    */
  get propertyImages(): Prisma.PropertyImagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomTypes`: Exposes CRUD operations for the **RoomTypes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomTypes
    * const roomTypes = await prisma.roomTypes.findMany()
    * ```
    */
  get roomTypes(): Prisma.RoomTypesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomImages`: Exposes CRUD operations for the **RoomImages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomImages
    * const roomImages = await prisma.roomImages.findMany()
    * ```
    */
  get roomImages(): Prisma.RoomImagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unavailable`: Exposes CRUD operations for the **Unavailable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Unavailables
    * const unavailables = await prisma.unavailable.findMany()
    * ```
    */
  get unavailable(): Prisma.UnavailableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewReplies`: Exposes CRUD operations for the **ReviewReplies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewReplies
    * const reviewReplies = await prisma.reviewReplies.findMany()
    * ```
    */
  get reviewReplies(): Prisma.ReviewRepliesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.2.1
   * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Tenant: 'Tenant',
    Location: 'Location',
    Property: 'Property',
    PropertyImages: 'PropertyImages',
    RoomTypes: 'RoomTypes',
    RoomImages: 'RoomImages',
    Unavailable: 'Unavailable',
    Booking: 'Booking',
    Review: 'Review',
    ReviewReplies: 'ReviewReplies'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "tenant" | "location" | "property" | "propertyImages" | "roomTypes" | "roomImages" | "unavailable" | "booking" | "review" | "reviewReplies"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      PropertyImages: {
        payload: Prisma.$PropertyImagesPayload<ExtArgs>
        fields: Prisma.PropertyImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyImagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyImagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagesPayload>
          }
          findFirst: {
            args: Prisma.PropertyImagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyImagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagesPayload>
          }
          findMany: {
            args: Prisma.PropertyImagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagesPayload>[]
          }
          create: {
            args: Prisma.PropertyImagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagesPayload>
          }
          createMany: {
            args: Prisma.PropertyImagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyImagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagesPayload>[]
          }
          delete: {
            args: Prisma.PropertyImagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagesPayload>
          }
          update: {
            args: Prisma.PropertyImagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagesPayload>
          }
          deleteMany: {
            args: Prisma.PropertyImagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyImagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyImagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagesPayload>[]
          }
          upsert: {
            args: Prisma.PropertyImagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagesPayload>
          }
          aggregate: {
            args: Prisma.PropertyImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyImages>
          }
          groupBy: {
            args: Prisma.PropertyImagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyImagesCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyImagesCountAggregateOutputType> | number
          }
        }
      }
      RoomTypes: {
        payload: Prisma.$RoomTypesPayload<ExtArgs>
        fields: Prisma.RoomTypesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomTypesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomTypesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypesPayload>
          }
          findFirst: {
            args: Prisma.RoomTypesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomTypesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypesPayload>
          }
          findMany: {
            args: Prisma.RoomTypesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypesPayload>[]
          }
          create: {
            args: Prisma.RoomTypesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypesPayload>
          }
          createMany: {
            args: Prisma.RoomTypesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomTypesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypesPayload>[]
          }
          delete: {
            args: Prisma.RoomTypesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypesPayload>
          }
          update: {
            args: Prisma.RoomTypesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypesPayload>
          }
          deleteMany: {
            args: Prisma.RoomTypesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomTypesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomTypesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypesPayload>[]
          }
          upsert: {
            args: Prisma.RoomTypesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomTypesPayload>
          }
          aggregate: {
            args: Prisma.RoomTypesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomTypes>
          }
          groupBy: {
            args: Prisma.RoomTypesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomTypesGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomTypesCountArgs<ExtArgs>
            result: $Utils.Optional<RoomTypesCountAggregateOutputType> | number
          }
        }
      }
      RoomImages: {
        payload: Prisma.$RoomImagesPayload<ExtArgs>
        fields: Prisma.RoomImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomImagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomImagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagesPayload>
          }
          findFirst: {
            args: Prisma.RoomImagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomImagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagesPayload>
          }
          findMany: {
            args: Prisma.RoomImagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagesPayload>[]
          }
          create: {
            args: Prisma.RoomImagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagesPayload>
          }
          createMany: {
            args: Prisma.RoomImagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomImagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagesPayload>[]
          }
          delete: {
            args: Prisma.RoomImagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagesPayload>
          }
          update: {
            args: Prisma.RoomImagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagesPayload>
          }
          deleteMany: {
            args: Prisma.RoomImagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomImagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomImagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagesPayload>[]
          }
          upsert: {
            args: Prisma.RoomImagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagesPayload>
          }
          aggregate: {
            args: Prisma.RoomImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomImages>
          }
          groupBy: {
            args: Prisma.RoomImagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomImagesCountArgs<ExtArgs>
            result: $Utils.Optional<RoomImagesCountAggregateOutputType> | number
          }
        }
      }
      Unavailable: {
        payload: Prisma.$UnavailablePayload<ExtArgs>
        fields: Prisma.UnavailableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnavailableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnavailableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailablePayload>
          }
          findFirst: {
            args: Prisma.UnavailableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnavailableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailablePayload>
          }
          findMany: {
            args: Prisma.UnavailableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailablePayload>[]
          }
          create: {
            args: Prisma.UnavailableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailablePayload>
          }
          createMany: {
            args: Prisma.UnavailableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnavailableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailablePayload>[]
          }
          delete: {
            args: Prisma.UnavailableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailablePayload>
          }
          update: {
            args: Prisma.UnavailableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailablePayload>
          }
          deleteMany: {
            args: Prisma.UnavailableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnavailableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnavailableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailablePayload>[]
          }
          upsert: {
            args: Prisma.UnavailableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnavailablePayload>
          }
          aggregate: {
            args: Prisma.UnavailableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnavailable>
          }
          groupBy: {
            args: Prisma.UnavailableGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnavailableGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnavailableCountArgs<ExtArgs>
            result: $Utils.Optional<UnavailableCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      ReviewReplies: {
        payload: Prisma.$ReviewRepliesPayload<ExtArgs>
        fields: Prisma.ReviewRepliesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewRepliesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRepliesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewRepliesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRepliesPayload>
          }
          findFirst: {
            args: Prisma.ReviewRepliesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRepliesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewRepliesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRepliesPayload>
          }
          findMany: {
            args: Prisma.ReviewRepliesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRepliesPayload>[]
          }
          create: {
            args: Prisma.ReviewRepliesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRepliesPayload>
          }
          createMany: {
            args: Prisma.ReviewRepliesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewRepliesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRepliesPayload>[]
          }
          delete: {
            args: Prisma.ReviewRepliesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRepliesPayload>
          }
          update: {
            args: Prisma.ReviewRepliesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRepliesPayload>
          }
          deleteMany: {
            args: Prisma.ReviewRepliesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewRepliesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewRepliesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRepliesPayload>[]
          }
          upsert: {
            args: Prisma.ReviewRepliesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRepliesPayload>
          }
          aggregate: {
            args: Prisma.ReviewRepliesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewReplies>
          }
          groupBy: {
            args: Prisma.ReviewRepliesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewRepliesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewRepliesCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewRepliesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    tenant?: TenantOmit
    location?: LocationOmit
    property?: PropertyOmit
    propertyImages?: PropertyImagesOmit
    roomTypes?: RoomTypesOmit
    roomImages?: RoomImagesOmit
    unavailable?: UnavailableOmit
    booking?: BookingOmit
    review?: ReviewOmit
    reviewReplies?: ReviewRepliesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Booking: number
    Review: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Booking?: boolean | UserCountOutputTypeCountBookingArgs
    Review?: boolean | UserCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    Property: number
    ReviewReplies: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Property?: boolean | TenantCountOutputTypeCountPropertyArgs
    ReviewReplies?: boolean | TenantCountOutputTypeCountReviewRepliesArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountPropertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountReviewRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewRepliesWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    Property: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Property?: boolean | LocationCountOutputTypeCountPropertyArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountPropertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }


  /**
   * Count Type PropertyCountOutputType
   */

  export type PropertyCountOutputType = {
    PropertyImages: number
    RoomTypes: number
  }

  export type PropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PropertyImages?: boolean | PropertyCountOutputTypeCountPropertyImagesArgs
    RoomTypes?: boolean | PropertyCountOutputTypeCountRoomTypesArgs
  }

  // Custom InputTypes
  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: PropertyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountPropertyImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyImagesWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountRoomTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomTypesWhereInput
  }


  /**
   * Count Type RoomTypesCountOutputType
   */

  export type RoomTypesCountOutputType = {
    RoomImages: number
    Booking: number
    Review: number
    Unavailable: number
  }

  export type RoomTypesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RoomImages?: boolean | RoomTypesCountOutputTypeCountRoomImagesArgs
    Booking?: boolean | RoomTypesCountOutputTypeCountBookingArgs
    Review?: boolean | RoomTypesCountOutputTypeCountReviewArgs
    Unavailable?: boolean | RoomTypesCountOutputTypeCountUnavailableArgs
  }

  // Custom InputTypes
  /**
   * RoomTypesCountOutputType without action
   */
  export type RoomTypesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypesCountOutputType
     */
    select?: RoomTypesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomTypesCountOutputType without action
   */
  export type RoomTypesCountOutputTypeCountRoomImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomImagesWhereInput
  }

  /**
   * RoomTypesCountOutputType without action
   */
  export type RoomTypesCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * RoomTypesCountOutputType without action
   */
  export type RoomTypesCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * RoomTypesCountOutputType without action
   */
  export type RoomTypesCountOutputTypeCountUnavailableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnavailableWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    Review: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Review?: boolean | BookingCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type ReviewCountOutputType
   */

  export type ReviewCountOutputType = {
    ReviewReplies: number
  }

  export type ReviewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ReviewReplies?: boolean | ReviewCountOutputTypeCountReviewRepliesArgs
  }

  // Custom InputTypes
  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCountOutputType
     */
    select?: ReviewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountReviewRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewRepliesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    avatar: string | null
    no_handphone: string | null
    isVerify: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    googleId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    avatar: string | null
    no_handphone: string | null
    isVerify: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    googleId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    avatar: number
    no_handphone: number
    isVerify: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    googleId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    avatar?: true
    no_handphone?: true
    isVerify?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    googleId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    avatar?: true
    no_handphone?: true
    isVerify?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    googleId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    avatar?: true
    no_handphone?: true
    isVerify?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    googleId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string | null
    password: string | null
    avatar: string | null
    no_handphone: string
    isVerify: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    googleId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    avatar?: boolean
    no_handphone?: boolean
    isVerify?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    googleId?: boolean
    Booking?: boolean | User$BookingArgs<ExtArgs>
    Review?: boolean | User$ReviewArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    avatar?: boolean
    no_handphone?: boolean
    isVerify?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    googleId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    avatar?: boolean
    no_handphone?: boolean
    isVerify?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    googleId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    avatar?: boolean
    no_handphone?: boolean
    isVerify?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    googleId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "password" | "avatar" | "no_handphone" | "isVerify" | "createdAt" | "updatedAt" | "deletedAt" | "googleId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Booking?: boolean | User$BookingArgs<ExtArgs>
    Review?: boolean | User$ReviewArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Booking: Prisma.$BookingPayload<ExtArgs>[]
      Review: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string | null
      password: string | null
      avatar: string | null
      no_handphone: string
      isVerify: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      googleId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Booking<T extends User$BookingArgs<ExtArgs> = {}>(args?: Subset<T, User$BookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Review<T extends User$ReviewArgs<ExtArgs> = {}>(args?: Subset<T, User$ReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly no_handphone: FieldRef<"User", 'String'>
    readonly isVerify: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly googleId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.Booking
   */
  export type User$BookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.Review
   */
  export type User$ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
<<<<<<< HEAD
=======
    googleId: string | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name: string | null
    password: string | null
    no_handphone: string | null
    email: string | null
    avatar: string | null
    isVerify: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
<<<<<<< HEAD
=======
    googleId: string | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name: string | null
    password: string | null
    no_handphone: string | null
    email: string | null
    avatar: string | null
    isVerify: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
<<<<<<< HEAD
=======
    googleId: number
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name: number
    password: number
    no_handphone: number
    email: number
    avatar: number
    isVerify: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type TenantMinAggregateInputType = {
    id?: true
<<<<<<< HEAD
=======
    googleId?: true
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name?: true
    password?: true
    no_handphone?: true
    email?: true
    avatar?: true
    isVerify?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
<<<<<<< HEAD
=======
    googleId?: true
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name?: true
    password?: true
    no_handphone?: true
    email?: true
    avatar?: true
    isVerify?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
<<<<<<< HEAD
=======
    googleId?: true
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name?: true
    password?: true
    no_handphone?: true
    email?: true
    avatar?: true
    isVerify?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
<<<<<<< HEAD
=======
    googleId: string | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name: string
    password: string | null
    no_handphone: string | null
    email: string
    avatar: string | null
    isVerify: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
<<<<<<< HEAD
=======
    googleId?: boolean
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name?: boolean
    password?: boolean
    no_handphone?: boolean
    email?: boolean
    avatar?: boolean
    isVerify?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Property?: boolean | Tenant$PropertyArgs<ExtArgs>
    ReviewReplies?: boolean | Tenant$ReviewRepliesArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
<<<<<<< HEAD
=======
    googleId?: boolean
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name?: boolean
    password?: boolean
    no_handphone?: boolean
    email?: boolean
    avatar?: boolean
    isVerify?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
<<<<<<< HEAD
=======
    googleId?: boolean
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name?: boolean
    password?: boolean
    no_handphone?: boolean
    email?: boolean
    avatar?: boolean
    isVerify?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
<<<<<<< HEAD
=======
    googleId?: boolean
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name?: boolean
    password?: boolean
    no_handphone?: boolean
    email?: boolean
    avatar?: boolean
    isVerify?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

<<<<<<< HEAD
  export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password" | "no_handphone" | "email" | "avatar" | "isVerify" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["tenant"]>
=======
  export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "googleId" | "name" | "password" | "no_handphone" | "email" | "avatar" | "isVerify" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["tenant"]>
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Property?: boolean | Tenant$PropertyArgs<ExtArgs>
    ReviewReplies?: boolean | Tenant$ReviewRepliesArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      Property: Prisma.$PropertyPayload<ExtArgs>[]
      ReviewReplies: Prisma.$ReviewRepliesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
<<<<<<< HEAD
=======
      googleId: string | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
      name: string
      password: string | null
      no_handphone: string | null
      email: string
      avatar: string | null
      isVerify: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants and returns the data updated in the database.
     * @param {TenantUpdateManyAndReturnArgs} args - Arguments to update many Tenants.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Property<T extends Tenant$PropertyArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$PropertyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    ReviewReplies<T extends Tenant$ReviewRepliesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$ReviewRepliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewRepliesPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tenant model
   */ 
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
<<<<<<< HEAD
=======
    readonly googleId: FieldRef<"Tenant", 'String'>
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    readonly name: FieldRef<"Tenant", 'String'>
    readonly password: FieldRef<"Tenant", 'String'>
    readonly no_handphone: FieldRef<"Tenant", 'String'>
    readonly email: FieldRef<"Tenant", 'String'>
    readonly avatar: FieldRef<"Tenant", 'String'>
    readonly isVerify: FieldRef<"Tenant", 'Boolean'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
    readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
    readonly deletedAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
  }

  /**
   * Tenant updateManyAndReturn
   */
  export type TenantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
  }

  /**
   * Tenant.Property
   */
  export type Tenant$PropertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Tenant.ReviewReplies
   */
  export type Tenant$ReviewRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewReplies
     */
    select?: ReviewRepliesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewReplies
     */
    omit?: ReviewRepliesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRepliesInclude<ExtArgs> | null
    where?: ReviewRepliesWhereInput
    orderBy?: ReviewRepliesOrderByWithRelationInput | ReviewRepliesOrderByWithRelationInput[]
    cursor?: ReviewRepliesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewRepliesScalarFieldEnum | ReviewRepliesScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    id: number | null
<<<<<<< HEAD
=======
    longitude: number | null
    latitude: number | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
  }

  export type LocationSumAggregateOutputType = {
    id: number | null
<<<<<<< HEAD
=======
    longitude: number | null
    latitude: number | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
  }

  export type LocationMinAggregateOutputType = {
    id: number | null
    address: string | null
    country: string | null
    city: string | null
    deletedAt: Date | null
<<<<<<< HEAD
    longitude: string | null
    latitude: string | null
=======
    longitude: number | null
    latitude: number | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
  }

  export type LocationMaxAggregateOutputType = {
    id: number | null
    address: string | null
    country: string | null
    city: string | null
    deletedAt: Date | null
<<<<<<< HEAD
    longitude: string | null
    latitude: string | null
=======
    longitude: number | null
    latitude: number | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
  }

  export type LocationCountAggregateOutputType = {
    id: number
    address: number
    country: number
    city: number
    deletedAt: number
    longitude: number
    latitude: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    id?: true
<<<<<<< HEAD
=======
    longitude?: true
    latitude?: true
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
  }

  export type LocationSumAggregateInputType = {
    id?: true
<<<<<<< HEAD
=======
    longitude?: true
    latitude?: true
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
  }

  export type LocationMinAggregateInputType = {
    id?: true
    address?: true
    country?: true
    city?: true
    deletedAt?: true
    longitude?: true
    latitude?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    address?: true
    country?: true
    city?: true
    deletedAt?: true
    longitude?: true
    latitude?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    address?: true
    country?: true
    city?: true
    deletedAt?: true
    longitude?: true
    latitude?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: number
    address: string
    country: string
    city: string
    deletedAt: Date | null
<<<<<<< HEAD
    longitude: string | null
    latitude: string | null
=======
    longitude: number | null
    latitude: number | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    country?: boolean
    city?: boolean
    deletedAt?: boolean
    longitude?: boolean
    latitude?: boolean
    Property?: boolean | Location$PropertyArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    country?: boolean
    city?: boolean
    deletedAt?: boolean
    longitude?: boolean
    latitude?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    country?: boolean
    city?: boolean
    deletedAt?: boolean
    longitude?: boolean
    latitude?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    address?: boolean
    country?: boolean
    city?: boolean
    deletedAt?: boolean
    longitude?: boolean
    latitude?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "country" | "city" | "deletedAt" | "longitude" | "latitude", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Property?: boolean | Location$PropertyArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      Property: Prisma.$PropertyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      address: string
      country: string
      city: string
      deletedAt: Date | null
<<<<<<< HEAD
      longitude: string | null
      latitude: string | null
=======
      longitude: number | null
      latitude: number | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Property<T extends Location$PropertyArgs<ExtArgs> = {}>(args?: Subset<T, Location$PropertyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Location model
   */ 
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'Int'>
    readonly address: FieldRef<"Location", 'String'>
    readonly country: FieldRef<"Location", 'String'>
    readonly city: FieldRef<"Location", 'String'>
    readonly deletedAt: FieldRef<"Location", 'DateTime'>
<<<<<<< HEAD
    readonly longitude: FieldRef<"Location", 'String'>
    readonly latitude: FieldRef<"Location", 'String'>
=======
    readonly longitude: FieldRef<"Location", 'Float'>
    readonly latitude: FieldRef<"Location", 'Float'>
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
  }

  /**
   * Location.Property
   */
  export type Location$PropertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    id: number | null
<<<<<<< HEAD
    room_available: number | null
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate: number | null
    location_id: number | null
  }

  export type PropertySumAggregateOutputType = {
    id: number | null
<<<<<<< HEAD
    room_available: number | null
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate: number | null
    location_id: number | null
  }

  export type PropertyMinAggregateOutputType = {
    id: number | null
    name: string | null
    desc: string | null
    category: string | null
    terms_condition: string | null
<<<<<<< HEAD
    room_available: number | null
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate: number | null
    location_id: number | null
    tenantId: string | null
    isAvailable: boolean | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    desc: string | null
    category: string | null
    terms_condition: string | null
<<<<<<< HEAD
    room_available: number | null
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate: number | null
    location_id: number | null
    tenantId: string | null
    isAvailable: boolean | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    name: number
    desc: number
    category: number
    terms_condition: number
<<<<<<< HEAD
    room_available: number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate: number
    location_id: number
    tenantId: number
    isAvailable: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    id?: true
<<<<<<< HEAD
    room_available?: true
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: true
    location_id?: true
  }

  export type PropertySumAggregateInputType = {
    id?: true
<<<<<<< HEAD
    room_available?: true
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: true
    location_id?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    category?: true
    terms_condition?: true
<<<<<<< HEAD
    room_available?: true
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: true
    location_id?: true
    tenantId?: true
    isAvailable?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    category?: true
    terms_condition?: true
<<<<<<< HEAD
    room_available?: true
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: true
    location_id?: true
    tenantId?: true
    isAvailable?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    category?: true
    terms_condition?: true
<<<<<<< HEAD
    room_available?: true
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: true
    location_id?: true
    tenantId?: true
    isAvailable?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: number
    name: string
    desc: string | null
    category: string
    terms_condition: string | null
<<<<<<< HEAD
    room_available: number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate: number | null
    location_id: number
    tenantId: string
    isAvailable: boolean
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    category?: boolean
    terms_condition?: boolean
<<<<<<< HEAD
    room_available?: boolean
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: boolean
    location_id?: boolean
    tenantId?: boolean
    isAvailable?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    PropertyImages?: boolean | Property$PropertyImagesArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    RoomTypes?: boolean | Property$RoomTypesArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    category?: boolean
    terms_condition?: boolean
<<<<<<< HEAD
    room_available?: boolean
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: boolean
    location_id?: boolean
    tenantId?: boolean
    isAvailable?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    category?: boolean
    terms_condition?: boolean
<<<<<<< HEAD
    room_available?: boolean
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: boolean
    location_id?: boolean
    tenantId?: boolean
    isAvailable?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectScalar = {
    id?: boolean
    name?: boolean
    desc?: boolean
    category?: boolean
    terms_condition?: boolean
<<<<<<< HEAD
    room_available?: boolean
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: boolean
    location_id?: boolean
    tenantId?: boolean
    isAvailable?: boolean
  }

<<<<<<< HEAD
  export type PropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "desc" | "category" | "terms_condition" | "room_available" | "click_rate" | "location_id" | "tenantId" | "isAvailable", ExtArgs["result"]["property"]>
=======
  export type PropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "desc" | "category" | "terms_condition" | "click_rate" | "location_id" | "tenantId" | "isAvailable", ExtArgs["result"]["property"]>
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    PropertyImages?: boolean | Property$PropertyImagesArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    RoomTypes?: boolean | Property$RoomTypesArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs>
      PropertyImages: Prisma.$PropertyImagesPayload<ExtArgs>[]
      tenant: Prisma.$TenantPayload<ExtArgs>
      RoomTypes: Prisma.$RoomTypesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      desc: string | null
      category: string
      terms_condition: string | null
<<<<<<< HEAD
      room_available: number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
      click_rate: number | null
      location_id: number
      tenantId: string
      isAvailable: boolean
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertyCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties and returns the data updated in the database.
     * @param {PropertyUpdateManyAndReturnArgs} args - Arguments to update many Properties.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropertyUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    PropertyImages<T extends Property$PropertyImagesArgs<ExtArgs> = {}>(args?: Subset<T, Property$PropertyImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagesPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    RoomTypes<T extends Property$RoomTypesArgs<ExtArgs> = {}>(args?: Subset<T, Property$RoomTypesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomTypesPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Property model
   */ 
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'Int'>
    readonly name: FieldRef<"Property", 'String'>
    readonly desc: FieldRef<"Property", 'String'>
    readonly category: FieldRef<"Property", 'String'>
    readonly terms_condition: FieldRef<"Property", 'String'>
<<<<<<< HEAD
    readonly room_available: FieldRef<"Property", 'Int'>
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    readonly click_rate: FieldRef<"Property", 'Int'>
    readonly location_id: FieldRef<"Property", 'Int'>
    readonly tenantId: FieldRef<"Property", 'String'>
    readonly isAvailable: FieldRef<"Property", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property createManyAndReturn
   */
  export type PropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
  }

  /**
   * Property updateManyAndReturn
   */
  export type PropertyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
  }

  /**
   * Property.PropertyImages
   */
  export type Property$PropertyImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImages
     */
    select?: PropertyImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImages
     */
    omit?: PropertyImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImagesInclude<ExtArgs> | null
    where?: PropertyImagesWhereInput
    orderBy?: PropertyImagesOrderByWithRelationInput | PropertyImagesOrderByWithRelationInput[]
    cursor?: PropertyImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyImagesScalarFieldEnum | PropertyImagesScalarFieldEnum[]
  }

  /**
   * Property.RoomTypes
   */
  export type Property$RoomTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypes
     */
    select?: RoomTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTypes
     */
    omit?: RoomTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypesInclude<ExtArgs> | null
    where?: RoomTypesWhereInput
    orderBy?: RoomTypesOrderByWithRelationInput | RoomTypesOrderByWithRelationInput[]
    cursor?: RoomTypesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomTypesScalarFieldEnum | RoomTypesScalarFieldEnum[]
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Model PropertyImages
   */

  export type AggregatePropertyImages = {
    _count: PropertyImagesCountAggregateOutputType | null
    _avg: PropertyImagesAvgAggregateOutputType | null
    _sum: PropertyImagesSumAggregateOutputType | null
    _min: PropertyImagesMinAggregateOutputType | null
    _max: PropertyImagesMaxAggregateOutputType | null
  }

  export type PropertyImagesAvgAggregateOutputType = {
    id: number | null
    property_id: number | null
  }

  export type PropertyImagesSumAggregateOutputType = {
    id: number | null
    property_id: number | null
  }

  export type PropertyImagesMinAggregateOutputType = {
    id: number | null
    image_url: string | null
    property_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PropertyImagesMaxAggregateOutputType = {
    id: number | null
    image_url: string | null
    property_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PropertyImagesCountAggregateOutputType = {
    id: number
    image_url: number
    property_id: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type PropertyImagesAvgAggregateInputType = {
    id?: true
    property_id?: true
  }

  export type PropertyImagesSumAggregateInputType = {
    id?: true
    property_id?: true
  }

  export type PropertyImagesMinAggregateInputType = {
    id?: true
    image_url?: true
    property_id?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PropertyImagesMaxAggregateInputType = {
    id?: true
    image_url?: true
    property_id?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PropertyImagesCountAggregateInputType = {
    id?: true
    image_url?: true
    property_id?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type PropertyImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyImages to aggregate.
     */
    where?: PropertyImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImagesOrderByWithRelationInput | PropertyImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyImages
    **/
    _count?: true | PropertyImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyImagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertyImagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyImagesMaxAggregateInputType
  }

  export type GetPropertyImagesAggregateType<T extends PropertyImagesAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyImages[P]>
      : GetScalarType<T[P], AggregatePropertyImages[P]>
  }




  export type PropertyImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyImagesWhereInput
    orderBy?: PropertyImagesOrderByWithAggregationInput | PropertyImagesOrderByWithAggregationInput[]
    by: PropertyImagesScalarFieldEnum[] | PropertyImagesScalarFieldEnum
    having?: PropertyImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyImagesCountAggregateInputType | true
    _avg?: PropertyImagesAvgAggregateInputType
    _sum?: PropertyImagesSumAggregateInputType
    _min?: PropertyImagesMinAggregateInputType
    _max?: PropertyImagesMaxAggregateInputType
  }

  export type PropertyImagesGroupByOutputType = {
    id: number
    image_url: string
    property_id: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: PropertyImagesCountAggregateOutputType | null
    _avg: PropertyImagesAvgAggregateOutputType | null
    _sum: PropertyImagesSumAggregateOutputType | null
    _min: PropertyImagesMinAggregateOutputType | null
    _max: PropertyImagesMaxAggregateOutputType | null
  }

  type GetPropertyImagesGroupByPayload<T extends PropertyImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyImagesGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyImagesGroupByOutputType[P]>
        }
      >
    >


  export type PropertyImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image_url?: boolean
    property_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyImages"]>

  export type PropertyImagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image_url?: boolean
    property_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyImages"]>

  export type PropertyImagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image_url?: boolean
    property_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyImages"]>

  export type PropertyImagesSelectScalar = {
    id?: boolean
    image_url?: boolean
    property_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type PropertyImagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image_url" | "property_id" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["propertyImages"]>
  export type PropertyImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertyImagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertyImagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $PropertyImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyImages"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image_url: string
      property_id: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["propertyImages"]>
    composites: {}
  }

  type PropertyImagesGetPayload<S extends boolean | null | undefined | PropertyImagesDefaultArgs> = $Result.GetResult<Prisma.$PropertyImagesPayload, S>

  type PropertyImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyImagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyImagesCountAggregateInputType | true
    }

  export interface PropertyImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyImages'], meta: { name: 'PropertyImages' } }
    /**
     * Find zero or one PropertyImages that matches the filter.
     * @param {PropertyImagesFindUniqueArgs} args - Arguments to find a PropertyImages
     * @example
     * // Get one PropertyImages
     * const propertyImages = await prisma.propertyImages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyImagesFindUniqueArgs>(args: SelectSubset<T, PropertyImagesFindUniqueArgs<ExtArgs>>): Prisma__PropertyImagesClient<$Result.GetResult<Prisma.$PropertyImagesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PropertyImages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyImagesFindUniqueOrThrowArgs} args - Arguments to find a PropertyImages
     * @example
     * // Get one PropertyImages
     * const propertyImages = await prisma.propertyImages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyImagesFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyImagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyImagesClient<$Result.GetResult<Prisma.$PropertyImagesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PropertyImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImagesFindFirstArgs} args - Arguments to find a PropertyImages
     * @example
     * // Get one PropertyImages
     * const propertyImages = await prisma.propertyImages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyImagesFindFirstArgs>(args?: SelectSubset<T, PropertyImagesFindFirstArgs<ExtArgs>>): Prisma__PropertyImagesClient<$Result.GetResult<Prisma.$PropertyImagesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PropertyImages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImagesFindFirstOrThrowArgs} args - Arguments to find a PropertyImages
     * @example
     * // Get one PropertyImages
     * const propertyImages = await prisma.propertyImages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyImagesFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyImagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyImagesClient<$Result.GetResult<Prisma.$PropertyImagesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PropertyImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyImages
     * const propertyImages = await prisma.propertyImages.findMany()
     * 
     * // Get first 10 PropertyImages
     * const propertyImages = await prisma.propertyImages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyImagesWithIdOnly = await prisma.propertyImages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyImagesFindManyArgs>(args?: SelectSubset<T, PropertyImagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PropertyImages.
     * @param {PropertyImagesCreateArgs} args - Arguments to create a PropertyImages.
     * @example
     * // Create one PropertyImages
     * const PropertyImages = await prisma.propertyImages.create({
     *   data: {
     *     // ... data to create a PropertyImages
     *   }
     * })
     * 
     */
    create<T extends PropertyImagesCreateArgs>(args: SelectSubset<T, PropertyImagesCreateArgs<ExtArgs>>): Prisma__PropertyImagesClient<$Result.GetResult<Prisma.$PropertyImagesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PropertyImages.
     * @param {PropertyImagesCreateManyArgs} args - Arguments to create many PropertyImages.
     * @example
     * // Create many PropertyImages
     * const propertyImages = await prisma.propertyImages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyImagesCreateManyArgs>(args?: SelectSubset<T, PropertyImagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropertyImages and returns the data saved in the database.
     * @param {PropertyImagesCreateManyAndReturnArgs} args - Arguments to create many PropertyImages.
     * @example
     * // Create many PropertyImages
     * const propertyImages = await prisma.propertyImages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropertyImages and only return the `id`
     * const propertyImagesWithIdOnly = await prisma.propertyImages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyImagesCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyImagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagesPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PropertyImages.
     * @param {PropertyImagesDeleteArgs} args - Arguments to delete one PropertyImages.
     * @example
     * // Delete one PropertyImages
     * const PropertyImages = await prisma.propertyImages.delete({
     *   where: {
     *     // ... filter to delete one PropertyImages
     *   }
     * })
     * 
     */
    delete<T extends PropertyImagesDeleteArgs>(args: SelectSubset<T, PropertyImagesDeleteArgs<ExtArgs>>): Prisma__PropertyImagesClient<$Result.GetResult<Prisma.$PropertyImagesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PropertyImages.
     * @param {PropertyImagesUpdateArgs} args - Arguments to update one PropertyImages.
     * @example
     * // Update one PropertyImages
     * const propertyImages = await prisma.propertyImages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyImagesUpdateArgs>(args: SelectSubset<T, PropertyImagesUpdateArgs<ExtArgs>>): Prisma__PropertyImagesClient<$Result.GetResult<Prisma.$PropertyImagesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PropertyImages.
     * @param {PropertyImagesDeleteManyArgs} args - Arguments to filter PropertyImages to delete.
     * @example
     * // Delete a few PropertyImages
     * const { count } = await prisma.propertyImages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyImagesDeleteManyArgs>(args?: SelectSubset<T, PropertyImagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyImages
     * const propertyImages = await prisma.propertyImages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyImagesUpdateManyArgs>(args: SelectSubset<T, PropertyImagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyImages and returns the data updated in the database.
     * @param {PropertyImagesUpdateManyAndReturnArgs} args - Arguments to update many PropertyImages.
     * @example
     * // Update many PropertyImages
     * const propertyImages = await prisma.propertyImages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PropertyImages and only return the `id`
     * const propertyImagesWithIdOnly = await prisma.propertyImages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropertyImagesUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyImagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagesPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PropertyImages.
     * @param {PropertyImagesUpsertArgs} args - Arguments to update or create a PropertyImages.
     * @example
     * // Update or create a PropertyImages
     * const propertyImages = await prisma.propertyImages.upsert({
     *   create: {
     *     // ... data to create a PropertyImages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyImages we want to update
     *   }
     * })
     */
    upsert<T extends PropertyImagesUpsertArgs>(args: SelectSubset<T, PropertyImagesUpsertArgs<ExtArgs>>): Prisma__PropertyImagesClient<$Result.GetResult<Prisma.$PropertyImagesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PropertyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImagesCountArgs} args - Arguments to filter PropertyImages to count.
     * @example
     * // Count the number of PropertyImages
     * const count = await prisma.propertyImages.count({
     *   where: {
     *     // ... the filter for the PropertyImages we want to count
     *   }
     * })
    **/
    count<T extends PropertyImagesCountArgs>(
      args?: Subset<T, PropertyImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyImagesAggregateArgs>(args: Subset<T, PropertyImagesAggregateArgs>): Prisma.PrismaPromise<GetPropertyImagesAggregateType<T>>

    /**
     * Group by PropertyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyImagesGroupByArgs['orderBy'] }
        : { orderBy?: PropertyImagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyImages model
   */
  readonly fields: PropertyImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyImages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PropertyImages model
   */ 
  interface PropertyImagesFieldRefs {
    readonly id: FieldRef<"PropertyImages", 'Int'>
    readonly image_url: FieldRef<"PropertyImages", 'String'>
    readonly property_id: FieldRef<"PropertyImages", 'Int'>
    readonly createdAt: FieldRef<"PropertyImages", 'DateTime'>
    readonly updatedAt: FieldRef<"PropertyImages", 'DateTime'>
    readonly deletedAt: FieldRef<"PropertyImages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PropertyImages findUnique
   */
  export type PropertyImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImages
     */
    select?: PropertyImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImages
     */
    omit?: PropertyImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImagesInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImages to fetch.
     */
    where: PropertyImagesWhereUniqueInput
  }

  /**
   * PropertyImages findUniqueOrThrow
   */
  export type PropertyImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImages
     */
    select?: PropertyImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImages
     */
    omit?: PropertyImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImagesInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImages to fetch.
     */
    where: PropertyImagesWhereUniqueInput
  }

  /**
   * PropertyImages findFirst
   */
  export type PropertyImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImages
     */
    select?: PropertyImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImages
     */
    omit?: PropertyImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImagesInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImages to fetch.
     */
    where?: PropertyImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImagesOrderByWithRelationInput | PropertyImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyImages.
     */
    cursor?: PropertyImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyImages.
     */
    distinct?: PropertyImagesScalarFieldEnum | PropertyImagesScalarFieldEnum[]
  }

  /**
   * PropertyImages findFirstOrThrow
   */
  export type PropertyImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImages
     */
    select?: PropertyImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImages
     */
    omit?: PropertyImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImagesInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImages to fetch.
     */
    where?: PropertyImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImagesOrderByWithRelationInput | PropertyImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyImages.
     */
    cursor?: PropertyImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyImages.
     */
    distinct?: PropertyImagesScalarFieldEnum | PropertyImagesScalarFieldEnum[]
  }

  /**
   * PropertyImages findMany
   */
  export type PropertyImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImages
     */
    select?: PropertyImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImages
     */
    omit?: PropertyImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImagesInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImages to fetch.
     */
    where?: PropertyImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImagesOrderByWithRelationInput | PropertyImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyImages.
     */
    cursor?: PropertyImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    distinct?: PropertyImagesScalarFieldEnum | PropertyImagesScalarFieldEnum[]
  }

  /**
   * PropertyImages create
   */
  export type PropertyImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImages
     */
    select?: PropertyImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImages
     */
    omit?: PropertyImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyImages.
     */
    data: XOR<PropertyImagesCreateInput, PropertyImagesUncheckedCreateInput>
  }

  /**
   * PropertyImages createMany
   */
  export type PropertyImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyImages.
     */
    data: PropertyImagesCreateManyInput | PropertyImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyImages createManyAndReturn
   */
  export type PropertyImagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImages
     */
    select?: PropertyImagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImages
     */
    omit?: PropertyImagesOmit<ExtArgs> | null
    /**
     * The data used to create many PropertyImages.
     */
    data: PropertyImagesCreateManyInput | PropertyImagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyImages update
   */
  export type PropertyImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImages
     */
    select?: PropertyImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImages
     */
    omit?: PropertyImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyImages.
     */
    data: XOR<PropertyImagesUpdateInput, PropertyImagesUncheckedUpdateInput>
    /**
     * Choose, which PropertyImages to update.
     */
    where: PropertyImagesWhereUniqueInput
  }

  /**
   * PropertyImages updateMany
   */
  export type PropertyImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyImages.
     */
    data: XOR<PropertyImagesUpdateManyMutationInput, PropertyImagesUncheckedUpdateManyInput>
    /**
     * Filter which PropertyImages to update
     */
    where?: PropertyImagesWhereInput
  }

  /**
   * PropertyImages updateManyAndReturn
   */
  export type PropertyImagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImages
     */
    select?: PropertyImagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImages
     */
    omit?: PropertyImagesOmit<ExtArgs> | null
    /**
     * The data used to update PropertyImages.
     */
    data: XOR<PropertyImagesUpdateManyMutationInput, PropertyImagesUncheckedUpdateManyInput>
    /**
     * Filter which PropertyImages to update
     */
    where?: PropertyImagesWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyImages upsert
   */
  export type PropertyImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImages
     */
    select?: PropertyImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImages
     */
    omit?: PropertyImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyImages to update in case it exists.
     */
    where: PropertyImagesWhereUniqueInput
    /**
     * In case the PropertyImages found by the `where` argument doesn't exist, create a new PropertyImages with this data.
     */
    create: XOR<PropertyImagesCreateInput, PropertyImagesUncheckedCreateInput>
    /**
     * In case the PropertyImages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyImagesUpdateInput, PropertyImagesUncheckedUpdateInput>
  }

  /**
   * PropertyImages delete
   */
  export type PropertyImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImages
     */
    select?: PropertyImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImages
     */
    omit?: PropertyImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImagesInclude<ExtArgs> | null
    /**
     * Filter which PropertyImages to delete.
     */
    where: PropertyImagesWhereUniqueInput
  }

  /**
   * PropertyImages deleteMany
   */
  export type PropertyImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyImages to delete
     */
    where?: PropertyImagesWhereInput
  }

  /**
   * PropertyImages without action
   */
  export type PropertyImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImages
     */
    select?: PropertyImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImages
     */
    omit?: PropertyImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImagesInclude<ExtArgs> | null
  }


  /**
   * Model RoomTypes
   */

  export type AggregateRoomTypes = {
    _count: RoomTypesCountAggregateOutputType | null
    _avg: RoomTypesAvgAggregateOutputType | null
    _sum: RoomTypesSumAggregateOutputType | null
    _min: RoomTypesMinAggregateOutputType | null
    _max: RoomTypesMaxAggregateOutputType | null
  }

  export type RoomTypesAvgAggregateOutputType = {
    id: number | null
    stock: number | null
    capacity: number | null
    price: number | null
    breakfast_price: number | null
    avg_rating: number | null
    property_id: number | null
  }

  export type RoomTypesSumAggregateOutputType = {
    id: number | null
    stock: number | null
    capacity: number | null
    price: number | null
    breakfast_price: number | null
    avg_rating: number | null
    property_id: number | null
  }

  export type RoomTypesMinAggregateOutputType = {
    id: number | null
    name: string | null
    stock: number | null
    capacity: number | null
    bed_details: string | null
    price: number | null
    has_breakfast: boolean | null
    breakfast_price: number | null
    avg_rating: number | null
    property_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type RoomTypesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    stock: number | null
    capacity: number | null
    bed_details: string | null
    price: number | null
    has_breakfast: boolean | null
    breakfast_price: number | null
    avg_rating: number | null
    property_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type RoomTypesCountAggregateOutputType = {
    id: number
    name: number
    stock: number
    capacity: number
    bed_details: number
    price: number
    has_breakfast: number
    breakfast_price: number
    avg_rating: number
    property_id: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type RoomTypesAvgAggregateInputType = {
    id?: true
    stock?: true
    capacity?: true
    price?: true
    breakfast_price?: true
    avg_rating?: true
    property_id?: true
  }

  export type RoomTypesSumAggregateInputType = {
    id?: true
    stock?: true
    capacity?: true
    price?: true
    breakfast_price?: true
    avg_rating?: true
    property_id?: true
  }

  export type RoomTypesMinAggregateInputType = {
    id?: true
    name?: true
    stock?: true
    capacity?: true
    bed_details?: true
    price?: true
    has_breakfast?: true
    breakfast_price?: true
    avg_rating?: true
    property_id?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type RoomTypesMaxAggregateInputType = {
    id?: true
    name?: true
    stock?: true
    capacity?: true
    bed_details?: true
    price?: true
    has_breakfast?: true
    breakfast_price?: true
    avg_rating?: true
    property_id?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type RoomTypesCountAggregateInputType = {
    id?: true
    name?: true
    stock?: true
    capacity?: true
    bed_details?: true
    price?: true
    has_breakfast?: true
    breakfast_price?: true
    avg_rating?: true
    property_id?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type RoomTypesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomTypes to aggregate.
     */
    where?: RoomTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTypes to fetch.
     */
    orderBy?: RoomTypesOrderByWithRelationInput | RoomTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomTypes
    **/
    _count?: true | RoomTypesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomTypesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomTypesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomTypesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomTypesMaxAggregateInputType
  }

  export type GetRoomTypesAggregateType<T extends RoomTypesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomTypes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomTypes[P]>
      : GetScalarType<T[P], AggregateRoomTypes[P]>
  }




  export type RoomTypesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomTypesWhereInput
    orderBy?: RoomTypesOrderByWithAggregationInput | RoomTypesOrderByWithAggregationInput[]
    by: RoomTypesScalarFieldEnum[] | RoomTypesScalarFieldEnum
    having?: RoomTypesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomTypesCountAggregateInputType | true
    _avg?: RoomTypesAvgAggregateInputType
    _sum?: RoomTypesSumAggregateInputType
    _min?: RoomTypesMinAggregateInputType
    _max?: RoomTypesMaxAggregateInputType
  }

  export type RoomTypesGroupByOutputType = {
    id: number
    name: string
    stock: number
    capacity: number
    bed_details: string | null
    price: number
    has_breakfast: boolean
    breakfast_price: number
    avg_rating: number | null
    property_id: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: RoomTypesCountAggregateOutputType | null
    _avg: RoomTypesAvgAggregateOutputType | null
    _sum: RoomTypesSumAggregateOutputType | null
    _min: RoomTypesMinAggregateOutputType | null
    _max: RoomTypesMaxAggregateOutputType | null
  }

  type GetRoomTypesGroupByPayload<T extends RoomTypesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomTypesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomTypesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomTypesGroupByOutputType[P]>
            : GetScalarType<T[P], RoomTypesGroupByOutputType[P]>
        }
      >
    >


  export type RoomTypesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stock?: boolean
    capacity?: boolean
    bed_details?: boolean
    price?: boolean
    has_breakfast?: boolean
    breakfast_price?: boolean
    avg_rating?: boolean
    property_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    RoomImages?: boolean | RoomTypes$RoomImagesArgs<ExtArgs>
    Booking?: boolean | RoomTypes$BookingArgs<ExtArgs>
    Review?: boolean | RoomTypes$ReviewArgs<ExtArgs>
    Unavailable?: boolean | RoomTypes$UnavailableArgs<ExtArgs>
    _count?: boolean | RoomTypesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomTypes"]>

  export type RoomTypesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stock?: boolean
    capacity?: boolean
    bed_details?: boolean
    price?: boolean
    has_breakfast?: boolean
    breakfast_price?: boolean
    avg_rating?: boolean
    property_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomTypes"]>

  export type RoomTypesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stock?: boolean
    capacity?: boolean
    bed_details?: boolean
    price?: boolean
    has_breakfast?: boolean
    breakfast_price?: boolean
    avg_rating?: boolean
    property_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomTypes"]>

  export type RoomTypesSelectScalar = {
    id?: boolean
    name?: boolean
    stock?: boolean
    capacity?: boolean
    bed_details?: boolean
    price?: boolean
    has_breakfast?: boolean
    breakfast_price?: boolean
    avg_rating?: boolean
    property_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type RoomTypesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "stock" | "capacity" | "bed_details" | "price" | "has_breakfast" | "breakfast_price" | "avg_rating" | "property_id" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["roomTypes"]>
  export type RoomTypesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    RoomImages?: boolean | RoomTypes$RoomImagesArgs<ExtArgs>
    Booking?: boolean | RoomTypes$BookingArgs<ExtArgs>
    Review?: boolean | RoomTypes$ReviewArgs<ExtArgs>
    Unavailable?: boolean | RoomTypes$UnavailableArgs<ExtArgs>
    _count?: boolean | RoomTypesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomTypesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type RoomTypesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $RoomTypesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomTypes"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
      RoomImages: Prisma.$RoomImagesPayload<ExtArgs>[]
      Booking: Prisma.$BookingPayload<ExtArgs>[]
      Review: Prisma.$ReviewPayload<ExtArgs>[]
      Unavailable: Prisma.$UnavailablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      stock: number
      capacity: number
      bed_details: string | null
      price: number
      has_breakfast: boolean
      breakfast_price: number
      avg_rating: number | null
      property_id: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["roomTypes"]>
    composites: {}
  }

  type RoomTypesGetPayload<S extends boolean | null | undefined | RoomTypesDefaultArgs> = $Result.GetResult<Prisma.$RoomTypesPayload, S>

  type RoomTypesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomTypesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomTypesCountAggregateInputType | true
    }

  export interface RoomTypesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomTypes'], meta: { name: 'RoomTypes' } }
    /**
     * Find zero or one RoomTypes that matches the filter.
     * @param {RoomTypesFindUniqueArgs} args - Arguments to find a RoomTypes
     * @example
     * // Get one RoomTypes
     * const roomTypes = await prisma.roomTypes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomTypesFindUniqueArgs>(args: SelectSubset<T, RoomTypesFindUniqueArgs<ExtArgs>>): Prisma__RoomTypesClient<$Result.GetResult<Prisma.$RoomTypesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one RoomTypes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomTypesFindUniqueOrThrowArgs} args - Arguments to find a RoomTypes
     * @example
     * // Get one RoomTypes
     * const roomTypes = await prisma.roomTypes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomTypesFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomTypesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomTypesClient<$Result.GetResult<Prisma.$RoomTypesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first RoomTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypesFindFirstArgs} args - Arguments to find a RoomTypes
     * @example
     * // Get one RoomTypes
     * const roomTypes = await prisma.roomTypes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomTypesFindFirstArgs>(args?: SelectSubset<T, RoomTypesFindFirstArgs<ExtArgs>>): Prisma__RoomTypesClient<$Result.GetResult<Prisma.$RoomTypesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first RoomTypes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypesFindFirstOrThrowArgs} args - Arguments to find a RoomTypes
     * @example
     * // Get one RoomTypes
     * const roomTypes = await prisma.roomTypes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomTypesFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomTypesFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomTypesClient<$Result.GetResult<Prisma.$RoomTypesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more RoomTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomTypes
     * const roomTypes = await prisma.roomTypes.findMany()
     * 
     * // Get first 10 RoomTypes
     * const roomTypes = await prisma.roomTypes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomTypesWithIdOnly = await prisma.roomTypes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomTypesFindManyArgs>(args?: SelectSubset<T, RoomTypesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomTypesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a RoomTypes.
     * @param {RoomTypesCreateArgs} args - Arguments to create a RoomTypes.
     * @example
     * // Create one RoomTypes
     * const RoomTypes = await prisma.roomTypes.create({
     *   data: {
     *     // ... data to create a RoomTypes
     *   }
     * })
     * 
     */
    create<T extends RoomTypesCreateArgs>(args: SelectSubset<T, RoomTypesCreateArgs<ExtArgs>>): Prisma__RoomTypesClient<$Result.GetResult<Prisma.$RoomTypesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many RoomTypes.
     * @param {RoomTypesCreateManyArgs} args - Arguments to create many RoomTypes.
     * @example
     * // Create many RoomTypes
     * const roomTypes = await prisma.roomTypes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomTypesCreateManyArgs>(args?: SelectSubset<T, RoomTypesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomTypes and returns the data saved in the database.
     * @param {RoomTypesCreateManyAndReturnArgs} args - Arguments to create many RoomTypes.
     * @example
     * // Create many RoomTypes
     * const roomTypes = await prisma.roomTypes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomTypes and only return the `id`
     * const roomTypesWithIdOnly = await prisma.roomTypes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomTypesCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomTypesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomTypesPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a RoomTypes.
     * @param {RoomTypesDeleteArgs} args - Arguments to delete one RoomTypes.
     * @example
     * // Delete one RoomTypes
     * const RoomTypes = await prisma.roomTypes.delete({
     *   where: {
     *     // ... filter to delete one RoomTypes
     *   }
     * })
     * 
     */
    delete<T extends RoomTypesDeleteArgs>(args: SelectSubset<T, RoomTypesDeleteArgs<ExtArgs>>): Prisma__RoomTypesClient<$Result.GetResult<Prisma.$RoomTypesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one RoomTypes.
     * @param {RoomTypesUpdateArgs} args - Arguments to update one RoomTypes.
     * @example
     * // Update one RoomTypes
     * const roomTypes = await prisma.roomTypes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomTypesUpdateArgs>(args: SelectSubset<T, RoomTypesUpdateArgs<ExtArgs>>): Prisma__RoomTypesClient<$Result.GetResult<Prisma.$RoomTypesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more RoomTypes.
     * @param {RoomTypesDeleteManyArgs} args - Arguments to filter RoomTypes to delete.
     * @example
     * // Delete a few RoomTypes
     * const { count } = await prisma.roomTypes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomTypesDeleteManyArgs>(args?: SelectSubset<T, RoomTypesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomTypes
     * const roomTypes = await prisma.roomTypes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomTypesUpdateManyArgs>(args: SelectSubset<T, RoomTypesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomTypes and returns the data updated in the database.
     * @param {RoomTypesUpdateManyAndReturnArgs} args - Arguments to update many RoomTypes.
     * @example
     * // Update many RoomTypes
     * const roomTypes = await prisma.roomTypes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomTypes and only return the `id`
     * const roomTypesWithIdOnly = await prisma.roomTypes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomTypesUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomTypesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomTypesPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one RoomTypes.
     * @param {RoomTypesUpsertArgs} args - Arguments to update or create a RoomTypes.
     * @example
     * // Update or create a RoomTypes
     * const roomTypes = await prisma.roomTypes.upsert({
     *   create: {
     *     // ... data to create a RoomTypes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomTypes we want to update
     *   }
     * })
     */
    upsert<T extends RoomTypesUpsertArgs>(args: SelectSubset<T, RoomTypesUpsertArgs<ExtArgs>>): Prisma__RoomTypesClient<$Result.GetResult<Prisma.$RoomTypesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of RoomTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypesCountArgs} args - Arguments to filter RoomTypes to count.
     * @example
     * // Count the number of RoomTypes
     * const count = await prisma.roomTypes.count({
     *   where: {
     *     // ... the filter for the RoomTypes we want to count
     *   }
     * })
    **/
    count<T extends RoomTypesCountArgs>(
      args?: Subset<T, RoomTypesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomTypesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomTypesAggregateArgs>(args: Subset<T, RoomTypesAggregateArgs>): Prisma.PrismaPromise<GetRoomTypesAggregateType<T>>

    /**
     * Group by RoomTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomTypesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomTypesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomTypesGroupByArgs['orderBy'] }
        : { orderBy?: RoomTypesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomTypesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomTypesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomTypes model
   */
  readonly fields: RoomTypesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomTypes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomTypesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    RoomImages<T extends RoomTypes$RoomImagesArgs<ExtArgs> = {}>(args?: Subset<T, RoomTypes$RoomImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomImagesPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Booking<T extends RoomTypes$BookingArgs<ExtArgs> = {}>(args?: Subset<T, RoomTypes$BookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Review<T extends RoomTypes$ReviewArgs<ExtArgs> = {}>(args?: Subset<T, RoomTypes$ReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Unavailable<T extends RoomTypes$UnavailableArgs<ExtArgs> = {}>(args?: Subset<T, RoomTypes$UnavailableArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnavailablePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomTypes model
   */ 
  interface RoomTypesFieldRefs {
    readonly id: FieldRef<"RoomTypes", 'Int'>
    readonly name: FieldRef<"RoomTypes", 'String'>
    readonly stock: FieldRef<"RoomTypes", 'Int'>
    readonly capacity: FieldRef<"RoomTypes", 'Int'>
    readonly bed_details: FieldRef<"RoomTypes", 'String'>
    readonly price: FieldRef<"RoomTypes", 'Int'>
    readonly has_breakfast: FieldRef<"RoomTypes", 'Boolean'>
    readonly breakfast_price: FieldRef<"RoomTypes", 'Int'>
    readonly avg_rating: FieldRef<"RoomTypes", 'Int'>
    readonly property_id: FieldRef<"RoomTypes", 'Int'>
    readonly createdAt: FieldRef<"RoomTypes", 'DateTime'>
    readonly updatedAt: FieldRef<"RoomTypes", 'DateTime'>
    readonly deletedAt: FieldRef<"RoomTypes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomTypes findUnique
   */
  export type RoomTypesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypes
     */
    select?: RoomTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTypes
     */
    omit?: RoomTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypesInclude<ExtArgs> | null
    /**
     * Filter, which RoomTypes to fetch.
     */
    where: RoomTypesWhereUniqueInput
  }

  /**
   * RoomTypes findUniqueOrThrow
   */
  export type RoomTypesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypes
     */
    select?: RoomTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTypes
     */
    omit?: RoomTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypesInclude<ExtArgs> | null
    /**
     * Filter, which RoomTypes to fetch.
     */
    where: RoomTypesWhereUniqueInput
  }

  /**
   * RoomTypes findFirst
   */
  export type RoomTypesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypes
     */
    select?: RoomTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTypes
     */
    omit?: RoomTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypesInclude<ExtArgs> | null
    /**
     * Filter, which RoomTypes to fetch.
     */
    where?: RoomTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTypes to fetch.
     */
    orderBy?: RoomTypesOrderByWithRelationInput | RoomTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomTypes.
     */
    cursor?: RoomTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomTypes.
     */
    distinct?: RoomTypesScalarFieldEnum | RoomTypesScalarFieldEnum[]
  }

  /**
   * RoomTypes findFirstOrThrow
   */
  export type RoomTypesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypes
     */
    select?: RoomTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTypes
     */
    omit?: RoomTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypesInclude<ExtArgs> | null
    /**
     * Filter, which RoomTypes to fetch.
     */
    where?: RoomTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTypes to fetch.
     */
    orderBy?: RoomTypesOrderByWithRelationInput | RoomTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomTypes.
     */
    cursor?: RoomTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomTypes.
     */
    distinct?: RoomTypesScalarFieldEnum | RoomTypesScalarFieldEnum[]
  }

  /**
   * RoomTypes findMany
   */
  export type RoomTypesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypes
     */
    select?: RoomTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTypes
     */
    omit?: RoomTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypesInclude<ExtArgs> | null
    /**
     * Filter, which RoomTypes to fetch.
     */
    where?: RoomTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomTypes to fetch.
     */
    orderBy?: RoomTypesOrderByWithRelationInput | RoomTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomTypes.
     */
    cursor?: RoomTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomTypes.
     */
    skip?: number
    distinct?: RoomTypesScalarFieldEnum | RoomTypesScalarFieldEnum[]
  }

  /**
   * RoomTypes create
   */
  export type RoomTypesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypes
     */
    select?: RoomTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTypes
     */
    omit?: RoomTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypesInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomTypes.
     */
    data: XOR<RoomTypesCreateInput, RoomTypesUncheckedCreateInput>
  }

  /**
   * RoomTypes createMany
   */
  export type RoomTypesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomTypes.
     */
    data: RoomTypesCreateManyInput | RoomTypesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomTypes createManyAndReturn
   */
  export type RoomTypesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypes
     */
    select?: RoomTypesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTypes
     */
    omit?: RoomTypesOmit<ExtArgs> | null
    /**
     * The data used to create many RoomTypes.
     */
    data: RoomTypesCreateManyInput | RoomTypesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomTypes update
   */
  export type RoomTypesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypes
     */
    select?: RoomTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTypes
     */
    omit?: RoomTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypesInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomTypes.
     */
    data: XOR<RoomTypesUpdateInput, RoomTypesUncheckedUpdateInput>
    /**
     * Choose, which RoomTypes to update.
     */
    where: RoomTypesWhereUniqueInput
  }

  /**
   * RoomTypes updateMany
   */
  export type RoomTypesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomTypes.
     */
    data: XOR<RoomTypesUpdateManyMutationInput, RoomTypesUncheckedUpdateManyInput>
    /**
     * Filter which RoomTypes to update
     */
    where?: RoomTypesWhereInput
  }

  /**
   * RoomTypes updateManyAndReturn
   */
  export type RoomTypesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypes
     */
    select?: RoomTypesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTypes
     */
    omit?: RoomTypesOmit<ExtArgs> | null
    /**
     * The data used to update RoomTypes.
     */
    data: XOR<RoomTypesUpdateManyMutationInput, RoomTypesUncheckedUpdateManyInput>
    /**
     * Filter which RoomTypes to update
     */
    where?: RoomTypesWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomTypes upsert
   */
  export type RoomTypesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypes
     */
    select?: RoomTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTypes
     */
    omit?: RoomTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypesInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomTypes to update in case it exists.
     */
    where: RoomTypesWhereUniqueInput
    /**
     * In case the RoomTypes found by the `where` argument doesn't exist, create a new RoomTypes with this data.
     */
    create: XOR<RoomTypesCreateInput, RoomTypesUncheckedCreateInput>
    /**
     * In case the RoomTypes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomTypesUpdateInput, RoomTypesUncheckedUpdateInput>
  }

  /**
   * RoomTypes delete
   */
  export type RoomTypesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypes
     */
    select?: RoomTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTypes
     */
    omit?: RoomTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypesInclude<ExtArgs> | null
    /**
     * Filter which RoomTypes to delete.
     */
    where: RoomTypesWhereUniqueInput
  }

  /**
   * RoomTypes deleteMany
   */
  export type RoomTypesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomTypes to delete
     */
    where?: RoomTypesWhereInput
  }

  /**
   * RoomTypes.RoomImages
   */
  export type RoomTypes$RoomImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImages
     */
    select?: RoomImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImages
     */
    omit?: RoomImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImagesInclude<ExtArgs> | null
    where?: RoomImagesWhereInput
    orderBy?: RoomImagesOrderByWithRelationInput | RoomImagesOrderByWithRelationInput[]
    cursor?: RoomImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomImagesScalarFieldEnum | RoomImagesScalarFieldEnum[]
  }

  /**
   * RoomTypes.Booking
   */
  export type RoomTypes$BookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * RoomTypes.Review
   */
  export type RoomTypes$ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * RoomTypes.Unavailable
   */
  export type RoomTypes$UnavailableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailable
     */
    select?: UnavailableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailable
     */
    omit?: UnavailableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailableInclude<ExtArgs> | null
    where?: UnavailableWhereInput
    orderBy?: UnavailableOrderByWithRelationInput | UnavailableOrderByWithRelationInput[]
    cursor?: UnavailableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnavailableScalarFieldEnum | UnavailableScalarFieldEnum[]
  }

  /**
   * RoomTypes without action
   */
  export type RoomTypesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypes
     */
    select?: RoomTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTypes
     */
    omit?: RoomTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomTypesInclude<ExtArgs> | null
  }


  /**
   * Model RoomImages
   */

  export type AggregateRoomImages = {
    _count: RoomImagesCountAggregateOutputType | null
    _avg: RoomImagesAvgAggregateOutputType | null
    _sum: RoomImagesSumAggregateOutputType | null
    _min: RoomImagesMinAggregateOutputType | null
    _max: RoomImagesMaxAggregateOutputType | null
  }

  export type RoomImagesAvgAggregateOutputType = {
    id: number | null
    room_types_id: number | null
  }

  export type RoomImagesSumAggregateOutputType = {
    id: number | null
    room_types_id: number | null
  }

  export type RoomImagesMinAggregateOutputType = {
    id: number | null
    image_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    room_types_id: number | null
  }

  export type RoomImagesMaxAggregateOutputType = {
    id: number | null
    image_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    room_types_id: number | null
  }

  export type RoomImagesCountAggregateOutputType = {
    id: number
    image_url: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    room_types_id: number
    _all: number
  }


  export type RoomImagesAvgAggregateInputType = {
    id?: true
    room_types_id?: true
  }

  export type RoomImagesSumAggregateInputType = {
    id?: true
    room_types_id?: true
  }

  export type RoomImagesMinAggregateInputType = {
    id?: true
    image_url?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    room_types_id?: true
  }

  export type RoomImagesMaxAggregateInputType = {
    id?: true
    image_url?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    room_types_id?: true
  }

  export type RoomImagesCountAggregateInputType = {
    id?: true
    image_url?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    room_types_id?: true
    _all?: true
  }

  export type RoomImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomImages to aggregate.
     */
    where?: RoomImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomImages to fetch.
     */
    orderBy?: RoomImagesOrderByWithRelationInput | RoomImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomImages
    **/
    _count?: true | RoomImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomImagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomImagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomImagesMaxAggregateInputType
  }

  export type GetRoomImagesAggregateType<T extends RoomImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomImages[P]>
      : GetScalarType<T[P], AggregateRoomImages[P]>
  }




  export type RoomImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomImagesWhereInput
    orderBy?: RoomImagesOrderByWithAggregationInput | RoomImagesOrderByWithAggregationInput[]
    by: RoomImagesScalarFieldEnum[] | RoomImagesScalarFieldEnum
    having?: RoomImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomImagesCountAggregateInputType | true
    _avg?: RoomImagesAvgAggregateInputType
    _sum?: RoomImagesSumAggregateInputType
    _min?: RoomImagesMinAggregateInputType
    _max?: RoomImagesMaxAggregateInputType
  }

  export type RoomImagesGroupByOutputType = {
    id: number
    image_url: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    room_types_id: number
    _count: RoomImagesCountAggregateOutputType | null
    _avg: RoomImagesAvgAggregateOutputType | null
    _sum: RoomImagesSumAggregateOutputType | null
    _min: RoomImagesMinAggregateOutputType | null
    _max: RoomImagesMaxAggregateOutputType | null
  }

  type GetRoomImagesGroupByPayload<T extends RoomImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomImagesGroupByOutputType[P]>
            : GetScalarType<T[P], RoomImagesGroupByOutputType[P]>
        }
      >
    >


  export type RoomImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    room_types_id?: boolean
    room_types?: boolean | RoomTypesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomImages"]>

  export type RoomImagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    room_types_id?: boolean
    room_types?: boolean | RoomTypesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomImages"]>

  export type RoomImagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    room_types_id?: boolean
    room_types?: boolean | RoomTypesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomImages"]>

  export type RoomImagesSelectScalar = {
    id?: boolean
    image_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    room_types_id?: boolean
  }

  export type RoomImagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image_url" | "createdAt" | "updatedAt" | "deletedAt" | "room_types_id", ExtArgs["result"]["roomImages"]>
  export type RoomImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room_types?: boolean | RoomTypesDefaultArgs<ExtArgs>
  }
  export type RoomImagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room_types?: boolean | RoomTypesDefaultArgs<ExtArgs>
  }
  export type RoomImagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room_types?: boolean | RoomTypesDefaultArgs<ExtArgs>
  }

  export type $RoomImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomImages"
    objects: {
      room_types: Prisma.$RoomTypesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image_url: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      room_types_id: number
    }, ExtArgs["result"]["roomImages"]>
    composites: {}
  }

  type RoomImagesGetPayload<S extends boolean | null | undefined | RoomImagesDefaultArgs> = $Result.GetResult<Prisma.$RoomImagesPayload, S>

  type RoomImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomImagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomImagesCountAggregateInputType | true
    }

  export interface RoomImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomImages'], meta: { name: 'RoomImages' } }
    /**
     * Find zero or one RoomImages that matches the filter.
     * @param {RoomImagesFindUniqueArgs} args - Arguments to find a RoomImages
     * @example
     * // Get one RoomImages
     * const roomImages = await prisma.roomImages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomImagesFindUniqueArgs>(args: SelectSubset<T, RoomImagesFindUniqueArgs<ExtArgs>>): Prisma__RoomImagesClient<$Result.GetResult<Prisma.$RoomImagesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one RoomImages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomImagesFindUniqueOrThrowArgs} args - Arguments to find a RoomImages
     * @example
     * // Get one RoomImages
     * const roomImages = await prisma.roomImages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomImagesFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomImagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomImagesClient<$Result.GetResult<Prisma.$RoomImagesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first RoomImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImagesFindFirstArgs} args - Arguments to find a RoomImages
     * @example
     * // Get one RoomImages
     * const roomImages = await prisma.roomImages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomImagesFindFirstArgs>(args?: SelectSubset<T, RoomImagesFindFirstArgs<ExtArgs>>): Prisma__RoomImagesClient<$Result.GetResult<Prisma.$RoomImagesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first RoomImages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImagesFindFirstOrThrowArgs} args - Arguments to find a RoomImages
     * @example
     * // Get one RoomImages
     * const roomImages = await prisma.roomImages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomImagesFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomImagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomImagesClient<$Result.GetResult<Prisma.$RoomImagesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more RoomImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomImages
     * const roomImages = await prisma.roomImages.findMany()
     * 
     * // Get first 10 RoomImages
     * const roomImages = await prisma.roomImages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomImagesWithIdOnly = await prisma.roomImages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomImagesFindManyArgs>(args?: SelectSubset<T, RoomImagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomImagesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a RoomImages.
     * @param {RoomImagesCreateArgs} args - Arguments to create a RoomImages.
     * @example
     * // Create one RoomImages
     * const RoomImages = await prisma.roomImages.create({
     *   data: {
     *     // ... data to create a RoomImages
     *   }
     * })
     * 
     */
    create<T extends RoomImagesCreateArgs>(args: SelectSubset<T, RoomImagesCreateArgs<ExtArgs>>): Prisma__RoomImagesClient<$Result.GetResult<Prisma.$RoomImagesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many RoomImages.
     * @param {RoomImagesCreateManyArgs} args - Arguments to create many RoomImages.
     * @example
     * // Create many RoomImages
     * const roomImages = await prisma.roomImages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomImagesCreateManyArgs>(args?: SelectSubset<T, RoomImagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomImages and returns the data saved in the database.
     * @param {RoomImagesCreateManyAndReturnArgs} args - Arguments to create many RoomImages.
     * @example
     * // Create many RoomImages
     * const roomImages = await prisma.roomImages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomImages and only return the `id`
     * const roomImagesWithIdOnly = await prisma.roomImages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomImagesCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomImagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomImagesPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a RoomImages.
     * @param {RoomImagesDeleteArgs} args - Arguments to delete one RoomImages.
     * @example
     * // Delete one RoomImages
     * const RoomImages = await prisma.roomImages.delete({
     *   where: {
     *     // ... filter to delete one RoomImages
     *   }
     * })
     * 
     */
    delete<T extends RoomImagesDeleteArgs>(args: SelectSubset<T, RoomImagesDeleteArgs<ExtArgs>>): Prisma__RoomImagesClient<$Result.GetResult<Prisma.$RoomImagesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one RoomImages.
     * @param {RoomImagesUpdateArgs} args - Arguments to update one RoomImages.
     * @example
     * // Update one RoomImages
     * const roomImages = await prisma.roomImages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomImagesUpdateArgs>(args: SelectSubset<T, RoomImagesUpdateArgs<ExtArgs>>): Prisma__RoomImagesClient<$Result.GetResult<Prisma.$RoomImagesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more RoomImages.
     * @param {RoomImagesDeleteManyArgs} args - Arguments to filter RoomImages to delete.
     * @example
     * // Delete a few RoomImages
     * const { count } = await prisma.roomImages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomImagesDeleteManyArgs>(args?: SelectSubset<T, RoomImagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomImages
     * const roomImages = await prisma.roomImages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomImagesUpdateManyArgs>(args: SelectSubset<T, RoomImagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomImages and returns the data updated in the database.
     * @param {RoomImagesUpdateManyAndReturnArgs} args - Arguments to update many RoomImages.
     * @example
     * // Update many RoomImages
     * const roomImages = await prisma.roomImages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomImages and only return the `id`
     * const roomImagesWithIdOnly = await prisma.roomImages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomImagesUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomImagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomImagesPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one RoomImages.
     * @param {RoomImagesUpsertArgs} args - Arguments to update or create a RoomImages.
     * @example
     * // Update or create a RoomImages
     * const roomImages = await prisma.roomImages.upsert({
     *   create: {
     *     // ... data to create a RoomImages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomImages we want to update
     *   }
     * })
     */
    upsert<T extends RoomImagesUpsertArgs>(args: SelectSubset<T, RoomImagesUpsertArgs<ExtArgs>>): Prisma__RoomImagesClient<$Result.GetResult<Prisma.$RoomImagesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of RoomImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImagesCountArgs} args - Arguments to filter RoomImages to count.
     * @example
     * // Count the number of RoomImages
     * const count = await prisma.roomImages.count({
     *   where: {
     *     // ... the filter for the RoomImages we want to count
     *   }
     * })
    **/
    count<T extends RoomImagesCountArgs>(
      args?: Subset<T, RoomImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomImagesAggregateArgs>(args: Subset<T, RoomImagesAggregateArgs>): Prisma.PrismaPromise<GetRoomImagesAggregateType<T>>

    /**
     * Group by RoomImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomImagesGroupByArgs['orderBy'] }
        : { orderBy?: RoomImagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomImages model
   */
  readonly fields: RoomImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomImages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room_types<T extends RoomTypesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomTypesDefaultArgs<ExtArgs>>): Prisma__RoomTypesClient<$Result.GetResult<Prisma.$RoomTypesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomImages model
   */ 
  interface RoomImagesFieldRefs {
    readonly id: FieldRef<"RoomImages", 'Int'>
    readonly image_url: FieldRef<"RoomImages", 'String'>
    readonly createdAt: FieldRef<"RoomImages", 'DateTime'>
    readonly updatedAt: FieldRef<"RoomImages", 'DateTime'>
    readonly deletedAt: FieldRef<"RoomImages", 'DateTime'>
    readonly room_types_id: FieldRef<"RoomImages", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RoomImages findUnique
   */
  export type RoomImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImages
     */
    select?: RoomImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImages
     */
    omit?: RoomImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImagesInclude<ExtArgs> | null
    /**
     * Filter, which RoomImages to fetch.
     */
    where: RoomImagesWhereUniqueInput
  }

  /**
   * RoomImages findUniqueOrThrow
   */
  export type RoomImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImages
     */
    select?: RoomImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImages
     */
    omit?: RoomImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImagesInclude<ExtArgs> | null
    /**
     * Filter, which RoomImages to fetch.
     */
    where: RoomImagesWhereUniqueInput
  }

  /**
   * RoomImages findFirst
   */
  export type RoomImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImages
     */
    select?: RoomImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImages
     */
    omit?: RoomImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImagesInclude<ExtArgs> | null
    /**
     * Filter, which RoomImages to fetch.
     */
    where?: RoomImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomImages to fetch.
     */
    orderBy?: RoomImagesOrderByWithRelationInput | RoomImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomImages.
     */
    cursor?: RoomImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomImages.
     */
    distinct?: RoomImagesScalarFieldEnum | RoomImagesScalarFieldEnum[]
  }

  /**
   * RoomImages findFirstOrThrow
   */
  export type RoomImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImages
     */
    select?: RoomImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImages
     */
    omit?: RoomImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImagesInclude<ExtArgs> | null
    /**
     * Filter, which RoomImages to fetch.
     */
    where?: RoomImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomImages to fetch.
     */
    orderBy?: RoomImagesOrderByWithRelationInput | RoomImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomImages.
     */
    cursor?: RoomImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomImages.
     */
    distinct?: RoomImagesScalarFieldEnum | RoomImagesScalarFieldEnum[]
  }

  /**
   * RoomImages findMany
   */
  export type RoomImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImages
     */
    select?: RoomImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImages
     */
    omit?: RoomImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImagesInclude<ExtArgs> | null
    /**
     * Filter, which RoomImages to fetch.
     */
    where?: RoomImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomImages to fetch.
     */
    orderBy?: RoomImagesOrderByWithRelationInput | RoomImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomImages.
     */
    cursor?: RoomImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomImages.
     */
    skip?: number
    distinct?: RoomImagesScalarFieldEnum | RoomImagesScalarFieldEnum[]
  }

  /**
   * RoomImages create
   */
  export type RoomImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImages
     */
    select?: RoomImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImages
     */
    omit?: RoomImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomImages.
     */
    data: XOR<RoomImagesCreateInput, RoomImagesUncheckedCreateInput>
  }

  /**
   * RoomImages createMany
   */
  export type RoomImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomImages.
     */
    data: RoomImagesCreateManyInput | RoomImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomImages createManyAndReturn
   */
  export type RoomImagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImages
     */
    select?: RoomImagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImages
     */
    omit?: RoomImagesOmit<ExtArgs> | null
    /**
     * The data used to create many RoomImages.
     */
    data: RoomImagesCreateManyInput | RoomImagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomImages update
   */
  export type RoomImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImages
     */
    select?: RoomImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImages
     */
    omit?: RoomImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomImages.
     */
    data: XOR<RoomImagesUpdateInput, RoomImagesUncheckedUpdateInput>
    /**
     * Choose, which RoomImages to update.
     */
    where: RoomImagesWhereUniqueInput
  }

  /**
   * RoomImages updateMany
   */
  export type RoomImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomImages.
     */
    data: XOR<RoomImagesUpdateManyMutationInput, RoomImagesUncheckedUpdateManyInput>
    /**
     * Filter which RoomImages to update
     */
    where?: RoomImagesWhereInput
  }

  /**
   * RoomImages updateManyAndReturn
   */
  export type RoomImagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImages
     */
    select?: RoomImagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImages
     */
    omit?: RoomImagesOmit<ExtArgs> | null
    /**
     * The data used to update RoomImages.
     */
    data: XOR<RoomImagesUpdateManyMutationInput, RoomImagesUncheckedUpdateManyInput>
    /**
     * Filter which RoomImages to update
     */
    where?: RoomImagesWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomImages upsert
   */
  export type RoomImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImages
     */
    select?: RoomImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImages
     */
    omit?: RoomImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomImages to update in case it exists.
     */
    where: RoomImagesWhereUniqueInput
    /**
     * In case the RoomImages found by the `where` argument doesn't exist, create a new RoomImages with this data.
     */
    create: XOR<RoomImagesCreateInput, RoomImagesUncheckedCreateInput>
    /**
     * In case the RoomImages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomImagesUpdateInput, RoomImagesUncheckedUpdateInput>
  }

  /**
   * RoomImages delete
   */
  export type RoomImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImages
     */
    select?: RoomImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImages
     */
    omit?: RoomImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImagesInclude<ExtArgs> | null
    /**
     * Filter which RoomImages to delete.
     */
    where: RoomImagesWhereUniqueInput
  }

  /**
   * RoomImages deleteMany
   */
  export type RoomImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomImages to delete
     */
    where?: RoomImagesWhereInput
  }

  /**
   * RoomImages without action
   */
  export type RoomImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImages
     */
    select?: RoomImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImages
     */
    omit?: RoomImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImagesInclude<ExtArgs> | null
  }


  /**
   * Model Unavailable
   */

  export type AggregateUnavailable = {
    _count: UnavailableCountAggregateOutputType | null
    _avg: UnavailableAvgAggregateOutputType | null
    _sum: UnavailableSumAggregateOutputType | null
    _min: UnavailableMinAggregateOutputType | null
    _max: UnavailableMaxAggregateOutputType | null
  }

  export type UnavailableAvgAggregateOutputType = {
    id: number | null
    room_types_id: number | null
  }

  export type UnavailableSumAggregateOutputType = {
    id: number | null
    room_types_id: number | null
  }

  export type UnavailableMinAggregateOutputType = {
    id: number | null
    start_date: Date | null
    end_date: Date | null
    room_types_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnavailableMaxAggregateOutputType = {
    id: number | null
    start_date: Date | null
    end_date: Date | null
    room_types_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnavailableCountAggregateOutputType = {
    id: number
    start_date: number
    end_date: number
    room_types_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UnavailableAvgAggregateInputType = {
    id?: true
    room_types_id?: true
  }

  export type UnavailableSumAggregateInputType = {
    id?: true
    room_types_id?: true
  }

  export type UnavailableMinAggregateInputType = {
    id?: true
    start_date?: true
    end_date?: true
    room_types_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnavailableMaxAggregateInputType = {
    id?: true
    start_date?: true
    end_date?: true
    room_types_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnavailableCountAggregateInputType = {
    id?: true
    start_date?: true
    end_date?: true
    room_types_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UnavailableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unavailable to aggregate.
     */
    where?: UnavailableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unavailables to fetch.
     */
    orderBy?: UnavailableOrderByWithRelationInput | UnavailableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnavailableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unavailables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unavailables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Unavailables
    **/
    _count?: true | UnavailableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnavailableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnavailableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnavailableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnavailableMaxAggregateInputType
  }

  export type GetUnavailableAggregateType<T extends UnavailableAggregateArgs> = {
        [P in keyof T & keyof AggregateUnavailable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnavailable[P]>
      : GetScalarType<T[P], AggregateUnavailable[P]>
  }




  export type UnavailableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnavailableWhereInput
    orderBy?: UnavailableOrderByWithAggregationInput | UnavailableOrderByWithAggregationInput[]
    by: UnavailableScalarFieldEnum[] | UnavailableScalarFieldEnum
    having?: UnavailableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnavailableCountAggregateInputType | true
    _avg?: UnavailableAvgAggregateInputType
    _sum?: UnavailableSumAggregateInputType
    _min?: UnavailableMinAggregateInputType
    _max?: UnavailableMaxAggregateInputType
  }

  export type UnavailableGroupByOutputType = {
    id: number
    start_date: Date
    end_date: Date
    room_types_id: number
    createdAt: Date
    updatedAt: Date
    _count: UnavailableCountAggregateOutputType | null
    _avg: UnavailableAvgAggregateOutputType | null
    _sum: UnavailableSumAggregateOutputType | null
    _min: UnavailableMinAggregateOutputType | null
    _max: UnavailableMaxAggregateOutputType | null
  }

  type GetUnavailableGroupByPayload<T extends UnavailableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnavailableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnavailableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnavailableGroupByOutputType[P]>
            : GetScalarType<T[P], UnavailableGroupByOutputType[P]>
        }
      >
    >


  export type UnavailableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start_date?: boolean
    end_date?: boolean
    room_types_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room_types?: boolean | RoomTypesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unavailable"]>

  export type UnavailableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start_date?: boolean
    end_date?: boolean
    room_types_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room_types?: boolean | RoomTypesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unavailable"]>

  export type UnavailableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start_date?: boolean
    end_date?: boolean
    room_types_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room_types?: boolean | RoomTypesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unavailable"]>

  export type UnavailableSelectScalar = {
    id?: boolean
    start_date?: boolean
    end_date?: boolean
    room_types_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UnavailableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "start_date" | "end_date" | "room_types_id" | "createdAt" | "updatedAt", ExtArgs["result"]["unavailable"]>
  export type UnavailableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room_types?: boolean | RoomTypesDefaultArgs<ExtArgs>
  }
  export type UnavailableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room_types?: boolean | RoomTypesDefaultArgs<ExtArgs>
  }
  export type UnavailableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room_types?: boolean | RoomTypesDefaultArgs<ExtArgs>
  }

  export type $UnavailablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unavailable"
    objects: {
      room_types: Prisma.$RoomTypesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      start_date: Date
      end_date: Date
      room_types_id: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["unavailable"]>
    composites: {}
  }

  type UnavailableGetPayload<S extends boolean | null | undefined | UnavailableDefaultArgs> = $Result.GetResult<Prisma.$UnavailablePayload, S>

  type UnavailableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnavailableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnavailableCountAggregateInputType | true
    }

  export interface UnavailableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unavailable'], meta: { name: 'Unavailable' } }
    /**
     * Find zero or one Unavailable that matches the filter.
     * @param {UnavailableFindUniqueArgs} args - Arguments to find a Unavailable
     * @example
     * // Get one Unavailable
     * const unavailable = await prisma.unavailable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnavailableFindUniqueArgs>(args: SelectSubset<T, UnavailableFindUniqueArgs<ExtArgs>>): Prisma__UnavailableClient<$Result.GetResult<Prisma.$UnavailablePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Unavailable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnavailableFindUniqueOrThrowArgs} args - Arguments to find a Unavailable
     * @example
     * // Get one Unavailable
     * const unavailable = await prisma.unavailable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnavailableFindUniqueOrThrowArgs>(args: SelectSubset<T, UnavailableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnavailableClient<$Result.GetResult<Prisma.$UnavailablePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Unavailable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailableFindFirstArgs} args - Arguments to find a Unavailable
     * @example
     * // Get one Unavailable
     * const unavailable = await prisma.unavailable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnavailableFindFirstArgs>(args?: SelectSubset<T, UnavailableFindFirstArgs<ExtArgs>>): Prisma__UnavailableClient<$Result.GetResult<Prisma.$UnavailablePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Unavailable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailableFindFirstOrThrowArgs} args - Arguments to find a Unavailable
     * @example
     * // Get one Unavailable
     * const unavailable = await prisma.unavailable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnavailableFindFirstOrThrowArgs>(args?: SelectSubset<T, UnavailableFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnavailableClient<$Result.GetResult<Prisma.$UnavailablePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Unavailables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Unavailables
     * const unavailables = await prisma.unavailable.findMany()
     * 
     * // Get first 10 Unavailables
     * const unavailables = await prisma.unavailable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unavailableWithIdOnly = await prisma.unavailable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnavailableFindManyArgs>(args?: SelectSubset<T, UnavailableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnavailablePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Unavailable.
     * @param {UnavailableCreateArgs} args - Arguments to create a Unavailable.
     * @example
     * // Create one Unavailable
     * const Unavailable = await prisma.unavailable.create({
     *   data: {
     *     // ... data to create a Unavailable
     *   }
     * })
     * 
     */
    create<T extends UnavailableCreateArgs>(args: SelectSubset<T, UnavailableCreateArgs<ExtArgs>>): Prisma__UnavailableClient<$Result.GetResult<Prisma.$UnavailablePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Unavailables.
     * @param {UnavailableCreateManyArgs} args - Arguments to create many Unavailables.
     * @example
     * // Create many Unavailables
     * const unavailable = await prisma.unavailable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnavailableCreateManyArgs>(args?: SelectSubset<T, UnavailableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Unavailables and returns the data saved in the database.
     * @param {UnavailableCreateManyAndReturnArgs} args - Arguments to create many Unavailables.
     * @example
     * // Create many Unavailables
     * const unavailable = await prisma.unavailable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Unavailables and only return the `id`
     * const unavailableWithIdOnly = await prisma.unavailable.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnavailableCreateManyAndReturnArgs>(args?: SelectSubset<T, UnavailableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnavailablePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Unavailable.
     * @param {UnavailableDeleteArgs} args - Arguments to delete one Unavailable.
     * @example
     * // Delete one Unavailable
     * const Unavailable = await prisma.unavailable.delete({
     *   where: {
     *     // ... filter to delete one Unavailable
     *   }
     * })
     * 
     */
    delete<T extends UnavailableDeleteArgs>(args: SelectSubset<T, UnavailableDeleteArgs<ExtArgs>>): Prisma__UnavailableClient<$Result.GetResult<Prisma.$UnavailablePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Unavailable.
     * @param {UnavailableUpdateArgs} args - Arguments to update one Unavailable.
     * @example
     * // Update one Unavailable
     * const unavailable = await prisma.unavailable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnavailableUpdateArgs>(args: SelectSubset<T, UnavailableUpdateArgs<ExtArgs>>): Prisma__UnavailableClient<$Result.GetResult<Prisma.$UnavailablePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Unavailables.
     * @param {UnavailableDeleteManyArgs} args - Arguments to filter Unavailables to delete.
     * @example
     * // Delete a few Unavailables
     * const { count } = await prisma.unavailable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnavailableDeleteManyArgs>(args?: SelectSubset<T, UnavailableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Unavailables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Unavailables
     * const unavailable = await prisma.unavailable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnavailableUpdateManyArgs>(args: SelectSubset<T, UnavailableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Unavailables and returns the data updated in the database.
     * @param {UnavailableUpdateManyAndReturnArgs} args - Arguments to update many Unavailables.
     * @example
     * // Update many Unavailables
     * const unavailable = await prisma.unavailable.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Unavailables and only return the `id`
     * const unavailableWithIdOnly = await prisma.unavailable.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UnavailableUpdateManyAndReturnArgs>(args: SelectSubset<T, UnavailableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnavailablePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Unavailable.
     * @param {UnavailableUpsertArgs} args - Arguments to update or create a Unavailable.
     * @example
     * // Update or create a Unavailable
     * const unavailable = await prisma.unavailable.upsert({
     *   create: {
     *     // ... data to create a Unavailable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unavailable we want to update
     *   }
     * })
     */
    upsert<T extends UnavailableUpsertArgs>(args: SelectSubset<T, UnavailableUpsertArgs<ExtArgs>>): Prisma__UnavailableClient<$Result.GetResult<Prisma.$UnavailablePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Unavailables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailableCountArgs} args - Arguments to filter Unavailables to count.
     * @example
     * // Count the number of Unavailables
     * const count = await prisma.unavailable.count({
     *   where: {
     *     // ... the filter for the Unavailables we want to count
     *   }
     * })
    **/
    count<T extends UnavailableCountArgs>(
      args?: Subset<T, UnavailableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnavailableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unavailable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnavailableAggregateArgs>(args: Subset<T, UnavailableAggregateArgs>): Prisma.PrismaPromise<GetUnavailableAggregateType<T>>

    /**
     * Group by Unavailable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnavailableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UnavailableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnavailableGroupByArgs['orderBy'] }
        : { orderBy?: UnavailableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UnavailableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnavailableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unavailable model
   */
  readonly fields: UnavailableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unavailable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnavailableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room_types<T extends RoomTypesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomTypesDefaultArgs<ExtArgs>>): Prisma__RoomTypesClient<$Result.GetResult<Prisma.$RoomTypesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Unavailable model
   */ 
  interface UnavailableFieldRefs {
    readonly id: FieldRef<"Unavailable", 'Int'>
    readonly start_date: FieldRef<"Unavailable", 'DateTime'>
    readonly end_date: FieldRef<"Unavailable", 'DateTime'>
    readonly room_types_id: FieldRef<"Unavailable", 'Int'>
    readonly createdAt: FieldRef<"Unavailable", 'DateTime'>
    readonly updatedAt: FieldRef<"Unavailable", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Unavailable findUnique
   */
  export type UnavailableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailable
     */
    select?: UnavailableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailable
     */
    omit?: UnavailableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailableInclude<ExtArgs> | null
    /**
     * Filter, which Unavailable to fetch.
     */
    where: UnavailableWhereUniqueInput
  }

  /**
   * Unavailable findUniqueOrThrow
   */
  export type UnavailableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailable
     */
    select?: UnavailableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailable
     */
    omit?: UnavailableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailableInclude<ExtArgs> | null
    /**
     * Filter, which Unavailable to fetch.
     */
    where: UnavailableWhereUniqueInput
  }

  /**
   * Unavailable findFirst
   */
  export type UnavailableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailable
     */
    select?: UnavailableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailable
     */
    omit?: UnavailableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailableInclude<ExtArgs> | null
    /**
     * Filter, which Unavailable to fetch.
     */
    where?: UnavailableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unavailables to fetch.
     */
    orderBy?: UnavailableOrderByWithRelationInput | UnavailableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Unavailables.
     */
    cursor?: UnavailableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unavailables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unavailables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Unavailables.
     */
    distinct?: UnavailableScalarFieldEnum | UnavailableScalarFieldEnum[]
  }

  /**
   * Unavailable findFirstOrThrow
   */
  export type UnavailableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailable
     */
    select?: UnavailableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailable
     */
    omit?: UnavailableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailableInclude<ExtArgs> | null
    /**
     * Filter, which Unavailable to fetch.
     */
    where?: UnavailableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unavailables to fetch.
     */
    orderBy?: UnavailableOrderByWithRelationInput | UnavailableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Unavailables.
     */
    cursor?: UnavailableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unavailables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unavailables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Unavailables.
     */
    distinct?: UnavailableScalarFieldEnum | UnavailableScalarFieldEnum[]
  }

  /**
   * Unavailable findMany
   */
  export type UnavailableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailable
     */
    select?: UnavailableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailable
     */
    omit?: UnavailableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailableInclude<ExtArgs> | null
    /**
     * Filter, which Unavailables to fetch.
     */
    where?: UnavailableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unavailables to fetch.
     */
    orderBy?: UnavailableOrderByWithRelationInput | UnavailableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Unavailables.
     */
    cursor?: UnavailableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unavailables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unavailables.
     */
    skip?: number
    distinct?: UnavailableScalarFieldEnum | UnavailableScalarFieldEnum[]
  }

  /**
   * Unavailable create
   */
  export type UnavailableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailable
     */
    select?: UnavailableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailable
     */
    omit?: UnavailableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailableInclude<ExtArgs> | null
    /**
     * The data needed to create a Unavailable.
     */
    data: XOR<UnavailableCreateInput, UnavailableUncheckedCreateInput>
  }

  /**
   * Unavailable createMany
   */
  export type UnavailableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Unavailables.
     */
    data: UnavailableCreateManyInput | UnavailableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Unavailable createManyAndReturn
   */
  export type UnavailableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailable
     */
    select?: UnavailableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailable
     */
    omit?: UnavailableOmit<ExtArgs> | null
    /**
     * The data used to create many Unavailables.
     */
    data: UnavailableCreateManyInput | UnavailableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Unavailable update
   */
  export type UnavailableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailable
     */
    select?: UnavailableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailable
     */
    omit?: UnavailableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailableInclude<ExtArgs> | null
    /**
     * The data needed to update a Unavailable.
     */
    data: XOR<UnavailableUpdateInput, UnavailableUncheckedUpdateInput>
    /**
     * Choose, which Unavailable to update.
     */
    where: UnavailableWhereUniqueInput
  }

  /**
   * Unavailable updateMany
   */
  export type UnavailableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Unavailables.
     */
    data: XOR<UnavailableUpdateManyMutationInput, UnavailableUncheckedUpdateManyInput>
    /**
     * Filter which Unavailables to update
     */
    where?: UnavailableWhereInput
  }

  /**
   * Unavailable updateManyAndReturn
   */
  export type UnavailableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailable
     */
    select?: UnavailableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailable
     */
    omit?: UnavailableOmit<ExtArgs> | null
    /**
     * The data used to update Unavailables.
     */
    data: XOR<UnavailableUpdateManyMutationInput, UnavailableUncheckedUpdateManyInput>
    /**
     * Filter which Unavailables to update
     */
    where?: UnavailableWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Unavailable upsert
   */
  export type UnavailableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailable
     */
    select?: UnavailableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailable
     */
    omit?: UnavailableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailableInclude<ExtArgs> | null
    /**
     * The filter to search for the Unavailable to update in case it exists.
     */
    where: UnavailableWhereUniqueInput
    /**
     * In case the Unavailable found by the `where` argument doesn't exist, create a new Unavailable with this data.
     */
    create: XOR<UnavailableCreateInput, UnavailableUncheckedCreateInput>
    /**
     * In case the Unavailable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnavailableUpdateInput, UnavailableUncheckedUpdateInput>
  }

  /**
   * Unavailable delete
   */
  export type UnavailableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailable
     */
    select?: UnavailableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailable
     */
    omit?: UnavailableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailableInclude<ExtArgs> | null
    /**
     * Filter which Unavailable to delete.
     */
    where: UnavailableWhereUniqueInput
  }

  /**
   * Unavailable deleteMany
   */
  export type UnavailableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unavailables to delete
     */
    where?: UnavailableWhereInput
  }

  /**
   * Unavailable without action
   */
  export type UnavailableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unavailable
     */
    select?: UnavailableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unavailable
     */
    omit?: UnavailableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnavailableInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    num_of_guests: number | null
    total_price: number | null
    room_types_id: number | null
  }

  export type BookingSumAggregateOutputType = {
    num_of_guests: number | null
    total_price: number | null
    room_types_id: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    num_of_guests: number | null
    total_price: number | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
    updated_at: Date | null
    payment_proof: string | null
    payment_method: $Enums.PaymentMethod | null
    status: $Enums.BookingStatus | null
    user_id: string | null
    room_types_id: number | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    num_of_guests: number | null
    total_price: number | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
    updated_at: Date | null
    payment_proof: string | null
    payment_method: $Enums.PaymentMethod | null
    status: $Enums.BookingStatus | null
    user_id: string | null
    room_types_id: number | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    num_of_guests: number
    total_price: number
    details: number
    start_date: number
    end_date: number
    created_at: number
    updated_at: number
    payment_proof: number
    payment_method: number
    status: number
    user_id: number
    room_types_id: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    num_of_guests?: true
    total_price?: true
    room_types_id?: true
  }

  export type BookingSumAggregateInputType = {
    num_of_guests?: true
    total_price?: true
    room_types_id?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    num_of_guests?: true
    total_price?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
    payment_proof?: true
    payment_method?: true
    status?: true
    user_id?: true
    room_types_id?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    num_of_guests?: true
    total_price?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
    payment_proof?: true
    payment_method?: true
    status?: true
    user_id?: true
    room_types_id?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    num_of_guests?: true
    total_price?: true
    details?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
    payment_proof?: true
    payment_method?: true
    status?: true
    user_id?: true
    room_types_id?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    num_of_guests: number
    total_price: number
    details: JsonValue | null
    start_date: Date
    end_date: Date
    created_at: Date
    updated_at: Date
    payment_proof: string | null
    payment_method: $Enums.PaymentMethod | null
    status: $Enums.BookingStatus
    user_id: string
    room_types_id: number
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    num_of_guests?: boolean
    total_price?: boolean
    details?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    payment_proof?: boolean
    payment_method?: boolean
    status?: boolean
    user_id?: boolean
    room_types_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room_types?: boolean | RoomTypesDefaultArgs<ExtArgs>
    Review?: boolean | Booking$ReviewArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    num_of_guests?: boolean
    total_price?: boolean
    details?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    payment_proof?: boolean
    payment_method?: boolean
    status?: boolean
    user_id?: boolean
    room_types_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room_types?: boolean | RoomTypesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    num_of_guests?: boolean
    total_price?: boolean
    details?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    payment_proof?: boolean
    payment_method?: boolean
    status?: boolean
    user_id?: boolean
    room_types_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room_types?: boolean | RoomTypesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    num_of_guests?: boolean
    total_price?: boolean
    details?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    payment_proof?: boolean
    payment_method?: boolean
    status?: boolean
    user_id?: boolean
    room_types_id?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "num_of_guests" | "total_price" | "details" | "start_date" | "end_date" | "created_at" | "updated_at" | "payment_proof" | "payment_method" | "status" | "user_id" | "room_types_id", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room_types?: boolean | RoomTypesDefaultArgs<ExtArgs>
    Review?: boolean | Booking$ReviewArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room_types?: boolean | RoomTypesDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room_types?: boolean | RoomTypesDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      room_types: Prisma.$RoomTypesPayload<ExtArgs>
      Review: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      num_of_guests: number
      total_price: number
      details: Prisma.JsonValue | null
      start_date: Date
      end_date: Date
      created_at: Date
      updated_at: Date
      payment_proof: string | null
      payment_method: $Enums.PaymentMethod | null
      status: $Enums.BookingStatus
      user_id: string
      room_types_id: number
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    room_types<T extends RoomTypesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomTypesDefaultArgs<ExtArgs>>): Prisma__RoomTypesClient<$Result.GetResult<Prisma.$RoomTypesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    Review<T extends Booking$ReviewArgs<ExtArgs> = {}>(args?: Subset<T, Booking$ReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */ 
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly num_of_guests: FieldRef<"Booking", 'Int'>
    readonly total_price: FieldRef<"Booking", 'Int'>
    readonly details: FieldRef<"Booking", 'Json'>
    readonly start_date: FieldRef<"Booking", 'DateTime'>
    readonly end_date: FieldRef<"Booking", 'DateTime'>
    readonly created_at: FieldRef<"Booking", 'DateTime'>
    readonly updated_at: FieldRef<"Booking", 'DateTime'>
    readonly payment_proof: FieldRef<"Booking", 'String'>
    readonly payment_method: FieldRef<"Booking", 'PaymentMethod'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly user_id: FieldRef<"Booking", 'String'>
    readonly room_types_id: FieldRef<"Booking", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
  }

  /**
   * Booking.Review
   */
  export type Booking$ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    room_types_id: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    rating: number | null
    room_types_id: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    rating: number | null
    review: string | null
    user_id: string | null
    room_types_id: number | null
    booking_id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    rating: number | null
    review: string | null
    user_id: string | null
    room_types_id: number | null
    booking_id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    rating: number
    review: number
    user_id: number
    room_types_id: number
    booking_id: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    rating?: true
    room_types_id?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    rating?: true
    room_types_id?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    rating?: true
    review?: true
    user_id?: true
    room_types_id?: true
    booking_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    review?: true
    user_id?: true
    room_types_id?: true
    booking_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    rating?: true
    review?: true
    user_id?: true
    room_types_id?: true
    booking_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    rating: number
    review: string
    user_id: string
    room_types_id: number
    booking_id: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    review?: boolean
    user_id?: boolean
    room_types_id?: boolean
    booking_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room_types?: boolean | RoomTypesDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    ReviewReplies?: boolean | Review$ReviewRepliesArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    review?: boolean
    user_id?: boolean
    room_types_id?: boolean
    booking_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room_types?: boolean | RoomTypesDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    review?: boolean
    user_id?: boolean
    room_types_id?: boolean
    booking_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room_types?: boolean | RoomTypesDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    rating?: boolean
    review?: boolean
    user_id?: boolean
    room_types_id?: boolean
    booking_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "review" | "user_id" | "room_types_id" | "booking_id" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room_types?: boolean | RoomTypesDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    ReviewReplies?: boolean | Review$ReviewRepliesArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room_types?: boolean | RoomTypesDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room_types?: boolean | RoomTypesDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      room_types: Prisma.$RoomTypesPayload<ExtArgs>
      booking: Prisma.$BookingPayload<ExtArgs>
      ReviewReplies: Prisma.$ReviewRepliesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rating: number
      review: string
      user_id: string
      room_types_id: number
      booking_id: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    room_types<T extends RoomTypesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomTypesDefaultArgs<ExtArgs>>): Prisma__RoomTypesClient<$Result.GetResult<Prisma.$RoomTypesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    ReviewReplies<T extends Review$ReviewRepliesArgs<ExtArgs> = {}>(args?: Subset<T, Review$ReviewRepliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewRepliesPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */ 
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly review: FieldRef<"Review", 'String'>
    readonly user_id: FieldRef<"Review", 'String'>
    readonly room_types_id: FieldRef<"Review", 'Int'>
    readonly booking_id: FieldRef<"Review", 'String'>
    readonly created_at: FieldRef<"Review", 'DateTime'>
    readonly updated_at: FieldRef<"Review", 'DateTime'>
    readonly deleted_at: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
  }

  /**
   * Review.ReviewReplies
   */
  export type Review$ReviewRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewReplies
     */
    select?: ReviewRepliesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewReplies
     */
    omit?: ReviewRepliesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRepliesInclude<ExtArgs> | null
    where?: ReviewRepliesWhereInput
    orderBy?: ReviewRepliesOrderByWithRelationInput | ReviewRepliesOrderByWithRelationInput[]
    cursor?: ReviewRepliesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewRepliesScalarFieldEnum | ReviewRepliesScalarFieldEnum[]
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model ReviewReplies
   */

  export type AggregateReviewReplies = {
    _count: ReviewRepliesCountAggregateOutputType | null
    _avg: ReviewRepliesAvgAggregateOutputType | null
    _sum: ReviewRepliesSumAggregateOutputType | null
    _min: ReviewRepliesMinAggregateOutputType | null
    _max: ReviewRepliesMaxAggregateOutputType | null
  }

  export type ReviewRepliesAvgAggregateOutputType = {
    id: number | null
    review_id: number | null
  }

  export type ReviewRepliesSumAggregateOutputType = {
    id: number | null
    review_id: number | null
  }

  export type ReviewRepliesMinAggregateOutputType = {
    id: number | null
    tenant_id: string | null
    review_id: number | null
    reply: string | null
  }

  export type ReviewRepliesMaxAggregateOutputType = {
    id: number | null
    tenant_id: string | null
    review_id: number | null
    reply: string | null
  }

  export type ReviewRepliesCountAggregateOutputType = {
    id: number
    tenant_id: number
    review_id: number
    reply: number
    _all: number
  }


  export type ReviewRepliesAvgAggregateInputType = {
    id?: true
    review_id?: true
  }

  export type ReviewRepliesSumAggregateInputType = {
    id?: true
    review_id?: true
  }

  export type ReviewRepliesMinAggregateInputType = {
    id?: true
    tenant_id?: true
    review_id?: true
    reply?: true
  }

  export type ReviewRepliesMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    review_id?: true
    reply?: true
  }

  export type ReviewRepliesCountAggregateInputType = {
    id?: true
    tenant_id?: true
    review_id?: true
    reply?: true
    _all?: true
  }

  export type ReviewRepliesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewReplies to aggregate.
     */
    where?: ReviewRepliesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewReplies to fetch.
     */
    orderBy?: ReviewRepliesOrderByWithRelationInput | ReviewRepliesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewRepliesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewReplies
    **/
    _count?: true | ReviewRepliesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewRepliesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewRepliesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewRepliesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewRepliesMaxAggregateInputType
  }

  export type GetReviewRepliesAggregateType<T extends ReviewRepliesAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewReplies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewReplies[P]>
      : GetScalarType<T[P], AggregateReviewReplies[P]>
  }




  export type ReviewRepliesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewRepliesWhereInput
    orderBy?: ReviewRepliesOrderByWithAggregationInput | ReviewRepliesOrderByWithAggregationInput[]
    by: ReviewRepliesScalarFieldEnum[] | ReviewRepliesScalarFieldEnum
    having?: ReviewRepliesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewRepliesCountAggregateInputType | true
    _avg?: ReviewRepliesAvgAggregateInputType
    _sum?: ReviewRepliesSumAggregateInputType
    _min?: ReviewRepliesMinAggregateInputType
    _max?: ReviewRepliesMaxAggregateInputType
  }

  export type ReviewRepliesGroupByOutputType = {
    id: number
    tenant_id: string
    review_id: number
    reply: string
    _count: ReviewRepliesCountAggregateOutputType | null
    _avg: ReviewRepliesAvgAggregateOutputType | null
    _sum: ReviewRepliesSumAggregateOutputType | null
    _min: ReviewRepliesMinAggregateOutputType | null
    _max: ReviewRepliesMaxAggregateOutputType | null
  }

  type GetReviewRepliesGroupByPayload<T extends ReviewRepliesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewRepliesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewRepliesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewRepliesGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewRepliesGroupByOutputType[P]>
        }
      >
    >


  export type ReviewRepliesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    review_id?: boolean
    reply?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewReplies"]>

  export type ReviewRepliesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    review_id?: boolean
    reply?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewReplies"]>

  export type ReviewRepliesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    review_id?: boolean
    reply?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewReplies"]>

  export type ReviewRepliesSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    review_id?: boolean
    reply?: boolean
  }

  export type ReviewRepliesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "review_id" | "reply", ExtArgs["result"]["reviewReplies"]>
  export type ReviewRepliesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type ReviewRepliesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type ReviewRepliesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }

  export type $ReviewRepliesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewReplies"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      review: Prisma.$ReviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tenant_id: string
      review_id: number
      reply: string
    }, ExtArgs["result"]["reviewReplies"]>
    composites: {}
  }

  type ReviewRepliesGetPayload<S extends boolean | null | undefined | ReviewRepliesDefaultArgs> = $Result.GetResult<Prisma.$ReviewRepliesPayload, S>

  type ReviewRepliesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewRepliesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewRepliesCountAggregateInputType | true
    }

  export interface ReviewRepliesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewReplies'], meta: { name: 'ReviewReplies' } }
    /**
     * Find zero or one ReviewReplies that matches the filter.
     * @param {ReviewRepliesFindUniqueArgs} args - Arguments to find a ReviewReplies
     * @example
     * // Get one ReviewReplies
     * const reviewReplies = await prisma.reviewReplies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewRepliesFindUniqueArgs>(args: SelectSubset<T, ReviewRepliesFindUniqueArgs<ExtArgs>>): Prisma__ReviewRepliesClient<$Result.GetResult<Prisma.$ReviewRepliesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ReviewReplies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewRepliesFindUniqueOrThrowArgs} args - Arguments to find a ReviewReplies
     * @example
     * // Get one ReviewReplies
     * const reviewReplies = await prisma.reviewReplies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewRepliesFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewRepliesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewRepliesClient<$Result.GetResult<Prisma.$ReviewRepliesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ReviewReplies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRepliesFindFirstArgs} args - Arguments to find a ReviewReplies
     * @example
     * // Get one ReviewReplies
     * const reviewReplies = await prisma.reviewReplies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewRepliesFindFirstArgs>(args?: SelectSubset<T, ReviewRepliesFindFirstArgs<ExtArgs>>): Prisma__ReviewRepliesClient<$Result.GetResult<Prisma.$ReviewRepliesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ReviewReplies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRepliesFindFirstOrThrowArgs} args - Arguments to find a ReviewReplies
     * @example
     * // Get one ReviewReplies
     * const reviewReplies = await prisma.reviewReplies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewRepliesFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewRepliesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewRepliesClient<$Result.GetResult<Prisma.$ReviewRepliesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ReviewReplies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRepliesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewReplies
     * const reviewReplies = await prisma.reviewReplies.findMany()
     * 
     * // Get first 10 ReviewReplies
     * const reviewReplies = await prisma.reviewReplies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewRepliesWithIdOnly = await prisma.reviewReplies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewRepliesFindManyArgs>(args?: SelectSubset<T, ReviewRepliesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewRepliesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ReviewReplies.
     * @param {ReviewRepliesCreateArgs} args - Arguments to create a ReviewReplies.
     * @example
     * // Create one ReviewReplies
     * const ReviewReplies = await prisma.reviewReplies.create({
     *   data: {
     *     // ... data to create a ReviewReplies
     *   }
     * })
     * 
     */
    create<T extends ReviewRepliesCreateArgs>(args: SelectSubset<T, ReviewRepliesCreateArgs<ExtArgs>>): Prisma__ReviewRepliesClient<$Result.GetResult<Prisma.$ReviewRepliesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ReviewReplies.
     * @param {ReviewRepliesCreateManyArgs} args - Arguments to create many ReviewReplies.
     * @example
     * // Create many ReviewReplies
     * const reviewReplies = await prisma.reviewReplies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewRepliesCreateManyArgs>(args?: SelectSubset<T, ReviewRepliesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReviewReplies and returns the data saved in the database.
     * @param {ReviewRepliesCreateManyAndReturnArgs} args - Arguments to create many ReviewReplies.
     * @example
     * // Create many ReviewReplies
     * const reviewReplies = await prisma.reviewReplies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReviewReplies and only return the `id`
     * const reviewRepliesWithIdOnly = await prisma.reviewReplies.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewRepliesCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewRepliesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewRepliesPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ReviewReplies.
     * @param {ReviewRepliesDeleteArgs} args - Arguments to delete one ReviewReplies.
     * @example
     * // Delete one ReviewReplies
     * const ReviewReplies = await prisma.reviewReplies.delete({
     *   where: {
     *     // ... filter to delete one ReviewReplies
     *   }
     * })
     * 
     */
    delete<T extends ReviewRepliesDeleteArgs>(args: SelectSubset<T, ReviewRepliesDeleteArgs<ExtArgs>>): Prisma__ReviewRepliesClient<$Result.GetResult<Prisma.$ReviewRepliesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ReviewReplies.
     * @param {ReviewRepliesUpdateArgs} args - Arguments to update one ReviewReplies.
     * @example
     * // Update one ReviewReplies
     * const reviewReplies = await prisma.reviewReplies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewRepliesUpdateArgs>(args: SelectSubset<T, ReviewRepliesUpdateArgs<ExtArgs>>): Prisma__ReviewRepliesClient<$Result.GetResult<Prisma.$ReviewRepliesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ReviewReplies.
     * @param {ReviewRepliesDeleteManyArgs} args - Arguments to filter ReviewReplies to delete.
     * @example
     * // Delete a few ReviewReplies
     * const { count } = await prisma.reviewReplies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewRepliesDeleteManyArgs>(args?: SelectSubset<T, ReviewRepliesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRepliesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewReplies
     * const reviewReplies = await prisma.reviewReplies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewRepliesUpdateManyArgs>(args: SelectSubset<T, ReviewRepliesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewReplies and returns the data updated in the database.
     * @param {ReviewRepliesUpdateManyAndReturnArgs} args - Arguments to update many ReviewReplies.
     * @example
     * // Update many ReviewReplies
     * const reviewReplies = await prisma.reviewReplies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReviewReplies and only return the `id`
     * const reviewRepliesWithIdOnly = await prisma.reviewReplies.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewRepliesUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewRepliesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewRepliesPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ReviewReplies.
     * @param {ReviewRepliesUpsertArgs} args - Arguments to update or create a ReviewReplies.
     * @example
     * // Update or create a ReviewReplies
     * const reviewReplies = await prisma.reviewReplies.upsert({
     *   create: {
     *     // ... data to create a ReviewReplies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewReplies we want to update
     *   }
     * })
     */
    upsert<T extends ReviewRepliesUpsertArgs>(args: SelectSubset<T, ReviewRepliesUpsertArgs<ExtArgs>>): Prisma__ReviewRepliesClient<$Result.GetResult<Prisma.$ReviewRepliesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ReviewReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRepliesCountArgs} args - Arguments to filter ReviewReplies to count.
     * @example
     * // Count the number of ReviewReplies
     * const count = await prisma.reviewReplies.count({
     *   where: {
     *     // ... the filter for the ReviewReplies we want to count
     *   }
     * })
    **/
    count<T extends ReviewRepliesCountArgs>(
      args?: Subset<T, ReviewRepliesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewRepliesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRepliesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewRepliesAggregateArgs>(args: Subset<T, ReviewRepliesAggregateArgs>): Prisma.PrismaPromise<GetReviewRepliesAggregateType<T>>

    /**
     * Group by ReviewReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRepliesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewRepliesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewRepliesGroupByArgs['orderBy'] }
        : { orderBy?: ReviewRepliesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewRepliesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewRepliesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewReplies model
   */
  readonly fields: ReviewRepliesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewReplies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewRepliesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    review<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReviewReplies model
   */ 
  interface ReviewRepliesFieldRefs {
    readonly id: FieldRef<"ReviewReplies", 'Int'>
    readonly tenant_id: FieldRef<"ReviewReplies", 'String'>
    readonly review_id: FieldRef<"ReviewReplies", 'Int'>
    readonly reply: FieldRef<"ReviewReplies", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ReviewReplies findUnique
   */
  export type ReviewRepliesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewReplies
     */
    select?: ReviewRepliesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewReplies
     */
    omit?: ReviewRepliesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRepliesInclude<ExtArgs> | null
    /**
     * Filter, which ReviewReplies to fetch.
     */
    where: ReviewRepliesWhereUniqueInput
  }

  /**
   * ReviewReplies findUniqueOrThrow
   */
  export type ReviewRepliesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewReplies
     */
    select?: ReviewRepliesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewReplies
     */
    omit?: ReviewRepliesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRepliesInclude<ExtArgs> | null
    /**
     * Filter, which ReviewReplies to fetch.
     */
    where: ReviewRepliesWhereUniqueInput
  }

  /**
   * ReviewReplies findFirst
   */
  export type ReviewRepliesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewReplies
     */
    select?: ReviewRepliesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewReplies
     */
    omit?: ReviewRepliesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRepliesInclude<ExtArgs> | null
    /**
     * Filter, which ReviewReplies to fetch.
     */
    where?: ReviewRepliesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewReplies to fetch.
     */
    orderBy?: ReviewRepliesOrderByWithRelationInput | ReviewRepliesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewReplies.
     */
    cursor?: ReviewRepliesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewReplies.
     */
    distinct?: ReviewRepliesScalarFieldEnum | ReviewRepliesScalarFieldEnum[]
  }

  /**
   * ReviewReplies findFirstOrThrow
   */
  export type ReviewRepliesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewReplies
     */
    select?: ReviewRepliesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewReplies
     */
    omit?: ReviewRepliesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRepliesInclude<ExtArgs> | null
    /**
     * Filter, which ReviewReplies to fetch.
     */
    where?: ReviewRepliesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewReplies to fetch.
     */
    orderBy?: ReviewRepliesOrderByWithRelationInput | ReviewRepliesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewReplies.
     */
    cursor?: ReviewRepliesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewReplies.
     */
    distinct?: ReviewRepliesScalarFieldEnum | ReviewRepliesScalarFieldEnum[]
  }

  /**
   * ReviewReplies findMany
   */
  export type ReviewRepliesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewReplies
     */
    select?: ReviewRepliesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewReplies
     */
    omit?: ReviewRepliesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRepliesInclude<ExtArgs> | null
    /**
     * Filter, which ReviewReplies to fetch.
     */
    where?: ReviewRepliesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewReplies to fetch.
     */
    orderBy?: ReviewRepliesOrderByWithRelationInput | ReviewRepliesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewReplies.
     */
    cursor?: ReviewRepliesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewReplies.
     */
    skip?: number
    distinct?: ReviewRepliesScalarFieldEnum | ReviewRepliesScalarFieldEnum[]
  }

  /**
   * ReviewReplies create
   */
  export type ReviewRepliesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewReplies
     */
    select?: ReviewRepliesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewReplies
     */
    omit?: ReviewRepliesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRepliesInclude<ExtArgs> | null
    /**
     * The data needed to create a ReviewReplies.
     */
    data: XOR<ReviewRepliesCreateInput, ReviewRepliesUncheckedCreateInput>
  }

  /**
   * ReviewReplies createMany
   */
  export type ReviewRepliesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewReplies.
     */
    data: ReviewRepliesCreateManyInput | ReviewRepliesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewReplies createManyAndReturn
   */
  export type ReviewRepliesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewReplies
     */
    select?: ReviewRepliesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewReplies
     */
    omit?: ReviewRepliesOmit<ExtArgs> | null
    /**
     * The data used to create many ReviewReplies.
     */
    data: ReviewRepliesCreateManyInput | ReviewRepliesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRepliesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewReplies update
   */
  export type ReviewRepliesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewReplies
     */
    select?: ReviewRepliesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewReplies
     */
    omit?: ReviewRepliesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRepliesInclude<ExtArgs> | null
    /**
     * The data needed to update a ReviewReplies.
     */
    data: XOR<ReviewRepliesUpdateInput, ReviewRepliesUncheckedUpdateInput>
    /**
     * Choose, which ReviewReplies to update.
     */
    where: ReviewRepliesWhereUniqueInput
  }

  /**
   * ReviewReplies updateMany
   */
  export type ReviewRepliesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewReplies.
     */
    data: XOR<ReviewRepliesUpdateManyMutationInput, ReviewRepliesUncheckedUpdateManyInput>
    /**
     * Filter which ReviewReplies to update
     */
    where?: ReviewRepliesWhereInput
  }

  /**
   * ReviewReplies updateManyAndReturn
   */
  export type ReviewRepliesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewReplies
     */
    select?: ReviewRepliesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewReplies
     */
    omit?: ReviewRepliesOmit<ExtArgs> | null
    /**
     * The data used to update ReviewReplies.
     */
    data: XOR<ReviewRepliesUpdateManyMutationInput, ReviewRepliesUncheckedUpdateManyInput>
    /**
     * Filter which ReviewReplies to update
     */
    where?: ReviewRepliesWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRepliesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewReplies upsert
   */
  export type ReviewRepliesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewReplies
     */
    select?: ReviewRepliesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewReplies
     */
    omit?: ReviewRepliesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRepliesInclude<ExtArgs> | null
    /**
     * The filter to search for the ReviewReplies to update in case it exists.
     */
    where: ReviewRepliesWhereUniqueInput
    /**
     * In case the ReviewReplies found by the `where` argument doesn't exist, create a new ReviewReplies with this data.
     */
    create: XOR<ReviewRepliesCreateInput, ReviewRepliesUncheckedCreateInput>
    /**
     * In case the ReviewReplies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewRepliesUpdateInput, ReviewRepliesUncheckedUpdateInput>
  }

  /**
   * ReviewReplies delete
   */
  export type ReviewRepliesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewReplies
     */
    select?: ReviewRepliesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewReplies
     */
    omit?: ReviewRepliesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRepliesInclude<ExtArgs> | null
    /**
     * Filter which ReviewReplies to delete.
     */
    where: ReviewRepliesWhereUniqueInput
  }

  /**
   * ReviewReplies deleteMany
   */
  export type ReviewRepliesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewReplies to delete
     */
    where?: ReviewRepliesWhereInput
  }

  /**
   * ReviewReplies without action
   */
  export type ReviewRepliesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewReplies
     */
    select?: ReviewRepliesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewReplies
     */
    omit?: ReviewRepliesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRepliesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password',
    avatar: 'avatar',
    no_handphone: 'no_handphone',
    isVerify: 'isVerify',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    googleId: 'googleId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TenantScalarFieldEnum: {
    id: 'id',
<<<<<<< HEAD
=======
    googleId: 'googleId',
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name: 'name',
    password: 'password',
    no_handphone: 'no_handphone',
    email: 'email',
    avatar: 'avatar',
    isVerify: 'isVerify',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    address: 'address',
    country: 'country',
    city: 'city',
    deletedAt: 'deletedAt',
    longitude: 'longitude',
    latitude: 'latitude'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    desc: 'desc',
    category: 'category',
    terms_condition: 'terms_condition',
<<<<<<< HEAD
    room_available: 'room_available',
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate: 'click_rate',
    location_id: 'location_id',
    tenantId: 'tenantId',
    isAvailable: 'isAvailable'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const PropertyImagesScalarFieldEnum: {
    id: 'id',
    image_url: 'image_url',
    property_id: 'property_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type PropertyImagesScalarFieldEnum = (typeof PropertyImagesScalarFieldEnum)[keyof typeof PropertyImagesScalarFieldEnum]


  export const RoomTypesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    stock: 'stock',
    capacity: 'capacity',
    bed_details: 'bed_details',
    price: 'price',
    has_breakfast: 'has_breakfast',
    breakfast_price: 'breakfast_price',
    avg_rating: 'avg_rating',
    property_id: 'property_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type RoomTypesScalarFieldEnum = (typeof RoomTypesScalarFieldEnum)[keyof typeof RoomTypesScalarFieldEnum]


  export const RoomImagesScalarFieldEnum: {
    id: 'id',
    image_url: 'image_url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    room_types_id: 'room_types_id'
  };

  export type RoomImagesScalarFieldEnum = (typeof RoomImagesScalarFieldEnum)[keyof typeof RoomImagesScalarFieldEnum]


  export const UnavailableScalarFieldEnum: {
    id: 'id',
    start_date: 'start_date',
    end_date: 'end_date',
    room_types_id: 'room_types_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UnavailableScalarFieldEnum = (typeof UnavailableScalarFieldEnum)[keyof typeof UnavailableScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    num_of_guests: 'num_of_guests',
    total_price: 'total_price',
    details: 'details',
    start_date: 'start_date',
    end_date: 'end_date',
    created_at: 'created_at',
    updated_at: 'updated_at',
    payment_proof: 'payment_proof',
    payment_method: 'payment_method',
    status: 'status',
    user_id: 'user_id',
    room_types_id: 'room_types_id'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    review: 'review',
    user_id: 'user_id',
    room_types_id: 'room_types_id',
    booking_id: 'booking_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const ReviewRepliesScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    review_id: 'review_id',
    reply: 'reply'
  };

  export type ReviewRepliesScalarFieldEnum = (typeof ReviewRepliesScalarFieldEnum)[keyof typeof ReviewRepliesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
<<<<<<< HEAD
=======
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    
<<<<<<< HEAD


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    no_handphone?: StringFilter<"User"> | string
    isVerify?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    googleId?: StringNullableFilter<"User"> | string | null
    Booking?: BookingListRelationFilter
    Review?: ReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    no_handphone?: SortOrder
    isVerify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    Booking?: BookingOrderByRelationAggregateInput
    Review?: ReviewOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    no_handphone?: string
    googleId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    isVerify?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    Booking?: BookingListRelationFilter
    Review?: ReviewListRelationFilter
  }, "id" | "email" | "no_handphone" | "googleId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    no_handphone?: SortOrder
    isVerify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    no_handphone?: StringWithAggregatesFilter<"User"> | string
    isVerify?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
<<<<<<< HEAD
=======
    googleId?: StringNullableFilter<"Tenant"> | string | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name?: StringFilter<"Tenant"> | string
    password?: StringNullableFilter<"Tenant"> | string | null
    no_handphone?: StringNullableFilter<"Tenant"> | string | null
    email?: StringFilter<"Tenant"> | string
    avatar?: StringNullableFilter<"Tenant"> | string | null
    isVerify?: BoolFilter<"Tenant"> | boolean
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Tenant"> | Date | string | null
    Property?: PropertyListRelationFilter
    ReviewReplies?: ReviewRepliesListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
<<<<<<< HEAD
=======
    googleId?: SortOrderInput | SortOrder
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name?: SortOrder
    password?: SortOrderInput | SortOrder
    no_handphone?: SortOrderInput | SortOrder
    email?: SortOrder
    avatar?: SortOrderInput | SortOrder
    isVerify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    Property?: PropertyOrderByRelationAggregateInput
    ReviewReplies?: ReviewRepliesOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
<<<<<<< HEAD
    no_handphone?: string
=======
    googleId?: string
    no_handphone?: string
    email?: string
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    name?: StringFilter<"Tenant"> | string
    password?: StringNullableFilter<"Tenant"> | string | null
<<<<<<< HEAD
    email?: StringFilter<"Tenant"> | string
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    avatar?: StringNullableFilter<"Tenant"> | string | null
    isVerify?: BoolFilter<"Tenant"> | boolean
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Tenant"> | Date | string | null
    Property?: PropertyListRelationFilter
    ReviewReplies?: ReviewRepliesListRelationFilter
<<<<<<< HEAD
  }, "id" | "no_handphone">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
=======
  }, "id" | "googleId" | "no_handphone" | "email">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    googleId?: SortOrderInput | SortOrder
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name?: SortOrder
    password?: SortOrderInput | SortOrder
    no_handphone?: SortOrderInput | SortOrder
    email?: SortOrder
    avatar?: SortOrderInput | SortOrder
    isVerify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: TenantCountOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
<<<<<<< HEAD
=======
    googleId?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name?: StringWithAggregatesFilter<"Tenant"> | string
    password?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    no_handphone?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    email?: StringWithAggregatesFilter<"Tenant"> | string
    avatar?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    isVerify?: BoolWithAggregatesFilter<"Tenant"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Tenant"> | Date | string | null
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: IntFilter<"Location"> | number
    address?: StringFilter<"Location"> | string
    country?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    deletedAt?: DateTimeNullableFilter<"Location"> | Date | string | null
<<<<<<< HEAD
    longitude?: StringNullableFilter<"Location"> | string | null
    latitude?: StringNullableFilter<"Location"> | string | null
=======
    longitude?: FloatNullableFilter<"Location"> | number | null
    latitude?: FloatNullableFilter<"Location"> | number | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    Property?: PropertyListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    country?: SortOrder
    city?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    Property?: PropertyOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    address?: StringFilter<"Location"> | string
    country?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    deletedAt?: DateTimeNullableFilter<"Location"> | Date | string | null
<<<<<<< HEAD
    longitude?: StringNullableFilter<"Location"> | string | null
    latitude?: StringNullableFilter<"Location"> | string | null
=======
    longitude?: FloatNullableFilter<"Location"> | number | null
    latitude?: FloatNullableFilter<"Location"> | number | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    Property?: PropertyListRelationFilter
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    country?: SortOrder
    city?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Location"> | number
    address?: StringWithAggregatesFilter<"Location"> | string
    country?: StringWithAggregatesFilter<"Location"> | string
    city?: StringWithAggregatesFilter<"Location"> | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Location"> | Date | string | null
<<<<<<< HEAD
    longitude?: StringNullableWithAggregatesFilter<"Location"> | string | null
    latitude?: StringNullableWithAggregatesFilter<"Location"> | string | null
=======
    longitude?: FloatNullableWithAggregatesFilter<"Location"> | number | null
    latitude?: FloatNullableWithAggregatesFilter<"Location"> | number | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
  }

  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: IntFilter<"Property"> | number
    name?: StringFilter<"Property"> | string
    desc?: StringNullableFilter<"Property"> | string | null
    category?: StringFilter<"Property"> | string
    terms_condition?: StringNullableFilter<"Property"> | string | null
<<<<<<< HEAD
    room_available?: IntFilter<"Property"> | number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: IntNullableFilter<"Property"> | number | null
    location_id?: IntFilter<"Property"> | number
    tenantId?: StringFilter<"Property"> | string
    isAvailable?: BoolFilter<"Property"> | boolean
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    PropertyImages?: PropertyImagesListRelationFilter
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    RoomTypes?: RoomTypesListRelationFilter
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrderInput | SortOrder
    category?: SortOrder
    terms_condition?: SortOrderInput | SortOrder
<<<<<<< HEAD
    room_available?: SortOrder
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: SortOrderInput | SortOrder
    location_id?: SortOrder
    tenantId?: SortOrder
    isAvailable?: SortOrder
    location?: LocationOrderByWithRelationInput
    PropertyImages?: PropertyImagesOrderByRelationAggregateInput
    tenant?: TenantOrderByWithRelationInput
    RoomTypes?: RoomTypesOrderByRelationAggregateInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    name?: StringFilter<"Property"> | string
    desc?: StringNullableFilter<"Property"> | string | null
    category?: StringFilter<"Property"> | string
    terms_condition?: StringNullableFilter<"Property"> | string | null
<<<<<<< HEAD
    room_available?: IntFilter<"Property"> | number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: IntNullableFilter<"Property"> | number | null
    location_id?: IntFilter<"Property"> | number
    tenantId?: StringFilter<"Property"> | string
    isAvailable?: BoolFilter<"Property"> | boolean
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    PropertyImages?: PropertyImagesListRelationFilter
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    RoomTypes?: RoomTypesListRelationFilter
  }, "id">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrderInput | SortOrder
    category?: SortOrder
    terms_condition?: SortOrderInput | SortOrder
<<<<<<< HEAD
    room_available?: SortOrder
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: SortOrderInput | SortOrder
    location_id?: SortOrder
    tenantId?: SortOrder
    isAvailable?: SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Property"> | number
    name?: StringWithAggregatesFilter<"Property"> | string
    desc?: StringNullableWithAggregatesFilter<"Property"> | string | null
    category?: StringWithAggregatesFilter<"Property"> | string
    terms_condition?: StringNullableWithAggregatesFilter<"Property"> | string | null
<<<<<<< HEAD
    room_available?: IntWithAggregatesFilter<"Property"> | number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: IntNullableWithAggregatesFilter<"Property"> | number | null
    location_id?: IntWithAggregatesFilter<"Property"> | number
    tenantId?: StringWithAggregatesFilter<"Property"> | string
    isAvailable?: BoolWithAggregatesFilter<"Property"> | boolean
  }

  export type PropertyImagesWhereInput = {
    AND?: PropertyImagesWhereInput | PropertyImagesWhereInput[]
    OR?: PropertyImagesWhereInput[]
    NOT?: PropertyImagesWhereInput | PropertyImagesWhereInput[]
    id?: IntFilter<"PropertyImages"> | number
    image_url?: StringFilter<"PropertyImages"> | string
    property_id?: IntFilter<"PropertyImages"> | number
    createdAt?: DateTimeFilter<"PropertyImages"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyImages"> | Date | string
    deletedAt?: DateTimeNullableFilter<"PropertyImages"> | Date | string | null
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type PropertyImagesOrderByWithRelationInput = {
    id?: SortOrder
    image_url?: SortOrder
    property_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    property?: PropertyOrderByWithRelationInput
  }

  export type PropertyImagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropertyImagesWhereInput | PropertyImagesWhereInput[]
    OR?: PropertyImagesWhereInput[]
    NOT?: PropertyImagesWhereInput | PropertyImagesWhereInput[]
    image_url?: StringFilter<"PropertyImages"> | string
    property_id?: IntFilter<"PropertyImages"> | number
    createdAt?: DateTimeFilter<"PropertyImages"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyImages"> | Date | string
    deletedAt?: DateTimeNullableFilter<"PropertyImages"> | Date | string | null
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id">

  export type PropertyImagesOrderByWithAggregationInput = {
    id?: SortOrder
    image_url?: SortOrder
    property_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: PropertyImagesCountOrderByAggregateInput
    _avg?: PropertyImagesAvgOrderByAggregateInput
    _max?: PropertyImagesMaxOrderByAggregateInput
    _min?: PropertyImagesMinOrderByAggregateInput
    _sum?: PropertyImagesSumOrderByAggregateInput
  }

  export type PropertyImagesScalarWhereWithAggregatesInput = {
    AND?: PropertyImagesScalarWhereWithAggregatesInput | PropertyImagesScalarWhereWithAggregatesInput[]
    OR?: PropertyImagesScalarWhereWithAggregatesInput[]
    NOT?: PropertyImagesScalarWhereWithAggregatesInput | PropertyImagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PropertyImages"> | number
    image_url?: StringWithAggregatesFilter<"PropertyImages"> | string
    property_id?: IntWithAggregatesFilter<"PropertyImages"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PropertyImages"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PropertyImages"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"PropertyImages"> | Date | string | null
  }

  export type RoomTypesWhereInput = {
    AND?: RoomTypesWhereInput | RoomTypesWhereInput[]
    OR?: RoomTypesWhereInput[]
    NOT?: RoomTypesWhereInput | RoomTypesWhereInput[]
    id?: IntFilter<"RoomTypes"> | number
    name?: StringFilter<"RoomTypes"> | string
    stock?: IntFilter<"RoomTypes"> | number
    capacity?: IntFilter<"RoomTypes"> | number
    bed_details?: StringNullableFilter<"RoomTypes"> | string | null
    price?: IntFilter<"RoomTypes"> | number
    has_breakfast?: BoolFilter<"RoomTypes"> | boolean
    breakfast_price?: IntFilter<"RoomTypes"> | number
    avg_rating?: IntNullableFilter<"RoomTypes"> | number | null
    property_id?: IntFilter<"RoomTypes"> | number
    createdAt?: DateTimeFilter<"RoomTypes"> | Date | string
    updatedAt?: DateTimeFilter<"RoomTypes"> | Date | string
    deletedAt?: DateTimeNullableFilter<"RoomTypes"> | Date | string | null
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    RoomImages?: RoomImagesListRelationFilter
    Booking?: BookingListRelationFilter
    Review?: ReviewListRelationFilter
    Unavailable?: UnavailableListRelationFilter
  }

  export type RoomTypesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    capacity?: SortOrder
    bed_details?: SortOrderInput | SortOrder
    price?: SortOrder
    has_breakfast?: SortOrder
    breakfast_price?: SortOrder
    avg_rating?: SortOrderInput | SortOrder
    property_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    property?: PropertyOrderByWithRelationInput
    RoomImages?: RoomImagesOrderByRelationAggregateInput
    Booking?: BookingOrderByRelationAggregateInput
    Review?: ReviewOrderByRelationAggregateInput
    Unavailable?: UnavailableOrderByRelationAggregateInput
  }

  export type RoomTypesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomTypesWhereInput | RoomTypesWhereInput[]
    OR?: RoomTypesWhereInput[]
    NOT?: RoomTypesWhereInput | RoomTypesWhereInput[]
    name?: StringFilter<"RoomTypes"> | string
    stock?: IntFilter<"RoomTypes"> | number
    capacity?: IntFilter<"RoomTypes"> | number
    bed_details?: StringNullableFilter<"RoomTypes"> | string | null
    price?: IntFilter<"RoomTypes"> | number
    has_breakfast?: BoolFilter<"RoomTypes"> | boolean
    breakfast_price?: IntFilter<"RoomTypes"> | number
    avg_rating?: IntNullableFilter<"RoomTypes"> | number | null
    property_id?: IntFilter<"RoomTypes"> | number
    createdAt?: DateTimeFilter<"RoomTypes"> | Date | string
    updatedAt?: DateTimeFilter<"RoomTypes"> | Date | string
    deletedAt?: DateTimeNullableFilter<"RoomTypes"> | Date | string | null
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    RoomImages?: RoomImagesListRelationFilter
    Booking?: BookingListRelationFilter
    Review?: ReviewListRelationFilter
    Unavailable?: UnavailableListRelationFilter
  }, "id">

  export type RoomTypesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    capacity?: SortOrder
    bed_details?: SortOrderInput | SortOrder
    price?: SortOrder
    has_breakfast?: SortOrder
    breakfast_price?: SortOrder
    avg_rating?: SortOrderInput | SortOrder
    property_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: RoomTypesCountOrderByAggregateInput
    _avg?: RoomTypesAvgOrderByAggregateInput
    _max?: RoomTypesMaxOrderByAggregateInput
    _min?: RoomTypesMinOrderByAggregateInput
    _sum?: RoomTypesSumOrderByAggregateInput
  }

  export type RoomTypesScalarWhereWithAggregatesInput = {
    AND?: RoomTypesScalarWhereWithAggregatesInput | RoomTypesScalarWhereWithAggregatesInput[]
    OR?: RoomTypesScalarWhereWithAggregatesInput[]
    NOT?: RoomTypesScalarWhereWithAggregatesInput | RoomTypesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RoomTypes"> | number
    name?: StringWithAggregatesFilter<"RoomTypes"> | string
    stock?: IntWithAggregatesFilter<"RoomTypes"> | number
    capacity?: IntWithAggregatesFilter<"RoomTypes"> | number
    bed_details?: StringNullableWithAggregatesFilter<"RoomTypes"> | string | null
    price?: IntWithAggregatesFilter<"RoomTypes"> | number
    has_breakfast?: BoolWithAggregatesFilter<"RoomTypes"> | boolean
    breakfast_price?: IntWithAggregatesFilter<"RoomTypes"> | number
    avg_rating?: IntNullableWithAggregatesFilter<"RoomTypes"> | number | null
    property_id?: IntWithAggregatesFilter<"RoomTypes"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RoomTypes"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RoomTypes"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"RoomTypes"> | Date | string | null
  }

  export type RoomImagesWhereInput = {
    AND?: RoomImagesWhereInput | RoomImagesWhereInput[]
    OR?: RoomImagesWhereInput[]
    NOT?: RoomImagesWhereInput | RoomImagesWhereInput[]
    id?: IntFilter<"RoomImages"> | number
    image_url?: StringFilter<"RoomImages"> | string
    createdAt?: DateTimeFilter<"RoomImages"> | Date | string
    updatedAt?: DateTimeFilter<"RoomImages"> | Date | string
    deletedAt?: DateTimeNullableFilter<"RoomImages"> | Date | string | null
    room_types_id?: IntFilter<"RoomImages"> | number
    room_types?: XOR<RoomTypesScalarRelationFilter, RoomTypesWhereInput>
  }

  export type RoomImagesOrderByWithRelationInput = {
    id?: SortOrder
    image_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    room_types_id?: SortOrder
    room_types?: RoomTypesOrderByWithRelationInput
  }

  export type RoomImagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomImagesWhereInput | RoomImagesWhereInput[]
    OR?: RoomImagesWhereInput[]
    NOT?: RoomImagesWhereInput | RoomImagesWhereInput[]
    image_url?: StringFilter<"RoomImages"> | string
    createdAt?: DateTimeFilter<"RoomImages"> | Date | string
    updatedAt?: DateTimeFilter<"RoomImages"> | Date | string
    deletedAt?: DateTimeNullableFilter<"RoomImages"> | Date | string | null
    room_types_id?: IntFilter<"RoomImages"> | number
    room_types?: XOR<RoomTypesScalarRelationFilter, RoomTypesWhereInput>
  }, "id">

  export type RoomImagesOrderByWithAggregationInput = {
    id?: SortOrder
    image_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    room_types_id?: SortOrder
    _count?: RoomImagesCountOrderByAggregateInput
    _avg?: RoomImagesAvgOrderByAggregateInput
    _max?: RoomImagesMaxOrderByAggregateInput
    _min?: RoomImagesMinOrderByAggregateInput
    _sum?: RoomImagesSumOrderByAggregateInput
  }

  export type RoomImagesScalarWhereWithAggregatesInput = {
    AND?: RoomImagesScalarWhereWithAggregatesInput | RoomImagesScalarWhereWithAggregatesInput[]
    OR?: RoomImagesScalarWhereWithAggregatesInput[]
    NOT?: RoomImagesScalarWhereWithAggregatesInput | RoomImagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RoomImages"> | number
    image_url?: StringWithAggregatesFilter<"RoomImages"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RoomImages"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RoomImages"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"RoomImages"> | Date | string | null
    room_types_id?: IntWithAggregatesFilter<"RoomImages"> | number
  }

  export type UnavailableWhereInput = {
    AND?: UnavailableWhereInput | UnavailableWhereInput[]
    OR?: UnavailableWhereInput[]
    NOT?: UnavailableWhereInput | UnavailableWhereInput[]
    id?: IntFilter<"Unavailable"> | number
    start_date?: DateTimeFilter<"Unavailable"> | Date | string
    end_date?: DateTimeFilter<"Unavailable"> | Date | string
    room_types_id?: IntFilter<"Unavailable"> | number
    createdAt?: DateTimeFilter<"Unavailable"> | Date | string
    updatedAt?: DateTimeFilter<"Unavailable"> | Date | string
    room_types?: XOR<RoomTypesScalarRelationFilter, RoomTypesWhereInput>
  }

  export type UnavailableOrderByWithRelationInput = {
    id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    room_types_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    room_types?: RoomTypesOrderByWithRelationInput
  }

  export type UnavailableWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UnavailableWhereInput | UnavailableWhereInput[]
    OR?: UnavailableWhereInput[]
    NOT?: UnavailableWhereInput | UnavailableWhereInput[]
    start_date?: DateTimeFilter<"Unavailable"> | Date | string
    end_date?: DateTimeFilter<"Unavailable"> | Date | string
    room_types_id?: IntFilter<"Unavailable"> | number
    createdAt?: DateTimeFilter<"Unavailable"> | Date | string
    updatedAt?: DateTimeFilter<"Unavailable"> | Date | string
    room_types?: XOR<RoomTypesScalarRelationFilter, RoomTypesWhereInput>
  }, "id">

  export type UnavailableOrderByWithAggregationInput = {
    id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    room_types_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UnavailableCountOrderByAggregateInput
    _avg?: UnavailableAvgOrderByAggregateInput
    _max?: UnavailableMaxOrderByAggregateInput
    _min?: UnavailableMinOrderByAggregateInput
    _sum?: UnavailableSumOrderByAggregateInput
  }

  export type UnavailableScalarWhereWithAggregatesInput = {
    AND?: UnavailableScalarWhereWithAggregatesInput | UnavailableScalarWhereWithAggregatesInput[]
    OR?: UnavailableScalarWhereWithAggregatesInput[]
    NOT?: UnavailableScalarWhereWithAggregatesInput | UnavailableScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Unavailable"> | number
    start_date?: DateTimeWithAggregatesFilter<"Unavailable"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"Unavailable"> | Date | string
    room_types_id?: IntWithAggregatesFilter<"Unavailable"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Unavailable"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Unavailable"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    num_of_guests?: IntFilter<"Booking"> | number
    total_price?: IntFilter<"Booking"> | number
    details?: JsonNullableFilter<"Booking">
    start_date?: DateTimeFilter<"Booking"> | Date | string
    end_date?: DateTimeFilter<"Booking"> | Date | string
    created_at?: DateTimeFilter<"Booking"> | Date | string
    updated_at?: DateTimeFilter<"Booking"> | Date | string
    payment_proof?: StringNullableFilter<"Booking"> | string | null
    payment_method?: EnumPaymentMethodNullableFilter<"Booking"> | $Enums.PaymentMethod | null
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    user_id?: StringFilter<"Booking"> | string
    room_types_id?: IntFilter<"Booking"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    room_types?: XOR<RoomTypesScalarRelationFilter, RoomTypesWhereInput>
    Review?: ReviewListRelationFilter
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    num_of_guests?: SortOrder
    total_price?: SortOrder
    details?: SortOrderInput | SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    payment_proof?: SortOrderInput | SortOrder
    payment_method?: SortOrderInput | SortOrder
    status?: SortOrder
    user_id?: SortOrder
    room_types_id?: SortOrder
    user?: UserOrderByWithRelationInput
    room_types?: RoomTypesOrderByWithRelationInput
    Review?: ReviewOrderByRelationAggregateInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    num_of_guests?: IntFilter<"Booking"> | number
    total_price?: IntFilter<"Booking"> | number
    details?: JsonNullableFilter<"Booking">
    start_date?: DateTimeFilter<"Booking"> | Date | string
    end_date?: DateTimeFilter<"Booking"> | Date | string
    created_at?: DateTimeFilter<"Booking"> | Date | string
    updated_at?: DateTimeFilter<"Booking"> | Date | string
    payment_proof?: StringNullableFilter<"Booking"> | string | null
    payment_method?: EnumPaymentMethodNullableFilter<"Booking"> | $Enums.PaymentMethod | null
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    user_id?: StringFilter<"Booking"> | string
    room_types_id?: IntFilter<"Booking"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    room_types?: XOR<RoomTypesScalarRelationFilter, RoomTypesWhereInput>
    Review?: ReviewListRelationFilter
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    num_of_guests?: SortOrder
    total_price?: SortOrder
    details?: SortOrderInput | SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    payment_proof?: SortOrderInput | SortOrder
    payment_method?: SortOrderInput | SortOrder
    status?: SortOrder
    user_id?: SortOrder
    room_types_id?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    num_of_guests?: IntWithAggregatesFilter<"Booking"> | number
    total_price?: IntWithAggregatesFilter<"Booking"> | number
    details?: JsonNullableWithAggregatesFilter<"Booking">
    start_date?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    payment_proof?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    payment_method?: EnumPaymentMethodNullableWithAggregatesFilter<"Booking"> | $Enums.PaymentMethod | null
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    user_id?: StringWithAggregatesFilter<"Booking"> | string
    room_types_id?: IntWithAggregatesFilter<"Booking"> | number
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    review?: StringFilter<"Review"> | string
    user_id?: StringFilter<"Review"> | string
    room_types_id?: IntFilter<"Review"> | number
    booking_id?: StringFilter<"Review"> | string
    created_at?: DateTimeFilter<"Review"> | Date | string
    updated_at?: DateTimeFilter<"Review"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Review"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    room_types?: XOR<RoomTypesScalarRelationFilter, RoomTypesWhereInput>
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    ReviewReplies?: ReviewRepliesListRelationFilter
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    user_id?: SortOrder
    room_types_id?: SortOrder
    booking_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    room_types?: RoomTypesOrderByWithRelationInput
    booking?: BookingOrderByWithRelationInput
    ReviewReplies?: ReviewRepliesOrderByRelationAggregateInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    rating?: IntFilter<"Review"> | number
    review?: StringFilter<"Review"> | string
    user_id?: StringFilter<"Review"> | string
    room_types_id?: IntFilter<"Review"> | number
    booking_id?: StringFilter<"Review"> | string
    created_at?: DateTimeFilter<"Review"> | Date | string
    updated_at?: DateTimeFilter<"Review"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Review"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    room_types?: XOR<RoomTypesScalarRelationFilter, RoomTypesWhereInput>
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    ReviewReplies?: ReviewRepliesListRelationFilter
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    user_id?: SortOrder
    room_types_id?: SortOrder
    booking_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    rating?: IntWithAggregatesFilter<"Review"> | number
    review?: StringWithAggregatesFilter<"Review"> | string
    user_id?: StringWithAggregatesFilter<"Review"> | string
    room_types_id?: IntWithAggregatesFilter<"Review"> | number
    booking_id?: StringWithAggregatesFilter<"Review"> | string
    created_at?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Review"> | Date | string | null
  }

  export type ReviewRepliesWhereInput = {
    AND?: ReviewRepliesWhereInput | ReviewRepliesWhereInput[]
    OR?: ReviewRepliesWhereInput[]
    NOT?: ReviewRepliesWhereInput | ReviewRepliesWhereInput[]
    id?: IntFilter<"ReviewReplies"> | number
    tenant_id?: StringFilter<"ReviewReplies"> | string
    review_id?: IntFilter<"ReviewReplies"> | number
    reply?: StringFilter<"ReviewReplies"> | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }

  export type ReviewRepliesOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    review_id?: SortOrder
    reply?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    review?: ReviewOrderByWithRelationInput
  }

  export type ReviewRepliesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewRepliesWhereInput | ReviewRepliesWhereInput[]
    OR?: ReviewRepliesWhereInput[]
    NOT?: ReviewRepliesWhereInput | ReviewRepliesWhereInput[]
    tenant_id?: StringFilter<"ReviewReplies"> | string
    review_id?: IntFilter<"ReviewReplies"> | number
    reply?: StringFilter<"ReviewReplies"> | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }, "id">

  export type ReviewRepliesOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    review_id?: SortOrder
    reply?: SortOrder
    _count?: ReviewRepliesCountOrderByAggregateInput
    _avg?: ReviewRepliesAvgOrderByAggregateInput
    _max?: ReviewRepliesMaxOrderByAggregateInput
    _min?: ReviewRepliesMinOrderByAggregateInput
    _sum?: ReviewRepliesSumOrderByAggregateInput
  }

  export type ReviewRepliesScalarWhereWithAggregatesInput = {
    AND?: ReviewRepliesScalarWhereWithAggregatesInput | ReviewRepliesScalarWhereWithAggregatesInput[]
    OR?: ReviewRepliesScalarWhereWithAggregatesInput[]
    NOT?: ReviewRepliesScalarWhereWithAggregatesInput | ReviewRepliesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ReviewReplies"> | number
    tenant_id?: StringWithAggregatesFilter<"ReviewReplies"> | string
    review_id?: IntWithAggregatesFilter<"ReviewReplies"> | number
    reply?: StringWithAggregatesFilter<"ReviewReplies"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username?: string | null
    password?: string | null
    avatar?: string | null
    no_handphone: string
    isVerify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    googleId?: string | null
    Booking?: BookingCreateNestedManyWithoutUserInput
    Review?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username?: string | null
    password?: string | null
    avatar?: string | null
    no_handphone: string
    isVerify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    googleId?: string | null
    Booking?: BookingUncheckedCreateNestedManyWithoutUserInput
    Review?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    no_handphone?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    Booking?: BookingUpdateManyWithoutUserNestedInput
    Review?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    no_handphone?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    Booking?: BookingUncheckedUpdateManyWithoutUserNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username?: string | null
    password?: string | null
    avatar?: string | null
    no_handphone: string
    isVerify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    googleId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    no_handphone?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    no_handphone?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TenantCreateInput = {
    id?: string
<<<<<<< HEAD
=======
    googleId?: string | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name: string
    password?: string | null
    no_handphone?: string | null
    email: string
    avatar?: string | null
    isVerify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Property?: PropertyCreateNestedManyWithoutTenantInput
    ReviewReplies?: ReviewRepliesCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
<<<<<<< HEAD
=======
    googleId?: string | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name: string
    password?: string | null
    no_handphone?: string | null
    email: string
    avatar?: string | null
    isVerify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Property?: PropertyUncheckedCreateNestedManyWithoutTenantInput
    ReviewReplies?: ReviewRepliesUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
<<<<<<< HEAD
=======
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    no_handphone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Property?: PropertyUpdateManyWithoutTenantNestedInput
    ReviewReplies?: ReviewRepliesUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
<<<<<<< HEAD
=======
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    no_handphone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Property?: PropertyUncheckedUpdateManyWithoutTenantNestedInput
    ReviewReplies?: ReviewRepliesUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
<<<<<<< HEAD
=======
    googleId?: string | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name: string
    password?: string | null
    no_handphone?: string | null
    email: string
    avatar?: string | null
    isVerify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
<<<<<<< HEAD
=======
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    no_handphone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
<<<<<<< HEAD
=======
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    no_handphone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LocationCreateInput = {
    address: string
    country: string
    city: string
    deletedAt?: Date | string | null
<<<<<<< HEAD
    longitude?: string | null
    latitude?: string | null
=======
    longitude?: number | null
    latitude?: number | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    Property?: PropertyCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: number
    address: string
    country: string
    city: string
    deletedAt?: Date | string | null
<<<<<<< HEAD
    longitude?: string | null
    latitude?: string | null
=======
    longitude?: number | null
    latitude?: number | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    Property?: PropertyUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
<<<<<<< HEAD
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
=======
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    Property?: PropertyUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
<<<<<<< HEAD
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
=======
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    Property?: PropertyUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateManyInput = {
    id?: number
    address: string
    country: string
    city: string
    deletedAt?: Date | string | null
<<<<<<< HEAD
    longitude?: string | null
    latitude?: string | null
=======
    longitude?: number | null
    latitude?: number | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
  }

  export type LocationUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
<<<<<<< HEAD
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
=======
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
<<<<<<< HEAD
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
=======
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
  }

  export type PropertyCreateInput = {
    name: string
    desc?: string | null
    category: string
    terms_condition?: string | null
<<<<<<< HEAD
    room_available: number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: number | null
    isAvailable?: boolean
    location: LocationCreateNestedOneWithoutPropertyInput
    PropertyImages?: PropertyImagesCreateNestedManyWithoutPropertyInput
    tenant: TenantCreateNestedOneWithoutPropertyInput
    RoomTypes?: RoomTypesCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: number
    name: string
    desc?: string | null
    category: string
    terms_condition?: string | null
<<<<<<< HEAD
    room_available: number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: number | null
    location_id: number
    tenantId: string
    isAvailable?: boolean
    PropertyImages?: PropertyImagesUncheckedCreateNestedManyWithoutPropertyInput
    RoomTypes?: RoomTypesUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    terms_condition?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< HEAD
    room_available?: IntFieldUpdateOperationsInput | number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: NullableIntFieldUpdateOperationsInput | number | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    location?: LocationUpdateOneRequiredWithoutPropertyNestedInput
    PropertyImages?: PropertyImagesUpdateManyWithoutPropertyNestedInput
    tenant?: TenantUpdateOneRequiredWithoutPropertyNestedInput
    RoomTypes?: RoomTypesUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    terms_condition?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< HEAD
    room_available?: IntFieldUpdateOperationsInput | number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: NullableIntFieldUpdateOperationsInput | number | null
    location_id?: IntFieldUpdateOperationsInput | number
    tenantId?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    PropertyImages?: PropertyImagesUncheckedUpdateManyWithoutPropertyNestedInput
    RoomTypes?: RoomTypesUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateManyInput = {
    id?: number
    name: string
    desc?: string | null
    category: string
    terms_condition?: string | null
<<<<<<< HEAD
    room_available: number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: number | null
    location_id: number
    tenantId: string
    isAvailable?: boolean
  }

  export type PropertyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    terms_condition?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< HEAD
    room_available?: IntFieldUpdateOperationsInput | number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: NullableIntFieldUpdateOperationsInput | number | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    terms_condition?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< HEAD
    room_available?: IntFieldUpdateOperationsInput | number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: NullableIntFieldUpdateOperationsInput | number | null
    location_id?: IntFieldUpdateOperationsInput | number
    tenantId?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PropertyImagesCreateInput = {
    image_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    property: PropertyCreateNestedOneWithoutPropertyImagesInput
  }

  export type PropertyImagesUncheckedCreateInput = {
    id?: number
    image_url: string
    property_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PropertyImagesUpdateInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    property?: PropertyUpdateOneRequiredWithoutPropertyImagesNestedInput
  }

  export type PropertyImagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    property_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PropertyImagesCreateManyInput = {
    id?: number
    image_url: string
    property_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PropertyImagesUpdateManyMutationInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PropertyImagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    property_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoomTypesCreateInput = {
    name: string
    stock: number
    capacity: number
    bed_details?: string | null
    price: number
    has_breakfast?: boolean
    breakfast_price: number
    avg_rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    property: PropertyCreateNestedOneWithoutRoomTypesInput
    RoomImages?: RoomImagesCreateNestedManyWithoutRoom_typesInput
    Booking?: BookingCreateNestedManyWithoutRoom_typesInput
    Review?: ReviewCreateNestedManyWithoutRoom_typesInput
    Unavailable?: UnavailableCreateNestedManyWithoutRoom_typesInput
  }

  export type RoomTypesUncheckedCreateInput = {
    id?: number
    name: string
    stock: number
    capacity: number
    bed_details?: string | null
    price: number
    has_breakfast?: boolean
    breakfast_price: number
    avg_rating?: number | null
    property_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    RoomImages?: RoomImagesUncheckedCreateNestedManyWithoutRoom_typesInput
    Booking?: BookingUncheckedCreateNestedManyWithoutRoom_typesInput
    Review?: ReviewUncheckedCreateNestedManyWithoutRoom_typesInput
    Unavailable?: UnavailableUncheckedCreateNestedManyWithoutRoom_typesInput
  }

  export type RoomTypesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    bed_details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    has_breakfast?: BoolFieldUpdateOperationsInput | boolean
    breakfast_price?: IntFieldUpdateOperationsInput | number
    avg_rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    property?: PropertyUpdateOneRequiredWithoutRoomTypesNestedInput
    RoomImages?: RoomImagesUpdateManyWithoutRoom_typesNestedInput
    Booking?: BookingUpdateManyWithoutRoom_typesNestedInput
    Review?: ReviewUpdateManyWithoutRoom_typesNestedInput
    Unavailable?: UnavailableUpdateManyWithoutRoom_typesNestedInput
  }

  export type RoomTypesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    bed_details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    has_breakfast?: BoolFieldUpdateOperationsInput | boolean
    breakfast_price?: IntFieldUpdateOperationsInput | number
    avg_rating?: NullableIntFieldUpdateOperationsInput | number | null
    property_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RoomImages?: RoomImagesUncheckedUpdateManyWithoutRoom_typesNestedInput
    Booking?: BookingUncheckedUpdateManyWithoutRoom_typesNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutRoom_typesNestedInput
    Unavailable?: UnavailableUncheckedUpdateManyWithoutRoom_typesNestedInput
  }

  export type RoomTypesCreateManyInput = {
    id?: number
    name: string
    stock: number
    capacity: number
    bed_details?: string | null
    price: number
    has_breakfast?: boolean
    breakfast_price: number
    avg_rating?: number | null
    property_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type RoomTypesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    bed_details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    has_breakfast?: BoolFieldUpdateOperationsInput | boolean
    breakfast_price?: IntFieldUpdateOperationsInput | number
    avg_rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoomTypesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    bed_details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    has_breakfast?: BoolFieldUpdateOperationsInput | boolean
    breakfast_price?: IntFieldUpdateOperationsInput | number
    avg_rating?: NullableIntFieldUpdateOperationsInput | number | null
    property_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoomImagesCreateInput = {
    image_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    room_types: RoomTypesCreateNestedOneWithoutRoomImagesInput
  }

  export type RoomImagesUncheckedCreateInput = {
    id?: number
    image_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    room_types_id: number
  }

  export type RoomImagesUpdateInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room_types?: RoomTypesUpdateOneRequiredWithoutRoomImagesNestedInput
  }

  export type RoomImagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room_types_id?: IntFieldUpdateOperationsInput | number
  }

  export type RoomImagesCreateManyInput = {
    id?: number
    image_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    room_types_id: number
  }

  export type RoomImagesUpdateManyMutationInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoomImagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room_types_id?: IntFieldUpdateOperationsInput | number
  }

  export type UnavailableCreateInput = {
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    room_types: RoomTypesCreateNestedOneWithoutUnavailableInput
  }

  export type UnavailableUncheckedCreateInput = {
    id?: number
    start_date: Date | string
    end_date: Date | string
    room_types_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnavailableUpdateInput = {
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room_types?: RoomTypesUpdateOneRequiredWithoutUnavailableNestedInput
  }

  export type UnavailableUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    room_types_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnavailableCreateManyInput = {
    id?: number
    start_date: Date | string
    end_date: Date | string
    room_types_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnavailableUpdateManyMutationInput = {
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnavailableUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    room_types_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    id?: string
    num_of_guests: number
    total_price: number
    details?: NullableJsonNullValueInput | InputJsonValue
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    payment_proof?: string | null
    payment_method?: $Enums.PaymentMethod | null
    status?: $Enums.BookingStatus
    user: UserCreateNestedOneWithoutBookingInput
    room_types: RoomTypesCreateNestedOneWithoutBookingInput
    Review?: ReviewCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    num_of_guests: number
    total_price: number
    details?: NullableJsonNullValueInput | InputJsonValue
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    payment_proof?: string | null
    payment_method?: $Enums.PaymentMethod | null
    status?: $Enums.BookingStatus
    user_id: string
    room_types_id: number
    Review?: ReviewUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    num_of_guests?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_proof?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    user?: UserUpdateOneRequiredWithoutBookingNestedInput
    room_types?: RoomTypesUpdateOneRequiredWithoutBookingNestedInput
    Review?: ReviewUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    num_of_guests?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_proof?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    user_id?: StringFieldUpdateOperationsInput | string
    room_types_id?: IntFieldUpdateOperationsInput | number
    Review?: ReviewUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: string
    num_of_guests: number
    total_price: number
    details?: NullableJsonNullValueInput | InputJsonValue
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    payment_proof?: string | null
    payment_method?: $Enums.PaymentMethod | null
    status?: $Enums.BookingStatus
    user_id: string
    room_types_id: number
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    num_of_guests?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_proof?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    num_of_guests?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_proof?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    user_id?: StringFieldUpdateOperationsInput | string
    room_types_id?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewCreateInput = {
    rating: number
    review: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    user: UserCreateNestedOneWithoutReviewInput
    room_types: RoomTypesCreateNestedOneWithoutReviewInput
    booking: BookingCreateNestedOneWithoutReviewInput
    ReviewReplies?: ReviewRepliesCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    rating: number
    review: string
    user_id: string
    room_types_id: number
    booking_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    ReviewReplies?: ReviewRepliesUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutReviewNestedInput
    room_types?: RoomTypesUpdateOneRequiredWithoutReviewNestedInput
    booking?: BookingUpdateOneRequiredWithoutReviewNestedInput
    ReviewReplies?: ReviewRepliesUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    room_types_id?: IntFieldUpdateOperationsInput | number
    booking_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ReviewReplies?: ReviewRepliesUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewCreateManyInput = {
    id?: number
    rating: number
    review: string
    user_id: string
    room_types_id: number
    booking_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type ReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    room_types_id?: IntFieldUpdateOperationsInput | number
    booking_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewRepliesCreateInput = {
    reply: string
    tenant: TenantCreateNestedOneWithoutReviewRepliesInput
    review: ReviewCreateNestedOneWithoutReviewRepliesInput
  }

  export type ReviewRepliesUncheckedCreateInput = {
    id?: number
    tenant_id: string
    review_id: number
    reply: string
  }

  export type ReviewRepliesUpdateInput = {
    reply?: StringFieldUpdateOperationsInput | string
    tenant?: TenantUpdateOneRequiredWithoutReviewRepliesNestedInput
    review?: ReviewUpdateOneRequiredWithoutReviewRepliesNestedInput
  }

  export type ReviewRepliesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenant_id?: StringFieldUpdateOperationsInput | string
    review_id?: IntFieldUpdateOperationsInput | number
    reply?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewRepliesCreateManyInput = {
    id?: number
    tenant_id: string
    review_id: number
    reply: string
  }

  export type ReviewRepliesUpdateManyMutationInput = {
    reply?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewRepliesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenant_id?: StringFieldUpdateOperationsInput | string
    review_id?: IntFieldUpdateOperationsInput | number
    reply?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    no_handphone?: SortOrder
    isVerify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    googleId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    no_handphone?: SortOrder
    isVerify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    googleId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    no_handphone?: SortOrder
    isVerify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    googleId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PropertyListRelationFilter = {
    every?: PropertyWhereInput
    some?: PropertyWhereInput
    none?: PropertyWhereInput
  }

  export type ReviewRepliesListRelationFilter = {
    every?: ReviewRepliesWhereInput
    some?: ReviewRepliesWhereInput
    none?: ReviewRepliesWhereInput
  }

  export type PropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewRepliesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
<<<<<<< HEAD
=======
    googleId?: SortOrder
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name?: SortOrder
    password?: SortOrder
    no_handphone?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
<<<<<<< HEAD
=======
    googleId?: SortOrder
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name?: SortOrder
    password?: SortOrder
    no_handphone?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
<<<<<<< HEAD
=======
    googleId?: SortOrder
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name?: SortOrder
    password?: SortOrder
    no_handphone?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

<<<<<<< HEAD
=======
  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    country?: SortOrder
    city?: SortOrder
    deletedAt?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    id?: SortOrder
<<<<<<< HEAD
=======
    longitude?: SortOrder
    latitude?: SortOrder
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    country?: SortOrder
    city?: SortOrder
    deletedAt?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    country?: SortOrder
    city?: SortOrder
    deletedAt?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    id?: SortOrder
<<<<<<< HEAD
=======
    longitude?: SortOrder
    latitude?: SortOrder
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

<<<<<<< HEAD
=======
  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type LocationScalarRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type PropertyImagesListRelationFilter = {
    every?: PropertyImagesWhereInput
    some?: PropertyImagesWhereInput
    none?: PropertyImagesWhereInput
  }

  export type TenantScalarRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type RoomTypesListRelationFilter = {
    every?: RoomTypesWhereInput
    some?: RoomTypesWhereInput
    none?: RoomTypesWhereInput
  }

  export type PropertyImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomTypesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    category?: SortOrder
    terms_condition?: SortOrder
<<<<<<< HEAD
    room_available?: SortOrder
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: SortOrder
    location_id?: SortOrder
    tenantId?: SortOrder
    isAvailable?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    id?: SortOrder
<<<<<<< HEAD
    room_available?: SortOrder
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: SortOrder
    location_id?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    category?: SortOrder
    terms_condition?: SortOrder
<<<<<<< HEAD
    room_available?: SortOrder
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: SortOrder
    location_id?: SortOrder
    tenantId?: SortOrder
    isAvailable?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    category?: SortOrder
    terms_condition?: SortOrder
<<<<<<< HEAD
    room_available?: SortOrder
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: SortOrder
    location_id?: SortOrder
    tenantId?: SortOrder
    isAvailable?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    id?: SortOrder
<<<<<<< HEAD
    room_available?: SortOrder
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: SortOrder
    location_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PropertyScalarRelationFilter = {
    is?: PropertyWhereInput
    isNot?: PropertyWhereInput
  }

  export type PropertyImagesCountOrderByAggregateInput = {
    id?: SortOrder
    image_url?: SortOrder
    property_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PropertyImagesAvgOrderByAggregateInput = {
    id?: SortOrder
    property_id?: SortOrder
  }

  export type PropertyImagesMaxOrderByAggregateInput = {
    id?: SortOrder
    image_url?: SortOrder
    property_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PropertyImagesMinOrderByAggregateInput = {
    id?: SortOrder
    image_url?: SortOrder
    property_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PropertyImagesSumOrderByAggregateInput = {
    id?: SortOrder
    property_id?: SortOrder
  }

  export type RoomImagesListRelationFilter = {
    every?: RoomImagesWhereInput
    some?: RoomImagesWhereInput
    none?: RoomImagesWhereInput
  }

  export type UnavailableListRelationFilter = {
    every?: UnavailableWhereInput
    some?: UnavailableWhereInput
    none?: UnavailableWhereInput
  }

  export type RoomImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnavailableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomTypesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    capacity?: SortOrder
    bed_details?: SortOrder
    price?: SortOrder
    has_breakfast?: SortOrder
    breakfast_price?: SortOrder
    avg_rating?: SortOrder
    property_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type RoomTypesAvgOrderByAggregateInput = {
    id?: SortOrder
    stock?: SortOrder
    capacity?: SortOrder
    price?: SortOrder
    breakfast_price?: SortOrder
    avg_rating?: SortOrder
    property_id?: SortOrder
  }

  export type RoomTypesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    capacity?: SortOrder
    bed_details?: SortOrder
    price?: SortOrder
    has_breakfast?: SortOrder
    breakfast_price?: SortOrder
    avg_rating?: SortOrder
    property_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type RoomTypesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stock?: SortOrder
    capacity?: SortOrder
    bed_details?: SortOrder
    price?: SortOrder
    has_breakfast?: SortOrder
    breakfast_price?: SortOrder
    avg_rating?: SortOrder
    property_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type RoomTypesSumOrderByAggregateInput = {
    id?: SortOrder
    stock?: SortOrder
    capacity?: SortOrder
    price?: SortOrder
    breakfast_price?: SortOrder
    avg_rating?: SortOrder
    property_id?: SortOrder
  }

  export type RoomTypesScalarRelationFilter = {
    is?: RoomTypesWhereInput
    isNot?: RoomTypesWhereInput
  }

  export type RoomImagesCountOrderByAggregateInput = {
    id?: SortOrder
    image_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    room_types_id?: SortOrder
  }

  export type RoomImagesAvgOrderByAggregateInput = {
    id?: SortOrder
    room_types_id?: SortOrder
  }

  export type RoomImagesMaxOrderByAggregateInput = {
    id?: SortOrder
    image_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    room_types_id?: SortOrder
  }

  export type RoomImagesMinOrderByAggregateInput = {
    id?: SortOrder
    image_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    room_types_id?: SortOrder
  }

  export type RoomImagesSumOrderByAggregateInput = {
    id?: SortOrder
    room_types_id?: SortOrder
  }

  export type UnavailableCountOrderByAggregateInput = {
    id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    room_types_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnavailableAvgOrderByAggregateInput = {
    id?: SortOrder
    room_types_id?: SortOrder
  }

  export type UnavailableMaxOrderByAggregateInput = {
    id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    room_types_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnavailableMinOrderByAggregateInput = {
    id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    room_types_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnavailableSumOrderByAggregateInput = {
    id?: SortOrder
    room_types_id?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumPaymentMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentMethodNullableFilter<$PrismaModel> | $Enums.PaymentMethod | null
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    num_of_guests?: SortOrder
    total_price?: SortOrder
    details?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    payment_proof?: SortOrder
    payment_method?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    room_types_id?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    num_of_guests?: SortOrder
    total_price?: SortOrder
    room_types_id?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    num_of_guests?: SortOrder
    total_price?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    payment_proof?: SortOrder
    payment_method?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    room_types_id?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    num_of_guests?: SortOrder
    total_price?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    payment_proof?: SortOrder
    payment_method?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    room_types_id?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    num_of_guests?: SortOrder
    total_price?: SortOrder
    room_types_id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    user_id?: SortOrder
    room_types_id?: SortOrder
    booking_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    room_types_id?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    user_id?: SortOrder
    room_types_id?: SortOrder
    booking_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    user_id?: SortOrder
    room_types_id?: SortOrder
    booking_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    room_types_id?: SortOrder
  }

  export type ReviewScalarRelationFilter = {
    is?: ReviewWhereInput
    isNot?: ReviewWhereInput
  }

  export type ReviewRepliesCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    review_id?: SortOrder
    reply?: SortOrder
  }

  export type ReviewRepliesAvgOrderByAggregateInput = {
    id?: SortOrder
    review_id?: SortOrder
  }

  export type ReviewRepliesMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    review_id?: SortOrder
    reply?: SortOrder
  }

  export type ReviewRepliesMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    review_id?: SortOrder
    reply?: SortOrder
  }

  export type ReviewRepliesSumOrderByAggregateInput = {
    id?: SortOrder
    review_id?: SortOrder
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PropertyCreateNestedManyWithoutTenantInput = {
    create?: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput> | PropertyCreateWithoutTenantInput[] | PropertyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutTenantInput | PropertyCreateOrConnectWithoutTenantInput[]
    createMany?: PropertyCreateManyTenantInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type ReviewRepliesCreateNestedManyWithoutTenantInput = {
    create?: XOR<ReviewRepliesCreateWithoutTenantInput, ReviewRepliesUncheckedCreateWithoutTenantInput> | ReviewRepliesCreateWithoutTenantInput[] | ReviewRepliesUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ReviewRepliesCreateOrConnectWithoutTenantInput | ReviewRepliesCreateOrConnectWithoutTenantInput[]
    createMany?: ReviewRepliesCreateManyTenantInputEnvelope
    connect?: ReviewRepliesWhereUniqueInput | ReviewRepliesWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput> | PropertyCreateWithoutTenantInput[] | PropertyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutTenantInput | PropertyCreateOrConnectWithoutTenantInput[]
    createMany?: PropertyCreateManyTenantInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type ReviewRepliesUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<ReviewRepliesCreateWithoutTenantInput, ReviewRepliesUncheckedCreateWithoutTenantInput> | ReviewRepliesCreateWithoutTenantInput[] | ReviewRepliesUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ReviewRepliesCreateOrConnectWithoutTenantInput | ReviewRepliesCreateOrConnectWithoutTenantInput[]
    createMany?: ReviewRepliesCreateManyTenantInputEnvelope
    connect?: ReviewRepliesWhereUniqueInput | ReviewRepliesWhereUniqueInput[]
  }

  export type PropertyUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput> | PropertyCreateWithoutTenantInput[] | PropertyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutTenantInput | PropertyCreateOrConnectWithoutTenantInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutTenantInput | PropertyUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PropertyCreateManyTenantInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutTenantInput | PropertyUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutTenantInput | PropertyUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type ReviewRepliesUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ReviewRepliesCreateWithoutTenantInput, ReviewRepliesUncheckedCreateWithoutTenantInput> | ReviewRepliesCreateWithoutTenantInput[] | ReviewRepliesUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ReviewRepliesCreateOrConnectWithoutTenantInput | ReviewRepliesCreateOrConnectWithoutTenantInput[]
    upsert?: ReviewRepliesUpsertWithWhereUniqueWithoutTenantInput | ReviewRepliesUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ReviewRepliesCreateManyTenantInputEnvelope
    set?: ReviewRepliesWhereUniqueInput | ReviewRepliesWhereUniqueInput[]
    disconnect?: ReviewRepliesWhereUniqueInput | ReviewRepliesWhereUniqueInput[]
    delete?: ReviewRepliesWhereUniqueInput | ReviewRepliesWhereUniqueInput[]
    connect?: ReviewRepliesWhereUniqueInput | ReviewRepliesWhereUniqueInput[]
    update?: ReviewRepliesUpdateWithWhereUniqueWithoutTenantInput | ReviewRepliesUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ReviewRepliesUpdateManyWithWhereWithoutTenantInput | ReviewRepliesUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ReviewRepliesScalarWhereInput | ReviewRepliesScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput> | PropertyCreateWithoutTenantInput[] | PropertyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutTenantInput | PropertyCreateOrConnectWithoutTenantInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutTenantInput | PropertyUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PropertyCreateManyTenantInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutTenantInput | PropertyUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutTenantInput | PropertyUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type ReviewRepliesUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ReviewRepliesCreateWithoutTenantInput, ReviewRepliesUncheckedCreateWithoutTenantInput> | ReviewRepliesCreateWithoutTenantInput[] | ReviewRepliesUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ReviewRepliesCreateOrConnectWithoutTenantInput | ReviewRepliesCreateOrConnectWithoutTenantInput[]
    upsert?: ReviewRepliesUpsertWithWhereUniqueWithoutTenantInput | ReviewRepliesUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ReviewRepliesCreateManyTenantInputEnvelope
    set?: ReviewRepliesWhereUniqueInput | ReviewRepliesWhereUniqueInput[]
    disconnect?: ReviewRepliesWhereUniqueInput | ReviewRepliesWhereUniqueInput[]
    delete?: ReviewRepliesWhereUniqueInput | ReviewRepliesWhereUniqueInput[]
    connect?: ReviewRepliesWhereUniqueInput | ReviewRepliesWhereUniqueInput[]
    update?: ReviewRepliesUpdateWithWhereUniqueWithoutTenantInput | ReviewRepliesUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ReviewRepliesUpdateManyWithWhereWithoutTenantInput | ReviewRepliesUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ReviewRepliesScalarWhereInput | ReviewRepliesScalarWhereInput[]
  }

  export type PropertyCreateNestedManyWithoutLocationInput = {
    create?: XOR<PropertyCreateWithoutLocationInput, PropertyUncheckedCreateWithoutLocationInput> | PropertyCreateWithoutLocationInput[] | PropertyUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutLocationInput | PropertyCreateOrConnectWithoutLocationInput[]
    createMany?: PropertyCreateManyLocationInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<PropertyCreateWithoutLocationInput, PropertyUncheckedCreateWithoutLocationInput> | PropertyCreateWithoutLocationInput[] | PropertyUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutLocationInput | PropertyCreateOrConnectWithoutLocationInput[]
    createMany?: PropertyCreateManyLocationInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

<<<<<<< HEAD
=======
  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
  export type PropertyUpdateManyWithoutLocationNestedInput = {
    create?: XOR<PropertyCreateWithoutLocationInput, PropertyUncheckedCreateWithoutLocationInput> | PropertyCreateWithoutLocationInput[] | PropertyUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutLocationInput | PropertyCreateOrConnectWithoutLocationInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutLocationInput | PropertyUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: PropertyCreateManyLocationInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutLocationInput | PropertyUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutLocationInput | PropertyUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PropertyUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<PropertyCreateWithoutLocationInput, PropertyUncheckedCreateWithoutLocationInput> | PropertyCreateWithoutLocationInput[] | PropertyUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutLocationInput | PropertyCreateOrConnectWithoutLocationInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutLocationInput | PropertyUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: PropertyCreateManyLocationInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutLocationInput | PropertyUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutLocationInput | PropertyUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type LocationCreateNestedOneWithoutPropertyInput = {
    create?: XOR<LocationCreateWithoutPropertyInput, LocationUncheckedCreateWithoutPropertyInput>
    connectOrCreate?: LocationCreateOrConnectWithoutPropertyInput
    connect?: LocationWhereUniqueInput
  }

  export type PropertyImagesCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyImagesCreateWithoutPropertyInput, PropertyImagesUncheckedCreateWithoutPropertyInput> | PropertyImagesCreateWithoutPropertyInput[] | PropertyImagesUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImagesCreateOrConnectWithoutPropertyInput | PropertyImagesCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyImagesCreateManyPropertyInputEnvelope
    connect?: PropertyImagesWhereUniqueInput | PropertyImagesWhereUniqueInput[]
  }

  export type TenantCreateNestedOneWithoutPropertyInput = {
    create?: XOR<TenantCreateWithoutPropertyInput, TenantUncheckedCreateWithoutPropertyInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPropertyInput
    connect?: TenantWhereUniqueInput
  }

  export type RoomTypesCreateNestedManyWithoutPropertyInput = {
    create?: XOR<RoomTypesCreateWithoutPropertyInput, RoomTypesUncheckedCreateWithoutPropertyInput> | RoomTypesCreateWithoutPropertyInput[] | RoomTypesUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RoomTypesCreateOrConnectWithoutPropertyInput | RoomTypesCreateOrConnectWithoutPropertyInput[]
    createMany?: RoomTypesCreateManyPropertyInputEnvelope
    connect?: RoomTypesWhereUniqueInput | RoomTypesWhereUniqueInput[]
  }

  export type PropertyImagesUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyImagesCreateWithoutPropertyInput, PropertyImagesUncheckedCreateWithoutPropertyInput> | PropertyImagesCreateWithoutPropertyInput[] | PropertyImagesUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImagesCreateOrConnectWithoutPropertyInput | PropertyImagesCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyImagesCreateManyPropertyInputEnvelope
    connect?: PropertyImagesWhereUniqueInput | PropertyImagesWhereUniqueInput[]
  }

  export type RoomTypesUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<RoomTypesCreateWithoutPropertyInput, RoomTypesUncheckedCreateWithoutPropertyInput> | RoomTypesCreateWithoutPropertyInput[] | RoomTypesUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RoomTypesCreateOrConnectWithoutPropertyInput | RoomTypesCreateOrConnectWithoutPropertyInput[]
    createMany?: RoomTypesCreateManyPropertyInputEnvelope
    connect?: RoomTypesWhereUniqueInput | RoomTypesWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LocationUpdateOneRequiredWithoutPropertyNestedInput = {
    create?: XOR<LocationCreateWithoutPropertyInput, LocationUncheckedCreateWithoutPropertyInput>
    connectOrCreate?: LocationCreateOrConnectWithoutPropertyInput
    upsert?: LocationUpsertWithoutPropertyInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutPropertyInput, LocationUpdateWithoutPropertyInput>, LocationUncheckedUpdateWithoutPropertyInput>
  }

  export type PropertyImagesUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyImagesCreateWithoutPropertyInput, PropertyImagesUncheckedCreateWithoutPropertyInput> | PropertyImagesCreateWithoutPropertyInput[] | PropertyImagesUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImagesCreateOrConnectWithoutPropertyInput | PropertyImagesCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyImagesUpsertWithWhereUniqueWithoutPropertyInput | PropertyImagesUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyImagesCreateManyPropertyInputEnvelope
    set?: PropertyImagesWhereUniqueInput | PropertyImagesWhereUniqueInput[]
    disconnect?: PropertyImagesWhereUniqueInput | PropertyImagesWhereUniqueInput[]
    delete?: PropertyImagesWhereUniqueInput | PropertyImagesWhereUniqueInput[]
    connect?: PropertyImagesWhereUniqueInput | PropertyImagesWhereUniqueInput[]
    update?: PropertyImagesUpdateWithWhereUniqueWithoutPropertyInput | PropertyImagesUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyImagesUpdateManyWithWhereWithoutPropertyInput | PropertyImagesUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyImagesScalarWhereInput | PropertyImagesScalarWhereInput[]
  }

  export type TenantUpdateOneRequiredWithoutPropertyNestedInput = {
    create?: XOR<TenantCreateWithoutPropertyInput, TenantUncheckedCreateWithoutPropertyInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPropertyInput
    upsert?: TenantUpsertWithoutPropertyInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutPropertyInput, TenantUpdateWithoutPropertyInput>, TenantUncheckedUpdateWithoutPropertyInput>
  }

  export type RoomTypesUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<RoomTypesCreateWithoutPropertyInput, RoomTypesUncheckedCreateWithoutPropertyInput> | RoomTypesCreateWithoutPropertyInput[] | RoomTypesUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RoomTypesCreateOrConnectWithoutPropertyInput | RoomTypesCreateOrConnectWithoutPropertyInput[]
    upsert?: RoomTypesUpsertWithWhereUniqueWithoutPropertyInput | RoomTypesUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: RoomTypesCreateManyPropertyInputEnvelope
    set?: RoomTypesWhereUniqueInput | RoomTypesWhereUniqueInput[]
    disconnect?: RoomTypesWhereUniqueInput | RoomTypesWhereUniqueInput[]
    delete?: RoomTypesWhereUniqueInput | RoomTypesWhereUniqueInput[]
    connect?: RoomTypesWhereUniqueInput | RoomTypesWhereUniqueInput[]
    update?: RoomTypesUpdateWithWhereUniqueWithoutPropertyInput | RoomTypesUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: RoomTypesUpdateManyWithWhereWithoutPropertyInput | RoomTypesUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: RoomTypesScalarWhereInput | RoomTypesScalarWhereInput[]
  }

  export type PropertyImagesUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyImagesCreateWithoutPropertyInput, PropertyImagesUncheckedCreateWithoutPropertyInput> | PropertyImagesCreateWithoutPropertyInput[] | PropertyImagesUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImagesCreateOrConnectWithoutPropertyInput | PropertyImagesCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyImagesUpsertWithWhereUniqueWithoutPropertyInput | PropertyImagesUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyImagesCreateManyPropertyInputEnvelope
    set?: PropertyImagesWhereUniqueInput | PropertyImagesWhereUniqueInput[]
    disconnect?: PropertyImagesWhereUniqueInput | PropertyImagesWhereUniqueInput[]
    delete?: PropertyImagesWhereUniqueInput | PropertyImagesWhereUniqueInput[]
    connect?: PropertyImagesWhereUniqueInput | PropertyImagesWhereUniqueInput[]
    update?: PropertyImagesUpdateWithWhereUniqueWithoutPropertyInput | PropertyImagesUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyImagesUpdateManyWithWhereWithoutPropertyInput | PropertyImagesUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyImagesScalarWhereInput | PropertyImagesScalarWhereInput[]
  }

  export type RoomTypesUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<RoomTypesCreateWithoutPropertyInput, RoomTypesUncheckedCreateWithoutPropertyInput> | RoomTypesCreateWithoutPropertyInput[] | RoomTypesUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RoomTypesCreateOrConnectWithoutPropertyInput | RoomTypesCreateOrConnectWithoutPropertyInput[]
    upsert?: RoomTypesUpsertWithWhereUniqueWithoutPropertyInput | RoomTypesUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: RoomTypesCreateManyPropertyInputEnvelope
    set?: RoomTypesWhereUniqueInput | RoomTypesWhereUniqueInput[]
    disconnect?: RoomTypesWhereUniqueInput | RoomTypesWhereUniqueInput[]
    delete?: RoomTypesWhereUniqueInput | RoomTypesWhereUniqueInput[]
    connect?: RoomTypesWhereUniqueInput | RoomTypesWhereUniqueInput[]
    update?: RoomTypesUpdateWithWhereUniqueWithoutPropertyInput | RoomTypesUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: RoomTypesUpdateManyWithWhereWithoutPropertyInput | RoomTypesUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: RoomTypesScalarWhereInput | RoomTypesScalarWhereInput[]
  }

  export type PropertyCreateNestedOneWithoutPropertyImagesInput = {
    create?: XOR<PropertyCreateWithoutPropertyImagesInput, PropertyUncheckedCreateWithoutPropertyImagesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutPropertyImagesInput
    connect?: PropertyWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutPropertyImagesNestedInput = {
    create?: XOR<PropertyCreateWithoutPropertyImagesInput, PropertyUncheckedCreateWithoutPropertyImagesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutPropertyImagesInput
    upsert?: PropertyUpsertWithoutPropertyImagesInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutPropertyImagesInput, PropertyUpdateWithoutPropertyImagesInput>, PropertyUncheckedUpdateWithoutPropertyImagesInput>
  }

  export type PropertyCreateNestedOneWithoutRoomTypesInput = {
    create?: XOR<PropertyCreateWithoutRoomTypesInput, PropertyUncheckedCreateWithoutRoomTypesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutRoomTypesInput
    connect?: PropertyWhereUniqueInput
  }

  export type RoomImagesCreateNestedManyWithoutRoom_typesInput = {
    create?: XOR<RoomImagesCreateWithoutRoom_typesInput, RoomImagesUncheckedCreateWithoutRoom_typesInput> | RoomImagesCreateWithoutRoom_typesInput[] | RoomImagesUncheckedCreateWithoutRoom_typesInput[]
    connectOrCreate?: RoomImagesCreateOrConnectWithoutRoom_typesInput | RoomImagesCreateOrConnectWithoutRoom_typesInput[]
    createMany?: RoomImagesCreateManyRoom_typesInputEnvelope
    connect?: RoomImagesWhereUniqueInput | RoomImagesWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutRoom_typesInput = {
    create?: XOR<BookingCreateWithoutRoom_typesInput, BookingUncheckedCreateWithoutRoom_typesInput> | BookingCreateWithoutRoom_typesInput[] | BookingUncheckedCreateWithoutRoom_typesInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoom_typesInput | BookingCreateOrConnectWithoutRoom_typesInput[]
    createMany?: BookingCreateManyRoom_typesInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutRoom_typesInput = {
    create?: XOR<ReviewCreateWithoutRoom_typesInput, ReviewUncheckedCreateWithoutRoom_typesInput> | ReviewCreateWithoutRoom_typesInput[] | ReviewUncheckedCreateWithoutRoom_typesInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRoom_typesInput | ReviewCreateOrConnectWithoutRoom_typesInput[]
    createMany?: ReviewCreateManyRoom_typesInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type UnavailableCreateNestedManyWithoutRoom_typesInput = {
    create?: XOR<UnavailableCreateWithoutRoom_typesInput, UnavailableUncheckedCreateWithoutRoom_typesInput> | UnavailableCreateWithoutRoom_typesInput[] | UnavailableUncheckedCreateWithoutRoom_typesInput[]
    connectOrCreate?: UnavailableCreateOrConnectWithoutRoom_typesInput | UnavailableCreateOrConnectWithoutRoom_typesInput[]
    createMany?: UnavailableCreateManyRoom_typesInputEnvelope
    connect?: UnavailableWhereUniqueInput | UnavailableWhereUniqueInput[]
  }

  export type RoomImagesUncheckedCreateNestedManyWithoutRoom_typesInput = {
    create?: XOR<RoomImagesCreateWithoutRoom_typesInput, RoomImagesUncheckedCreateWithoutRoom_typesInput> | RoomImagesCreateWithoutRoom_typesInput[] | RoomImagesUncheckedCreateWithoutRoom_typesInput[]
    connectOrCreate?: RoomImagesCreateOrConnectWithoutRoom_typesInput | RoomImagesCreateOrConnectWithoutRoom_typesInput[]
    createMany?: RoomImagesCreateManyRoom_typesInputEnvelope
    connect?: RoomImagesWhereUniqueInput | RoomImagesWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutRoom_typesInput = {
    create?: XOR<BookingCreateWithoutRoom_typesInput, BookingUncheckedCreateWithoutRoom_typesInput> | BookingCreateWithoutRoom_typesInput[] | BookingUncheckedCreateWithoutRoom_typesInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoom_typesInput | BookingCreateOrConnectWithoutRoom_typesInput[]
    createMany?: BookingCreateManyRoom_typesInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutRoom_typesInput = {
    create?: XOR<ReviewCreateWithoutRoom_typesInput, ReviewUncheckedCreateWithoutRoom_typesInput> | ReviewCreateWithoutRoom_typesInput[] | ReviewUncheckedCreateWithoutRoom_typesInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRoom_typesInput | ReviewCreateOrConnectWithoutRoom_typesInput[]
    createMany?: ReviewCreateManyRoom_typesInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type UnavailableUncheckedCreateNestedManyWithoutRoom_typesInput = {
    create?: XOR<UnavailableCreateWithoutRoom_typesInput, UnavailableUncheckedCreateWithoutRoom_typesInput> | UnavailableCreateWithoutRoom_typesInput[] | UnavailableUncheckedCreateWithoutRoom_typesInput[]
    connectOrCreate?: UnavailableCreateOrConnectWithoutRoom_typesInput | UnavailableCreateOrConnectWithoutRoom_typesInput[]
    createMany?: UnavailableCreateManyRoom_typesInputEnvelope
    connect?: UnavailableWhereUniqueInput | UnavailableWhereUniqueInput[]
  }

  export type PropertyUpdateOneRequiredWithoutRoomTypesNestedInput = {
    create?: XOR<PropertyCreateWithoutRoomTypesInput, PropertyUncheckedCreateWithoutRoomTypesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutRoomTypesInput
    upsert?: PropertyUpsertWithoutRoomTypesInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutRoomTypesInput, PropertyUpdateWithoutRoomTypesInput>, PropertyUncheckedUpdateWithoutRoomTypesInput>
  }

  export type RoomImagesUpdateManyWithoutRoom_typesNestedInput = {
    create?: XOR<RoomImagesCreateWithoutRoom_typesInput, RoomImagesUncheckedCreateWithoutRoom_typesInput> | RoomImagesCreateWithoutRoom_typesInput[] | RoomImagesUncheckedCreateWithoutRoom_typesInput[]
    connectOrCreate?: RoomImagesCreateOrConnectWithoutRoom_typesInput | RoomImagesCreateOrConnectWithoutRoom_typesInput[]
    upsert?: RoomImagesUpsertWithWhereUniqueWithoutRoom_typesInput | RoomImagesUpsertWithWhereUniqueWithoutRoom_typesInput[]
    createMany?: RoomImagesCreateManyRoom_typesInputEnvelope
    set?: RoomImagesWhereUniqueInput | RoomImagesWhereUniqueInput[]
    disconnect?: RoomImagesWhereUniqueInput | RoomImagesWhereUniqueInput[]
    delete?: RoomImagesWhereUniqueInput | RoomImagesWhereUniqueInput[]
    connect?: RoomImagesWhereUniqueInput | RoomImagesWhereUniqueInput[]
    update?: RoomImagesUpdateWithWhereUniqueWithoutRoom_typesInput | RoomImagesUpdateWithWhereUniqueWithoutRoom_typesInput[]
    updateMany?: RoomImagesUpdateManyWithWhereWithoutRoom_typesInput | RoomImagesUpdateManyWithWhereWithoutRoom_typesInput[]
    deleteMany?: RoomImagesScalarWhereInput | RoomImagesScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutRoom_typesNestedInput = {
    create?: XOR<BookingCreateWithoutRoom_typesInput, BookingUncheckedCreateWithoutRoom_typesInput> | BookingCreateWithoutRoom_typesInput[] | BookingUncheckedCreateWithoutRoom_typesInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoom_typesInput | BookingCreateOrConnectWithoutRoom_typesInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutRoom_typesInput | BookingUpsertWithWhereUniqueWithoutRoom_typesInput[]
    createMany?: BookingCreateManyRoom_typesInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutRoom_typesInput | BookingUpdateWithWhereUniqueWithoutRoom_typesInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutRoom_typesInput | BookingUpdateManyWithWhereWithoutRoom_typesInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutRoom_typesNestedInput = {
    create?: XOR<ReviewCreateWithoutRoom_typesInput, ReviewUncheckedCreateWithoutRoom_typesInput> | ReviewCreateWithoutRoom_typesInput[] | ReviewUncheckedCreateWithoutRoom_typesInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRoom_typesInput | ReviewCreateOrConnectWithoutRoom_typesInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutRoom_typesInput | ReviewUpsertWithWhereUniqueWithoutRoom_typesInput[]
    createMany?: ReviewCreateManyRoom_typesInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutRoom_typesInput | ReviewUpdateWithWhereUniqueWithoutRoom_typesInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutRoom_typesInput | ReviewUpdateManyWithWhereWithoutRoom_typesInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UnavailableUpdateManyWithoutRoom_typesNestedInput = {
    create?: XOR<UnavailableCreateWithoutRoom_typesInput, UnavailableUncheckedCreateWithoutRoom_typesInput> | UnavailableCreateWithoutRoom_typesInput[] | UnavailableUncheckedCreateWithoutRoom_typesInput[]
    connectOrCreate?: UnavailableCreateOrConnectWithoutRoom_typesInput | UnavailableCreateOrConnectWithoutRoom_typesInput[]
    upsert?: UnavailableUpsertWithWhereUniqueWithoutRoom_typesInput | UnavailableUpsertWithWhereUniqueWithoutRoom_typesInput[]
    createMany?: UnavailableCreateManyRoom_typesInputEnvelope
    set?: UnavailableWhereUniqueInput | UnavailableWhereUniqueInput[]
    disconnect?: UnavailableWhereUniqueInput | UnavailableWhereUniqueInput[]
    delete?: UnavailableWhereUniqueInput | UnavailableWhereUniqueInput[]
    connect?: UnavailableWhereUniqueInput | UnavailableWhereUniqueInput[]
    update?: UnavailableUpdateWithWhereUniqueWithoutRoom_typesInput | UnavailableUpdateWithWhereUniqueWithoutRoom_typesInput[]
    updateMany?: UnavailableUpdateManyWithWhereWithoutRoom_typesInput | UnavailableUpdateManyWithWhereWithoutRoom_typesInput[]
    deleteMany?: UnavailableScalarWhereInput | UnavailableScalarWhereInput[]
  }

  export type RoomImagesUncheckedUpdateManyWithoutRoom_typesNestedInput = {
    create?: XOR<RoomImagesCreateWithoutRoom_typesInput, RoomImagesUncheckedCreateWithoutRoom_typesInput> | RoomImagesCreateWithoutRoom_typesInput[] | RoomImagesUncheckedCreateWithoutRoom_typesInput[]
    connectOrCreate?: RoomImagesCreateOrConnectWithoutRoom_typesInput | RoomImagesCreateOrConnectWithoutRoom_typesInput[]
    upsert?: RoomImagesUpsertWithWhereUniqueWithoutRoom_typesInput | RoomImagesUpsertWithWhereUniqueWithoutRoom_typesInput[]
    createMany?: RoomImagesCreateManyRoom_typesInputEnvelope
    set?: RoomImagesWhereUniqueInput | RoomImagesWhereUniqueInput[]
    disconnect?: RoomImagesWhereUniqueInput | RoomImagesWhereUniqueInput[]
    delete?: RoomImagesWhereUniqueInput | RoomImagesWhereUniqueInput[]
    connect?: RoomImagesWhereUniqueInput | RoomImagesWhereUniqueInput[]
    update?: RoomImagesUpdateWithWhereUniqueWithoutRoom_typesInput | RoomImagesUpdateWithWhereUniqueWithoutRoom_typesInput[]
    updateMany?: RoomImagesUpdateManyWithWhereWithoutRoom_typesInput | RoomImagesUpdateManyWithWhereWithoutRoom_typesInput[]
    deleteMany?: RoomImagesScalarWhereInput | RoomImagesScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutRoom_typesNestedInput = {
    create?: XOR<BookingCreateWithoutRoom_typesInput, BookingUncheckedCreateWithoutRoom_typesInput> | BookingCreateWithoutRoom_typesInput[] | BookingUncheckedCreateWithoutRoom_typesInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoom_typesInput | BookingCreateOrConnectWithoutRoom_typesInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutRoom_typesInput | BookingUpsertWithWhereUniqueWithoutRoom_typesInput[]
    createMany?: BookingCreateManyRoom_typesInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutRoom_typesInput | BookingUpdateWithWhereUniqueWithoutRoom_typesInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutRoom_typesInput | BookingUpdateManyWithWhereWithoutRoom_typesInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutRoom_typesNestedInput = {
    create?: XOR<ReviewCreateWithoutRoom_typesInput, ReviewUncheckedCreateWithoutRoom_typesInput> | ReviewCreateWithoutRoom_typesInput[] | ReviewUncheckedCreateWithoutRoom_typesInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRoom_typesInput | ReviewCreateOrConnectWithoutRoom_typesInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutRoom_typesInput | ReviewUpsertWithWhereUniqueWithoutRoom_typesInput[]
    createMany?: ReviewCreateManyRoom_typesInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutRoom_typesInput | ReviewUpdateWithWhereUniqueWithoutRoom_typesInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutRoom_typesInput | ReviewUpdateManyWithWhereWithoutRoom_typesInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UnavailableUncheckedUpdateManyWithoutRoom_typesNestedInput = {
    create?: XOR<UnavailableCreateWithoutRoom_typesInput, UnavailableUncheckedCreateWithoutRoom_typesInput> | UnavailableCreateWithoutRoom_typesInput[] | UnavailableUncheckedCreateWithoutRoom_typesInput[]
    connectOrCreate?: UnavailableCreateOrConnectWithoutRoom_typesInput | UnavailableCreateOrConnectWithoutRoom_typesInput[]
    upsert?: UnavailableUpsertWithWhereUniqueWithoutRoom_typesInput | UnavailableUpsertWithWhereUniqueWithoutRoom_typesInput[]
    createMany?: UnavailableCreateManyRoom_typesInputEnvelope
    set?: UnavailableWhereUniqueInput | UnavailableWhereUniqueInput[]
    disconnect?: UnavailableWhereUniqueInput | UnavailableWhereUniqueInput[]
    delete?: UnavailableWhereUniqueInput | UnavailableWhereUniqueInput[]
    connect?: UnavailableWhereUniqueInput | UnavailableWhereUniqueInput[]
    update?: UnavailableUpdateWithWhereUniqueWithoutRoom_typesInput | UnavailableUpdateWithWhereUniqueWithoutRoom_typesInput[]
    updateMany?: UnavailableUpdateManyWithWhereWithoutRoom_typesInput | UnavailableUpdateManyWithWhereWithoutRoom_typesInput[]
    deleteMany?: UnavailableScalarWhereInput | UnavailableScalarWhereInput[]
  }

  export type RoomTypesCreateNestedOneWithoutRoomImagesInput = {
    create?: XOR<RoomTypesCreateWithoutRoomImagesInput, RoomTypesUncheckedCreateWithoutRoomImagesInput>
    connectOrCreate?: RoomTypesCreateOrConnectWithoutRoomImagesInput
    connect?: RoomTypesWhereUniqueInput
  }

  export type RoomTypesUpdateOneRequiredWithoutRoomImagesNestedInput = {
    create?: XOR<RoomTypesCreateWithoutRoomImagesInput, RoomTypesUncheckedCreateWithoutRoomImagesInput>
    connectOrCreate?: RoomTypesCreateOrConnectWithoutRoomImagesInput
    upsert?: RoomTypesUpsertWithoutRoomImagesInput
    connect?: RoomTypesWhereUniqueInput
    update?: XOR<XOR<RoomTypesUpdateToOneWithWhereWithoutRoomImagesInput, RoomTypesUpdateWithoutRoomImagesInput>, RoomTypesUncheckedUpdateWithoutRoomImagesInput>
  }

  export type RoomTypesCreateNestedOneWithoutUnavailableInput = {
    create?: XOR<RoomTypesCreateWithoutUnavailableInput, RoomTypesUncheckedCreateWithoutUnavailableInput>
    connectOrCreate?: RoomTypesCreateOrConnectWithoutUnavailableInput
    connect?: RoomTypesWhereUniqueInput
  }

  export type RoomTypesUpdateOneRequiredWithoutUnavailableNestedInput = {
    create?: XOR<RoomTypesCreateWithoutUnavailableInput, RoomTypesUncheckedCreateWithoutUnavailableInput>
    connectOrCreate?: RoomTypesCreateOrConnectWithoutUnavailableInput
    upsert?: RoomTypesUpsertWithoutUnavailableInput
    connect?: RoomTypesWhereUniqueInput
    update?: XOR<XOR<RoomTypesUpdateToOneWithWhereWithoutUnavailableInput, RoomTypesUpdateWithoutUnavailableInput>, RoomTypesUncheckedUpdateWithoutUnavailableInput>
  }

  export type UserCreateNestedOneWithoutBookingInput = {
    create?: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingInput
    connect?: UserWhereUniqueInput
  }

  export type RoomTypesCreateNestedOneWithoutBookingInput = {
    create?: XOR<RoomTypesCreateWithoutBookingInput, RoomTypesUncheckedCreateWithoutBookingInput>
    connectOrCreate?: RoomTypesCreateOrConnectWithoutBookingInput
    connect?: RoomTypesWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutBookingInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput> | ReviewCreateWithoutBookingInput[] | ReviewUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput | ReviewCreateOrConnectWithoutBookingInput[]
    createMany?: ReviewCreateManyBookingInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput> | ReviewCreateWithoutBookingInput[] | ReviewUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput | ReviewCreateOrConnectWithoutBookingInput[]
    createMany?: ReviewCreateManyBookingInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type NullableEnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod | null
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type UserUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingInput
    upsert?: UserUpsertWithoutBookingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingInput, UserUpdateWithoutBookingInput>, UserUncheckedUpdateWithoutBookingInput>
  }

  export type RoomTypesUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<RoomTypesCreateWithoutBookingInput, RoomTypesUncheckedCreateWithoutBookingInput>
    connectOrCreate?: RoomTypesCreateOrConnectWithoutBookingInput
    upsert?: RoomTypesUpsertWithoutBookingInput
    connect?: RoomTypesWhereUniqueInput
    update?: XOR<XOR<RoomTypesUpdateToOneWithWhereWithoutBookingInput, RoomTypesUpdateWithoutBookingInput>, RoomTypesUncheckedUpdateWithoutBookingInput>
  }

  export type ReviewUpdateManyWithoutBookingNestedInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput> | ReviewCreateWithoutBookingInput[] | ReviewUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput | ReviewCreateOrConnectWithoutBookingInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutBookingInput | ReviewUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: ReviewCreateManyBookingInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutBookingInput | ReviewUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutBookingInput | ReviewUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput> | ReviewCreateWithoutBookingInput[] | ReviewUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput | ReviewCreateOrConnectWithoutBookingInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutBookingInput | ReviewUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: ReviewCreateManyBookingInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutBookingInput | ReviewUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutBookingInput | ReviewUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReviewInput = {
    create?: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewInput
    connect?: UserWhereUniqueInput
  }

  export type RoomTypesCreateNestedOneWithoutReviewInput = {
    create?: XOR<RoomTypesCreateWithoutReviewInput, RoomTypesUncheckedCreateWithoutReviewInput>
    connectOrCreate?: RoomTypesCreateOrConnectWithoutReviewInput
    connect?: RoomTypesWhereUniqueInput
  }

  export type BookingCreateNestedOneWithoutReviewInput = {
    create?: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
    connectOrCreate?: BookingCreateOrConnectWithoutReviewInput
    connect?: BookingWhereUniqueInput
  }

  export type ReviewRepliesCreateNestedManyWithoutReviewInput = {
    create?: XOR<ReviewRepliesCreateWithoutReviewInput, ReviewRepliesUncheckedCreateWithoutReviewInput> | ReviewRepliesCreateWithoutReviewInput[] | ReviewRepliesUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewRepliesCreateOrConnectWithoutReviewInput | ReviewRepliesCreateOrConnectWithoutReviewInput[]
    createMany?: ReviewRepliesCreateManyReviewInputEnvelope
    connect?: ReviewRepliesWhereUniqueInput | ReviewRepliesWhereUniqueInput[]
  }

  export type ReviewRepliesUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<ReviewRepliesCreateWithoutReviewInput, ReviewRepliesUncheckedCreateWithoutReviewInput> | ReviewRepliesCreateWithoutReviewInput[] | ReviewRepliesUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewRepliesCreateOrConnectWithoutReviewInput | ReviewRepliesCreateOrConnectWithoutReviewInput[]
    createMany?: ReviewRepliesCreateManyReviewInputEnvelope
    connect?: ReviewRepliesWhereUniqueInput | ReviewRepliesWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewInput
    upsert?: UserUpsertWithoutReviewInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewInput, UserUpdateWithoutReviewInput>, UserUncheckedUpdateWithoutReviewInput>
  }

  export type RoomTypesUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<RoomTypesCreateWithoutReviewInput, RoomTypesUncheckedCreateWithoutReviewInput>
    connectOrCreate?: RoomTypesCreateOrConnectWithoutReviewInput
    upsert?: RoomTypesUpsertWithoutReviewInput
    connect?: RoomTypesWhereUniqueInput
    update?: XOR<XOR<RoomTypesUpdateToOneWithWhereWithoutReviewInput, RoomTypesUpdateWithoutReviewInput>, RoomTypesUncheckedUpdateWithoutReviewInput>
  }

  export type BookingUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
    connectOrCreate?: BookingCreateOrConnectWithoutReviewInput
    upsert?: BookingUpsertWithoutReviewInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutReviewInput, BookingUpdateWithoutReviewInput>, BookingUncheckedUpdateWithoutReviewInput>
  }

  export type ReviewRepliesUpdateManyWithoutReviewNestedInput = {
    create?: XOR<ReviewRepliesCreateWithoutReviewInput, ReviewRepliesUncheckedCreateWithoutReviewInput> | ReviewRepliesCreateWithoutReviewInput[] | ReviewRepliesUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewRepliesCreateOrConnectWithoutReviewInput | ReviewRepliesCreateOrConnectWithoutReviewInput[]
    upsert?: ReviewRepliesUpsertWithWhereUniqueWithoutReviewInput | ReviewRepliesUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: ReviewRepliesCreateManyReviewInputEnvelope
    set?: ReviewRepliesWhereUniqueInput | ReviewRepliesWhereUniqueInput[]
    disconnect?: ReviewRepliesWhereUniqueInput | ReviewRepliesWhereUniqueInput[]
    delete?: ReviewRepliesWhereUniqueInput | ReviewRepliesWhereUniqueInput[]
    connect?: ReviewRepliesWhereUniqueInput | ReviewRepliesWhereUniqueInput[]
    update?: ReviewRepliesUpdateWithWhereUniqueWithoutReviewInput | ReviewRepliesUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: ReviewRepliesUpdateManyWithWhereWithoutReviewInput | ReviewRepliesUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: ReviewRepliesScalarWhereInput | ReviewRepliesScalarWhereInput[]
  }

  export type ReviewRepliesUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<ReviewRepliesCreateWithoutReviewInput, ReviewRepliesUncheckedCreateWithoutReviewInput> | ReviewRepliesCreateWithoutReviewInput[] | ReviewRepliesUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewRepliesCreateOrConnectWithoutReviewInput | ReviewRepliesCreateOrConnectWithoutReviewInput[]
    upsert?: ReviewRepliesUpsertWithWhereUniqueWithoutReviewInput | ReviewRepliesUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: ReviewRepliesCreateManyReviewInputEnvelope
    set?: ReviewRepliesWhereUniqueInput | ReviewRepliesWhereUniqueInput[]
    disconnect?: ReviewRepliesWhereUniqueInput | ReviewRepliesWhereUniqueInput[]
    delete?: ReviewRepliesWhereUniqueInput | ReviewRepliesWhereUniqueInput[]
    connect?: ReviewRepliesWhereUniqueInput | ReviewRepliesWhereUniqueInput[]
    update?: ReviewRepliesUpdateWithWhereUniqueWithoutReviewInput | ReviewRepliesUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: ReviewRepliesUpdateManyWithWhereWithoutReviewInput | ReviewRepliesUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: ReviewRepliesScalarWhereInput | ReviewRepliesScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutReviewRepliesInput = {
    create?: XOR<TenantCreateWithoutReviewRepliesInput, TenantUncheckedCreateWithoutReviewRepliesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutReviewRepliesInput
    connect?: TenantWhereUniqueInput
  }

  export type ReviewCreateNestedOneWithoutReviewRepliesInput = {
    create?: XOR<ReviewCreateWithoutReviewRepliesInput, ReviewUncheckedCreateWithoutReviewRepliesInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewRepliesInput
    connect?: ReviewWhereUniqueInput
  }

  export type TenantUpdateOneRequiredWithoutReviewRepliesNestedInput = {
    create?: XOR<TenantCreateWithoutReviewRepliesInput, TenantUncheckedCreateWithoutReviewRepliesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutReviewRepliesInput
    upsert?: TenantUpsertWithoutReviewRepliesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutReviewRepliesInput, TenantUpdateWithoutReviewRepliesInput>, TenantUncheckedUpdateWithoutReviewRepliesInput>
  }

  export type ReviewUpdateOneRequiredWithoutReviewRepliesNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewRepliesInput, ReviewUncheckedCreateWithoutReviewRepliesInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewRepliesInput
    upsert?: ReviewUpsertWithoutReviewRepliesInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutReviewRepliesInput, ReviewUpdateWithoutReviewRepliesInput>, ReviewUncheckedUpdateWithoutReviewRepliesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

<<<<<<< HEAD
=======
  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

<<<<<<< HEAD
=======
  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

<<<<<<< HEAD
  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
  export type NestedEnumPaymentMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentMethodNullableFilter<$PrismaModel> | $Enums.PaymentMethod | null
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type BookingCreateWithoutUserInput = {
    id?: string
    num_of_guests: number
    total_price: number
    details?: NullableJsonNullValueInput | InputJsonValue
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    payment_proof?: string | null
    payment_method?: $Enums.PaymentMethod | null
    status?: $Enums.BookingStatus
    room_types: RoomTypesCreateNestedOneWithoutBookingInput
    Review?: ReviewCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: string
    num_of_guests: number
    total_price: number
    details?: NullableJsonNullValueInput | InputJsonValue
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    payment_proof?: string | null
    payment_method?: $Enums.PaymentMethod | null
    status?: $Enums.BookingStatus
    room_types_id: number
    Review?: ReviewUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    rating: number
    review: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    room_types: RoomTypesCreateNestedOneWithoutReviewInput
    booking: BookingCreateNestedOneWithoutReviewInput
    ReviewReplies?: ReviewRepliesCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    rating: number
    review: string
    room_types_id: number
    booking_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    ReviewReplies?: ReviewRepliesUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    num_of_guests?: IntFilter<"Booking"> | number
    total_price?: IntFilter<"Booking"> | number
    details?: JsonNullableFilter<"Booking">
    start_date?: DateTimeFilter<"Booking"> | Date | string
    end_date?: DateTimeFilter<"Booking"> | Date | string
    created_at?: DateTimeFilter<"Booking"> | Date | string
    updated_at?: DateTimeFilter<"Booking"> | Date | string
    payment_proof?: StringNullableFilter<"Booking"> | string | null
    payment_method?: EnumPaymentMethodNullableFilter<"Booking"> | $Enums.PaymentMethod | null
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    user_id?: StringFilter<"Booking"> | string
    room_types_id?: IntFilter<"Booking"> | number
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    review?: StringFilter<"Review"> | string
    user_id?: StringFilter<"Review"> | string
    room_types_id?: IntFilter<"Review"> | number
    booking_id?: StringFilter<"Review"> | string
    created_at?: DateTimeFilter<"Review"> | Date | string
    updated_at?: DateTimeFilter<"Review"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Review"> | Date | string | null
  }

  export type PropertyCreateWithoutTenantInput = {
    name: string
    desc?: string | null
    category: string
    terms_condition?: string | null
<<<<<<< HEAD
    room_available: number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: number | null
    isAvailable?: boolean
    location: LocationCreateNestedOneWithoutPropertyInput
    PropertyImages?: PropertyImagesCreateNestedManyWithoutPropertyInput
    RoomTypes?: RoomTypesCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutTenantInput = {
    id?: number
    name: string
    desc?: string | null
    category: string
    terms_condition?: string | null
<<<<<<< HEAD
    room_available: number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: number | null
    location_id: number
    isAvailable?: boolean
    PropertyImages?: PropertyImagesUncheckedCreateNestedManyWithoutPropertyInput
    RoomTypes?: RoomTypesUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutTenantInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput>
  }

  export type PropertyCreateManyTenantInputEnvelope = {
    data: PropertyCreateManyTenantInput | PropertyCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type ReviewRepliesCreateWithoutTenantInput = {
    reply: string
    review: ReviewCreateNestedOneWithoutReviewRepliesInput
  }

  export type ReviewRepliesUncheckedCreateWithoutTenantInput = {
    id?: number
    review_id: number
    reply: string
  }

  export type ReviewRepliesCreateOrConnectWithoutTenantInput = {
    where: ReviewRepliesWhereUniqueInput
    create: XOR<ReviewRepliesCreateWithoutTenantInput, ReviewRepliesUncheckedCreateWithoutTenantInput>
  }

  export type ReviewRepliesCreateManyTenantInputEnvelope = {
    data: ReviewRepliesCreateManyTenantInput | ReviewRepliesCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithWhereUniqueWithoutTenantInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutTenantInput, PropertyUncheckedUpdateWithoutTenantInput>
    create: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutTenantInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutTenantInput, PropertyUncheckedUpdateWithoutTenantInput>
  }

  export type PropertyUpdateManyWithWhereWithoutTenantInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutTenantInput>
  }

  export type PropertyScalarWhereInput = {
    AND?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    OR?: PropertyScalarWhereInput[]
    NOT?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    id?: IntFilter<"Property"> | number
    name?: StringFilter<"Property"> | string
    desc?: StringNullableFilter<"Property"> | string | null
    category?: StringFilter<"Property"> | string
    terms_condition?: StringNullableFilter<"Property"> | string | null
<<<<<<< HEAD
    room_available?: IntFilter<"Property"> | number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: IntNullableFilter<"Property"> | number | null
    location_id?: IntFilter<"Property"> | number
    tenantId?: StringFilter<"Property"> | string
    isAvailable?: BoolFilter<"Property"> | boolean
  }

  export type ReviewRepliesUpsertWithWhereUniqueWithoutTenantInput = {
    where: ReviewRepliesWhereUniqueInput
    update: XOR<ReviewRepliesUpdateWithoutTenantInput, ReviewRepliesUncheckedUpdateWithoutTenantInput>
    create: XOR<ReviewRepliesCreateWithoutTenantInput, ReviewRepliesUncheckedCreateWithoutTenantInput>
  }

  export type ReviewRepliesUpdateWithWhereUniqueWithoutTenantInput = {
    where: ReviewRepliesWhereUniqueInput
    data: XOR<ReviewRepliesUpdateWithoutTenantInput, ReviewRepliesUncheckedUpdateWithoutTenantInput>
  }

  export type ReviewRepliesUpdateManyWithWhereWithoutTenantInput = {
    where: ReviewRepliesScalarWhereInput
    data: XOR<ReviewRepliesUpdateManyMutationInput, ReviewRepliesUncheckedUpdateManyWithoutTenantInput>
  }

  export type ReviewRepliesScalarWhereInput = {
    AND?: ReviewRepliesScalarWhereInput | ReviewRepliesScalarWhereInput[]
    OR?: ReviewRepliesScalarWhereInput[]
    NOT?: ReviewRepliesScalarWhereInput | ReviewRepliesScalarWhereInput[]
    id?: IntFilter<"ReviewReplies"> | number
    tenant_id?: StringFilter<"ReviewReplies"> | string
    review_id?: IntFilter<"ReviewReplies"> | number
    reply?: StringFilter<"ReviewReplies"> | string
  }

  export type PropertyCreateWithoutLocationInput = {
    name: string
    desc?: string | null
    category: string
    terms_condition?: string | null
<<<<<<< HEAD
    room_available: number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: number | null
    isAvailable?: boolean
    PropertyImages?: PropertyImagesCreateNestedManyWithoutPropertyInput
    tenant: TenantCreateNestedOneWithoutPropertyInput
    RoomTypes?: RoomTypesCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutLocationInput = {
    id?: number
    name: string
    desc?: string | null
    category: string
    terms_condition?: string | null
<<<<<<< HEAD
    room_available: number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: number | null
    tenantId: string
    isAvailable?: boolean
    PropertyImages?: PropertyImagesUncheckedCreateNestedManyWithoutPropertyInput
    RoomTypes?: RoomTypesUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutLocationInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutLocationInput, PropertyUncheckedCreateWithoutLocationInput>
  }

  export type PropertyCreateManyLocationInputEnvelope = {
    data: PropertyCreateManyLocationInput | PropertyCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithWhereUniqueWithoutLocationInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutLocationInput, PropertyUncheckedUpdateWithoutLocationInput>
    create: XOR<PropertyCreateWithoutLocationInput, PropertyUncheckedCreateWithoutLocationInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutLocationInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutLocationInput, PropertyUncheckedUpdateWithoutLocationInput>
  }

  export type PropertyUpdateManyWithWhereWithoutLocationInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutLocationInput>
  }

  export type LocationCreateWithoutPropertyInput = {
    address: string
    country: string
    city: string
    deletedAt?: Date | string | null
<<<<<<< HEAD
    longitude?: string | null
    latitude?: string | null
=======
    longitude?: number | null
    latitude?: number | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
  }

  export type LocationUncheckedCreateWithoutPropertyInput = {
    id?: number
    address: string
    country: string
    city: string
    deletedAt?: Date | string | null
<<<<<<< HEAD
    longitude?: string | null
    latitude?: string | null
=======
    longitude?: number | null
    latitude?: number | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
  }

  export type LocationCreateOrConnectWithoutPropertyInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutPropertyInput, LocationUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyImagesCreateWithoutPropertyInput = {
    image_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PropertyImagesUncheckedCreateWithoutPropertyInput = {
    id?: number
    image_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PropertyImagesCreateOrConnectWithoutPropertyInput = {
    where: PropertyImagesWhereUniqueInput
    create: XOR<PropertyImagesCreateWithoutPropertyInput, PropertyImagesUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyImagesCreateManyPropertyInputEnvelope = {
    data: PropertyImagesCreateManyPropertyInput | PropertyImagesCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type TenantCreateWithoutPropertyInput = {
    id?: string
<<<<<<< HEAD
=======
    googleId?: string | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name: string
    password?: string | null
    no_handphone?: string | null
    email: string
    avatar?: string | null
    isVerify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ReviewReplies?: ReviewRepliesCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutPropertyInput = {
    id?: string
<<<<<<< HEAD
=======
    googleId?: string | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name: string
    password?: string | null
    no_handphone?: string | null
    email: string
    avatar?: string | null
    isVerify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ReviewReplies?: ReviewRepliesUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutPropertyInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutPropertyInput, TenantUncheckedCreateWithoutPropertyInput>
  }

  export type RoomTypesCreateWithoutPropertyInput = {
    name: string
    stock: number
    capacity: number
    bed_details?: string | null
    price: number
    has_breakfast?: boolean
    breakfast_price: number
    avg_rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    RoomImages?: RoomImagesCreateNestedManyWithoutRoom_typesInput
    Booking?: BookingCreateNestedManyWithoutRoom_typesInput
    Review?: ReviewCreateNestedManyWithoutRoom_typesInput
    Unavailable?: UnavailableCreateNestedManyWithoutRoom_typesInput
  }

  export type RoomTypesUncheckedCreateWithoutPropertyInput = {
    id?: number
    name: string
    stock: number
    capacity: number
    bed_details?: string | null
    price: number
    has_breakfast?: boolean
    breakfast_price: number
    avg_rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    RoomImages?: RoomImagesUncheckedCreateNestedManyWithoutRoom_typesInput
    Booking?: BookingUncheckedCreateNestedManyWithoutRoom_typesInput
    Review?: ReviewUncheckedCreateNestedManyWithoutRoom_typesInput
    Unavailable?: UnavailableUncheckedCreateNestedManyWithoutRoom_typesInput
  }

  export type RoomTypesCreateOrConnectWithoutPropertyInput = {
    where: RoomTypesWhereUniqueInput
    create: XOR<RoomTypesCreateWithoutPropertyInput, RoomTypesUncheckedCreateWithoutPropertyInput>
  }

  export type RoomTypesCreateManyPropertyInputEnvelope = {
    data: RoomTypesCreateManyPropertyInput | RoomTypesCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type LocationUpsertWithoutPropertyInput = {
    update: XOR<LocationUpdateWithoutPropertyInput, LocationUncheckedUpdateWithoutPropertyInput>
    create: XOR<LocationCreateWithoutPropertyInput, LocationUncheckedCreateWithoutPropertyInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutPropertyInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutPropertyInput, LocationUncheckedUpdateWithoutPropertyInput>
  }

  export type LocationUpdateWithoutPropertyInput = {
    address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
<<<<<<< HEAD
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
=======
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
  }

  export type LocationUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
<<<<<<< HEAD
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
=======
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
  }

  export type PropertyImagesUpsertWithWhereUniqueWithoutPropertyInput = {
    where: PropertyImagesWhereUniqueInput
    update: XOR<PropertyImagesUpdateWithoutPropertyInput, PropertyImagesUncheckedUpdateWithoutPropertyInput>
    create: XOR<PropertyImagesCreateWithoutPropertyInput, PropertyImagesUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyImagesUpdateWithWhereUniqueWithoutPropertyInput = {
    where: PropertyImagesWhereUniqueInput
    data: XOR<PropertyImagesUpdateWithoutPropertyInput, PropertyImagesUncheckedUpdateWithoutPropertyInput>
  }

  export type PropertyImagesUpdateManyWithWhereWithoutPropertyInput = {
    where: PropertyImagesScalarWhereInput
    data: XOR<PropertyImagesUpdateManyMutationInput, PropertyImagesUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyImagesScalarWhereInput = {
    AND?: PropertyImagesScalarWhereInput | PropertyImagesScalarWhereInput[]
    OR?: PropertyImagesScalarWhereInput[]
    NOT?: PropertyImagesScalarWhereInput | PropertyImagesScalarWhereInput[]
    id?: IntFilter<"PropertyImages"> | number
    image_url?: StringFilter<"PropertyImages"> | string
    property_id?: IntFilter<"PropertyImages"> | number
    createdAt?: DateTimeFilter<"PropertyImages"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyImages"> | Date | string
    deletedAt?: DateTimeNullableFilter<"PropertyImages"> | Date | string | null
  }

  export type TenantUpsertWithoutPropertyInput = {
    update: XOR<TenantUpdateWithoutPropertyInput, TenantUncheckedUpdateWithoutPropertyInput>
    create: XOR<TenantCreateWithoutPropertyInput, TenantUncheckedCreateWithoutPropertyInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutPropertyInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutPropertyInput, TenantUncheckedUpdateWithoutPropertyInput>
  }

  export type TenantUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
<<<<<<< HEAD
=======
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    no_handphone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ReviewReplies?: ReviewRepliesUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
<<<<<<< HEAD
=======
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    no_handphone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ReviewReplies?: ReviewRepliesUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type RoomTypesUpsertWithWhereUniqueWithoutPropertyInput = {
    where: RoomTypesWhereUniqueInput
    update: XOR<RoomTypesUpdateWithoutPropertyInput, RoomTypesUncheckedUpdateWithoutPropertyInput>
    create: XOR<RoomTypesCreateWithoutPropertyInput, RoomTypesUncheckedCreateWithoutPropertyInput>
  }

  export type RoomTypesUpdateWithWhereUniqueWithoutPropertyInput = {
    where: RoomTypesWhereUniqueInput
    data: XOR<RoomTypesUpdateWithoutPropertyInput, RoomTypesUncheckedUpdateWithoutPropertyInput>
  }

  export type RoomTypesUpdateManyWithWhereWithoutPropertyInput = {
    where: RoomTypesScalarWhereInput
    data: XOR<RoomTypesUpdateManyMutationInput, RoomTypesUncheckedUpdateManyWithoutPropertyInput>
  }

  export type RoomTypesScalarWhereInput = {
    AND?: RoomTypesScalarWhereInput | RoomTypesScalarWhereInput[]
    OR?: RoomTypesScalarWhereInput[]
    NOT?: RoomTypesScalarWhereInput | RoomTypesScalarWhereInput[]
    id?: IntFilter<"RoomTypes"> | number
    name?: StringFilter<"RoomTypes"> | string
    stock?: IntFilter<"RoomTypes"> | number
    capacity?: IntFilter<"RoomTypes"> | number
    bed_details?: StringNullableFilter<"RoomTypes"> | string | null
    price?: IntFilter<"RoomTypes"> | number
    has_breakfast?: BoolFilter<"RoomTypes"> | boolean
    breakfast_price?: IntFilter<"RoomTypes"> | number
    avg_rating?: IntNullableFilter<"RoomTypes"> | number | null
    property_id?: IntFilter<"RoomTypes"> | number
    createdAt?: DateTimeFilter<"RoomTypes"> | Date | string
    updatedAt?: DateTimeFilter<"RoomTypes"> | Date | string
    deletedAt?: DateTimeNullableFilter<"RoomTypes"> | Date | string | null
  }

  export type PropertyCreateWithoutPropertyImagesInput = {
    name: string
    desc?: string | null
    category: string
    terms_condition?: string | null
<<<<<<< HEAD
    room_available: number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: number | null
    isAvailable?: boolean
    location: LocationCreateNestedOneWithoutPropertyInput
    tenant: TenantCreateNestedOneWithoutPropertyInput
    RoomTypes?: RoomTypesCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutPropertyImagesInput = {
    id?: number
    name: string
    desc?: string | null
    category: string
    terms_condition?: string | null
<<<<<<< HEAD
    room_available: number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: number | null
    location_id: number
    tenantId: string
    isAvailable?: boolean
    RoomTypes?: RoomTypesUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutPropertyImagesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutPropertyImagesInput, PropertyUncheckedCreateWithoutPropertyImagesInput>
  }

  export type PropertyUpsertWithoutPropertyImagesInput = {
    update: XOR<PropertyUpdateWithoutPropertyImagesInput, PropertyUncheckedUpdateWithoutPropertyImagesInput>
    create: XOR<PropertyCreateWithoutPropertyImagesInput, PropertyUncheckedCreateWithoutPropertyImagesInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutPropertyImagesInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutPropertyImagesInput, PropertyUncheckedUpdateWithoutPropertyImagesInput>
  }

  export type PropertyUpdateWithoutPropertyImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    terms_condition?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< HEAD
    room_available?: IntFieldUpdateOperationsInput | number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: NullableIntFieldUpdateOperationsInput | number | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    location?: LocationUpdateOneRequiredWithoutPropertyNestedInput
    tenant?: TenantUpdateOneRequiredWithoutPropertyNestedInput
    RoomTypes?: RoomTypesUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutPropertyImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    terms_condition?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< HEAD
    room_available?: IntFieldUpdateOperationsInput | number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: NullableIntFieldUpdateOperationsInput | number | null
    location_id?: IntFieldUpdateOperationsInput | number
    tenantId?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    RoomTypes?: RoomTypesUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateWithoutRoomTypesInput = {
    name: string
    desc?: string | null
    category: string
    terms_condition?: string | null
<<<<<<< HEAD
    room_available: number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: number | null
    isAvailable?: boolean
    location: LocationCreateNestedOneWithoutPropertyInput
    PropertyImages?: PropertyImagesCreateNestedManyWithoutPropertyInput
    tenant: TenantCreateNestedOneWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutRoomTypesInput = {
    id?: number
    name: string
    desc?: string | null
    category: string
    terms_condition?: string | null
<<<<<<< HEAD
    room_available: number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: number | null
    location_id: number
    tenantId: string
    isAvailable?: boolean
    PropertyImages?: PropertyImagesUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutRoomTypesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutRoomTypesInput, PropertyUncheckedCreateWithoutRoomTypesInput>
  }

  export type RoomImagesCreateWithoutRoom_typesInput = {
    image_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type RoomImagesUncheckedCreateWithoutRoom_typesInput = {
    id?: number
    image_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type RoomImagesCreateOrConnectWithoutRoom_typesInput = {
    where: RoomImagesWhereUniqueInput
    create: XOR<RoomImagesCreateWithoutRoom_typesInput, RoomImagesUncheckedCreateWithoutRoom_typesInput>
  }

  export type RoomImagesCreateManyRoom_typesInputEnvelope = {
    data: RoomImagesCreateManyRoom_typesInput | RoomImagesCreateManyRoom_typesInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutRoom_typesInput = {
    id?: string
    num_of_guests: number
    total_price: number
    details?: NullableJsonNullValueInput | InputJsonValue
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    payment_proof?: string | null
    payment_method?: $Enums.PaymentMethod | null
    status?: $Enums.BookingStatus
    user: UserCreateNestedOneWithoutBookingInput
    Review?: ReviewCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutRoom_typesInput = {
    id?: string
    num_of_guests: number
    total_price: number
    details?: NullableJsonNullValueInput | InputJsonValue
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    payment_proof?: string | null
    payment_method?: $Enums.PaymentMethod | null
    status?: $Enums.BookingStatus
    user_id: string
    Review?: ReviewUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutRoom_typesInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutRoom_typesInput, BookingUncheckedCreateWithoutRoom_typesInput>
  }

  export type BookingCreateManyRoom_typesInputEnvelope = {
    data: BookingCreateManyRoom_typesInput | BookingCreateManyRoom_typesInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutRoom_typesInput = {
    rating: number
    review: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    user: UserCreateNestedOneWithoutReviewInput
    booking: BookingCreateNestedOneWithoutReviewInput
    ReviewReplies?: ReviewRepliesCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutRoom_typesInput = {
    id?: number
    rating: number
    review: string
    user_id: string
    booking_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    ReviewReplies?: ReviewRepliesUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutRoom_typesInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutRoom_typesInput, ReviewUncheckedCreateWithoutRoom_typesInput>
  }

  export type ReviewCreateManyRoom_typesInputEnvelope = {
    data: ReviewCreateManyRoom_typesInput | ReviewCreateManyRoom_typesInput[]
    skipDuplicates?: boolean
  }

  export type UnavailableCreateWithoutRoom_typesInput = {
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnavailableUncheckedCreateWithoutRoom_typesInput = {
    id?: number
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnavailableCreateOrConnectWithoutRoom_typesInput = {
    where: UnavailableWhereUniqueInput
    create: XOR<UnavailableCreateWithoutRoom_typesInput, UnavailableUncheckedCreateWithoutRoom_typesInput>
  }

  export type UnavailableCreateManyRoom_typesInputEnvelope = {
    data: UnavailableCreateManyRoom_typesInput | UnavailableCreateManyRoom_typesInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithoutRoomTypesInput = {
    update: XOR<PropertyUpdateWithoutRoomTypesInput, PropertyUncheckedUpdateWithoutRoomTypesInput>
    create: XOR<PropertyCreateWithoutRoomTypesInput, PropertyUncheckedCreateWithoutRoomTypesInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutRoomTypesInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutRoomTypesInput, PropertyUncheckedUpdateWithoutRoomTypesInput>
  }

  export type PropertyUpdateWithoutRoomTypesInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    terms_condition?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< HEAD
    room_available?: IntFieldUpdateOperationsInput | number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: NullableIntFieldUpdateOperationsInput | number | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    location?: LocationUpdateOneRequiredWithoutPropertyNestedInput
    PropertyImages?: PropertyImagesUpdateManyWithoutPropertyNestedInput
    tenant?: TenantUpdateOneRequiredWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutRoomTypesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    terms_condition?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< HEAD
    room_available?: IntFieldUpdateOperationsInput | number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: NullableIntFieldUpdateOperationsInput | number | null
    location_id?: IntFieldUpdateOperationsInput | number
    tenantId?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    PropertyImages?: PropertyImagesUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type RoomImagesUpsertWithWhereUniqueWithoutRoom_typesInput = {
    where: RoomImagesWhereUniqueInput
    update: XOR<RoomImagesUpdateWithoutRoom_typesInput, RoomImagesUncheckedUpdateWithoutRoom_typesInput>
    create: XOR<RoomImagesCreateWithoutRoom_typesInput, RoomImagesUncheckedCreateWithoutRoom_typesInput>
  }

  export type RoomImagesUpdateWithWhereUniqueWithoutRoom_typesInput = {
    where: RoomImagesWhereUniqueInput
    data: XOR<RoomImagesUpdateWithoutRoom_typesInput, RoomImagesUncheckedUpdateWithoutRoom_typesInput>
  }

  export type RoomImagesUpdateManyWithWhereWithoutRoom_typesInput = {
    where: RoomImagesScalarWhereInput
    data: XOR<RoomImagesUpdateManyMutationInput, RoomImagesUncheckedUpdateManyWithoutRoom_typesInput>
  }

  export type RoomImagesScalarWhereInput = {
    AND?: RoomImagesScalarWhereInput | RoomImagesScalarWhereInput[]
    OR?: RoomImagesScalarWhereInput[]
    NOT?: RoomImagesScalarWhereInput | RoomImagesScalarWhereInput[]
    id?: IntFilter<"RoomImages"> | number
    image_url?: StringFilter<"RoomImages"> | string
    createdAt?: DateTimeFilter<"RoomImages"> | Date | string
    updatedAt?: DateTimeFilter<"RoomImages"> | Date | string
    deletedAt?: DateTimeNullableFilter<"RoomImages"> | Date | string | null
    room_types_id?: IntFilter<"RoomImages"> | number
  }

  export type BookingUpsertWithWhereUniqueWithoutRoom_typesInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutRoom_typesInput, BookingUncheckedUpdateWithoutRoom_typesInput>
    create: XOR<BookingCreateWithoutRoom_typesInput, BookingUncheckedCreateWithoutRoom_typesInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutRoom_typesInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutRoom_typesInput, BookingUncheckedUpdateWithoutRoom_typesInput>
  }

  export type BookingUpdateManyWithWhereWithoutRoom_typesInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutRoom_typesInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutRoom_typesInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutRoom_typesInput, ReviewUncheckedUpdateWithoutRoom_typesInput>
    create: XOR<ReviewCreateWithoutRoom_typesInput, ReviewUncheckedCreateWithoutRoom_typesInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutRoom_typesInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutRoom_typesInput, ReviewUncheckedUpdateWithoutRoom_typesInput>
  }

  export type ReviewUpdateManyWithWhereWithoutRoom_typesInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutRoom_typesInput>
  }

  export type UnavailableUpsertWithWhereUniqueWithoutRoom_typesInput = {
    where: UnavailableWhereUniqueInput
    update: XOR<UnavailableUpdateWithoutRoom_typesInput, UnavailableUncheckedUpdateWithoutRoom_typesInput>
    create: XOR<UnavailableCreateWithoutRoom_typesInput, UnavailableUncheckedCreateWithoutRoom_typesInput>
  }

  export type UnavailableUpdateWithWhereUniqueWithoutRoom_typesInput = {
    where: UnavailableWhereUniqueInput
    data: XOR<UnavailableUpdateWithoutRoom_typesInput, UnavailableUncheckedUpdateWithoutRoom_typesInput>
  }

  export type UnavailableUpdateManyWithWhereWithoutRoom_typesInput = {
    where: UnavailableScalarWhereInput
    data: XOR<UnavailableUpdateManyMutationInput, UnavailableUncheckedUpdateManyWithoutRoom_typesInput>
  }

  export type UnavailableScalarWhereInput = {
    AND?: UnavailableScalarWhereInput | UnavailableScalarWhereInput[]
    OR?: UnavailableScalarWhereInput[]
    NOT?: UnavailableScalarWhereInput | UnavailableScalarWhereInput[]
    id?: IntFilter<"Unavailable"> | number
    start_date?: DateTimeFilter<"Unavailable"> | Date | string
    end_date?: DateTimeFilter<"Unavailable"> | Date | string
    room_types_id?: IntFilter<"Unavailable"> | number
    createdAt?: DateTimeFilter<"Unavailable"> | Date | string
    updatedAt?: DateTimeFilter<"Unavailable"> | Date | string
  }

  export type RoomTypesCreateWithoutRoomImagesInput = {
    name: string
    stock: number
    capacity: number
    bed_details?: string | null
    price: number
    has_breakfast?: boolean
    breakfast_price: number
    avg_rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    property: PropertyCreateNestedOneWithoutRoomTypesInput
    Booking?: BookingCreateNestedManyWithoutRoom_typesInput
    Review?: ReviewCreateNestedManyWithoutRoom_typesInput
    Unavailable?: UnavailableCreateNestedManyWithoutRoom_typesInput
  }

  export type RoomTypesUncheckedCreateWithoutRoomImagesInput = {
    id?: number
    name: string
    stock: number
    capacity: number
    bed_details?: string | null
    price: number
    has_breakfast?: boolean
    breakfast_price: number
    avg_rating?: number | null
    property_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Booking?: BookingUncheckedCreateNestedManyWithoutRoom_typesInput
    Review?: ReviewUncheckedCreateNestedManyWithoutRoom_typesInput
    Unavailable?: UnavailableUncheckedCreateNestedManyWithoutRoom_typesInput
  }

  export type RoomTypesCreateOrConnectWithoutRoomImagesInput = {
    where: RoomTypesWhereUniqueInput
    create: XOR<RoomTypesCreateWithoutRoomImagesInput, RoomTypesUncheckedCreateWithoutRoomImagesInput>
  }

  export type RoomTypesUpsertWithoutRoomImagesInput = {
    update: XOR<RoomTypesUpdateWithoutRoomImagesInput, RoomTypesUncheckedUpdateWithoutRoomImagesInput>
    create: XOR<RoomTypesCreateWithoutRoomImagesInput, RoomTypesUncheckedCreateWithoutRoomImagesInput>
    where?: RoomTypesWhereInput
  }

  export type RoomTypesUpdateToOneWithWhereWithoutRoomImagesInput = {
    where?: RoomTypesWhereInput
    data: XOR<RoomTypesUpdateWithoutRoomImagesInput, RoomTypesUncheckedUpdateWithoutRoomImagesInput>
  }

  export type RoomTypesUpdateWithoutRoomImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    bed_details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    has_breakfast?: BoolFieldUpdateOperationsInput | boolean
    breakfast_price?: IntFieldUpdateOperationsInput | number
    avg_rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    property?: PropertyUpdateOneRequiredWithoutRoomTypesNestedInput
    Booking?: BookingUpdateManyWithoutRoom_typesNestedInput
    Review?: ReviewUpdateManyWithoutRoom_typesNestedInput
    Unavailable?: UnavailableUpdateManyWithoutRoom_typesNestedInput
  }

  export type RoomTypesUncheckedUpdateWithoutRoomImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    bed_details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    has_breakfast?: BoolFieldUpdateOperationsInput | boolean
    breakfast_price?: IntFieldUpdateOperationsInput | number
    avg_rating?: NullableIntFieldUpdateOperationsInput | number | null
    property_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Booking?: BookingUncheckedUpdateManyWithoutRoom_typesNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutRoom_typesNestedInput
    Unavailable?: UnavailableUncheckedUpdateManyWithoutRoom_typesNestedInput
  }

  export type RoomTypesCreateWithoutUnavailableInput = {
    name: string
    stock: number
    capacity: number
    bed_details?: string | null
    price: number
    has_breakfast?: boolean
    breakfast_price: number
    avg_rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    property: PropertyCreateNestedOneWithoutRoomTypesInput
    RoomImages?: RoomImagesCreateNestedManyWithoutRoom_typesInput
    Booking?: BookingCreateNestedManyWithoutRoom_typesInput
    Review?: ReviewCreateNestedManyWithoutRoom_typesInput
  }

  export type RoomTypesUncheckedCreateWithoutUnavailableInput = {
    id?: number
    name: string
    stock: number
    capacity: number
    bed_details?: string | null
    price: number
    has_breakfast?: boolean
    breakfast_price: number
    avg_rating?: number | null
    property_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    RoomImages?: RoomImagesUncheckedCreateNestedManyWithoutRoom_typesInput
    Booking?: BookingUncheckedCreateNestedManyWithoutRoom_typesInput
    Review?: ReviewUncheckedCreateNestedManyWithoutRoom_typesInput
  }

  export type RoomTypesCreateOrConnectWithoutUnavailableInput = {
    where: RoomTypesWhereUniqueInput
    create: XOR<RoomTypesCreateWithoutUnavailableInput, RoomTypesUncheckedCreateWithoutUnavailableInput>
  }

  export type RoomTypesUpsertWithoutUnavailableInput = {
    update: XOR<RoomTypesUpdateWithoutUnavailableInput, RoomTypesUncheckedUpdateWithoutUnavailableInput>
    create: XOR<RoomTypesCreateWithoutUnavailableInput, RoomTypesUncheckedCreateWithoutUnavailableInput>
    where?: RoomTypesWhereInput
  }

  export type RoomTypesUpdateToOneWithWhereWithoutUnavailableInput = {
    where?: RoomTypesWhereInput
    data: XOR<RoomTypesUpdateWithoutUnavailableInput, RoomTypesUncheckedUpdateWithoutUnavailableInput>
  }

  export type RoomTypesUpdateWithoutUnavailableInput = {
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    bed_details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    has_breakfast?: BoolFieldUpdateOperationsInput | boolean
    breakfast_price?: IntFieldUpdateOperationsInput | number
    avg_rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    property?: PropertyUpdateOneRequiredWithoutRoomTypesNestedInput
    RoomImages?: RoomImagesUpdateManyWithoutRoom_typesNestedInput
    Booking?: BookingUpdateManyWithoutRoom_typesNestedInput
    Review?: ReviewUpdateManyWithoutRoom_typesNestedInput
  }

  export type RoomTypesUncheckedUpdateWithoutUnavailableInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    bed_details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    has_breakfast?: BoolFieldUpdateOperationsInput | boolean
    breakfast_price?: IntFieldUpdateOperationsInput | number
    avg_rating?: NullableIntFieldUpdateOperationsInput | number | null
    property_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RoomImages?: RoomImagesUncheckedUpdateManyWithoutRoom_typesNestedInput
    Booking?: BookingUncheckedUpdateManyWithoutRoom_typesNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutRoom_typesNestedInput
  }

  export type UserCreateWithoutBookingInput = {
    id?: string
    email: string
    username?: string | null
    password?: string | null
    avatar?: string | null
    no_handphone: string
    isVerify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    googleId?: string | null
    Review?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookingInput = {
    id?: string
    email: string
    username?: string | null
    password?: string | null
    avatar?: string | null
    no_handphone: string
    isVerify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    googleId?: string | null
    Review?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
  }

  export type RoomTypesCreateWithoutBookingInput = {
    name: string
    stock: number
    capacity: number
    bed_details?: string | null
    price: number
    has_breakfast?: boolean
    breakfast_price: number
    avg_rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    property: PropertyCreateNestedOneWithoutRoomTypesInput
    RoomImages?: RoomImagesCreateNestedManyWithoutRoom_typesInput
    Review?: ReviewCreateNestedManyWithoutRoom_typesInput
    Unavailable?: UnavailableCreateNestedManyWithoutRoom_typesInput
  }

  export type RoomTypesUncheckedCreateWithoutBookingInput = {
    id?: number
    name: string
    stock: number
    capacity: number
    bed_details?: string | null
    price: number
    has_breakfast?: boolean
    breakfast_price: number
    avg_rating?: number | null
    property_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    RoomImages?: RoomImagesUncheckedCreateNestedManyWithoutRoom_typesInput
    Review?: ReviewUncheckedCreateNestedManyWithoutRoom_typesInput
    Unavailable?: UnavailableUncheckedCreateNestedManyWithoutRoom_typesInput
  }

  export type RoomTypesCreateOrConnectWithoutBookingInput = {
    where: RoomTypesWhereUniqueInput
    create: XOR<RoomTypesCreateWithoutBookingInput, RoomTypesUncheckedCreateWithoutBookingInput>
  }

  export type ReviewCreateWithoutBookingInput = {
    rating: number
    review: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    user: UserCreateNestedOneWithoutReviewInput
    room_types: RoomTypesCreateNestedOneWithoutReviewInput
    ReviewReplies?: ReviewRepliesCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutBookingInput = {
    id?: number
    rating: number
    review: string
    user_id: string
    room_types_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    ReviewReplies?: ReviewRepliesUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutBookingInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
  }

  export type ReviewCreateManyBookingInputEnvelope = {
    data: ReviewCreateManyBookingInput | ReviewCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBookingInput = {
    update: XOR<UserUpdateWithoutBookingInput, UserUncheckedUpdateWithoutBookingInput>
    create: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingInput, UserUncheckedUpdateWithoutBookingInput>
  }

  export type UserUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    no_handphone?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    Review?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    no_handphone?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    Review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoomTypesUpsertWithoutBookingInput = {
    update: XOR<RoomTypesUpdateWithoutBookingInput, RoomTypesUncheckedUpdateWithoutBookingInput>
    create: XOR<RoomTypesCreateWithoutBookingInput, RoomTypesUncheckedCreateWithoutBookingInput>
    where?: RoomTypesWhereInput
  }

  export type RoomTypesUpdateToOneWithWhereWithoutBookingInput = {
    where?: RoomTypesWhereInput
    data: XOR<RoomTypesUpdateWithoutBookingInput, RoomTypesUncheckedUpdateWithoutBookingInput>
  }

  export type RoomTypesUpdateWithoutBookingInput = {
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    bed_details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    has_breakfast?: BoolFieldUpdateOperationsInput | boolean
    breakfast_price?: IntFieldUpdateOperationsInput | number
    avg_rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    property?: PropertyUpdateOneRequiredWithoutRoomTypesNestedInput
    RoomImages?: RoomImagesUpdateManyWithoutRoom_typesNestedInput
    Review?: ReviewUpdateManyWithoutRoom_typesNestedInput
    Unavailable?: UnavailableUpdateManyWithoutRoom_typesNestedInput
  }

  export type RoomTypesUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    bed_details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    has_breakfast?: BoolFieldUpdateOperationsInput | boolean
    breakfast_price?: IntFieldUpdateOperationsInput | number
    avg_rating?: NullableIntFieldUpdateOperationsInput | number | null
    property_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RoomImages?: RoomImagesUncheckedUpdateManyWithoutRoom_typesNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutRoom_typesNestedInput
    Unavailable?: UnavailableUncheckedUpdateManyWithoutRoom_typesNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutBookingInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutBookingInput, ReviewUncheckedUpdateWithoutBookingInput>
    create: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutBookingInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutBookingInput, ReviewUncheckedUpdateWithoutBookingInput>
  }

  export type ReviewUpdateManyWithWhereWithoutBookingInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutBookingInput>
  }

  export type UserCreateWithoutReviewInput = {
    id?: string
    email: string
    username?: string | null
    password?: string | null
    avatar?: string | null
    no_handphone: string
    isVerify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    googleId?: string | null
    Booking?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewInput = {
    id?: string
    email: string
    username?: string | null
    password?: string | null
    avatar?: string | null
    no_handphone: string
    isVerify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    googleId?: string | null
    Booking?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
  }

  export type RoomTypesCreateWithoutReviewInput = {
    name: string
    stock: number
    capacity: number
    bed_details?: string | null
    price: number
    has_breakfast?: boolean
    breakfast_price: number
    avg_rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    property: PropertyCreateNestedOneWithoutRoomTypesInput
    RoomImages?: RoomImagesCreateNestedManyWithoutRoom_typesInput
    Booking?: BookingCreateNestedManyWithoutRoom_typesInput
    Unavailable?: UnavailableCreateNestedManyWithoutRoom_typesInput
  }

  export type RoomTypesUncheckedCreateWithoutReviewInput = {
    id?: number
    name: string
    stock: number
    capacity: number
    bed_details?: string | null
    price: number
    has_breakfast?: boolean
    breakfast_price: number
    avg_rating?: number | null
    property_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    RoomImages?: RoomImagesUncheckedCreateNestedManyWithoutRoom_typesInput
    Booking?: BookingUncheckedCreateNestedManyWithoutRoom_typesInput
    Unavailable?: UnavailableUncheckedCreateNestedManyWithoutRoom_typesInput
  }

  export type RoomTypesCreateOrConnectWithoutReviewInput = {
    where: RoomTypesWhereUniqueInput
    create: XOR<RoomTypesCreateWithoutReviewInput, RoomTypesUncheckedCreateWithoutReviewInput>
  }

  export type BookingCreateWithoutReviewInput = {
    id?: string
    num_of_guests: number
    total_price: number
    details?: NullableJsonNullValueInput | InputJsonValue
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    payment_proof?: string | null
    payment_method?: $Enums.PaymentMethod | null
    status?: $Enums.BookingStatus
    user: UserCreateNestedOneWithoutBookingInput
    room_types: RoomTypesCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutReviewInput = {
    id?: string
    num_of_guests: number
    total_price: number
    details?: NullableJsonNullValueInput | InputJsonValue
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    payment_proof?: string | null
    payment_method?: $Enums.PaymentMethod | null
    status?: $Enums.BookingStatus
    user_id: string
    room_types_id: number
  }

  export type BookingCreateOrConnectWithoutReviewInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
  }

  export type ReviewRepliesCreateWithoutReviewInput = {
    reply: string
    tenant: TenantCreateNestedOneWithoutReviewRepliesInput
  }

  export type ReviewRepliesUncheckedCreateWithoutReviewInput = {
    id?: number
    tenant_id: string
    reply: string
  }

  export type ReviewRepliesCreateOrConnectWithoutReviewInput = {
    where: ReviewRepliesWhereUniqueInput
    create: XOR<ReviewRepliesCreateWithoutReviewInput, ReviewRepliesUncheckedCreateWithoutReviewInput>
  }

  export type ReviewRepliesCreateManyReviewInputEnvelope = {
    data: ReviewRepliesCreateManyReviewInput | ReviewRepliesCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutReviewInput = {
    update: XOR<UserUpdateWithoutReviewInput, UserUncheckedUpdateWithoutReviewInput>
    create: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewInput, UserUncheckedUpdateWithoutReviewInput>
  }

  export type UserUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    no_handphone?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    Booking?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    no_handphone?: StringFieldUpdateOperationsInput | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    Booking?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoomTypesUpsertWithoutReviewInput = {
    update: XOR<RoomTypesUpdateWithoutReviewInput, RoomTypesUncheckedUpdateWithoutReviewInput>
    create: XOR<RoomTypesCreateWithoutReviewInput, RoomTypesUncheckedCreateWithoutReviewInput>
    where?: RoomTypesWhereInput
  }

  export type RoomTypesUpdateToOneWithWhereWithoutReviewInput = {
    where?: RoomTypesWhereInput
    data: XOR<RoomTypesUpdateWithoutReviewInput, RoomTypesUncheckedUpdateWithoutReviewInput>
  }

  export type RoomTypesUpdateWithoutReviewInput = {
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    bed_details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    has_breakfast?: BoolFieldUpdateOperationsInput | boolean
    breakfast_price?: IntFieldUpdateOperationsInput | number
    avg_rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    property?: PropertyUpdateOneRequiredWithoutRoomTypesNestedInput
    RoomImages?: RoomImagesUpdateManyWithoutRoom_typesNestedInput
    Booking?: BookingUpdateManyWithoutRoom_typesNestedInput
    Unavailable?: UnavailableUpdateManyWithoutRoom_typesNestedInput
  }

  export type RoomTypesUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    bed_details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    has_breakfast?: BoolFieldUpdateOperationsInput | boolean
    breakfast_price?: IntFieldUpdateOperationsInput | number
    avg_rating?: NullableIntFieldUpdateOperationsInput | number | null
    property_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RoomImages?: RoomImagesUncheckedUpdateManyWithoutRoom_typesNestedInput
    Booking?: BookingUncheckedUpdateManyWithoutRoom_typesNestedInput
    Unavailable?: UnavailableUncheckedUpdateManyWithoutRoom_typesNestedInput
  }

  export type BookingUpsertWithoutReviewInput = {
    update: XOR<BookingUpdateWithoutReviewInput, BookingUncheckedUpdateWithoutReviewInput>
    create: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutReviewInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutReviewInput, BookingUncheckedUpdateWithoutReviewInput>
  }

  export type BookingUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    num_of_guests?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_proof?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    user?: UserUpdateOneRequiredWithoutBookingNestedInput
    room_types?: RoomTypesUpdateOneRequiredWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    num_of_guests?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_proof?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    user_id?: StringFieldUpdateOperationsInput | string
    room_types_id?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewRepliesUpsertWithWhereUniqueWithoutReviewInput = {
    where: ReviewRepliesWhereUniqueInput
    update: XOR<ReviewRepliesUpdateWithoutReviewInput, ReviewRepliesUncheckedUpdateWithoutReviewInput>
    create: XOR<ReviewRepliesCreateWithoutReviewInput, ReviewRepliesUncheckedCreateWithoutReviewInput>
  }

  export type ReviewRepliesUpdateWithWhereUniqueWithoutReviewInput = {
    where: ReviewRepliesWhereUniqueInput
    data: XOR<ReviewRepliesUpdateWithoutReviewInput, ReviewRepliesUncheckedUpdateWithoutReviewInput>
  }

  export type ReviewRepliesUpdateManyWithWhereWithoutReviewInput = {
    where: ReviewRepliesScalarWhereInput
    data: XOR<ReviewRepliesUpdateManyMutationInput, ReviewRepliesUncheckedUpdateManyWithoutReviewInput>
  }

  export type TenantCreateWithoutReviewRepliesInput = {
    id?: string
<<<<<<< HEAD
=======
    googleId?: string | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name: string
    password?: string | null
    no_handphone?: string | null
    email: string
    avatar?: string | null
    isVerify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Property?: PropertyCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutReviewRepliesInput = {
    id?: string
<<<<<<< HEAD
=======
    googleId?: string | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name: string
    password?: string | null
    no_handphone?: string | null
    email: string
    avatar?: string | null
    isVerify?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Property?: PropertyUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutReviewRepliesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutReviewRepliesInput, TenantUncheckedCreateWithoutReviewRepliesInput>
  }

  export type ReviewCreateWithoutReviewRepliesInput = {
    rating: number
    review: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    user: UserCreateNestedOneWithoutReviewInput
    room_types: RoomTypesCreateNestedOneWithoutReviewInput
    booking: BookingCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutReviewRepliesInput = {
    id?: number
    rating: number
    review: string
    user_id: string
    room_types_id: number
    booking_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type ReviewCreateOrConnectWithoutReviewRepliesInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutReviewRepliesInput, ReviewUncheckedCreateWithoutReviewRepliesInput>
  }

  export type TenantUpsertWithoutReviewRepliesInput = {
    update: XOR<TenantUpdateWithoutReviewRepliesInput, TenantUncheckedUpdateWithoutReviewRepliesInput>
    create: XOR<TenantCreateWithoutReviewRepliesInput, TenantUncheckedCreateWithoutReviewRepliesInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutReviewRepliesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutReviewRepliesInput, TenantUncheckedUpdateWithoutReviewRepliesInput>
  }

  export type TenantUpdateWithoutReviewRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
<<<<<<< HEAD
=======
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    no_handphone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Property?: PropertyUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutReviewRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
<<<<<<< HEAD
=======
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    no_handphone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Property?: PropertyUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type ReviewUpsertWithoutReviewRepliesInput = {
    update: XOR<ReviewUpdateWithoutReviewRepliesInput, ReviewUncheckedUpdateWithoutReviewRepliesInput>
    create: XOR<ReviewCreateWithoutReviewRepliesInput, ReviewUncheckedCreateWithoutReviewRepliesInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutReviewRepliesInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutReviewRepliesInput, ReviewUncheckedUpdateWithoutReviewRepliesInput>
  }

  export type ReviewUpdateWithoutReviewRepliesInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutReviewNestedInput
    room_types?: RoomTypesUpdateOneRequiredWithoutReviewNestedInput
    booking?: BookingUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutReviewRepliesInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    room_types_id?: IntFieldUpdateOperationsInput | number
    booking_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookingCreateManyUserInput = {
    id?: string
    num_of_guests: number
    total_price: number
    details?: NullableJsonNullValueInput | InputJsonValue
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    payment_proof?: string | null
    payment_method?: $Enums.PaymentMethod | null
    status?: $Enums.BookingStatus
    room_types_id: number
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    rating: number
    review: string
    room_types_id: number
    booking_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type BookingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    num_of_guests?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_proof?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    room_types?: RoomTypesUpdateOneRequiredWithoutBookingNestedInput
    Review?: ReviewUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    num_of_guests?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_proof?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    room_types_id?: IntFieldUpdateOperationsInput | number
    Review?: ReviewUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    num_of_guests?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_proof?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    room_types_id?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room_types?: RoomTypesUpdateOneRequiredWithoutReviewNestedInput
    booking?: BookingUpdateOneRequiredWithoutReviewNestedInput
    ReviewReplies?: ReviewRepliesUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    room_types_id?: IntFieldUpdateOperationsInput | number
    booking_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ReviewReplies?: ReviewRepliesUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    room_types_id?: IntFieldUpdateOperationsInput | number
    booking_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PropertyCreateManyTenantInput = {
    id?: number
    name: string
    desc?: string | null
    category: string
    terms_condition?: string | null
<<<<<<< HEAD
    room_available: number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: number | null
    location_id: number
    isAvailable?: boolean
  }

  export type ReviewRepliesCreateManyTenantInput = {
    id?: number
    review_id: number
    reply: string
  }

  export type PropertyUpdateWithoutTenantInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    terms_condition?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< HEAD
    room_available?: IntFieldUpdateOperationsInput | number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: NullableIntFieldUpdateOperationsInput | number | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    location?: LocationUpdateOneRequiredWithoutPropertyNestedInput
    PropertyImages?: PropertyImagesUpdateManyWithoutPropertyNestedInput
    RoomTypes?: RoomTypesUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    terms_condition?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< HEAD
    room_available?: IntFieldUpdateOperationsInput | number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: NullableIntFieldUpdateOperationsInput | number | null
    location_id?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    PropertyImages?: PropertyImagesUncheckedUpdateManyWithoutPropertyNestedInput
    RoomTypes?: RoomTypesUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    terms_condition?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< HEAD
    room_available?: IntFieldUpdateOperationsInput | number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: NullableIntFieldUpdateOperationsInput | number | null
    location_id?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReviewRepliesUpdateWithoutTenantInput = {
    reply?: StringFieldUpdateOperationsInput | string
    review?: ReviewUpdateOneRequiredWithoutReviewRepliesNestedInput
  }

  export type ReviewRepliesUncheckedUpdateWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    review_id?: IntFieldUpdateOperationsInput | number
    reply?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewRepliesUncheckedUpdateManyWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    review_id?: IntFieldUpdateOperationsInput | number
    reply?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyCreateManyLocationInput = {
    id?: number
    name: string
    desc?: string | null
    category: string
    terms_condition?: string | null
<<<<<<< HEAD
    room_available: number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: number | null
    tenantId: string
    isAvailable?: boolean
  }

  export type PropertyUpdateWithoutLocationInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    terms_condition?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< HEAD
    room_available?: IntFieldUpdateOperationsInput | number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: NullableIntFieldUpdateOperationsInput | number | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    PropertyImages?: PropertyImagesUpdateManyWithoutPropertyNestedInput
    tenant?: TenantUpdateOneRequiredWithoutPropertyNestedInput
    RoomTypes?: RoomTypesUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    terms_condition?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< HEAD
    room_available?: IntFieldUpdateOperationsInput | number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: NullableIntFieldUpdateOperationsInput | number | null
    tenantId?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    PropertyImages?: PropertyImagesUncheckedUpdateManyWithoutPropertyNestedInput
    RoomTypes?: RoomTypesUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    terms_condition?: NullableStringFieldUpdateOperationsInput | string | null
<<<<<<< HEAD
    room_available?: IntFieldUpdateOperationsInput | number
=======
>>>>>>> 0fb0d18486c1fce402f6b4e671b43c42d76d605b
    click_rate?: NullableIntFieldUpdateOperationsInput | number | null
    tenantId?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PropertyImagesCreateManyPropertyInput = {
    id?: number
    image_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type RoomTypesCreateManyPropertyInput = {
    id?: number
    name: string
    stock: number
    capacity: number
    bed_details?: string | null
    price: number
    has_breakfast?: boolean
    breakfast_price: number
    avg_rating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PropertyImagesUpdateWithoutPropertyInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PropertyImagesUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PropertyImagesUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoomTypesUpdateWithoutPropertyInput = {
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    bed_details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    has_breakfast?: BoolFieldUpdateOperationsInput | boolean
    breakfast_price?: IntFieldUpdateOperationsInput | number
    avg_rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RoomImages?: RoomImagesUpdateManyWithoutRoom_typesNestedInput
    Booking?: BookingUpdateManyWithoutRoom_typesNestedInput
    Review?: ReviewUpdateManyWithoutRoom_typesNestedInput
    Unavailable?: UnavailableUpdateManyWithoutRoom_typesNestedInput
  }

  export type RoomTypesUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    bed_details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    has_breakfast?: BoolFieldUpdateOperationsInput | boolean
    breakfast_price?: IntFieldUpdateOperationsInput | number
    avg_rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RoomImages?: RoomImagesUncheckedUpdateManyWithoutRoom_typesNestedInput
    Booking?: BookingUncheckedUpdateManyWithoutRoom_typesNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutRoom_typesNestedInput
    Unavailable?: UnavailableUncheckedUpdateManyWithoutRoom_typesNestedInput
  }

  export type RoomTypesUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    bed_details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    has_breakfast?: BoolFieldUpdateOperationsInput | boolean
    breakfast_price?: IntFieldUpdateOperationsInput | number
    avg_rating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoomImagesCreateManyRoom_typesInput = {
    id?: number
    image_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type BookingCreateManyRoom_typesInput = {
    id?: string
    num_of_guests: number
    total_price: number
    details?: NullableJsonNullValueInput | InputJsonValue
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    payment_proof?: string | null
    payment_method?: $Enums.PaymentMethod | null
    status?: $Enums.BookingStatus
    user_id: string
  }

  export type ReviewCreateManyRoom_typesInput = {
    id?: number
    rating: number
    review: string
    user_id: string
    booking_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type UnavailableCreateManyRoom_typesInput = {
    id?: number
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomImagesUpdateWithoutRoom_typesInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoomImagesUncheckedUpdateWithoutRoom_typesInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoomImagesUncheckedUpdateManyWithoutRoom_typesInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookingUpdateWithoutRoom_typesInput = {
    id?: StringFieldUpdateOperationsInput | string
    num_of_guests?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_proof?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    user?: UserUpdateOneRequiredWithoutBookingNestedInput
    Review?: ReviewUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutRoom_typesInput = {
    id?: StringFieldUpdateOperationsInput | string
    num_of_guests?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_proof?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    user_id?: StringFieldUpdateOperationsInput | string
    Review?: ReviewUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutRoom_typesInput = {
    id?: StringFieldUpdateOperationsInput | string
    num_of_guests?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_proof?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUpdateWithoutRoom_typesInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutReviewNestedInput
    booking?: BookingUpdateOneRequiredWithoutReviewNestedInput
    ReviewReplies?: ReviewRepliesUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutRoom_typesInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    booking_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ReviewReplies?: ReviewRepliesUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutRoom_typesInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    booking_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UnavailableUpdateWithoutRoom_typesInput = {
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnavailableUncheckedUpdateWithoutRoom_typesInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnavailableUncheckedUpdateManyWithoutRoom_typesInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyBookingInput = {
    id?: number
    rating: number
    review: string
    user_id: string
    room_types_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type ReviewUpdateWithoutBookingInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutReviewNestedInput
    room_types?: RoomTypesUpdateOneRequiredWithoutReviewNestedInput
    ReviewReplies?: ReviewRepliesUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    room_types_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ReviewReplies?: ReviewRepliesUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    room_types_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewRepliesCreateManyReviewInput = {
    id?: number
    tenant_id: string
    reply: string
  }

  export type ReviewRepliesUpdateWithoutReviewInput = {
    reply?: StringFieldUpdateOperationsInput | string
    tenant?: TenantUpdateOneRequiredWithoutReviewRepliesNestedInput
  }

  export type ReviewRepliesUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenant_id?: StringFieldUpdateOperationsInput | string
    reply?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewRepliesUncheckedUpdateManyWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenant_id?: StringFieldUpdateOperationsInput | string
    reply?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}