export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
  UUID: any;
};



export type AppSetting = {
  __typename?: 'AppSetting';
  code: Scalars['String'];
  value: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type ApplyComponentSerialFormatInput = {
  id: Scalars['UUID'];
};

export type BasicKitInfo = {
  __typename?: 'BasicKitInfo';
  vin: Scalars['String'];
  kitNo: Scalars['String'];
  lotNo: Scalars['String'];
  modelCode: Scalars['String'];
  modelName: Scalars['String'];
};

export type Bom = {
  __typename?: 'Bom';
  plantId: Scalars['UUID'];
  plant?: Maybe<Plant>;
  sequence: Scalars['Int'];
  lotPartQuantitiesMatchShipment: Scalars['Boolean'];
  lots?: Maybe<Array<Maybe<Lot>>>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type BomFile = {
  __typename?: 'BomFile';
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
  bomFileCreatedAt: Scalars['String'];
  lotEntries: Array<BomFileLot>;
  lotParts: Array<BomFileLotPart>;
};

export type BomFileInput = {
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
  bomFileCreatedAt: Scalars['String'];
  lotEntries: Array<BomFileLotInput>;
  lotParts: Array<BomFileLotPartInput>;
};

export type BomFileKit = {
  __typename?: 'BomFileKit';
  kitNo: Scalars['String'];
  pcvCode: Scalars['String'];
};

export type BomFileKitInput = {
  kitNo: Scalars['String'];
  pcvCode: Scalars['String'];
};

export type BomFileLot = {
  __typename?: 'BomFileLot';
  lotNo: Scalars['String'];
  kits: Array<BomFileKit>;
};

export type BomFileLotInput = {
  lotNo: Scalars['String'];
  kits: Array<BomFileKitInput>;
};

export type BomFileLotPart = {
  __typename?: 'BomFileLotPart';
  lotNo: Scalars['String'];
  partNo: Scalars['String'];
  partDesc: Scalars['String'];
  quantity: Scalars['Int'];
};

export type BomFileLotPartInput = {
  lotNo: Scalars['String'];
  partNo: Scalars['String'];
  partDesc: Scalars['String'];
  quantity: Scalars['Int'];
};

export type BomFilterInput = {
  and?: Maybe<Array<BomFilterInput>>;
  or?: Maybe<Array<BomFilterInput>>;
  plantId?: Maybe<ComparableGuidOperationFilterInput>;
  plant?: Maybe<PlantFilterInput>;
  sequence?: Maybe<ComparableInt32OperationFilterInput>;
  lotPartQuantitiesMatchShipment?: Maybe<BooleanOperationFilterInput>;
  lots?: Maybe<ListFilterInputTypeOfLotFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

/** A connection to a list of items. */
export type BomListConnection = {
  __typename?: 'BomListConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<BomListEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<BomListDto>>;
};

export type BomListDto = {
  __typename?: 'BomListDTO';
  id: Scalars['UUID'];
  plantCode?: Maybe<Scalars['String']>;
  sequence: Scalars['Int'];
  lots?: Maybe<Array<Maybe<BomList_Lot>>>;
  createdAt: Scalars['DateTime'];
};

export type BomListDtoSortInput = {
  id?: Maybe<SortEnumType>;
  plantCode?: Maybe<SortEnumType>;
  sequence?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
};

/** An edge in a connection. */
export type BomListEdge = {
  __typename?: 'BomListEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: BomListDto;
};

export type BomList_Lot = {
  __typename?: 'BomList_Lot';
  lotNo?: Maybe<Scalars['String']>;
  shipmentSequence?: Maybe<Scalars['Int']>;
};

export type BomOverviewDto = {
  __typename?: 'BomOverviewDTO';
  id: Scalars['UUID'];
  plantCode: Scalars['String'];
  shipments: Array<BomShipInfoDto>;
  sequence: Scalars['Int'];
  lotCount: Scalars['Int'];
  partCount: Scalars['Int'];
  vehicleCount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

export type BomShipInfoDto = {
  __typename?: 'BomShipInfoDTO';
  shipmentId: Scalars['UUID'];
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};

export type BomSortInput = {
  plantId?: Maybe<SortEnumType>;
  plant?: Maybe<PlantSortInput>;
  sequence?: Maybe<SortEnumType>;
  lotPartQuantitiesMatchShipment?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

export type BooleanOperationFilterInput = {
  eq?: Maybe<Scalars['Boolean']>;
  neq?: Maybe<Scalars['Boolean']>;
};

export type CategoryInput = {
  code: Scalars['String'];
  name: Scalars['String'];
};

export type ComparableDateTimeOperationFilterInput = {
  eq?: Maybe<Scalars['DateTime']>;
  neq?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  nin?: Maybe<Array<Scalars['DateTime']>>;
  gt?: Maybe<Scalars['DateTime']>;
  ngt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  ngte?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
  nlt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  nlte?: Maybe<Scalars['DateTime']>;
};

export type ComparableGuidOperationFilterInput = {
  eq?: Maybe<Scalars['UUID']>;
  neq?: Maybe<Scalars['UUID']>;
  in?: Maybe<Array<Scalars['UUID']>>;
  nin?: Maybe<Array<Scalars['UUID']>>;
  gt?: Maybe<Scalars['UUID']>;
  ngt?: Maybe<Scalars['UUID']>;
  gte?: Maybe<Scalars['UUID']>;
  ngte?: Maybe<Scalars['UUID']>;
  lt?: Maybe<Scalars['UUID']>;
  nlt?: Maybe<Scalars['UUID']>;
  lte?: Maybe<Scalars['UUID']>;
  nlte?: Maybe<Scalars['UUID']>;
};

export type ComparableInt32OperationFilterInput = {
  eq?: Maybe<Scalars['Int']>;
  neq?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  nin?: Maybe<Array<Scalars['Int']>>;
  gt?: Maybe<Scalars['Int']>;
  ngt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  ngte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  nlt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  nlte?: Maybe<Scalars['Int']>;
};

export type ComparableNullableOfDateTimeOperationFilterInput = {
  eq?: Maybe<Scalars['DateTime']>;
  neq?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  gt?: Maybe<Scalars['DateTime']>;
  ngt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  ngte?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
  nlt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  nlte?: Maybe<Scalars['DateTime']>;
};

export type ComparableNullableOfGuidOperationFilterInput = {
  eq?: Maybe<Scalars['UUID']>;
  neq?: Maybe<Scalars['UUID']>;
  in?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  gt?: Maybe<Scalars['UUID']>;
  ngt?: Maybe<Scalars['UUID']>;
  gte?: Maybe<Scalars['UUID']>;
  ngte?: Maybe<Scalars['UUID']>;
  lt?: Maybe<Scalars['UUID']>;
  nlt?: Maybe<Scalars['UUID']>;
  lte?: Maybe<Scalars['UUID']>;
  nlte?: Maybe<Scalars['UUID']>;
};

export type Component = {
  __typename?: 'Component';
  code: Scalars['String'];
  name: Scalars['String'];
  iconURL: Scalars['String'];
  productionStation?: Maybe<ProductionStation>;
  productionStationId?: Maybe<Scalars['UUID']>;
  componentSerialRule: ComponentSerialRule;
  dcwsRequired: Scalars['Boolean'];
  pcvComponents: Array<PcvComponent>;
  kitComponents: Array<KitComponent>;
  componentStations: Array<ComponentStation>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type ComponentFilterInput = {
  and?: Maybe<Array<ComponentFilterInput>>;
  or?: Maybe<Array<ComponentFilterInput>>;
  code?: Maybe<StringOperationFilterInput>;
  name?: Maybe<StringOperationFilterInput>;
  iconURL?: Maybe<StringOperationFilterInput>;
  productionStation?: Maybe<ProductionStationFilterInput>;
  productionStationId?: Maybe<ComparableNullableOfGuidOperationFilterInput>;
  componentSerialRule?: Maybe<ComponentSerialRuleOperationFilterInput>;
  dcwsRequired?: Maybe<BooleanOperationFilterInput>;
  pcvComponents?: Maybe<ListFilterInputTypeOfPcvComponentFilterInput>;
  kitComponents?: Maybe<ListFilterInputTypeOfKitComponentFilterInput>;
  componentStations?: Maybe<ListFilterInputTypeOfComponentStationFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type ComponentInput = {
  id?: Maybe<Scalars['UUID']>;
  code: Scalars['String'];
  name: Scalars['String'];
  dcwsRequired?: Maybe<Scalars['Boolean']>;
  productionStationCode?: Maybe<Scalars['String']>;
  dcwsSerialCaptureRule: ComponentSerialRule;
};

export type ComponentSerial = {
  __typename?: 'ComponentSerial';
  kitComponentId: Scalars['UUID'];
  kitComponent?: Maybe<KitComponent>;
  serial1?: Maybe<Scalars['String']>;
  serial2?: Maybe<Scalars['String']>;
  original_Serial1?: Maybe<Scalars['String']>;
  original_Serial2?: Maybe<Scalars['String']>;
  verifiedAt?: Maybe<Scalars['DateTime']>;
  dcwsResponses?: Maybe<Array<Maybe<DcwsResponse>>>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type ComponentSerialDto = {
  __typename?: 'ComponentSerialDTO';
  vin: Scalars['String'];
  componentSerialId: Scalars['UUID'];
  lotNo: Scalars['String'];
  componentCode: Scalars['String'];
  componentName: Scalars['String'];
  productionStationCode: Scalars['String'];
  productionStationName: Scalars['String'];
  serial1: Scalars['String'];
  serial2: Scalars['String'];
  verifiedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
};

export type ComponentSerialFilterInput = {
  and?: Maybe<Array<ComponentSerialFilterInput>>;
  or?: Maybe<Array<ComponentSerialFilterInput>>;
  kitComponentId?: Maybe<ComparableGuidOperationFilterInput>;
  kitComponent?: Maybe<KitComponentFilterInput>;
  serial1?: Maybe<StringOperationFilterInput>;
  serial2?: Maybe<StringOperationFilterInput>;
  original_Serial1?: Maybe<StringOperationFilterInput>;
  original_Serial2?: Maybe<StringOperationFilterInput>;
  verifiedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
  dcwsResponses?: Maybe<ListFilterInputTypeOfDcwsResponseFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type ComponentSerialInput = {
  kitComponentId: Scalars['UUID'];
  serial1?: Maybe<Scalars['String']>;
  serial2?: Maybe<Scalars['String']>;
  replace?: Scalars['Boolean'];
};

export enum ComponentSerialRule {
  OneOrBothSerials = 'ONE_OR_BOTH_SERIALS',
  OneSerial = 'ONE_SERIAL',
  BothSerials = 'BOTH_SERIALS',
  VinAndBody = 'VIN_AND_BODY'
}

export type ComponentSerialRuleOperationFilterInput = {
  eq?: Maybe<ComponentSerialRule>;
  neq?: Maybe<ComponentSerialRule>;
  in?: Maybe<Array<ComponentSerialRule>>;
  nin?: Maybe<Array<ComponentSerialRule>>;
};

export type ComponentSerialSortInput = {
  kitComponentId?: Maybe<SortEnumType>;
  kitComponent?: Maybe<KitComponentSortInput>;
  serial1?: Maybe<SortEnumType>;
  serial2?: Maybe<SortEnumType>;
  original_Serial1?: Maybe<SortEnumType>;
  original_Serial2?: Maybe<SortEnumType>;
  verifiedAt?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

/** A connection to a list of items. */
export type ComponentSerialsConnection = {
  __typename?: 'ComponentSerialsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<ComponentSerialsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ComponentSerial>>;
};

/** An edge in a connection. */
export type ComponentSerialsEdge = {
  __typename?: 'ComponentSerialsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ComponentSerial;
};

export type ComponentSortInput = {
  code?: Maybe<SortEnumType>;
  name?: Maybe<SortEnumType>;
  iconURL?: Maybe<SortEnumType>;
  productionStation?: Maybe<ProductionStationSortInput>;
  productionStationId?: Maybe<SortEnumType>;
  componentSerialRule?: Maybe<SortEnumType>;
  dcwsRequired?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

export type ComponentStation = {
  __typename?: 'ComponentStation';
  component: Component;
  componentId: Scalars['UUID'];
  station: ProductionStation;
  stationId: Scalars['UUID'];
  saveCDCComponent: Scalars['Boolean'];
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type ComponentStationFilterInput = {
  and?: Maybe<Array<ComponentStationFilterInput>>;
  or?: Maybe<Array<ComponentStationFilterInput>>;
  component?: Maybe<ComponentFilterInput>;
  componentId?: Maybe<ComparableGuidOperationFilterInput>;
  station?: Maybe<ProductionStationFilterInput>;
  stationId?: Maybe<ComparableGuidOperationFilterInput>;
  saveCDCComponent?: Maybe<BooleanOperationFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type ComponentStationSortInput = {
  component?: Maybe<ComponentSortInput>;
  componentId?: Maybe<SortEnumType>;
  station?: Maybe<ProductionStationSortInput>;
  stationId?: Maybe<SortEnumType>;
  saveCDCComponent?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

/** A connection to a list of items. */
export type ComponentStationsConnection = {
  __typename?: 'ComponentStationsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<ComponentStationsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ComponentStation>>;
};

/** An edge in a connection. */
export type ComponentStationsEdge = {
  __typename?: 'ComponentStationsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ComponentStation;
};

/** A connection to a list of items. */
export type ComponentsConnection = {
  __typename?: 'ComponentsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<ComponentsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Component>>;
};

/** An edge in a connection. */
export type ComponentsEdge = {
  __typename?: 'ComponentsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Component;
};

export type ConfigurationDto = {
  __typename?: 'ConfigurationDTO';
  dcwsServiceAddress: Scalars['String'];
  allowGraphqlIntrospection: Scalars['String'];
};

export type CreateCategoryInput = {
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CreatePcvInput = {
  pcvCode: Scalars['String'];
  modelYear: Scalars['Int'];
  pcvModel: CategoryInput;
  pcvSubmodel: CategoryInput;
  pcvSeries: CategoryInput;
  pcvEngine: CategoryInput;
  pcvTransmission: CategoryInput;
  pcvDrive: CategoryInput;
  pcvPaint: CategoryInput;
  pcvTrim: CategoryInput;
  componentCodes: Array<Scalars['String']>;
};


export type DcwsComponentResponseInput = {
  vehicleComponentId: Scalars['UUID'];
  responseCode?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
};

export type DcwsResponse = {
  __typename?: 'DcwsResponse';
  processExcptionCode?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  componentSerialId: Scalars['UUID'];
  componentSerial?: Maybe<ComponentSerial>;
  dcwsSuccessfulSave: Scalars['Boolean'];
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type DcwsResponseFilterInput = {
  and?: Maybe<Array<DcwsResponseFilterInput>>;
  or?: Maybe<Array<DcwsResponseFilterInput>>;
  processExcptionCode?: Maybe<StringOperationFilterInput>;
  errorMessage?: Maybe<StringOperationFilterInput>;
  componentSerialId?: Maybe<ComparableGuidOperationFilterInput>;
  componentSerial?: Maybe<ComponentSerialFilterInput>;
  dcwsSuccessfulSave?: Maybe<BooleanOperationFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type DcwsResponseSortInput = {
  processExcptionCode?: Maybe<SortEnumType>;
  errorMessage?: Maybe<SortEnumType>;
  componentSerialId?: Maybe<SortEnumType>;
  componentSerial?: Maybe<ComponentSerialSortInput>;
  dcwsSuccessfulSave?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

/** A connection to a list of items. */
export type DcwsResponsesConnection = {
  __typename?: 'DcwsResponsesConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<DcwsResponsesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<DcwsResponse>>;
};

/** An edge in a connection. */
export type DcwsResponsesEdge = {
  __typename?: 'DcwsResponsesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: DcwsResponse;
};

export type Dealer = {
  __typename?: 'Dealer';
  code: Scalars['String'];
  name: Scalars['String'];
  kits: Array<Kit>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type DealerFilterInput = {
  and?: Maybe<Array<DealerFilterInput>>;
  or?: Maybe<Array<DealerFilterInput>>;
  code?: Maybe<StringOperationFilterInput>;
  name?: Maybe<StringOperationFilterInput>;
  kits?: Maybe<ListFilterInputTypeOfKitFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type DealerSortInput = {
  code?: Maybe<SortEnumType>;
  name?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

/** A connection to a list of items. */
export type DealersConnection = {
  __typename?: 'DealersConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<DealersEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Dealer>>;
};

/** An edge in a connection. */
export type DealersEdge = {
  __typename?: 'DealersEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Dealer;
};

export type Entry = {
  __typename?: 'Entry';
  txType: SnapshotChangeStatus;
  currentTimeLineCode: TimeLineEventCode;
  lotNo?: Maybe<Scalars['String']>;
  kitNo?: Maybe<Scalars['String']>;
  vIN?: Maybe<Scalars['String']>;
  dealerCode?: Maybe<Scalars['String']>;
  engineSerialNumber?: Maybe<Scalars['String']>;
  customReceived?: Maybe<Scalars['DateTime']>;
  originalPlanBuild?: Maybe<Scalars['DateTime']>;
  planBuild?: Maybe<Scalars['DateTime']>;
  verifyVIN?: Maybe<Scalars['DateTime']>;
  buildCompleted?: Maybe<Scalars['DateTime']>;
  gateRelease?: Maybe<Scalars['DateTime']>;
  wholesale?: Maybe<Scalars['DateTime']>;
};

export type Error = {
  __typename?: 'Error';
  path: Array<Scalars['String']>;
  message: Scalars['String'];
};

export enum FordInterfaceFileType {
  Bom = 'BOM',
  Ship = 'SHIP',
  Vin = 'VIN',
  PartnerStatusAck = 'PARTNER_STATUS_ACK',
  Unkown = 'UNKOWN'
}

export type Hu_Part = {
  __typename?: 'HU_Part';
  partNo: Scalars['String'];
  partDesc: Scalars['String'];
  quantity: Scalars['Int'];
};

export type HandlingUnit = {
  __typename?: 'HandlingUnit';
  code?: Maybe<Scalars['String']>;
  shipmentInvoiceId: Scalars['UUID'];
  shipmentInvoice?: Maybe<ShipmentInvoice>;
  parts?: Maybe<Array<Maybe<ShipmentPart>>>;
  received?: Maybe<Array<Maybe<HandlingUnitReceived>>>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type HandlingUnitFilterInput = {
  and?: Maybe<Array<HandlingUnitFilterInput>>;
  or?: Maybe<Array<HandlingUnitFilterInput>>;
  code?: Maybe<StringOperationFilterInput>;
  shipmentInvoiceId?: Maybe<ComparableGuidOperationFilterInput>;
  shipmentInvoice?: Maybe<ShipmentInvoiceFilterInput>;
  parts?: Maybe<ListFilterInputTypeOfShipmentPartFilterInput>;
  received?: Maybe<ListFilterInputTypeOfHandlingUnitReceivedFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type HandlingUnitInfoPayload = {
  __typename?: 'HandlingUnitInfoPayload';
  code?: Maybe<Scalars['String']>;
  invoiceNo?: Maybe<Scalars['String']>;
  lotNo?: Maybe<Scalars['String']>;
  shipmentId: Scalars['UUID'];
  plantCode: Scalars['String'];
  shipmentSequence: Scalars['Int'];
  modelCode?: Maybe<Scalars['String']>;
  modelName?: Maybe<Scalars['String']>;
  partCount: Scalars['Int'];
  receivedAt?: Maybe<Scalars['DateTime']>;
  parts: Array<Hu_Part>;
};

export type HandlingUnitOverview = {
  __typename?: 'HandlingUnitOverview';
  plantCode?: Maybe<Scalars['String']>;
  shipmentSequence: Scalars['Int'];
  handlingUnitCode?: Maybe<Scalars['String']>;
  lotNo?: Maybe<Scalars['String']>;
  invoiceNo?: Maybe<Scalars['String']>;
  partCount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  receivedAt?: Maybe<Scalars['DateTime']>;
  receiveCancledAt?: Maybe<Scalars['DateTime']>;
};

export type HandlingUnitReceived = {
  __typename?: 'HandlingUnitReceived';
  handlingUnitId: Scalars['UUID'];
  handlingUnit?: Maybe<HandlingUnit>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type HandlingUnitReceivedFilterInput = {
  and?: Maybe<Array<HandlingUnitReceivedFilterInput>>;
  or?: Maybe<Array<HandlingUnitReceivedFilterInput>>;
  handlingUnitId?: Maybe<ComparableGuidOperationFilterInput>;
  handlingUnit?: Maybe<HandlingUnitFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type HandlingUnitSortInput = {
  code?: Maybe<SortEnumType>;
  shipmentInvoiceId?: Maybe<SortEnumType>;
  shipmentInvoice?: Maybe<ShipmentInvoiceSortInput>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

/** A connection to a list of items. */
export type HandlingUnitsConnection = {
  __typename?: 'HandlingUnitsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<HandlingUnitsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<HandlingUnit>>;
};

/** An edge in a connection. */
export type HandlingUnitsEdge = {
  __typename?: 'HandlingUnitsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: HandlingUnit;
};

export type ICategory = {
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ItemCountDto = {
  __typename?: 'ItemCountDTO';
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  count: Scalars['Int'];
};

export type Kit = {
  __typename?: 'Kit';
  vin: Scalars['String'];
  kitNo: Scalars['String'];
  lotId: Scalars['UUID'];
  lot: Lot;
  dealerId?: Maybe<Scalars['UUID']>;
  dealer?: Maybe<Dealer>;
  kitComponents: Array<KitComponent>;
  timelineEvents: Array<KitTimelineEvent>;
  snapshots: Array<KitSnapshot>;
  kitVins: Array<KitVin>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type KitComponent = {
  __typename?: 'KitComponent';
  componentSerials?: Maybe<Array<Maybe<ComponentSerial>>>;
  kitId: Scalars['UUID'];
  kit?: Maybe<Kit>;
  componentId: Scalars['UUID'];
  component?: Maybe<Component>;
  productionStationId: Scalars['UUID'];
  productionStation?: Maybe<ProductionStation>;
  verifiedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};


export type KitComponentComponentSerialsArgs = {
  where?: Maybe<ComponentSerialFilterInput>;
};

export type KitComponentFilterInput = {
  and?: Maybe<Array<KitComponentFilterInput>>;
  or?: Maybe<Array<KitComponentFilterInput>>;
  kitId?: Maybe<ComparableGuidOperationFilterInput>;
  kit?: Maybe<KitFilterInput>;
  componentId?: Maybe<ComparableGuidOperationFilterInput>;
  component?: Maybe<ComponentFilterInput>;
  productionStationId?: Maybe<ComparableGuidOperationFilterInput>;
  productionStation?: Maybe<ProductionStationFilterInput>;
  componentSerials?: Maybe<ListFilterInputTypeOfComponentSerialFilterInput>;
  verifiedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type KitComponentSerialInfo = {
  __typename?: 'KitComponentSerialInfo';
  componentCode: Scalars['String'];
  componentName: Scalars['String'];
  componentIconURL: Scalars['String'];
  removedAt?: Maybe<Scalars['DateTime']>;
  stations: Array<StatcionSerialInfo>;
};

export type KitComponentSortInput = {
  kitId?: Maybe<SortEnumType>;
  kit?: Maybe<KitSortInput>;
  componentId?: Maybe<SortEnumType>;
  component?: Maybe<ComponentSortInput>;
  productionStationId?: Maybe<SortEnumType>;
  productionStation?: Maybe<ProductionStationSortInput>;
  verifiedAt?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

/** A connection to a list of items. */
export type KitComponentsConnection = {
  __typename?: 'KitComponentsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<KitComponentsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<KitComponent>>;
};

/** An edge in a connection. */
export type KitComponentsEdge = {
  __typename?: 'KitComponentsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: KitComponent;
};

export type KitFilterInput = {
  and?: Maybe<Array<KitFilterInput>>;
  or?: Maybe<Array<KitFilterInput>>;
  vIN?: Maybe<StringOperationFilterInput>;
  kitNo?: Maybe<StringOperationFilterInput>;
  lotId?: Maybe<ComparableGuidOperationFilterInput>;
  lot?: Maybe<LotFilterInput>;
  dealerId?: Maybe<ComparableNullableOfGuidOperationFilterInput>;
  dealer?: Maybe<DealerFilterInput>;
  kitComponents?: Maybe<ListFilterInputTypeOfKitComponentFilterInput>;
  timelineEvents?: Maybe<ListFilterInputTypeOfKitTimelineEventFilterInput>;
  snapshots?: Maybe<ListFilterInputTypeOfKitSnapshotFilterInput>;
  kitVins?: Maybe<ListFilterInputTypeOfKitVinFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

/** A connection to a list of items. */
export type KitListConnection = {
  __typename?: 'KitListConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<KitListEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<KitListItemDto>>;
};

/** An edge in a connection. */
export type KitListEdge = {
  __typename?: 'KitListEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: KitListItemDto;
};

export type KitListItemDto = {
  __typename?: 'KitListItemDTO';
  vin: Scalars['String'];
  id: Scalars['UUID'];
  lotNo: Scalars['String'];
  kitNo: Scalars['String'];
  modelCode: Scalars['String'];
  modelName: Scalars['String'];
  lastTimelineEvent?: Maybe<Scalars['String']>;
  lastTimelineEventDate?: Maybe<Scalars['DateTime']>;
  componentCount?: Maybe<Scalars['Int']>;
  scannedComponentCount?: Maybe<Scalars['Int']>;
  verifiedComponentCount?: Maybe<Scalars['Int']>;
  imported?: Maybe<Scalars['DateTime']>;
};

export type KitListItemDtoSortInput = {
  id?: Maybe<SortEnumType>;
  lotNo?: Maybe<SortEnumType>;
  kitNo?: Maybe<SortEnumType>;
  vIN?: Maybe<SortEnumType>;
  modelCode?: Maybe<SortEnumType>;
  modelName?: Maybe<SortEnumType>;
  lastTimelineEvent?: Maybe<SortEnumType>;
  lastTimelineEventDate?: Maybe<SortEnumType>;
  componentCount?: Maybe<SortEnumType>;
  scannedComponentCount?: Maybe<SortEnumType>;
  verifiedComponentCount?: Maybe<SortEnumType>;
  imported?: Maybe<SortEnumType>;
};

export type KitSnapshot = {
  __typename?: 'KitSnapshot';
  kitSnapshotRunId: Scalars['UUID'];
  kitSnapshotRun?: Maybe<KitSnapshotRun>;
  kitId: Scalars['UUID'];
  kit?: Maybe<Kit>;
  changeStatusCode: SnapshotChangeStatus;
  kitTimeLineEventTypeId: Scalars['UUID'];
  kitTimeLineEventType?: Maybe<KitTimelineEventType>;
  vIN?: Maybe<Scalars['String']>;
  dealerCode?: Maybe<Scalars['String']>;
  engineSerialNumber?: Maybe<Scalars['String']>;
  orginalPlanBuild?: Maybe<Scalars['DateTime']>;
  customReceived?: Maybe<Scalars['DateTime']>;
  planBuild?: Maybe<Scalars['DateTime']>;
  verifyVIN?: Maybe<Scalars['DateTime']>;
  buildCompleted?: Maybe<Scalars['DateTime']>;
  gateRelease?: Maybe<Scalars['DateTime']>;
  wholesale?: Maybe<Scalars['DateTime']>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type KitSnapshotFilterInput = {
  and?: Maybe<Array<KitSnapshotFilterInput>>;
  or?: Maybe<Array<KitSnapshotFilterInput>>;
  kitSnapshotRunId?: Maybe<ComparableGuidOperationFilterInput>;
  kitSnapshotRun?: Maybe<KitSnapshotRunFilterInput>;
  kitId?: Maybe<ComparableGuidOperationFilterInput>;
  kit?: Maybe<KitFilterInput>;
  changeStatusCode?: Maybe<SnapshotChangeStatusOperationFilterInput>;
  kitTimeLineEventTypeId?: Maybe<ComparableGuidOperationFilterInput>;
  kitTimeLineEventType?: Maybe<KitTimelineEventTypeFilterInput>;
  vIN?: Maybe<StringOperationFilterInput>;
  dealerCode?: Maybe<StringOperationFilterInput>;
  engineSerialNumber?: Maybe<StringOperationFilterInput>;
  orginalPlanBuild?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
  customReceived?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
  planBuild?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
  verifyVIN?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
  buildCompleted?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
  gateRelease?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
  wholesale?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type KitSnapshotInput = {
  runDate?: Maybe<Scalars['DateTime']>;
  plantCode: Scalars['String'];
  rejectIfNoChanges: Scalars['Boolean'];
  rejectIfPriorSnapshotNotAcknowledged: Scalars['Boolean'];
  allowMultipleSnapshotsPerDay: Scalars['Boolean'];
};

export type KitSnapshotRun = {
  __typename?: 'KitSnapshotRun';
  plantId: Scalars['UUID'];
  plant?: Maybe<Plant>;
  runDate: Scalars['DateTime'];
  sequence: Scalars['Int'];
  kitSnapshots?: Maybe<Array<Maybe<KitSnapshot>>>;
  partnerStatusAck?: Maybe<PartnerStatusAck>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type KitSnapshotRunDto = {
  __typename?: 'KitSnapshotRunDTO';
  runDate: Scalars['DateTime'];
  sequence: Scalars['Int'];
  plantCode?: Maybe<Scalars['String']>;
  partnerPlantCode?: Maybe<Scalars['String']>;
  partnerPlantType?: Maybe<Scalars['String']>;
  partnerStatusFilename?: Maybe<Scalars['String']>;
  partnerStatusAck?: Maybe<PartnerStatusAckDto>;
  entries?: Maybe<Array<Maybe<Entry>>>;
};

export type KitSnapshotRunFilterInput = {
  and?: Maybe<Array<KitSnapshotRunFilterInput>>;
  or?: Maybe<Array<KitSnapshotRunFilterInput>>;
  plantId?: Maybe<ComparableGuidOperationFilterInput>;
  plant?: Maybe<PlantFilterInput>;
  runDate?: Maybe<ComparableDateTimeOperationFilterInput>;
  sequence?: Maybe<ComparableInt32OperationFilterInput>;
  kitSnapshots?: Maybe<ListFilterInputTypeOfKitSnapshotFilterInput>;
  partnerStatusAck?: Maybe<PartnerStatusAckFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type KitSnapshotRunSortInput = {
  plantId?: Maybe<SortEnumType>;
  plant?: Maybe<PlantSortInput>;
  runDate?: Maybe<SortEnumType>;
  sequence?: Maybe<SortEnumType>;
  partnerStatusAck?: Maybe<PartnerStatusAckSortInput>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

/** A connection to a list of items. */
export type KitSnapshotRunsConnection = {
  __typename?: 'KitSnapshotRunsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<KitSnapshotRunsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<KitSnapshotRun>>;
};

/** An edge in a connection. */
export type KitSnapshotRunsEdge = {
  __typename?: 'KitSnapshotRunsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: KitSnapshotRun;
};

export type KitSnapshotSortInput = {
  kitSnapshotRunId?: Maybe<SortEnumType>;
  kitSnapshotRun?: Maybe<KitSnapshotRunSortInput>;
  kitId?: Maybe<SortEnumType>;
  kit?: Maybe<KitSortInput>;
  changeStatusCode?: Maybe<SortEnumType>;
  kitTimeLineEventTypeId?: Maybe<SortEnumType>;
  kitTimeLineEventType?: Maybe<KitTimelineEventTypeSortInput>;
  vIN?: Maybe<SortEnumType>;
  dealerCode?: Maybe<SortEnumType>;
  engineSerialNumber?: Maybe<SortEnumType>;
  orginalPlanBuild?: Maybe<SortEnumType>;
  customReceived?: Maybe<SortEnumType>;
  planBuild?: Maybe<SortEnumType>;
  verifyVIN?: Maybe<SortEnumType>;
  buildCompleted?: Maybe<SortEnumType>;
  gateRelease?: Maybe<SortEnumType>;
  wholesale?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

/** A connection to a list of items. */
export type KitSnapshotsConnection = {
  __typename?: 'KitSnapshotsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<KitSnapshotsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<KitSnapshot>>;
};

/** An edge in a connection. */
export type KitSnapshotsEdge = {
  __typename?: 'KitSnapshotsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: KitSnapshot;
};

export type KitSortInput = {
  vIN?: Maybe<SortEnumType>;
  kitNo?: Maybe<SortEnumType>;
  lotId?: Maybe<SortEnumType>;
  lot?: Maybe<LotSortInput>;
  dealerId?: Maybe<SortEnumType>;
  dealer?: Maybe<DealerSortInput>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

export type KitTimelineDto = {
  __typename?: 'KitTimelineDTO';
  vin: Scalars['String'];
  lotNo: Scalars['String'];
  kitNo: Scalars['String'];
  timelineItems: Array<TimelineEventDto>;
};

export type KitTimelineEvent = {
  __typename?: 'KitTimelineEvent';
  kitTimelineEventTypeId: Scalars['UUID'];
  eventType?: Maybe<KitTimelineEventType>;
  eventDate: Scalars['DateTime'];
  eventNote?: Maybe<Scalars['String']>;
  kitId: Scalars['UUID'];
  kit?: Maybe<Kit>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type KitTimelineEventFilterInput = {
  and?: Maybe<Array<KitTimelineEventFilterInput>>;
  or?: Maybe<Array<KitTimelineEventFilterInput>>;
  kitTimelineEventTypeId?: Maybe<ComparableGuidOperationFilterInput>;
  eventType?: Maybe<KitTimelineEventTypeFilterInput>;
  eventDate?: Maybe<ComparableDateTimeOperationFilterInput>;
  eventNote?: Maybe<StringOperationFilterInput>;
  kitId?: Maybe<ComparableGuidOperationFilterInput>;
  kit?: Maybe<KitFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type KitTimelineEventInput = {
  kitNo: Scalars['String'];
  eventCode: TimeLineEventCode;
  eventDate: Scalars['DateTime'];
  eventNote: Scalars['String'];
  dealerCode: Scalars['String'];
};

export type KitTimelineEventSortInput = {
  kitTimelineEventTypeId?: Maybe<SortEnumType>;
  eventType?: Maybe<KitTimelineEventTypeSortInput>;
  eventDate?: Maybe<SortEnumType>;
  eventNote?: Maybe<SortEnumType>;
  kitId?: Maybe<SortEnumType>;
  kit?: Maybe<KitSortInput>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

export type KitTimelineEventType = {
  __typename?: 'KitTimelineEventType';
  code: TimeLineEventCode;
  description: Scalars['String'];
  sequence: Scalars['Int'];
  snapshots: Array<KitSnapshot>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type KitTimelineEventTypeFilterInput = {
  and?: Maybe<Array<KitTimelineEventTypeFilterInput>>;
  or?: Maybe<Array<KitTimelineEventTypeFilterInput>>;
  code?: Maybe<TimeLineEventCodeOperationFilterInput>;
  description?: Maybe<StringOperationFilterInput>;
  sequence?: Maybe<ComparableInt32OperationFilterInput>;
  snapshots?: Maybe<ListFilterInputTypeOfKitSnapshotFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type KitTimelineEventTypeSortInput = {
  code?: Maybe<SortEnumType>;
  description?: Maybe<SortEnumType>;
  sequence?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

/** A connection to a list of items. */
export type KitTimelineEventsConnection = {
  __typename?: 'KitTimelineEventsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<KitTimelineEventsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<KitTimelineEvent>>;
};

/** An edge in a connection. */
export type KitTimelineEventsEdge = {
  __typename?: 'KitTimelineEventsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: KitTimelineEvent;
};

export type KitVin = {
  __typename?: 'KitVin';
  vin?: Maybe<Scalars['String']>;
  kitVinImportId: Scalars['UUID'];
  kitVinImport?: Maybe<KitVinImport>;
  kitId: Scalars['UUID'];
  kit?: Maybe<Kit>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type KitVinAckDto = {
  __typename?: 'KitVinAckDTO';
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
  errorMessage: Scalars['String'];
  filename: Scalars['String'];
  payloadText: Scalars['String'];
};

export type KitVinFilterInput = {
  and?: Maybe<Array<KitVinFilterInput>>;
  or?: Maybe<Array<KitVinFilterInput>>;
  kitVinImportId?: Maybe<ComparableGuidOperationFilterInput>;
  kitVinImport?: Maybe<KitVinImportFilterInput>;
  kitId?: Maybe<ComparableGuidOperationFilterInput>;
  kit?: Maybe<KitFilterInput>;
  vIN?: Maybe<StringOperationFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type KitVinImport = {
  __typename?: 'KitVinImport';
  plantId: Scalars['UUID'];
  plant?: Maybe<Plant>;
  partnerPlantCode?: Maybe<Scalars['String']>;
  sequence: Scalars['Int'];
  kitVins?: Maybe<Array<Maybe<KitVin>>>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type KitVinImportFilterInput = {
  and?: Maybe<Array<KitVinImportFilterInput>>;
  or?: Maybe<Array<KitVinImportFilterInput>>;
  plantId?: Maybe<ComparableGuidOperationFilterInput>;
  plant?: Maybe<PlantFilterInput>;
  partnerPlantCode?: Maybe<StringOperationFilterInput>;
  sequence?: Maybe<ComparableInt32OperationFilterInput>;
  kitVins?: Maybe<ListFilterInputTypeOfKitVinFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type KitVinImportSortInput = {
  plantId?: Maybe<SortEnumType>;
  plant?: Maybe<PlantSortInput>;
  partnerPlantCode?: Maybe<SortEnumType>;
  sequence?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

/** A connection to a list of items. */
export type KitsByCurrentTimelineEventConnection = {
  __typename?: 'KitsByCurrentTimelineEventConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<KitsByCurrentTimelineEventEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Kit>>;
};

/** An edge in a connection. */
export type KitsByCurrentTimelineEventEdge = {
  __typename?: 'KitsByCurrentTimelineEventEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Kit;
};

/** A connection to a list of items. */
export type KitsConnection = {
  __typename?: 'KitsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<KitsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Kit>>;
};

/** An edge in a connection. */
export type KitsEdge = {
  __typename?: 'KitsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Kit;
};

export type ListFilterInputTypeOfBomFilterInput = {
  all?: Maybe<BomFilterInput>;
  none?: Maybe<BomFilterInput>;
  some?: Maybe<BomFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
};

export type ListFilterInputTypeOfComponentFilterInput = {
  all?: Maybe<ComponentFilterInput>;
  none?: Maybe<ComponentFilterInput>;
  some?: Maybe<ComponentFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
};

export type ListFilterInputTypeOfComponentSerialFilterInput = {
  all?: Maybe<ComponentSerialFilterInput>;
  none?: Maybe<ComponentSerialFilterInput>;
  some?: Maybe<ComponentSerialFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
};

export type ListFilterInputTypeOfComponentStationFilterInput = {
  all?: Maybe<ComponentStationFilterInput>;
  none?: Maybe<ComponentStationFilterInput>;
  some?: Maybe<ComponentStationFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
};

export type ListFilterInputTypeOfDcwsResponseFilterInput = {
  all?: Maybe<DcwsResponseFilterInput>;
  none?: Maybe<DcwsResponseFilterInput>;
  some?: Maybe<DcwsResponseFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
};

export type ListFilterInputTypeOfHandlingUnitFilterInput = {
  all?: Maybe<HandlingUnitFilterInput>;
  none?: Maybe<HandlingUnitFilterInput>;
  some?: Maybe<HandlingUnitFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
};

export type ListFilterInputTypeOfHandlingUnitReceivedFilterInput = {
  all?: Maybe<HandlingUnitReceivedFilterInput>;
  none?: Maybe<HandlingUnitReceivedFilterInput>;
  some?: Maybe<HandlingUnitReceivedFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
};

export type ListFilterInputTypeOfKitComponentFilterInput = {
  all?: Maybe<KitComponentFilterInput>;
  none?: Maybe<KitComponentFilterInput>;
  some?: Maybe<KitComponentFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
};

export type ListFilterInputTypeOfKitFilterInput = {
  all?: Maybe<KitFilterInput>;
  none?: Maybe<KitFilterInput>;
  some?: Maybe<KitFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
};

export type ListFilterInputTypeOfKitSnapshotFilterInput = {
  all?: Maybe<KitSnapshotFilterInput>;
  none?: Maybe<KitSnapshotFilterInput>;
  some?: Maybe<KitSnapshotFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
};

export type ListFilterInputTypeOfKitSnapshotRunFilterInput = {
  all?: Maybe<KitSnapshotRunFilterInput>;
  none?: Maybe<KitSnapshotRunFilterInput>;
  some?: Maybe<KitSnapshotRunFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
};

export type ListFilterInputTypeOfKitTimelineEventFilterInput = {
  all?: Maybe<KitTimelineEventFilterInput>;
  none?: Maybe<KitTimelineEventFilterInput>;
  some?: Maybe<KitTimelineEventFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
};

export type ListFilterInputTypeOfKitVinFilterInput = {
  all?: Maybe<KitVinFilterInput>;
  none?: Maybe<KitVinFilterInput>;
  some?: Maybe<KitVinFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
};

export type ListFilterInputTypeOfKitVinImportFilterInput = {
  all?: Maybe<KitVinImportFilterInput>;
  none?: Maybe<KitVinImportFilterInput>;
  some?: Maybe<KitVinImportFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
};

export type ListFilterInputTypeOfLotFilterInput = {
  all?: Maybe<LotFilterInput>;
  none?: Maybe<LotFilterInput>;
  some?: Maybe<LotFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
};

export type ListFilterInputTypeOfLotPartFilterInput = {
  all?: Maybe<LotPartFilterInput>;
  none?: Maybe<LotPartFilterInput>;
  some?: Maybe<LotPartFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
};

export type ListFilterInputTypeOfLotPartReceivedFilterInput = {
  all?: Maybe<LotPartReceivedFilterInput>;
  none?: Maybe<LotPartReceivedFilterInput>;
  some?: Maybe<LotPartReceivedFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
};

export type ListFilterInputTypeOfPcvFilterInput = {
  all?: Maybe<PcvFilterInput>;
  none?: Maybe<PcvFilterInput>;
  some?: Maybe<PcvFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
};

export type ListFilterInputTypeOfPcvComponentFilterInput = {
  all?: Maybe<PcvComponentFilterInput>;
  none?: Maybe<PcvComponentFilterInput>;
  some?: Maybe<PcvComponentFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
};

export type ListFilterInputTypeOfShipmentFilterInput = {
  all?: Maybe<ShipmentFilterInput>;
  none?: Maybe<ShipmentFilterInput>;
  some?: Maybe<ShipmentFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
};

export type ListFilterInputTypeOfShipmentInvoiceFilterInput = {
  all?: Maybe<ShipmentInvoiceFilterInput>;
  none?: Maybe<ShipmentInvoiceFilterInput>;
  some?: Maybe<ShipmentInvoiceFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
};

export type ListFilterInputTypeOfShipmentLotFilterInput = {
  all?: Maybe<ShipmentLotFilterInput>;
  none?: Maybe<ShipmentLotFilterInput>;
  some?: Maybe<ShipmentLotFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
};

export type ListFilterInputTypeOfShipmentPartFilterInput = {
  all?: Maybe<ShipmentPartFilterInput>;
  none?: Maybe<ShipmentPartFilterInput>;
  some?: Maybe<ShipmentPartFilterInput>;
  any?: Maybe<Scalars['Boolean']>;
};

export type Lot = {
  __typename?: 'Lot';
  lotNo?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  plantId: Scalars['UUID'];
  plant?: Maybe<Plant>;
  bomId: Scalars['UUID'];
  bom?: Maybe<Bom>;
  modelId: Scalars['UUID'];
  pcv?: Maybe<Pcv>;
  kits?: Maybe<Array<Maybe<Kit>>>;
  lotParts?: Maybe<Array<Maybe<LotPart>>>;
  shipmentLots?: Maybe<Array<Maybe<ShipmentLot>>>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type LotDto = {
  __typename?: 'LotDTO';
  lotNo: Scalars['String'];
  model: Scalars['String'];
  modelCode: Scalars['String'];
  modelDesc: Scalars['String'];
  modelSeries: Scalars['String'];
  modelBody: Scalars['String'];
  createdAt: Scalars['DateTime'];
};

export type LotFilterInput = {
  and?: Maybe<Array<LotFilterInput>>;
  or?: Maybe<Array<LotFilterInput>>;
  lotNo?: Maybe<StringOperationFilterInput>;
  note?: Maybe<StringOperationFilterInput>;
  plantId?: Maybe<ComparableGuidOperationFilterInput>;
  plant?: Maybe<PlantFilterInput>;
  bomId?: Maybe<ComparableGuidOperationFilterInput>;
  bom?: Maybe<BomFilterInput>;
  modelId?: Maybe<ComparableGuidOperationFilterInput>;
  pcv?: Maybe<PcvFilterInput>;
  kits?: Maybe<ListFilterInputTypeOfKitFilterInput>;
  lotParts?: Maybe<ListFilterInputTypeOfLotPartFilterInput>;
  shipmentLots?: Maybe<ListFilterInputTypeOfShipmentLotFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type LotListDto = {
  __typename?: 'LotListDTO';
  id: Scalars['UUID'];
  plantCode: Scalars['String'];
  lotNo: Scalars['String'];
  kitCount: Scalars['Int'];
  timelineStatus?: Maybe<TimeLineEventCode>;
  createdAt: Scalars['DateTime'];
};

export type LotNoteInput = {
  lotNo?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type LotOverviewDto = {
  __typename?: 'LotOverviewDTO';
  id: Scalars['UUID'];
  bomId: Scalars['UUID'];
  bomSequence: Scalars['Int'];
  shipmentId: Scalars['UUID'];
  shipmentSequence: Scalars['Int'];
  lotNo: Scalars['String'];
  note: Scalars['String'];
  plantCode: Scalars['String'];
  pcvId: Scalars['UUID'];
  pcvCode: Scalars['String'];
  pcvDescription: Scalars['String'];
  customReceived?: Maybe<TimelineEventDto>;
  createdAt: Scalars['DateTime'];
};

export type LotPart = {
  __typename?: 'LotPart';
  partId: Scalars['UUID'];
  part?: Maybe<Part>;
  bomQuantity: Scalars['Int'];
  shipmentQuantity: Scalars['Int'];
  lotId: Scalars['UUID'];
  lot?: Maybe<Lot>;
  received?: Maybe<Array<Maybe<LotPartReceived>>>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type LotPartDto = {
  __typename?: 'LotPartDTO';
  lotNo?: Maybe<Scalars['String']>;
  partNo?: Maybe<Scalars['String']>;
  partDesc?: Maybe<Scalars['String']>;
  bomQuantity: Scalars['Int'];
  shipmentQuantity: Scalars['Int'];
  receivedQuantity: Scalars['Int'];
  importDate: Scalars['DateTime'];
  removedDate?: Maybe<Scalars['DateTime']>;
  receivedDate?: Maybe<Scalars['DateTime']>;
};

export type LotPartFilterInput = {
  and?: Maybe<Array<LotPartFilterInput>>;
  or?: Maybe<Array<LotPartFilterInput>>;
  partId?: Maybe<ComparableGuidOperationFilterInput>;
  part?: Maybe<PartFilterInput>;
  bomQuantity?: Maybe<ComparableInt32OperationFilterInput>;
  shipmentQuantity?: Maybe<ComparableInt32OperationFilterInput>;
  lotId?: Maybe<ComparableGuidOperationFilterInput>;
  lot?: Maybe<LotFilterInput>;
  received?: Maybe<ListFilterInputTypeOfLotPartReceivedFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type LotPartReceived = {
  __typename?: 'LotPartReceived';
  lotPartId: Scalars['UUID'];
  lotPart?: Maybe<LotPart>;
  quantity: Scalars['Int'];
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type LotPartReceivedDto = {
  __typename?: 'LotPartReceivedDTO';
  lotNo?: Maybe<Scalars['String']>;
  partNo?: Maybe<Scalars['String']>;
  partDesc?: Maybe<Scalars['String']>;
  receivedQuantity: Scalars['Int'];
  bomQuantity: Scalars['Int'];
  shipmentQuantity: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type LotPartReceivedFilterInput = {
  and?: Maybe<Array<LotPartReceivedFilterInput>>;
  or?: Maybe<Array<LotPartReceivedFilterInput>>;
  lotPartId?: Maybe<ComparableGuidOperationFilterInput>;
  lotPart?: Maybe<LotPartFilterInput>;
  quantity?: Maybe<ComparableInt32OperationFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type LotSortInput = {
  lotNo?: Maybe<SortEnumType>;
  note?: Maybe<SortEnumType>;
  plantId?: Maybe<SortEnumType>;
  plant?: Maybe<PlantSortInput>;
  bomId?: Maybe<SortEnumType>;
  bom?: Maybe<BomSortInput>;
  modelId?: Maybe<SortEnumType>;
  pcv?: Maybe<PcvSortInput>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

export type LotTimelineEventInput = {
  lotNo: Scalars['String'];
  eventCode: TimeLineEventCode;
  eventDate: Scalars['DateTime'];
  eventNote: Scalars['String'];
};

/** A connection to a list of items. */
export type LotsConnection = {
  __typename?: 'LotsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<LotsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Lot>>;
};

/** An edge in a connection. */
export type LotsEdge = {
  __typename?: 'LotsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Lot;
};

export type Mutation = {
  __typename?: 'Mutation';
  createKitTimelineEvent: MutationResultOfKitTimelineEvent;
  createLotTimelineEvent: MutationResultOfLot;
  saveComponent: MutationResultOfUpdateComponentPayload;
  setComponentDefaultStation: MutationResultOfUpdateComponentPayload;
  saveStation: MutationResultOfUpdateStationPayload;
  saveComponentStation: MutationResultOfSaveComponentStationPayload;
  captureComponentSerial: MutationResultOfComponentSerialDto;
  createDcwsResponse: MutationResultOfDcwsResponse;
  importShipment: MutationResultOfShipmentOverviewDto;
  importVIN: MutationResultOfKitVinImport;
  importBom: MutationResultOfBomOverviewDto;
  generateKitSnapshotRun: MutationResultOfSnapshotDto;
  createPlant: MutationResultOfPlantOverviewDto;
  createLotPartQuantityReceived: MutationResultOfLotPartDto;
  verifyComponentSerial: MutationResultOfDcwsResponse;
  setHandlingUnitReceived: MutationResultOfReceiveHandlingUnitPayload;
  applyComponentSerialFormat: ComponentSerial;
  setLotNote: MutationResultOfLot;
  rollbackKitsnapshots: MutationResultOfListOfKitSnapshot;
  importPartnerStatusAck: MutationResultOfPartnerStatusAck;
  createPCV: MutationResultOfSavePcvPayload;
  autoVerifyVIN: MutationResultOfVerifyVinsPayload;
  createPcvMetaData: MutationResultOfUpdateCategoryPayload;
  updatePcvMetaData: MutationResultOfUpdateCategoryPayload;
  removeShipment: MutationResultOfString;
  removeBom: MutationResultOfString;
};


export type MutationCreateKitTimelineEventArgs = {
  input: KitTimelineEventInput;
};


export type MutationCreateLotTimelineEventArgs = {
  input: LotTimelineEventInput;
};


export type MutationSaveComponentArgs = {
  input: ComponentInput;
};


export type MutationSetComponentDefaultStationArgs = {
  input: SetDefaultStationInput;
};


export type MutationSaveStationArgs = {
  input: StationInput;
};


export type MutationSaveComponentStationArgs = {
  input: SaveComponentStationInput;
};


export type MutationCaptureComponentSerialArgs = {
  input: ComponentSerialInput;
};


export type MutationCreateDcwsResponseArgs = {
  input: DcwsComponentResponseInput;
};


export type MutationImportShipmentArgs = {
  input: ShipFileInput;
};


export type MutationImportVinArgs = {
  input: VinFileInput;
};


export type MutationImportBomArgs = {
  input: BomFileInput;
};


export type MutationGenerateKitSnapshotRunArgs = {
  input: KitSnapshotInput;
};


export type MutationCreatePlantArgs = {
  input: PlantInput;
};


export type MutationCreateLotPartQuantityReceivedArgs = {
  input: ReceiveLotPartInput;
};


export type MutationVerifyComponentSerialArgs = {
  kitComponentId: Scalars['UUID'];
};


export type MutationSetHandlingUnitReceivedArgs = {
  input: ReceiveHandlingUnitInput;
};


export type MutationApplyComponentSerialFormatArgs = {
  input: ApplyComponentSerialFormatInput;
};


export type MutationSetLotNoteArgs = {
  input: LotNoteInput;
};


export type MutationRollbackKitsnapshotsArgs = {
  kitNo: Scalars['String'];
  toTimelineEventCode: TimeLineEventCode;
};


export type MutationImportPartnerStatusAckArgs = {
  input: PartnerStatusAckDtoInput;
};


export type MutationCreatePcvArgs = {
  input: CreatePcvInput;
};


export type MutationAutoVerifyVinArgs = {
  currentDate?: Maybe<Scalars['DateTime']>;
};


export type MutationCreatePcvMetaDataArgs = {
  pcvMetadataType: PcvMetaType;
  input: CreateCategoryInput;
};


export type MutationUpdatePcvMetaDataArgs = {
  pcvMetadataType: PcvMetaType;
  input: UpdateCategoryInput;
};


export type MutationRemoveShipmentArgs = {
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};


export type MutationRemoveBomArgs = {
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};

export type MutationResultOfBomOverviewDto = {
  __typename?: 'MutationResultOfBomOverviewDTO';
  payload?: Maybe<BomOverviewDto>;
  errors: Array<Error>;
};

export type MutationResultOfComponentSerialDto = {
  __typename?: 'MutationResultOfComponentSerialDTO';
  payload?: Maybe<ComponentSerialDto>;
  errors: Array<Error>;
};

export type MutationResultOfDcwsResponse = {
  __typename?: 'MutationResultOfDcwsResponse';
  payload?: Maybe<DcwsResponse>;
  errors: Array<Error>;
};

export type MutationResultOfKitTimelineEvent = {
  __typename?: 'MutationResultOfKitTimelineEvent';
  payload?: Maybe<KitTimelineEvent>;
  errors: Array<Error>;
};

export type MutationResultOfKitVinImport = {
  __typename?: 'MutationResultOfKitVinImport';
  payload?: Maybe<KitVinImport>;
  errors: Array<Error>;
};

export type MutationResultOfListOfKitSnapshot = {
  __typename?: 'MutationResultOfListOfKitSnapshot';
  payload?: Maybe<Array<Maybe<KitSnapshot>>>;
  errors: Array<Error>;
};

export type MutationResultOfLot = {
  __typename?: 'MutationResultOfLot';
  payload?: Maybe<Lot>;
  errors: Array<Error>;
};

export type MutationResultOfLotPartDto = {
  __typename?: 'MutationResultOfLotPartDTO';
  payload?: Maybe<LotPartDto>;
  errors: Array<Error>;
};

export type MutationResultOfPartnerStatusAck = {
  __typename?: 'MutationResultOfPartnerStatusAck';
  payload?: Maybe<PartnerStatusAck>;
  errors: Array<Error>;
};

export type MutationResultOfPlantOverviewDto = {
  __typename?: 'MutationResultOfPlantOverviewDTO';
  payload?: Maybe<PlantOverviewDto>;
  errors: Array<Error>;
};

export type MutationResultOfReceiveHandlingUnitPayload = {
  __typename?: 'MutationResultOfReceiveHandlingUnitPayload';
  payload?: Maybe<ReceiveHandlingUnitPayload>;
  errors: Array<Error>;
};

export type MutationResultOfSaveComponentStationPayload = {
  __typename?: 'MutationResultOfSaveComponentStationPayload';
  payload?: Maybe<SaveComponentStationPayload>;
  errors: Array<Error>;
};

export type MutationResultOfSavePcvPayload = {
  __typename?: 'MutationResultOfSavePcvPayload';
  payload?: Maybe<SavePcvPayload>;
  errors: Array<Error>;
};

export type MutationResultOfShipmentOverviewDto = {
  __typename?: 'MutationResultOfShipmentOverviewDTO';
  payload?: Maybe<ShipmentOverviewDto>;
  errors: Array<Error>;
};

export type MutationResultOfSnapshotDto = {
  __typename?: 'MutationResultOfSnapshotDTO';
  payload?: Maybe<SnapshotDto>;
  errors: Array<Error>;
};

export type MutationResultOfString = {
  __typename?: 'MutationResultOfString';
  payload?: Maybe<Scalars['String']>;
  errors: Array<Error>;
};

export type MutationResultOfUpdateCategoryPayload = {
  __typename?: 'MutationResultOfUpdateCategoryPayload';
  payload?: Maybe<UpdateCategoryPayload>;
  errors: Array<Error>;
};

export type MutationResultOfUpdateComponentPayload = {
  __typename?: 'MutationResultOfUpdateComponentPayload';
  payload?: Maybe<UpdateComponentPayload>;
  errors: Array<Error>;
};

export type MutationResultOfUpdateStationPayload = {
  __typename?: 'MutationResultOfUpdateStationPayload';
  payload?: Maybe<UpdateStationPayload>;
  errors: Array<Error>;
};

export type MutationResultOfVerifyVinsPayload = {
  __typename?: 'MutationResultOfVerifyVinsPayload';
  payload?: Maybe<VerifyVinsPayload>;
  errors: Array<Error>;
};

export type Pcv = {
  __typename?: 'PCV';
  pcvComponents: Array<PcvComponent>;
  code: Scalars['String'];
  description: Scalars['String'];
  modelYear: Scalars['String'];
  model: Scalars['String'];
  series: Scalars['String'];
  body: Scalars['String'];
  pcvModel?: Maybe<PcvModel>;
  pcvModelId?: Maybe<Scalars['UUID']>;
  pcvSubmodel?: Maybe<PcvSubmodel>;
  pcvSubmodelId?: Maybe<Scalars['UUID']>;
  pcvSeries?: Maybe<PcvSeries>;
  pcvSeriesId?: Maybe<Scalars['UUID']>;
  pcvEngine?: Maybe<PcvEngine>;
  pcvEngineId?: Maybe<Scalars['UUID']>;
  pcvTransmission?: Maybe<PcvTransmission>;
  pcvTransmissionId?: Maybe<Scalars['UUID']>;
  pcvDrive?: Maybe<PcvDrive>;
  pcvDriveId?: Maybe<Scalars['UUID']>;
  pcvPaint?: Maybe<PcvPaint>;
  pcvPaintId?: Maybe<Scalars['UUID']>;
  pcvTrim?: Maybe<PcvTrim>;
  pcvTrimId?: Maybe<Scalars['UUID']>;
  lots: Array<Lot>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type PcvFilterInput = {
  and?: Maybe<Array<PcvFilterInput>>;
  or?: Maybe<Array<PcvFilterInput>>;
  code?: Maybe<StringOperationFilterInput>;
  description?: Maybe<StringOperationFilterInput>;
  modelYear?: Maybe<StringOperationFilterInput>;
  model?: Maybe<StringOperationFilterInput>;
  series?: Maybe<StringOperationFilterInput>;
  body?: Maybe<StringOperationFilterInput>;
  pcvModel?: Maybe<PcvModelFilterInput>;
  pcvModelId?: Maybe<ComparableNullableOfGuidOperationFilterInput>;
  pcvSubmodel?: Maybe<PcvSubmodelFilterInput>;
  pcvSubmodelId?: Maybe<ComparableNullableOfGuidOperationFilterInput>;
  pcvSeries?: Maybe<PcvSeriesFilterInput>;
  pcvSeriesId?: Maybe<ComparableNullableOfGuidOperationFilterInput>;
  pcvEngine?: Maybe<PcvEngineFilterInput>;
  pcvEngineId?: Maybe<ComparableNullableOfGuidOperationFilterInput>;
  pcvTransmission?: Maybe<PcvTransmissionFilterInput>;
  pcvTransmissionId?: Maybe<ComparableNullableOfGuidOperationFilterInput>;
  pcvDrive?: Maybe<PcvDriveFilterInput>;
  pcvDriveId?: Maybe<ComparableNullableOfGuidOperationFilterInput>;
  pcvPaint?: Maybe<PcvPaintFilterInput>;
  pcvPaintId?: Maybe<ComparableNullableOfGuidOperationFilterInput>;
  pcvTrim?: Maybe<PcvTrimFilterInput>;
  pcvTrimId?: Maybe<ComparableNullableOfGuidOperationFilterInput>;
  lots?: Maybe<ListFilterInputTypeOfLotFilterInput>;
  pcvComponents?: Maybe<ListFilterInputTypeOfPcvComponentFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type PcvSortInput = {
  code?: Maybe<SortEnumType>;
  description?: Maybe<SortEnumType>;
  modelYear?: Maybe<SortEnumType>;
  model?: Maybe<SortEnumType>;
  series?: Maybe<SortEnumType>;
  body?: Maybe<SortEnumType>;
  pcvModel?: Maybe<PcvModelSortInput>;
  pcvModelId?: Maybe<SortEnumType>;
  pcvSubmodel?: Maybe<PcvSubmodelSortInput>;
  pcvSubmodelId?: Maybe<SortEnumType>;
  pcvSeries?: Maybe<PcvSeriesSortInput>;
  pcvSeriesId?: Maybe<SortEnumType>;
  pcvEngine?: Maybe<PcvEngineSortInput>;
  pcvEngineId?: Maybe<SortEnumType>;
  pcvTransmission?: Maybe<PcvTransmissionSortInput>;
  pcvTransmissionId?: Maybe<SortEnumType>;
  pcvDrive?: Maybe<PcvDriveSortInput>;
  pcvDriveId?: Maybe<SortEnumType>;
  pcvPaint?: Maybe<PcvPaintSortInput>;
  pcvPaintId?: Maybe<SortEnumType>;
  pcvTrim?: Maybe<PcvTrimSortInput>;
  pcvTrimId?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type Part = {
  __typename?: 'Part';
  partNo: Scalars['String'];
  partDesc: Scalars['String'];
  originalPartNo: Scalars['String'];
  lotParts: Array<LotPart>;
  shipmentParts: Array<ShipmentPart>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type PartFilterInput = {
  and?: Maybe<Array<PartFilterInput>>;
  or?: Maybe<Array<PartFilterInput>>;
  partNo?: Maybe<StringOperationFilterInput>;
  partDesc?: Maybe<StringOperationFilterInput>;
  originalPartNo?: Maybe<StringOperationFilterInput>;
  lotParts?: Maybe<ListFilterInputTypeOfLotPartFilterInput>;
  shipmentParts?: Maybe<ListFilterInputTypeOfShipmentPartFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type PartQuantityDto = {
  __typename?: 'PartQuantityDTO';
  partNo: Scalars['String'];
  partDesc: Scalars['String'];
  quantity: Scalars['Int'];
};

export type PartSortInput = {
  partNo?: Maybe<SortEnumType>;
  partDesc?: Maybe<SortEnumType>;
  originalPartNo?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

export type PartnerStatusAck = {
  __typename?: 'PartnerStatusAck';
  totalProcessed: Scalars['Int'];
  totalAccepted: Scalars['Int'];
  totalRejected: Scalars['Int'];
  fileDate: Scalars['DateTime'];
  kitSnapshotRunId: Scalars['UUID'];
  kitSnapshotRun: KitSnapshotRun;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type PartnerStatusAckDto = {
  __typename?: 'PartnerStatusAckDTO';
  plantCode: Scalars['String'];
  partnerPlantCode: Scalars['String'];
  sequence: Scalars['Int'];
  fileDate: Scalars['String'];
  totalProcessed: Scalars['Int'];
  totalAccepted: Scalars['Int'];
  totalRejected: Scalars['Int'];
};

export type PartnerStatusAckDtoInput = {
  plantCode: Scalars['String'];
  partnerPlantCode: Scalars['String'];
  sequence: Scalars['Int'];
  fileDate: Scalars['String'];
  totalProcessed: Scalars['Int'];
  totalAccepted: Scalars['Int'];
  totalRejected: Scalars['Int'];
};

export type PartnerStatusAckFilterInput = {
  and?: Maybe<Array<PartnerStatusAckFilterInput>>;
  or?: Maybe<Array<PartnerStatusAckFilterInput>>;
  totalProcessed?: Maybe<ComparableInt32OperationFilterInput>;
  totalAccepted?: Maybe<ComparableInt32OperationFilterInput>;
  totalRejected?: Maybe<ComparableInt32OperationFilterInput>;
  fileDate?: Maybe<ComparableDateTimeOperationFilterInput>;
  kitSnapshotRunId?: Maybe<ComparableGuidOperationFilterInput>;
  kitSnapshotRun?: Maybe<KitSnapshotRunFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type PartnerStatusAckSortInput = {
  totalProcessed?: Maybe<SortEnumType>;
  totalAccepted?: Maybe<SortEnumType>;
  totalRejected?: Maybe<SortEnumType>;
  fileDate?: Maybe<SortEnumType>;
  kitSnapshotRunId?: Maybe<SortEnumType>;
  kitSnapshotRun?: Maybe<KitSnapshotRunSortInput>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

export type PartnerStatusDto = {
  __typename?: 'PartnerStatusDTO';
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
  runDate?: Maybe<Scalars['DateTime']>;
  errorMessage: Scalars['String'];
  filename: Scalars['String'];
  payloadText: Scalars['String'];
};

/** A connection to a list of items. */
export type PartsConnection = {
  __typename?: 'PartsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<PartsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Part>>;
};

/** An edge in a connection. */
export type PartsEdge = {
  __typename?: 'PartsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Part;
};

export type PcvComponent = {
  __typename?: 'PcvComponent';
  pcvId: Scalars['UUID'];
  pcv?: Maybe<Pcv>;
  componentId: Scalars['UUID'];
  component?: Maybe<Component>;
  productionStationId: Scalars['UUID'];
  productionStation?: Maybe<ProductionStation>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type PcvComponentFilterInput = {
  and?: Maybe<Array<PcvComponentFilterInput>>;
  or?: Maybe<Array<PcvComponentFilterInput>>;
  pcvId?: Maybe<ComparableGuidOperationFilterInput>;
  pcv?: Maybe<PcvFilterInput>;
  componentId?: Maybe<ComparableGuidOperationFilterInput>;
  component?: Maybe<ComponentFilterInput>;
  productionStationId?: Maybe<ComparableGuidOperationFilterInput>;
  productionStation?: Maybe<ProductionStationFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type PcvComponentSortInput = {
  pcvId?: Maybe<SortEnumType>;
  pcv?: Maybe<PcvSortInput>;
  componentId?: Maybe<SortEnumType>;
  component?: Maybe<ComponentSortInput>;
  productionStationId?: Maybe<SortEnumType>;
  productionStation?: Maybe<ProductionStationSortInput>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

/** A connection to a list of items. */
export type PcvComponentsConnection = {
  __typename?: 'PcvComponentsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<PcvComponentsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<PcvComponent>>;
};

/** An edge in a connection. */
export type PcvComponentsEdge = {
  __typename?: 'PcvComponentsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PcvComponent;
};

export type PcvDrive = ICategory & {
  __typename?: 'PcvDrive';
  code: Scalars['String'];
  name: Scalars['String'];
  pcvs: Array<Pcv>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type PcvDriveFilterInput = {
  and?: Maybe<Array<PcvDriveFilterInput>>;
  or?: Maybe<Array<PcvDriveFilterInput>>;
  code?: Maybe<StringOperationFilterInput>;
  name?: Maybe<StringOperationFilterInput>;
  pcvs?: Maybe<ListFilterInputTypeOfPcvFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type PcvDriveSortInput = {
  code?: Maybe<SortEnumType>;
  name?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

/** A connection to a list of items. */
export type PcvDrivesConnection = {
  __typename?: 'PcvDrivesConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<PcvDrivesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<PcvDrive>>;
};

/** An edge in a connection. */
export type PcvDrivesEdge = {
  __typename?: 'PcvDrivesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PcvDrive;
};

export type PcvEngine = ICategory & {
  __typename?: 'PcvEngine';
  code: Scalars['String'];
  name: Scalars['String'];
  pcvs: Array<Pcv>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type PcvEngineFilterInput = {
  and?: Maybe<Array<PcvEngineFilterInput>>;
  or?: Maybe<Array<PcvEngineFilterInput>>;
  code?: Maybe<StringOperationFilterInput>;
  name?: Maybe<StringOperationFilterInput>;
  pcvs?: Maybe<ListFilterInputTypeOfPcvFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type PcvEngineSortInput = {
  code?: Maybe<SortEnumType>;
  name?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

/** A connection to a list of items. */
export type PcvEnginesConnection = {
  __typename?: 'PcvEnginesConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<PcvEnginesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<PcvEngine>>;
};

/** An edge in a connection. */
export type PcvEnginesEdge = {
  __typename?: 'PcvEnginesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PcvEngine;
};

export enum PcvMetaType {
  PcvModel = 'PCV_MODEL',
  PcvSubmodel = 'PCV_SUBMODEL',
  PcvSeries = 'PCV_SERIES',
  PcvEngine = 'PCV_ENGINE',
  PcvTransmission = 'PCV_TRANSMISSION',
  PcvDrive = 'PCV_DRIVE',
  PcvPaint = 'PCV_PAINT',
  PcvTrim = 'PCV_TRIM'
}

export type PcvModel = ICategory & {
  __typename?: 'PcvModel';
  code: Scalars['String'];
  name: Scalars['String'];
  pcvs: Array<Pcv>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type PcvModelFilterInput = {
  and?: Maybe<Array<PcvModelFilterInput>>;
  or?: Maybe<Array<PcvModelFilterInput>>;
  code?: Maybe<StringOperationFilterInput>;
  name?: Maybe<StringOperationFilterInput>;
  pcvs?: Maybe<ListFilterInputTypeOfPcvFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type PcvModelSortInput = {
  code?: Maybe<SortEnumType>;
  name?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

/** A connection to a list of items. */
export type PcvModelsConnection = {
  __typename?: 'PcvModelsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<PcvModelsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<PcvModel>>;
};

/** An edge in a connection. */
export type PcvModelsEdge = {
  __typename?: 'PcvModelsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PcvModel;
};

export type PcvPaint = ICategory & {
  __typename?: 'PcvPaint';
  code: Scalars['String'];
  name: Scalars['String'];
  pcvs: Array<Pcv>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

/** A connection to a list of items. */
export type PcvPaintConnection = {
  __typename?: 'PcvPaintConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<PcvPaintEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<PcvPaint>>;
};

/** An edge in a connection. */
export type PcvPaintEdge = {
  __typename?: 'PcvPaintEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PcvPaint;
};

export type PcvPaintFilterInput = {
  and?: Maybe<Array<PcvPaintFilterInput>>;
  or?: Maybe<Array<PcvPaintFilterInput>>;
  code?: Maybe<StringOperationFilterInput>;
  name?: Maybe<StringOperationFilterInput>;
  pcvs?: Maybe<ListFilterInputTypeOfPcvFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type PcvPaintSortInput = {
  code?: Maybe<SortEnumType>;
  name?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

export type PcvSeries = ICategory & {
  __typename?: 'PcvSeries';
  code: Scalars['String'];
  name: Scalars['String'];
  pcvs: Array<Pcv>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

/** A connection to a list of items. */
export type PcvSeriesConnection = {
  __typename?: 'PcvSeriesConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<PcvSeriesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<PcvSeries>>;
};

/** An edge in a connection. */
export type PcvSeriesEdge = {
  __typename?: 'PcvSeriesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PcvSeries;
};

export type PcvSeriesFilterInput = {
  and?: Maybe<Array<PcvSeriesFilterInput>>;
  or?: Maybe<Array<PcvSeriesFilterInput>>;
  code?: Maybe<StringOperationFilterInput>;
  name?: Maybe<StringOperationFilterInput>;
  pcvs?: Maybe<ListFilterInputTypeOfPcvFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type PcvSeriesSortInput = {
  code?: Maybe<SortEnumType>;
  name?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

export type PcvSubmodel = ICategory & {
  __typename?: 'PcvSubmodel';
  code: Scalars['String'];
  name: Scalars['String'];
  pcvs: Array<Pcv>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type PcvSubmodelFilterInput = {
  and?: Maybe<Array<PcvSubmodelFilterInput>>;
  or?: Maybe<Array<PcvSubmodelFilterInput>>;
  code?: Maybe<StringOperationFilterInput>;
  name?: Maybe<StringOperationFilterInput>;
  pcvs?: Maybe<ListFilterInputTypeOfPcvFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type PcvSubmodelSortInput = {
  code?: Maybe<SortEnumType>;
  name?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

/** A connection to a list of items. */
export type PcvSubmodelsConnection = {
  __typename?: 'PcvSubmodelsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<PcvSubmodelsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<PcvSubmodel>>;
};

/** An edge in a connection. */
export type PcvSubmodelsEdge = {
  __typename?: 'PcvSubmodelsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PcvSubmodel;
};

export type PcvTransmission = ICategory & {
  __typename?: 'PcvTransmission';
  code: Scalars['String'];
  name: Scalars['String'];
  pcvs: Array<Pcv>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type PcvTransmissionFilterInput = {
  and?: Maybe<Array<PcvTransmissionFilterInput>>;
  or?: Maybe<Array<PcvTransmissionFilterInput>>;
  code?: Maybe<StringOperationFilterInput>;
  name?: Maybe<StringOperationFilterInput>;
  pcvs?: Maybe<ListFilterInputTypeOfPcvFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type PcvTransmissionSortInput = {
  code?: Maybe<SortEnumType>;
  name?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

/** A connection to a list of items. */
export type PcvTransmissionsConnection = {
  __typename?: 'PcvTransmissionsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<PcvTransmissionsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<PcvTransmission>>;
};

/** An edge in a connection. */
export type PcvTransmissionsEdge = {
  __typename?: 'PcvTransmissionsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PcvTransmission;
};

export type PcvTrim = ICategory & {
  __typename?: 'PcvTrim';
  code: Scalars['String'];
  name: Scalars['String'];
  pcvs: Array<Pcv>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

/** A connection to a list of items. */
export type PcvTrimConnection = {
  __typename?: 'PcvTrimConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<PcvTrimEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<PcvTrim>>;
};

/** An edge in a connection. */
export type PcvTrimEdge = {
  __typename?: 'PcvTrimEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PcvTrim;
};

export type PcvTrimFilterInput = {
  and?: Maybe<Array<PcvTrimFilterInput>>;
  or?: Maybe<Array<PcvTrimFilterInput>>;
  code?: Maybe<StringOperationFilterInput>;
  name?: Maybe<StringOperationFilterInput>;
  pcvs?: Maybe<ListFilterInputTypeOfPcvFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type PcvTrimSortInput = {
  code?: Maybe<SortEnumType>;
  name?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

/** A connection to a list of items. */
export type PcvsConnection = {
  __typename?: 'PcvsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<PcvsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Pcv>>;
};

/** An edge in a connection. */
export type PcvsEdge = {
  __typename?: 'PcvsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Pcv;
};

export type Plant = {
  __typename?: 'Plant';
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  partnerPlantCode?: Maybe<Scalars['String']>;
  partnerPlantType?: Maybe<Scalars['String']>;
  lots?: Maybe<Array<Maybe<Lot>>>;
  kitSnapshotRuns?: Maybe<Array<Maybe<KitSnapshotRun>>>;
  boms?: Maybe<Array<Maybe<Bom>>>;
  shipments?: Maybe<Array<Maybe<Shipment>>>;
  kitVinImports?: Maybe<Array<Maybe<KitVinImport>>>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type PlantFilterInput = {
  and?: Maybe<Array<PlantFilterInput>>;
  or?: Maybe<Array<PlantFilterInput>>;
  code?: Maybe<StringOperationFilterInput>;
  name?: Maybe<StringOperationFilterInput>;
  partnerPlantCode?: Maybe<StringOperationFilterInput>;
  partnerPlantType?: Maybe<StringOperationFilterInput>;
  lots?: Maybe<ListFilterInputTypeOfLotFilterInput>;
  kitSnapshotRuns?: Maybe<ListFilterInputTypeOfKitSnapshotRunFilterInput>;
  boms?: Maybe<ListFilterInputTypeOfBomFilterInput>;
  shipments?: Maybe<ListFilterInputTypeOfShipmentFilterInput>;
  kitVinImports?: Maybe<ListFilterInputTypeOfKitVinImportFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type PlantInput = {
  code?: Maybe<Scalars['String']>;
  partnerPlantCode?: Maybe<Scalars['String']>;
  partnerPlantType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type PlantOverviewDto = {
  __typename?: 'PlantOverviewDTO';
  id: Scalars['UUID'];
  code: Scalars['String'];
  name: Scalars['String'];
  createdAt: Scalars['DateTime'];
};

export type PlantSortInput = {
  code?: Maybe<SortEnumType>;
  name?: Maybe<SortEnumType>;
  partnerPlantCode?: Maybe<SortEnumType>;
  partnerPlantType?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

export type ProductionStation = {
  __typename?: 'ProductionStation';
  code: Scalars['String'];
  name: Scalars['String'];
  sequence: Scalars['Int'];
  modelComponents: Array<PcvComponent>;
  kitComponents: Array<KitComponent>;
  defaultStationComponents: Array<Component>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductionStationFilterInput = {
  and?: Maybe<Array<ProductionStationFilterInput>>;
  or?: Maybe<Array<ProductionStationFilterInput>>;
  code?: Maybe<StringOperationFilterInput>;
  name?: Maybe<StringOperationFilterInput>;
  sequence?: Maybe<ComparableInt32OperationFilterInput>;
  modelComponents?: Maybe<ListFilterInputTypeOfPcvComponentFilterInput>;
  kitComponents?: Maybe<ListFilterInputTypeOfKitComponentFilterInput>;
  defaultStationComponents?: Maybe<ListFilterInputTypeOfComponentFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type ProductionStationSortInput = {
  code?: Maybe<SortEnumType>;
  name?: Maybe<SortEnumType>;
  sequence?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

/** A connection to a list of items. */
export type ProductionStationsConnection = {
  __typename?: 'ProductionStationsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<ProductionStationsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ProductionStation>>;
};

/** An edge in a connection. */
export type ProductionStationsEdge = {
  __typename?: 'ProductionStationsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ProductionStation;
};

export type Query = {
  __typename?: 'Query';
  serverConfigSettings: ConfigurationDto;
  info: Scalars['String'];
  shipmentOverview?: Maybe<ShipmentOverviewDto>;
  handlingUnitOverviews: Array<HandlingUnitOverview>;
  handlingUnitInfo?: Maybe<HandlingUnitInfoPayload>;
  kitById?: Maybe<Kit>;
  kitByKitNo?: Maybe<Kit>;
  kitTimeline?: Maybe<KitTimelineDto>;
  lotByLotNo?: Maybe<Lot>;
  lotOverview?: Maybe<LotOverviewDto>;
  lotPartsByBom: Array<LotPartDto>;
  lotPartsByShipment: Array<LotPartDto>;
  kitsByLot: Array<Kit>;
  pcvById?: Maybe<Pcv>;
  componentById?: Maybe<Component>;
  /** @deprecated no longer used */
  vehicleComponentByVinAndComponent?: Maybe<KitComponent>;
  /** @deprecated no longer used */
  componentScanById?: Maybe<ComponentSerial>;
  /** @deprecated no longer used */
  existingComponentScan?: Maybe<ComponentSerial>;
  kitList?: Maybe<KitListConnection>;
  bomList?: Maybe<BomListConnection>;
  bomById?: Maybe<Bom>;
  bomOverview?: Maybe<BomOverviewDto>;
  lotListByBomId: Array<LotListDto>;
  bomPartsQuantity: Array<PartQuantityDto>;
  kitSnapshotRunByDate?: Maybe<KitSnapshotRunDto>;
  kitSnapshotRun?: Maybe<KitSnapshotRunDto>;
  lotInfo?: Maybe<LotDto>;
  lotPartInfo?: Maybe<LotPartDto>;
  recentLotPartsReceived: Array<LotPartReceivedDto>;
  basicKitInfo?: Maybe<BasicKitInfo>;
  kitComponentSerialInfo?: Maybe<KitComponentSerialInfo>;
  pingDcwsService: Scalars['Boolean'];
  dcwsServiceVersion: Scalars['String'];
  partnerStatusFilePayload: PartnerStatusDto;
  parseBomFile: BomFile;
  parseShipFile: ShipFile;
  parseVinFile: VinFile;
  parsePartnerStatusAckFile: PartnerStatusAckDto;
  genVinImportAcknowledgment: KitVinAckDto;
  fordInterfaceFileType: FordInterfaceFileType;
  genPartnerStatusFilename: Scalars['String'];
  appSettings: Array<AppSetting>;
  kitTimelineEventsByDate: Array<KitTimelineEvent>;
  kitsByCurrentTimelineEvent?: Maybe<KitsByCurrentTimelineEventConnection>;
  components?: Maybe<ComponentsConnection>;
  parts?: Maybe<PartsConnection>;
  plants: Array<Plant>;
  kits?: Maybe<KitsConnection>;
  lots?: Maybe<LotsConnection>;
  kitComponents?: Maybe<KitComponentsConnection>;
  componentSerials?: Maybe<ComponentSerialsConnection>;
  dcwsResponses?: Maybe<DcwsResponsesConnection>;
  productionStations?: Maybe<ProductionStationsConnection>;
  componentStations?: Maybe<ComponentStationsConnection>;
  shipments?: Maybe<ShipmentsConnection>;
  shipmentParts?: Maybe<ShipmentPartsConnection>;
  handlingUnits?: Maybe<HandlingUnitsConnection>;
  vinImports?: Maybe<VinImportsConnection>;
  kitSnapshotRuns?: Maybe<KitSnapshotRunsConnection>;
  kitSnapshots?: Maybe<KitSnapshotsConnection>;
  dealers?: Maybe<DealersConnection>;
  kitTimelineEvents?: Maybe<KitTimelineEventsConnection>;
  pcvs?: Maybe<PcvsConnection>;
  pcvComponents?: Maybe<PcvComponentsConnection>;
  pcvModels?: Maybe<PcvModelsConnection>;
  pcvSubmodels?: Maybe<PcvSubmodelsConnection>;
  pcvSeries?: Maybe<PcvSeriesConnection>;
  pcvEngines?: Maybe<PcvEnginesConnection>;
  pcvTransmissions?: Maybe<PcvTransmissionsConnection>;
  pcvDrives?: Maybe<PcvDrivesConnection>;
  pcvPaint?: Maybe<PcvPaintConnection>;
  pcvTrim?: Maybe<PcvTrimConnection>;
  kitsByTimelineStatusSummary: Array<ItemCountDto>;
};


export type QueryShipmentOverviewArgs = {
  shipmentId: Scalars['UUID'];
};


export type QueryHandlingUnitOverviewsArgs = {
  shipmentId: Scalars['UUID'];
};


export type QueryHandlingUnitInfoArgs = {
  huCode: Scalars['String'];
};


export type QueryKitByIdArgs = {
  id: Scalars['UUID'];
};


export type QueryKitByKitNoArgs = {
  kitNo: Scalars['String'];
};


export type QueryKitTimelineArgs = {
  kitNo: Scalars['String'];
};


export type QueryLotByLotNoArgs = {
  lotNo: Scalars['String'];
};


export type QueryLotOverviewArgs = {
  lotNo: Scalars['String'];
};


export type QueryLotPartsByBomArgs = {
  bomId: Scalars['UUID'];
};


export type QueryLotPartsByShipmentArgs = {
  shipmentId: Scalars['UUID'];
};


export type QueryKitsByLotArgs = {
  lotNo: Scalars['String'];
};


export type QueryPcvByIdArgs = {
  id: Scalars['UUID'];
};


export type QueryComponentByIdArgs = {
  id: Scalars['UUID'];
};


export type QueryVehicleComponentByVinAndComponentArgs = {
  vin: Scalars['String'];
  componentCode: Scalars['String'];
};


export type QueryComponentScanByIdArgs = {
  id: Scalars['UUID'];
};


export type QueryExistingComponentScanArgs = {
  vehicleComponentId: Scalars['UUID'];
};


export type QueryKitListArgs = {
  plantCode: Scalars['String'];
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  order?: Maybe<Array<KitListItemDtoSortInput>>;
};


export type QueryBomListArgs = {
  plantCode: Scalars['String'];
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  order?: Maybe<Array<BomListDtoSortInput>>;
};


export type QueryBomByIdArgs = {
  id: Scalars['UUID'];
};


export type QueryBomOverviewArgs = {
  id: Scalars['UUID'];
};


export type QueryLotListByBomIdArgs = {
  id: Scalars['UUID'];
};


export type QueryBomPartsQuantityArgs = {
  id: Scalars['UUID'];
};


export type QueryKitSnapshotRunByDateArgs = {
  plantCode: Scalars['String'];
  runDate: Scalars['DateTime'];
};


export type QueryKitSnapshotRunArgs = {
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};


export type QueryLotInfoArgs = {
  lotNo: Scalars['String'];
};


export type QueryLotPartInfoArgs = {
  lotNo: Scalars['String'];
  partNo: Scalars['String'];
};


export type QueryRecentLotPartsReceivedArgs = {
  count?: Scalars['Int'];
};


export type QueryBasicKitInfoArgs = {
  vin: Scalars['String'];
};


export type QueryKitComponentSerialInfoArgs = {
  kitNo: Scalars['String'];
  componentCode: Scalars['String'];
};


export type QueryPartnerStatusFilePayloadArgs = {
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};


export type QueryParseBomFileArgs = {
  text: Scalars['String'];
};


export type QueryParseShipFileArgs = {
  text: Scalars['String'];
};


export type QueryParseVinFileArgs = {
  text: Scalars['String'];
};


export type QueryParsePartnerStatusAckFileArgs = {
  text: Scalars['String'];
};


export type QueryGenVinImportAcknowledgmentArgs = {
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};


export type QueryFordInterfaceFileTypeArgs = {
  filename: Scalars['String'];
};


export type QueryGenPartnerStatusFilenameArgs = {
  kitSnapshotRunId: Scalars['UUID'];
};


export type QueryKitTimelineEventsByDateArgs = {
  plantCode: Scalars['String'];
  fromDate: Scalars['DateTime'];
  toDate: Scalars['DateTime'];
  timelineEventCode?: Maybe<TimeLineEventCode>;
};


export type QueryKitsByCurrentTimelineEventArgs = {
  plantCode: Scalars['String'];
  eventCode?: Maybe<TimeLineEventCode>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<KitFilterInput>;
  order?: Maybe<Array<KitSortInput>>;
};


export type QueryComponentsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ComponentFilterInput>;
  order?: Maybe<Array<ComponentSortInput>>;
};


export type QueryPartsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PartFilterInput>;
  order?: Maybe<Array<PartSortInput>>;
};


export type QueryKitsArgs = {
  plantCode: Scalars['String'];
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<KitFilterInput>;
  order?: Maybe<Array<KitSortInput>>;
};


export type QueryLotsArgs = {
  plantCode: Scalars['String'];
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<LotFilterInput>;
  order?: Maybe<Array<LotSortInput>>;
};


export type QueryKitComponentsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<KitComponentFilterInput>;
  order?: Maybe<Array<KitComponentSortInput>>;
};


export type QueryComponentSerialsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ComponentSerialFilterInput>;
  order?: Maybe<Array<ComponentSerialSortInput>>;
};


export type QueryDcwsResponsesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<DcwsResponseFilterInput>;
  order?: Maybe<Array<DcwsResponseSortInput>>;
};


export type QueryProductionStationsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductionStationFilterInput>;
  order?: Maybe<Array<ProductionStationSortInput>>;
};


export type QueryComponentStationsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ComponentStationFilterInput>;
  order?: Maybe<Array<ComponentStationSortInput>>;
};


export type QueryShipmentsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ShipmentFilterInput>;
  order?: Maybe<Array<ShipmentSortInput>>;
};


export type QueryShipmentPartsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ShipmentPartFilterInput>;
  order?: Maybe<Array<ShipmentPartSortInput>>;
};


export type QueryHandlingUnitsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HandlingUnitFilterInput>;
  order?: Maybe<Array<HandlingUnitSortInput>>;
};


export type QueryVinImportsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<KitVinImportFilterInput>;
  order?: Maybe<Array<KitVinImportSortInput>>;
};


export type QueryKitSnapshotRunsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<KitSnapshotRunFilterInput>;
  order?: Maybe<Array<KitSnapshotRunSortInput>>;
};


export type QueryKitSnapshotsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<KitSnapshotFilterInput>;
  order?: Maybe<Array<KitSnapshotSortInput>>;
};


export type QueryDealersArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<DealerFilterInput>;
  order?: Maybe<Array<DealerSortInput>>;
};


export type QueryKitTimelineEventsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<KitTimelineEventFilterInput>;
  order?: Maybe<Array<KitTimelineEventSortInput>>;
};


export type QueryPcvsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PcvFilterInput>;
  order?: Maybe<Array<PcvSortInput>>;
};


export type QueryPcvComponentsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PcvComponentFilterInput>;
  order?: Maybe<Array<PcvComponentSortInput>>;
};


export type QueryPcvModelsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PcvModelFilterInput>;
  order?: Maybe<Array<PcvModelSortInput>>;
};


export type QueryPcvSubmodelsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PcvSubmodelFilterInput>;
  order?: Maybe<Array<PcvSubmodelSortInput>>;
};


export type QueryPcvSeriesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PcvSeriesFilterInput>;
  order?: Maybe<Array<PcvSeriesSortInput>>;
};


export type QueryPcvEnginesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PcvEngineFilterInput>;
  order?: Maybe<Array<PcvEngineSortInput>>;
};


export type QueryPcvTransmissionsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PcvTransmissionFilterInput>;
  order?: Maybe<Array<PcvTransmissionSortInput>>;
};


export type QueryPcvDrivesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PcvDriveFilterInput>;
  order?: Maybe<Array<PcvDriveSortInput>>;
};


export type QueryPcvPaintArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PcvPaintFilterInput>;
  order?: Maybe<Array<PcvPaintSortInput>>;
};


export type QueryPcvTrimArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PcvTrimFilterInput>;
  order?: Maybe<Array<PcvTrimSortInput>>;
};

export type ReceiveHandlingUnitInput = {
  handlingUnitCode?: Maybe<Scalars['String']>;
  remove?: Scalars['Boolean'];
};

export type ReceiveHandlingUnitPayload = {
  __typename?: 'ReceiveHandlingUnitPayload';
  id: Scalars['UUID'];
  code?: Maybe<Scalars['String']>;
  invoiceNo?: Maybe<Scalars['String']>;
  lotNo?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type ReceiveLotPartInput = {
  lotNo: Scalars['String'];
  partNo: Scalars['String'];
  quantity: Scalars['Int'];
};

export type SaveComponentStationInput = {
  componentCode: Scalars['String'];
  stationCode: Scalars['String'];
  saveCDCComponent: Scalars['Boolean'];
};

export type SaveComponentStationPayload = {
  __typename?: 'SaveComponentStationPayload';
  id: Scalars['UUID'];
  componentCode: Scalars['String'];
  stationCode: Scalars['String'];
  saveCDCComponent: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type SavePcvPayload = {
  __typename?: 'SavePcvPayload';
  id: Scalars['UUID'];
  pcvCode: Scalars['String'];
  modelYear: Scalars['String'];
  pcvModel?: Maybe<ICategory>;
  pcvSubmodel?: Maybe<ICategory>;
  pcvSeries?: Maybe<ICategory>;
  pcvEngine?: Maybe<ICategory>;
  pcvTransmission?: Maybe<ICategory>;
  pcvDrive?: Maybe<ICategory>;
  pcvPaint?: Maybe<ICategory>;
  pcvTrim?: Maybe<ICategory>;
  pcvComponentCodes: Array<Scalars['String']>;
};

export type SetDefaultStationInput = {
  componentCode: Scalars['String'];
  productionStationCode: Scalars['String'];
};

export type ShipFile = {
  __typename?: 'ShipFile';
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
  created: Scalars['DateTime'];
  lots: Array<ShipFileLot>;
};

export type ShipFileInput = {
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
  created: Scalars['DateTime'];
  lots: Array<ShipFileLotInput>;
};

export type ShipFileInvoice = {
  __typename?: 'ShipFileInvoice';
  invoiceNo: Scalars['String'];
  shipDate: Scalars['DateTime'];
  parts: Array<ShipFilePart>;
};

export type ShipFileInvoiceInput = {
  invoiceNo: Scalars['String'];
  shipDate: Scalars['DateTime'];
  parts: Array<ShipFilePartInput>;
};

export type ShipFileLot = {
  __typename?: 'ShipFileLot';
  lotNo: Scalars['String'];
  invoices: Array<ShipFileInvoice>;
};

export type ShipFileLotInput = {
  lotNo: Scalars['String'];
  invoices: Array<ShipFileInvoiceInput>;
};

export type ShipFilePart = {
  __typename?: 'ShipFilePart';
  partNo: Scalars['String'];
  handlingUnitCode: Scalars['String'];
  customerPartNo: Scalars['String'];
  customerPartDesc: Scalars['String'];
  quantity: Scalars['Int'];
};

export type ShipFilePartInput = {
  partNo: Scalars['String'];
  handlingUnitCode: Scalars['String'];
  customerPartNo: Scalars['String'];
  customerPartDesc: Scalars['String'];
  quantity: Scalars['Int'];
};

export type Shipment = {
  __typename?: 'Shipment';
  plantId: Scalars['UUID'];
  plant?: Maybe<Plant>;
  sequence: Scalars['Int'];
  shipmentLots?: Maybe<Array<Maybe<ShipmentLot>>>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type ShipmentFilterInput = {
  and?: Maybe<Array<ShipmentFilterInput>>;
  or?: Maybe<Array<ShipmentFilterInput>>;
  plantId?: Maybe<ComparableGuidOperationFilterInput>;
  plant?: Maybe<PlantFilterInput>;
  sequence?: Maybe<ComparableInt32OperationFilterInput>;
  shipmentLots?: Maybe<ListFilterInputTypeOfShipmentLotFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type ShipmentInvoice = {
  __typename?: 'ShipmentInvoice';
  invoiceNo: Scalars['String'];
  shipDate: Scalars['DateTime'];
  shipmentLotId: Scalars['UUID'];
  shipmentLot: ShipmentLot;
  handlingUnits: Array<HandlingUnit>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type ShipmentInvoiceFilterInput = {
  and?: Maybe<Array<ShipmentInvoiceFilterInput>>;
  or?: Maybe<Array<ShipmentInvoiceFilterInput>>;
  invoiceNo?: Maybe<StringOperationFilterInput>;
  shipDate?: Maybe<ComparableDateTimeOperationFilterInput>;
  shipmentLotId?: Maybe<ComparableGuidOperationFilterInput>;
  shipmentLot?: Maybe<ShipmentLotFilterInput>;
  handlingUnits?: Maybe<ListFilterInputTypeOfHandlingUnitFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type ShipmentInvoiceSortInput = {
  invoiceNo?: Maybe<SortEnumType>;
  shipDate?: Maybe<SortEnumType>;
  shipmentLotId?: Maybe<SortEnumType>;
  shipmentLot?: Maybe<ShipmentLotSortInput>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

export type ShipmentLot = {
  __typename?: 'ShipmentLot';
  shipmentId: Scalars['UUID'];
  shipment?: Maybe<Shipment>;
  lotId: Scalars['UUID'];
  lot?: Maybe<Lot>;
  invoices?: Maybe<Array<Maybe<ShipmentInvoice>>>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type ShipmentLotFilterInput = {
  and?: Maybe<Array<ShipmentLotFilterInput>>;
  or?: Maybe<Array<ShipmentLotFilterInput>>;
  shipmentId?: Maybe<ComparableGuidOperationFilterInput>;
  shipment?: Maybe<ShipmentFilterInput>;
  lotId?: Maybe<ComparableGuidOperationFilterInput>;
  lot?: Maybe<LotFilterInput>;
  invoices?: Maybe<ListFilterInputTypeOfShipmentInvoiceFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type ShipmentLotSortInput = {
  shipmentId?: Maybe<SortEnumType>;
  shipment?: Maybe<ShipmentSortInput>;
  lotId?: Maybe<SortEnumType>;
  lot?: Maybe<LotSortInput>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

export type ShipmentOverviewDto = {
  __typename?: 'ShipmentOverviewDTO';
  id: Scalars['UUID'];
  plantCode?: Maybe<Scalars['String']>;
  bomId: Scalars['UUID'];
  bomSequence: Scalars['Int'];
  sequence: Scalars['Int'];
  lotCount: Scalars['Int'];
  invoiceCount: Scalars['Int'];
  handlingUnitCount: Scalars['Int'];
  handlingUnitReceivedCount: Scalars['Int'];
  lotPartCount: Scalars['Int'];
  lotPartReceivedCount: Scalars['Int'];
  bomShipDiffCount: Scalars['Int'];
  lotPartReceiveBomDiffCount: Scalars['Int'];
  lotNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  partCount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

export type ShipmentPart = {
  __typename?: 'ShipmentPart';
  partId: Scalars['UUID'];
  part?: Maybe<Part>;
  quantity: Scalars['Int'];
  handlingUnitId?: Maybe<Scalars['UUID']>;
  handlingUnit?: Maybe<HandlingUnit>;
  id: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type ShipmentPartFilterInput = {
  and?: Maybe<Array<ShipmentPartFilterInput>>;
  or?: Maybe<Array<ShipmentPartFilterInput>>;
  partId?: Maybe<ComparableGuidOperationFilterInput>;
  part?: Maybe<PartFilterInput>;
  quantity?: Maybe<ComparableInt32OperationFilterInput>;
  handlingUnitId?: Maybe<ComparableNullableOfGuidOperationFilterInput>;
  handlingUnit?: Maybe<HandlingUnitFilterInput>;
  id?: Maybe<ComparableGuidOperationFilterInput>;
  createdAt?: Maybe<ComparableDateTimeOperationFilterInput>;
  removedAt?: Maybe<ComparableNullableOfDateTimeOperationFilterInput>;
};

export type ShipmentPartSortInput = {
  partId?: Maybe<SortEnumType>;
  part?: Maybe<PartSortInput>;
  quantity?: Maybe<SortEnumType>;
  handlingUnitId?: Maybe<SortEnumType>;
  handlingUnit?: Maybe<HandlingUnitSortInput>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

/** A connection to a list of items. */
export type ShipmentPartsConnection = {
  __typename?: 'ShipmentPartsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<ShipmentPartsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ShipmentPart>>;
};

/** An edge in a connection. */
export type ShipmentPartsEdge = {
  __typename?: 'ShipmentPartsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ShipmentPart;
};

export type ShipmentSortInput = {
  plantId?: Maybe<SortEnumType>;
  plant?: Maybe<PlantSortInput>;
  sequence?: Maybe<SortEnumType>;
  id?: Maybe<SortEnumType>;
  createdAt?: Maybe<SortEnumType>;
  removedAt?: Maybe<SortEnumType>;
};

/** A connection to a list of items. */
export type ShipmentsConnection = {
  __typename?: 'ShipmentsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<ShipmentsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Shipment>>;
};

/** An edge in a connection. */
export type ShipmentsEdge = {
  __typename?: 'ShipmentsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Shipment;
};

export enum SnapshotChangeStatus {
  Added = 'ADDED',
  Changed = 'CHANGED',
  NoChange = 'NO_CHANGE',
  Final = 'FINAL'
}

export type SnapshotChangeStatusOperationFilterInput = {
  eq?: Maybe<SnapshotChangeStatus>;
  neq?: Maybe<SnapshotChangeStatus>;
  in?: Maybe<Array<SnapshotChangeStatus>>;
  nin?: Maybe<Array<SnapshotChangeStatus>>;
};

export type SnapshotDto = {
  __typename?: 'SnapshotDTO';
  runDate: Scalars['DateTime'];
  sequence: Scalars['Int'];
  plantCode?: Maybe<Scalars['String']>;
  snapshotCount: Scalars['Int'];
  changedCount: Scalars['Int'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StatcionSerialInfo = {
  __typename?: 'StatcionSerialInfo';
  kitComponentId: Scalars['UUID'];
  stationSequence: Scalars['Int'];
  stationCode: Scalars['String'];
  stationName: Scalars['String'];
  serial1?: Maybe<Scalars['String']>;
  serial2?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  verifiedAt?: Maybe<Scalars['DateTime']>;
};

export type StationInput = {
  id?: Maybe<Scalars['UUID']>;
  code: Scalars['String'];
  name: Scalars['String'];
  sequence: Scalars['Int'];
};

export type StringOperationFilterInput = {
  and?: Maybe<Array<StringOperationFilterInput>>;
  or?: Maybe<Array<StringOperationFilterInput>>;
  eq?: Maybe<Scalars['String']>;
  neq?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  ncontains?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
  nstartsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  nendsWith?: Maybe<Scalars['String']>;
};

export enum TimeLineEventCode {
  CustomReceived = 'CUSTOM_RECEIVED',
  PlanBuild = 'PLAN_BUILD',
  VerifyVin = 'VERIFY_VIN',
  BuildCompleted = 'BUILD_COMPLETED',
  GateReleased = 'GATE_RELEASED',
  WholeSale = 'WHOLE_SALE'
}

export type TimeLineEventCodeOperationFilterInput = {
  eq?: Maybe<TimeLineEventCode>;
  neq?: Maybe<TimeLineEventCode>;
  in?: Maybe<Array<TimeLineEventCode>>;
  nin?: Maybe<Array<TimeLineEventCode>>;
};

export type TimelineEventDto = {
  __typename?: 'TimelineEventDTO';
  eventType: TimeLineEventCode;
  eventDate?: Maybe<Scalars['DateTime']>;
  eventNote?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  removedAt?: Maybe<Scalars['DateTime']>;
  sequence: Scalars['Int'];
};


export type UpdateCategoryInput = {
  id: Scalars['UUID'];
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdateCategoryPayload = {
  __typename?: 'UpdateCategoryPayload';
  id: Scalars['UUID'];
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type UpdateComponentPayload = {
  __typename?: 'UpdateComponentPayload';
  id: Scalars['UUID'];
  code: Scalars['String'];
  name: Scalars['String'];
  productionStationCode?: Maybe<Scalars['String']>;
  dcwsRequired: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type UpdateStationPayload = {
  __typename?: 'UpdateStationPayload';
  id?: Maybe<Scalars['UUID']>;
  code: Scalars['String'];
  name: Scalars['String'];
  sequence: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type VerifyVinsPayload = {
  __typename?: 'VerifyVinsPayload';
  kitNos: Array<Scalars['String']>;
};

export type VinFile = {
  __typename?: 'VinFile';
  plantCode?: Maybe<Scalars['String']>;
  sequence: Scalars['Int'];
  partnerPlantCode?: Maybe<Scalars['String']>;
  kits?: Maybe<Array<Maybe<VinFileKit>>>;
};

export type VinFileInput = {
  plantCode?: Maybe<Scalars['String']>;
  sequence: Scalars['Int'];
  partnerPlantCode?: Maybe<Scalars['String']>;
  kits?: Maybe<Array<Maybe<VinFileKitInput>>>;
};

export type VinFileKit = {
  __typename?: 'VinFileKit';
  vin?: Maybe<Scalars['String']>;
  lotNo?: Maybe<Scalars['String']>;
  kitNo?: Maybe<Scalars['String']>;
};

export type VinFileKitInput = {
  vin?: Maybe<Scalars['String']>;
  lotNo?: Maybe<Scalars['String']>;
  kitNo?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type VinImportsConnection = {
  __typename?: 'VinImportsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<VinImportsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<KitVinImport>>;
};

/** An edge in a connection. */
export type VinImportsEdge = {
  __typename?: 'VinImportsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: KitVinImport;
};

export type ImportBomMutationVariables = Exact<{
  input: BomFileInput;
}>;


export type ImportBomMutation = (
  { __typename?: 'Mutation' }
  & { importBom: (
    { __typename?: 'MutationResultOfBomOverviewDTO' }
    & { payload?: Maybe<(
      { __typename?: 'BomOverviewDTO' }
      & Pick<BomOverviewDto, 'id' | 'sequence' | 'plantCode' | 'lotCount' | 'partCount' | 'vehicleCount' | 'createdAt'>
    )>, errors: Array<(
      { __typename?: 'Error' }
      & Pick<Error, 'path' | 'message'>
    )> }
  ) }
);

export type ImportShipmentMutationVariables = Exact<{
  input: ShipFileInput;
}>;


export type ImportShipmentMutation = (
  { __typename?: 'Mutation' }
  & { importShipment: (
    { __typename?: 'MutationResultOfShipmentOverviewDTO' }
    & { payload?: Maybe<(
      { __typename?: 'ShipmentOverviewDTO' }
      & Pick<ShipmentOverviewDto, 'id' | 'plantCode' | 'sequence' | 'invoiceCount' | 'lotCount' | 'partCount'>
    )>, errors: Array<(
      { __typename?: 'Error' }
      & Pick<Error, 'path' | 'message'>
    )> }
  ) }
);

export type ImportVinMutationVariables = Exact<{
  input: VinFileInput;
}>;


export type ImportVinMutation = (
  { __typename?: 'Mutation' }
  & { importVIN: (
    { __typename?: 'MutationResultOfKitVinImport' }
    & { payload?: Maybe<(
      { __typename?: 'KitVinImport' }
      & Pick<KitVinImport, 'sequence' | 'partnerPlantCode'>
      & { plant?: Maybe<(
        { __typename?: 'Plant' }
        & Pick<Plant, 'code'>
      )>, kitVins?: Maybe<Array<Maybe<(
        { __typename?: 'KitVin' }
        & Pick<KitVin, 'vin'>
        & { kit?: Maybe<(
          { __typename?: 'Kit' }
          & Pick<Kit, 'kitNo'>
          & { lot: (
            { __typename?: 'Lot' }
            & Pick<Lot, 'lotNo'>
          ) }
        )> }
      )>>> }
    )>, errors: Array<(
      { __typename?: 'Error' }
      & Pick<Error, 'path' | 'message'>
    )> }
  ) }
);

export type ImportPartnerStatusAckMutationVariables = Exact<{
  input: PartnerStatusAckDtoInput;
}>;


export type ImportPartnerStatusAckMutation = (
  { __typename?: 'Mutation' }
  & { importPartnerStatusAck: (
    { __typename?: 'MutationResultOfPartnerStatusAck' }
    & { payload?: Maybe<(
      { __typename?: 'PartnerStatusAck' }
      & Pick<PartnerStatusAck, 'id' | 'fileDate' | 'totalProcessed' | 'totalAccepted' | 'totalRejected'>
      & { kitSnapshotRun: (
        { __typename?: 'KitSnapshotRun' }
        & Pick<KitSnapshotRun, 'plantId' | 'sequence'>
        & { plant?: Maybe<(
          { __typename?: 'Plant' }
          & Pick<Plant, 'code'>
        )> }
      ) }
    )>, errors: Array<(
      { __typename?: 'Error' }
      & Pick<Error, 'message'>
    )> }
  ) }
);

export type PlantsQueryVariables = Exact<{ [key: string]: never; }>;


export type PlantsQuery = (
  { __typename?: 'Query' }
  & { plants: Array<(
    { __typename?: 'Plant' }
    & Pick<Plant, 'code' | 'partnerPlantCode' | 'partnerPlantType' | 'name' | 'createdAt'>
  )> }
);

export type GenerateKitSnapshotRunMutationVariables = Exact<{
  input: KitSnapshotInput;
}>;


export type GenerateKitSnapshotRunMutation = (
  { __typename?: 'Mutation' }
  & { generateKitSnapshotRun: (
    { __typename?: 'MutationResultOfSnapshotDTO' }
    & { payload?: Maybe<(
      { __typename?: 'SnapshotDTO' }
      & Pick<SnapshotDto, 'plantCode' | 'runDate' | 'snapshotCount' | 'sequence'>
    )>, errors: Array<(
      { __typename?: 'Error' }
      & Pick<Error, 'path' | 'message'>
    )> }
  ) }
);

export type KitSnapshotRunBySequenceQueryVariables = Exact<{
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
}>;


export type KitSnapshotRunBySequenceQuery = (
  { __typename?: 'Query' }
  & { kitSnapshotRuns?: Maybe<(
    { __typename?: 'KitSnapshotRunsConnection' }
    & { nodes?: Maybe<Array<(
      { __typename?: 'KitSnapshotRun' }
      & Pick<KitSnapshotRun, 'id' | 'sequence' | 'runDate' | 'createdAt' | 'removedAt'>
      & { plant?: Maybe<(
        { __typename?: 'Plant' }
        & Pick<Plant, 'code' | 'partnerPlantCode' | 'partnerPlantType'>
      )> }
    )>> }
  )> }
);

export type KitSnapshotRunsQueryVariables = Exact<{
  plantCode: Scalars['String'];
  first: Scalars['Int'];
  sort: SortEnumType;
}>;


export type KitSnapshotRunsQuery = (
  { __typename?: 'Query' }
  & { kitSnapshotRuns?: Maybe<(
    { __typename?: 'KitSnapshotRunsConnection' }
    & { nodes?: Maybe<Array<(
      { __typename?: 'KitSnapshotRun' }
      & Pick<KitSnapshotRun, 'id' | 'sequence' | 'runDate' | 'createdAt' | 'removedAt'>
      & { plant?: Maybe<(
        { __typename?: 'Plant' }
        & Pick<Plant, 'code' | 'partnerPlantCode' | 'partnerPlantType'>
      )> }
    )>> }
  )> }
);

export type LatestKitSnapshotRunQueryVariables = Exact<{
  plantCode: Scalars['String'];
}>;


export type LatestKitSnapshotRunQuery = (
  { __typename?: 'Query' }
  & { kitSnapshotRuns?: Maybe<(
    { __typename?: 'KitSnapshotRunsConnection' }
    & { nodes?: Maybe<Array<(
      { __typename?: 'KitSnapshotRun' }
      & Pick<KitSnapshotRun, 'id' | 'sequence' | 'runDate' | 'createdAt'>
      & { plant?: Maybe<(
        { __typename?: 'Plant' }
        & Pick<Plant, 'code' | 'partnerPlantCode' | 'partnerPlantType'>
      )> }
    )>> }
  )> }
);

export type PartnerStatusFilePayloadQueryVariables = Exact<{
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
}>;


export type PartnerStatusFilePayloadQuery = (
  { __typename?: 'Query' }
  & { partnerStatusFilePayload: (
    { __typename?: 'PartnerStatusDTO' }
    & Pick<PartnerStatusDto, 'plantCode' | 'runDate' | 'sequence' | 'filename' | 'errorMessage' | 'payloadText'>
  ) }
);

export type GenPartnerStatusFilenameQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type GenPartnerStatusFilenameQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'genPartnerStatusFilename'>
);

export type ParseBomFileQueryVariables = Exact<{
  text: Scalars['String'];
}>;


export type ParseBomFileQuery = (
  { __typename?: 'Query' }
  & { parseBomFile: (
    { __typename?: 'BomFile' }
    & Pick<BomFile, 'plantCode' | 'sequence' | 'bomFileCreatedAt'>
    & { lotEntries: Array<(
      { __typename?: 'BomFileLot' }
      & Pick<BomFileLot, 'lotNo'>
      & { kits: Array<(
        { __typename?: 'BomFileKit' }
        & Pick<BomFileKit, 'kitNo' | 'pcvCode'>
      )> }
    )>, lotParts: Array<(
      { __typename?: 'BomFileLotPart' }
      & Pick<BomFileLotPart, 'lotNo' | 'partNo' | 'partDesc' | 'quantity'>
    )> }
  ) }
);

export type ParseShipFileQueryVariables = Exact<{
  text: Scalars['String'];
}>;


export type ParseShipFileQuery = (
  { __typename?: 'Query' }
  & { parseShipFile: (
    { __typename?: 'ShipFile' }
    & Pick<ShipFile, 'sequence' | 'plantCode' | 'created'>
    & { lots: Array<(
      { __typename?: 'ShipFileLot' }
      & Pick<ShipFileLot, 'lotNo'>
      & { invoices: Array<(
        { __typename?: 'ShipFileInvoice' }
        & Pick<ShipFileInvoice, 'invoiceNo' | 'shipDate'>
        & { parts: Array<(
          { __typename?: 'ShipFilePart' }
          & Pick<ShipFilePart, 'partNo' | 'handlingUnitCode' | 'customerPartNo' | 'customerPartDesc' | 'quantity'>
        )> }
      )> }
    )> }
  ) }
);

export type ParseVinFileQueryVariables = Exact<{
  text: Scalars['String'];
}>;


export type ParseVinFileQuery = (
  { __typename?: 'Query' }
  & { parseVinFile: (
    { __typename?: 'VinFile' }
    & Pick<VinFile, 'plantCode' | 'partnerPlantCode' | 'sequence'>
    & { kits?: Maybe<Array<Maybe<(
      { __typename?: 'VinFileKit' }
      & Pick<VinFileKit, 'lotNo' | 'kitNo' | 'vin'>
    )>>> }
  ) }
);

export type ParsePartnerStatusAckQueryVariables = Exact<{
  text: Scalars['String'];
}>;


export type ParsePartnerStatusAckQuery = (
  { __typename?: 'Query' }
  & { parsePartnerStatusAckFile: (
    { __typename?: 'PartnerStatusAckDTO' }
    & Pick<PartnerStatusAckDto, 'plantCode' | 'partnerPlantCode' | 'sequence' | 'totalProcessed' | 'totalAccepted' | 'totalRejected' | 'fileDate'>
  ) }
);

export type GenVinImportAckQueryVariables = Exact<{
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
}>;


export type GenVinImportAckQuery = (
  { __typename?: 'Query' }
  & { genVinImportAcknowledgment: (
    { __typename?: 'KitVinAckDTO' }
    & Pick<KitVinAckDto, 'plantCode' | 'sequence' | 'filename' | 'payloadText' | 'errorMessage'>
  ) }
);

export type FordInterfaceFileTypeQueryVariables = Exact<{
  filename: Scalars['String'];
}>;


export type FordInterfaceFileTypeQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'fordInterfaceFileType'>
);
