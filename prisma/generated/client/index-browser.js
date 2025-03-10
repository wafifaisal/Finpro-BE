
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.4.1
 * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
 */
Prisma.prismaVersion = {
  client: "6.4.1",
  engine: "a9055b89e58b4b5bfb59600785423b1db3d0e75d"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  username: 'username',
  password: 'password',
  avatar: 'avatar',
  no_handphone: 'no_handphone',
  resetPasswordTokenVersion: 'resetPasswordTokenVersion',
  verificationTokenVersion: 'verificationTokenVersion',
  updateEmailTokenVersion: 'updateEmailTokenVersion',
  isVerify: 'isVerify',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  googleId: 'googleId'
};

exports.Prisma.TenantScalarFieldEnum = {
  id: 'id',
  googleId: 'googleId',
  name: 'name',
  password: 'password',
  no_handphone: 'no_handphone',
  email: 'email',
  avatar: 'avatar',
  resetPasswordTokenVersion: 'resetPasswordTokenVersion',
  verificationTokenVersion: 'verificationTokenVersion',
  isVerify: 'isVerify',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.LocationScalarFieldEnum = {
  id: 'id',
  address: 'address',
  country: 'country',
  city: 'city',
  deletedAt: 'deletedAt',
  longitude: 'longitude',
  latitude: 'latitude'
};

exports.Prisma.PropertyScalarFieldEnum = {
  id: 'id',
  name: 'name',
  desc: 'desc',
  category: 'category',
  terms_condition: 'terms_condition',
  click_rate: 'click_rate',
  location_id: 'location_id',
  tenantId: 'tenantId',
  isAvailable: 'isAvailable',
  facilities: 'facilities'
};

exports.Prisma.PropertyImagesScalarFieldEnum = {
  id: 'id',
  image_url: 'image_url',
  property_id: 'property_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.RoomTypesScalarFieldEnum = {
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
  deletedAt: 'deletedAt',
  facilities: 'facilities'
};

exports.Prisma.RoomImagesScalarFieldEnum = {
  id: 'id',
  image_url: 'image_url',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  room_types_id: 'room_types_id'
};

exports.Prisma.UnavailableScalarFieldEnum = {
  id: 'id',
  start_date: 'start_date',
  end_date: 'end_date',
  room_types_id: 'room_types_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RoomAvailabilityScalarFieldEnum = {
  id: 'id',
  date: 'date',
  availableCount: 'availableCount',
  room_typesId: 'room_typesId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Seasonal_pricesScalarFieldEnum = {
  id: 'id',
  price: 'price',
  start_date: 'start_date',
  end_date: 'end_date',
  dates: 'dates',
  apply_weekend: 'apply_weekend',
  apply_holiday: 'apply_holiday',
  room_typesId: 'room_typesId',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.BookingScalarFieldEnum = {
  id: 'id',
  num_of_guests: 'num_of_guests',
  total_price: 'total_price',
  quantity: 'quantity',
  add_breakfast: 'add_breakfast',
  details: 'details',
  start_date: 'start_date',
  end_date: 'end_date',
  created_at: 'created_at',
  updated_at: 'updated_at',
  expired_at: 'expired_at',
  payment_proof: 'payment_proof',
  payment_method: 'payment_method',
  status: 'status',
  user_id: 'user_id',
  room_types_id: 'room_types_id'
};

exports.Prisma.ReviewScalarFieldEnum = {
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

exports.Prisma.ReviewRepliesScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  review_id: 'review_id',
  reply: 'reply'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.PropertyFacility = exports.$Enums.PropertyFacility = {
  PEMANDANGAN_KOTA: 'PEMANDANGAN_KOTA',
  PEMANDANGAN_ALAM: 'PEMANDANGAN_ALAM',
  AKSES_PANTAI: 'AKSES_PANTAI',
  TAMAN: 'TAMAN',
  RAMAH_HEWAN_PELIHARAAN: 'RAMAH_HEWAN_PELIHARAAN',
  RESTAURANT: 'RESTAURANT',
  BAR: 'BAR',
  CONFERENCE_ROOM: 'CONFERENCE_ROOM',
  PARKIR_GRATIS: 'PARKIR_GRATIS',
  KOLAM_RENANG: 'KOLAM_RENANG',
  GYM: 'GYM',
  SPA: 'SPA',
  TAMAN_BERMAIN: 'TAMAN_BERMAIN',
  DEKAT_WISATA: 'DEKAT_WISATA',
  BUDGET: 'BUDGET',
  MEWAH: 'MEWAH'
};

exports.RoomFacility = exports.$Enums.RoomFacility = {
  WIFI: 'WIFI',
  TV: 'TV',
  AC: 'AC',
  ROOM_SERVICES: 'ROOM_SERVICES',
  MINI_BAR: 'MINI_BAR',
  LAUNDRY: 'LAUNDRY',
  SETRIKA: 'SETRIKA',
  ALAT_PEMADAM_API: 'ALAT_PEMADAM_API',
  MICROWAVE: 'MICROWAVE',
  KULKAS: 'KULKAS',
  RUANG_KERJA_KHUSUS: 'RUANG_KERJA_KHUSUS',
  KITCHEN: 'KITCHEN',
  HEATING: 'HEATING',
  AIR_PURIFIER: 'AIR_PURIFIER',
  SAFE: 'SAFE',
  BATHROBES: 'BATHROBES',
  TEA_COFFEE_MAKER: 'TEA_COFFEE_MAKER',
  BALCONY: 'BALCONY',
  BATHTUB: 'BATHTUB',
  JACUZZI: 'JACUZZI',
  PRIVATE_POOL: 'PRIVATE_POOL'
};

exports.PaymentMethod = exports.$Enums.PaymentMethod = {
  Manual: 'Manual',
  Midtrans: 'Midtrans'
};

exports.BookingStatus = exports.$Enums.BookingStatus = {
  new: 'new',
  completed: 'completed',
  canceled: 'canceled',
  waiting_payment: 'waiting_payment'
};

exports.Prisma.ModelName = {
  User: 'User',
  Tenant: 'Tenant',
  Location: 'Location',
  Property: 'Property',
  PropertyImages: 'PropertyImages',
  RoomTypes: 'RoomTypes',
  RoomImages: 'RoomImages',
  Unavailable: 'Unavailable',
  RoomAvailability: 'RoomAvailability',
  seasonal_prices: 'seasonal_prices',
  Booking: 'Booking',
  Review: 'Review',
  ReviewReplies: 'ReviewReplies'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
