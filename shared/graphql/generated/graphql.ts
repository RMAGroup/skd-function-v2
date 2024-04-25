export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  DateTime: any;
  UUID: any;
  Upload: any;
};

export type AppSetting = {
  __typename?: 'AppSetting';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['String'];
};

export type AppSettingFilterInput = {
  and?: InputMaybe<Array<AppSettingFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<AppSettingFilterInput>>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  value?: InputMaybe<StringOperationFilterInput>;
};

export type AppSettingSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  value?: InputMaybe<SortEnumType>;
};

/** SKD Server app settings section */
export type AppSettings = {
  __typename?: 'AppSettings';
  allowGraphqlIntrospection: Scalars['Boolean'];
  dcwsServiceAddress: Scalars['String'];
  executionTimeoutSeconds: Scalars['Int'];
  kitStatusFeedUrl: Scalars['String'];
};

/** A connection to a list of items. */
export type AppSettingsConnection = {
  __typename?: 'AppSettingsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<AppSettingsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<AppSetting>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AppSettingsEdge = {
  __typename?: 'AppSettingsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: AppSetting;
};

export type ApplyComponentSerialFormatInput = {
  id: Scalars['UUID'];
};

export type BasicKitInfo = {
  __typename?: 'BasicKitInfo';
  kitNo: Scalars['String'];
  lotNo: Scalars['String'];
  modelCode: Scalars['String'];
  modelName: Scalars['String'];
  vin: Scalars['String'];
};

export type Bom = {
  __typename?: 'Bom';
  createdAt: Scalars['DateTime'];
  filename?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  lotPartQuantitiesMatchShipment: Scalars['Boolean'];
  lots: Array<Lot>;
  plant: Plant;
  plantId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  sequence: Scalars['Int'];
};

export type BomFilterInput = {
  and?: InputMaybe<Array<BomFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  filename?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  lotPartQuantitiesMatchShipment?: InputMaybe<BooleanOperationFilterInput>;
  lots?: InputMaybe<ListFilterInputTypeOfLotFilterInput>;
  or?: InputMaybe<Array<BomFilterInput>>;
  plant?: InputMaybe<PlantFilterInput>;
  plantId?: InputMaybe<UuidOperationFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  sequence?: InputMaybe<IntOperationFilterInput>;
};

/** A connection to a list of items. */
export type BomListConnection = {
  __typename?: 'BomListConnection';
  /** A list of edges. */
  edges?: Maybe<Array<BomListEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<BomListDto>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BomListDto = {
  __typename?: 'BomListDTO';
  createdAt: Scalars['DateTime'];
  filename: Scalars['String'];
  id: Scalars['UUID'];
  lots: Array<BomList_Lot>;
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};

export type BomListDtoSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  filename?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  plantCode?: InputMaybe<SortEnumType>;
  sequence?: InputMaybe<SortEnumType>;
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
  lotNo: Scalars['String'];
  shipmentSequence?: Maybe<Scalars['Int']>;
};

export type BomLot = {
  __typename?: 'BomLot';
  kits: Array<BomLotKit>;
  lotNo: Scalars['String'];
  lotParts: Array<BomLotPart>;
  pcvCode: Scalars['String'];
};

export type BomLotKit = {
  __typename?: 'BomLotKit';
  kitNo: Scalars['String'];
};

export type BomLotPart = {
  __typename?: 'BomLotPart';
  lotNo: Scalars['String'];
  originalPartNo: Scalars['String'];
  partDesc: Scalars['String'];
  partNo: Scalars['String'];
  quantity: Scalars['Int'];
};

export type BomOverviewQueryInput = {
  bomId: Scalars['UUID'];
};

export type BomOverviewQueryResult = {
  __typename?: 'BomOverviewQueryResult';
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  lotNumbers: Array<Scalars['String']>;
  partCount: Scalars['Int'];
  pcvCodes: Array<Scalars['String']>;
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
  shipments: Array<BomOverviewQueryResultShipment>;
  vehicleCount: Scalars['Int'];
};

export type BomOverviewQueryResultShipment = {
  __typename?: 'BomOverviewQueryResultShipment';
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
  shipmentId: Scalars['UUID'];
};

export type BomPlantSet = {
  __typename?: 'BomPlantSet';
  bomFileCreatedAt: Scalars['DateTime'];
  filename: Scalars['String'];
  kittingPlantCode: Scalars['String'];
  lots: Array<BomLot>;
  plantCode: Scalars['String'];
  sequenceNumber: Scalars['Int'];
};

export type BomSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  filename?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  lotPartQuantitiesMatchShipment?: InputMaybe<SortEnumType>;
  plant?: InputMaybe<PlantSortInput>;
  plantId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  sequence?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type BomsConnection = {
  __typename?: 'BomsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<BomsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Bom>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BomsEdge = {
  __typename?: 'BomsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Bom;
};

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

export type Component = {
  __typename?: 'Component';
  code: Scalars['String'];
  componentSerialRule: ComponentSerialRule;
  createdAt: Scalars['DateTime'];
  iconURL: Scalars['String'];
  id: Scalars['UUID'];
  kitComponents: Array<KitComponent>;
  name: Scalars['String'];
  pcvComponents: Array<PcvComponent>;
  removedAt?: Maybe<Scalars['DateTime']>;
  requiresDcwsSubmission: Scalars['Boolean'];
  stations: Array<ComponentStation>;
};

export type ComponentFilterInput = {
  and?: InputMaybe<Array<ComponentFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  componentSerialRule?: InputMaybe<ComponentSerialRuleOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  iconURL?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  kitComponents?: InputMaybe<ListFilterInputTypeOfKitComponentFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ComponentFilterInput>>;
  pcvComponents?: InputMaybe<ListFilterInputTypeOfPcvComponentFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  requiresDcwsSubmission?: InputMaybe<BooleanOperationFilterInput>;
  stations?: InputMaybe<ListFilterInputTypeOfComponentStationFilterInput>;
};

export type ComponentSerial = {
  __typename?: 'ComponentSerial';
  createdAt: Scalars['DateTime'];
  dcwsResponses: Array<DcwsResponse>;
  id: Scalars['UUID'];
  kitComponent: KitComponent;
  kitComponentId: Scalars['UUID'];
  original_Serial1?: Maybe<Scalars['String']>;
  original_Serial2?: Maybe<Scalars['String']>;
  removedAt?: Maybe<Scalars['DateTime']>;
  serial1: Scalars['String'];
  serial2: Scalars['String'];
  verifiedAt?: Maybe<Scalars['DateTime']>;
};

export type ComponentSerialDto = {
  __typename?: 'ComponentSerialDTO';
  componentCode: Scalars['String'];
  componentName: Scalars['String'];
  componentSerialId: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  lotNo: Scalars['String'];
  serial1: Scalars['String'];
  serial2: Scalars['String'];
  stationCode: Scalars['String'];
  stationName: Scalars['String'];
  verifiedAt?: Maybe<Scalars['DateTime']>;
  vin: Scalars['String'];
};

export type ComponentSerialFilterInput = {
  and?: InputMaybe<Array<ComponentSerialFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  dcwsResponses?: InputMaybe<ListFilterInputTypeOfDcwsResponseFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  kitComponent?: InputMaybe<KitComponentFilterInput>;
  kitComponentId?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<ComponentSerialFilterInput>>;
  original_Serial1?: InputMaybe<StringOperationFilterInput>;
  original_Serial2?: InputMaybe<StringOperationFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  serial1?: InputMaybe<StringOperationFilterInput>;
  serial2?: InputMaybe<StringOperationFilterInput>;
  verifiedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type ComponentSerialInput = {
  kitComponentId: Scalars['UUID'];
  replace?: Scalars['Boolean'];
  serial1: Scalars['String'];
  serial2?: Scalars['String'];
};

export enum ComponentSerialRule {
  BothSerials = 'BOTH_SERIALS',
  OneOrBothSerials = 'ONE_OR_BOTH_SERIALS',
  OneSerial = 'ONE_SERIAL',
  Vin = 'VIN',
  VinAndBody = 'VIN_AND_BODY'
}

export type ComponentSerialRuleOperationFilterInput = {
  eq?: InputMaybe<ComponentSerialRule>;
  in?: InputMaybe<Array<ComponentSerialRule>>;
  neq?: InputMaybe<ComponentSerialRule>;
  nin?: InputMaybe<Array<ComponentSerialRule>>;
};

export type ComponentSerialSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  kitComponent?: InputMaybe<KitComponentSortInput>;
  kitComponentId?: InputMaybe<SortEnumType>;
  original_Serial1?: InputMaybe<SortEnumType>;
  original_Serial2?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  serial1?: InputMaybe<SortEnumType>;
  serial2?: InputMaybe<SortEnumType>;
  verifiedAt?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type ComponentSerialsConnection = {
  __typename?: 'ComponentSerialsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ComponentSerialsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ComponentSerial>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
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
  code?: InputMaybe<SortEnumType>;
  componentSerialRule?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  iconURL?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  requiresDcwsSubmission?: InputMaybe<SortEnumType>;
};

export type ComponentStation = {
  __typename?: 'ComponentStation';
  component: Component;
  componentId: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  saveCDCComponent: Scalars['Boolean'];
  station: Station;
  stationId: Scalars['UUID'];
};

export type ComponentStationFilterInput = {
  and?: InputMaybe<Array<ComponentStationFilterInput>>;
  component?: InputMaybe<ComponentFilterInput>;
  componentId?: InputMaybe<UuidOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<ComponentStationFilterInput>>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  saveCDCComponent?: InputMaybe<BooleanOperationFilterInput>;
  station?: InputMaybe<StationFilterInput>;
  stationId?: InputMaybe<UuidOperationFilterInput>;
};

export type ComponentStationMapping = {
  __typename?: 'ComponentStationMapping';
  componentCode: Scalars['String'];
  saveCDCComponent: Scalars['Boolean'];
  stationCode: Scalars['String'];
};

export type ComponentStationMappingInput = {
  componentCode: Scalars['String'];
  saveCDCComponent: Scalars['Boolean'];
  stationCode: Scalars['String'];
};

export type ComponentStationMappingsInput = {
  mappings: Array<ComponentStationMappingInput>;
};

export type ComponentStationSortInput = {
  component?: InputMaybe<ComponentSortInput>;
  componentId?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  saveCDCComponent?: InputMaybe<SortEnumType>;
  station?: InputMaybe<StationSortInput>;
  stationId?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type ComponentStationsConnection = {
  __typename?: 'ComponentStationsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ComponentStationsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ComponentStation>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
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
  /** A list of edges. */
  edges?: Maybe<Array<ComponentsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Component>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ComponentsEdge = {
  __typename?: 'ComponentsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Component;
};

export type DateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  ngt?: InputMaybe<Scalars['DateTime']>;
  ngte?: InputMaybe<Scalars['DateTime']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  nlt?: InputMaybe<Scalars['DateTime']>;
  nlte?: InputMaybe<Scalars['DateTime']>;
};

export type DcwsComponentResponseInput = {
  errorMessage: Scalars['String'];
  kitComponentId: Scalars['UUID'];
  responseCode: Scalars['String'];
};

export type DcwsResponse = {
  __typename?: 'DcwsResponse';
  componentSerial: ComponentSerial;
  componentSerialId: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  dcwsErrorMessage?: Maybe<Scalars['String']>;
  dcwsProcessExcptionCode: Scalars['String'];
  id: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  submissionAccepted: Scalars['Boolean'];
};

export type DcwsResponseFilterInput = {
  and?: InputMaybe<Array<DcwsResponseFilterInput>>;
  componentSerial?: InputMaybe<ComponentSerialFilterInput>;
  componentSerialId?: InputMaybe<UuidOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  dcwsErrorMessage?: InputMaybe<StringOperationFilterInput>;
  dcwsProcessExcptionCode?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<DcwsResponseFilterInput>>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  submissionAccepted?: InputMaybe<BooleanOperationFilterInput>;
};

export type DcwsResponseSortInput = {
  componentSerial?: InputMaybe<ComponentSerialSortInput>;
  componentSerialId?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  dcwsErrorMessage?: InputMaybe<SortEnumType>;
  dcwsProcessExcptionCode?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  submissionAccepted?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type DcwsResponsesConnection = {
  __typename?: 'DcwsResponsesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<DcwsResponsesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<DcwsResponse>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
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
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  kits: Array<Kit>;
  name: Scalars['String'];
  plant: Plant;
  plantId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type DealerFilterInput = {
  and?: InputMaybe<Array<DealerFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  kits?: InputMaybe<ListFilterInputTypeOfKitFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<DealerFilterInput>>;
  plant?: InputMaybe<PlantFilterInput>;
  plantId?: InputMaybe<UuidOperationFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type DealerSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  plant?: InputMaybe<PlantSortInput>;
  plantId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type DealersConnection = {
  __typename?: 'DealersConnection';
  /** A list of edges. */
  edges?: Maybe<Array<DealersEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Dealer>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DealersEdge = {
  __typename?: 'DealersEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Dealer;
};

export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  description: Scalars['String'];
};

export enum FordInterfaceFileType {
  Bom = 'BOM',
  PartnerStatusAck = 'PARTNER_STATUS_ACK',
  Ship = 'SHIP',
  Unkown = 'UNKOWN',
  Vin = 'VIN'
}

export type GetPcvsByPlantQueryInput = {
  first?: Scalars['Int'];
  plantCode: Scalars['String'];
};

export type GetPcvsByPlantQueryResult = {
  __typename?: 'GetPcvsByPlantQueryResult';
  pcvs: Array<PcvItem>;
};

export type Hu_Part = {
  __typename?: 'HU_Part';
  partDesc: Scalars['String'];
  partNo: Scalars['String'];
  quantity: Scalars['Int'];
};

export type HandlingUnit = {
  __typename?: 'HandlingUnit';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  parts: Array<ShipmentPart>;
  received: Array<HandlingUnitReceived>;
  removedAt?: Maybe<Scalars['DateTime']>;
  shipmentInvoice: ShipmentInvoice;
  shipmentInvoiceId: Scalars['UUID'];
};

export type HandlingUnitFilterInput = {
  and?: InputMaybe<Array<HandlingUnitFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<HandlingUnitFilterInput>>;
  parts?: InputMaybe<ListFilterInputTypeOfShipmentPartFilterInput>;
  received?: InputMaybe<ListFilterInputTypeOfHandlingUnitReceivedFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  shipmentInvoice?: InputMaybe<ShipmentInvoiceFilterInput>;
  shipmentInvoiceId?: InputMaybe<UuidOperationFilterInput>;
};

export type HandlingUnitInfoPayload = {
  __typename?: 'HandlingUnitInfoPayload';
  code?: Maybe<Scalars['String']>;
  invoiceNo?: Maybe<Scalars['String']>;
  lotNo?: Maybe<Scalars['String']>;
  partCount: Scalars['Int'];
  parts: Array<Hu_Part>;
  pcvCode?: Maybe<Scalars['String']>;
  pcvDescription?: Maybe<Scalars['String']>;
  plantCode: Scalars['String'];
  receivedAt?: Maybe<Scalars['DateTime']>;
  receivedRemovedAt?: Maybe<Scalars['DateTime']>;
  shipmentId: Scalars['UUID'];
  shipmentSequence: Scalars['Int'];
};

export type HandlingUnitOverview = {
  __typename?: 'HandlingUnitOverview';
  createdAt: Scalars['DateTime'];
  handlingUnitCode: Scalars['String'];
  invoiceNo: Scalars['String'];
  lotNo: Scalars['String'];
  partCount: Scalars['Int'];
  plantCode: Scalars['String'];
  receiveCancledAt?: Maybe<Scalars['DateTime']>;
  receivedAt?: Maybe<Scalars['DateTime']>;
  shipmentSequence: Scalars['Int'];
};

export type HandlingUnitReceived = {
  __typename?: 'HandlingUnitReceived';
  createdAt: Scalars['DateTime'];
  handlingUnit: HandlingUnit;
  handlingUnitId: Scalars['UUID'];
  id: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

/** A connection to a list of items. */
export type HandlingUnitReceivedConnection = {
  __typename?: 'HandlingUnitReceivedConnection';
  /** A list of edges. */
  edges?: Maybe<Array<HandlingUnitReceivedEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<HandlingUnitReceived>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type HandlingUnitReceivedEdge = {
  __typename?: 'HandlingUnitReceivedEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: HandlingUnitReceived;
};

export type HandlingUnitReceivedFilterInput = {
  and?: InputMaybe<Array<HandlingUnitReceivedFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  handlingUnit?: InputMaybe<HandlingUnitFilterInput>;
  handlingUnitId?: InputMaybe<UuidOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<HandlingUnitReceivedFilterInput>>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type HandlingUnitReceivedSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  handlingUnit?: InputMaybe<HandlingUnitSortInput>;
  handlingUnitId?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

export type HandlingUnitSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  shipmentInvoice?: InputMaybe<ShipmentInvoiceSortInput>;
  shipmentInvoiceId?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type HandlingUnitsConnection = {
  __typename?: 'HandlingUnitsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<HandlingUnitsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<HandlingUnit>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
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
  code: Scalars['String'];
  name: Scalars['String'];
};

export type ImportBomResult = {
  __typename?: 'ImportBomResult';
  items: Array<ImportBomResultItem>;
};

export type ImportBomResultItem = {
  __typename?: 'ImportBomResultItem';
  bomId: Scalars['UUID'];
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};

export type ImportShipmentResult = {
  __typename?: 'ImportShipmentResult';
  handlingUnitCount: Scalars['Int'];
  invoiceCount: Scalars['Int'];
  lotCount: Scalars['Int'];
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
  shipmentId: Scalars['UUID'];
};

export type IntOperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
  ngt?: InputMaybe<Scalars['Int']>;
  ngte?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nlt?: InputMaybe<Scalars['Int']>;
  nlte?: InputMaybe<Scalars['Int']>;
};

export type ItemCountDto = {
  __typename?: 'ItemCountDTO';
  code: Scalars['String'];
  count: Scalars['Int'];
  name: Scalars['String'];
};

export type Kit = {
  __typename?: 'Kit';
  createdAt: Scalars['DateTime'];
  dealer?: Maybe<Dealer>;
  dealerId?: Maybe<Scalars['UUID']>;
  id: Scalars['UUID'];
  kitComponents: Array<KitComponent>;
  kitNo: Scalars['String'];
  kitStatusEvents: Array<KitStatusEvent>;
  kitVins: Array<KitVin>;
  lot: Lot;
  lotId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  vin: Scalars['String'];
};

export type KitComponent = {
  __typename?: 'KitComponent';
  component: Component;
  componentId: Scalars['UUID'];
  componentSerials: Array<ComponentSerial>;
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  kit: Kit;
  kitId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  station: Station;
  stationId: Scalars['UUID'];
  verifiedAt?: Maybe<Scalars['DateTime']>;
};

export type KitComponentFilterInput = {
  and?: InputMaybe<Array<KitComponentFilterInput>>;
  component?: InputMaybe<ComponentFilterInput>;
  componentId?: InputMaybe<UuidOperationFilterInput>;
  componentSerials?: InputMaybe<ListFilterInputTypeOfComponentSerialFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  kit?: InputMaybe<KitFilterInput>;
  kitId?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<KitComponentFilterInput>>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  station?: InputMaybe<StationFilterInput>;
  stationId?: InputMaybe<UuidOperationFilterInput>;
  verifiedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type KitComponentSerialInfo = {
  __typename?: 'KitComponentSerialInfo';
  componentCode: Scalars['String'];
  componentIconURL: Scalars['String'];
  componentName: Scalars['String'];
  removedAt?: Maybe<Scalars['DateTime']>;
  stations: Array<StatcionSerialInfo>;
};

export type KitComponentSortInput = {
  component?: InputMaybe<ComponentSortInput>;
  componentId?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  kit?: InputMaybe<KitSortInput>;
  kitId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  station?: InputMaybe<StationSortInput>;
  stationId?: InputMaybe<SortEnumType>;
  verifiedAt?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type KitComponentsConnection = {
  __typename?: 'KitComponentsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<KitComponentsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<KitComponent>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type KitComponentsEdge = {
  __typename?: 'KitComponentsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: KitComponent;
};

export type KitCurrentStatusResponse = {
  __typename?: 'KitCurrentStatusResponse';
  kitNumber?: Maybe<Scalars['String']>;
  lotNumber?: Maybe<Scalars['String']>;
  plantGsdb?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  statusDate?: Maybe<Scalars['String']>;
};

export type KitFilterInput = {
  and?: InputMaybe<Array<KitFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  dealer?: InputMaybe<DealerFilterInput>;
  dealerId?: InputMaybe<UuidOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  kitComponents?: InputMaybe<ListFilterInputTypeOfKitComponentFilterInput>;
  kitNo?: InputMaybe<StringOperationFilterInput>;
  kitStatusEvents?: InputMaybe<ListFilterInputTypeOfKitStatusEventFilterInput>;
  kitVins?: InputMaybe<ListFilterInputTypeOfKitVinFilterInput>;
  lot?: InputMaybe<LotFilterInput>;
  lotId?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<KitFilterInput>>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  vin?: InputMaybe<StringOperationFilterInput>;
};

export type KitInfoDto = {
  __typename?: 'KitInfoDTO';
  eventDtate?: Maybe<Scalars['DateTime']>;
  id: Scalars['UUID'];
  kitNo: Scalars['String'];
  kitStatusCode?: Maybe<KitStatusCode>;
  lotNo: Scalars['String'];
  model: Scalars['String'];
  partnerStatusCode?: Maybe<PartnerStatusCode>;
  partnerStatusPending: Scalars['Boolean'];
  series: Scalars['String'];
  vin?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type KitListConnection = {
  __typename?: 'KitListConnection';
  /** A list of edges. */
  edges?: Maybe<Array<KitListEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<KitListItemDto>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
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
  id: Scalars['UUID'];
  imported?: Maybe<Scalars['DateTime']>;
  kitNo: Scalars['String'];
  lastKitStatusEvent?: Maybe<Scalars['String']>;
  lastKitStatusEventDate?: Maybe<Scalars['DateTime']>;
  lotNo: Scalars['String'];
  modelCode: Scalars['String'];
  modelName: Scalars['String'];
  requiredComponentCount?: Maybe<Scalars['Int']>;
  scannedComponentCount?: Maybe<Scalars['Int']>;
  verifiedComponentCount?: Maybe<Scalars['Int']>;
  vin: Scalars['String'];
};

export type KitListItemDtoSortInput = {
  id?: InputMaybe<SortEnumType>;
  imported?: InputMaybe<SortEnumType>;
  kitNo?: InputMaybe<SortEnumType>;
  lastKitStatusEvent?: InputMaybe<SortEnumType>;
  lastKitStatusEventDate?: InputMaybe<SortEnumType>;
  lotNo?: InputMaybe<SortEnumType>;
  modelCode?: InputMaybe<SortEnumType>;
  modelName?: InputMaybe<SortEnumType>;
  requiredComponentCount?: InputMaybe<SortEnumType>;
  scannedComponentCount?: InputMaybe<SortEnumType>;
  verifiedComponentCount?: InputMaybe<SortEnumType>;
  vin?: InputMaybe<SortEnumType>;
};

export type KitOverviewQueryInput = {
  vinOrKitNo: Scalars['String'];
};

export type KitOverviewQueryResult = {
  __typename?: 'KitOverviewQueryResult';
  createdAt: Scalars['DateTime'];
  currentKitStatusCode?: Maybe<KitStatusCode>;
  currentKitStatusDate?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  kitNo: Scalars['String'];
  lotNo: Scalars['String'];
  model: Scalars['String'];
  modelYear: Scalars['String'];
  pcvCode: Scalars['String'];
  vin: Scalars['String'];
};

export type KitSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  dealer?: InputMaybe<DealerSortInput>;
  dealerId?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  kitNo?: InputMaybe<SortEnumType>;
  lot?: InputMaybe<LotSortInput>;
  lotId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  vin?: InputMaybe<SortEnumType>;
};

export enum KitStatusCode {
  BuildCompleted = 'BUILD_COMPLETED',
  BuildStart = 'BUILD_START',
  CustomReceived = 'CUSTOM_RECEIVED',
  GateReleased = 'GATE_RELEASED',
  PlanBuild = 'PLAN_BUILD',
  WholeSale = 'WHOLE_SALE'
}

export type KitStatusCodeOperationFilterInput = {
  eq?: InputMaybe<KitStatusCode>;
  in?: InputMaybe<Array<KitStatusCode>>;
  neq?: InputMaybe<KitStatusCode>;
  nin?: InputMaybe<Array<KitStatusCode>>;
};

export type KitStatusDto = {
  __typename?: 'KitStatusDTO';
  kitNo: Scalars['String'];
  kitStatusItems: Array<StatusEventDto>;
  lotNo: Scalars['String'];
  vin: Scalars['String'];
};

export type KitStatusEvent = {
  __typename?: 'KitStatusEvent';
  createdAt: Scalars['DateTime'];
  eventDate: Scalars['DateTime'];
  eventNote?: Maybe<Scalars['String']>;
  eventType: KitStatusEventType;
  id: Scalars['UUID'];
  kit: Kit;
  kitId: Scalars['UUID'];
  kitStatusEventTypeId: Scalars['UUID'];
  partnerStatusUpdatedAt?: Maybe<Scalars['DateTime']>;
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type KitStatusEventFilterInput = {
  and?: InputMaybe<Array<KitStatusEventFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  eventDate?: InputMaybe<DateTimeOperationFilterInput>;
  eventNote?: InputMaybe<StringOperationFilterInput>;
  eventType?: InputMaybe<KitStatusEventTypeFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  kit?: InputMaybe<KitFilterInput>;
  kitId?: InputMaybe<UuidOperationFilterInput>;
  kitStatusEventTypeId?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<KitStatusEventFilterInput>>;
  partnerStatusUpdatedAt?: InputMaybe<DateTimeOperationFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type KitStatusEventInput = {
  dealerCode: Scalars['String'];
  eventCode: KitStatusCode;
  eventDate: Scalars['DateTime'];
  eventNote: Scalars['String'];
  kitNo: Scalars['String'];
};

export type KitStatusEventSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  eventDate?: InputMaybe<SortEnumType>;
  eventNote?: InputMaybe<SortEnumType>;
  eventType?: InputMaybe<KitStatusEventTypeSortInput>;
  id?: InputMaybe<SortEnumType>;
  kit?: InputMaybe<KitSortInput>;
  kitId?: InputMaybe<SortEnumType>;
  kitStatusEventTypeId?: InputMaybe<SortEnumType>;
  partnerStatusUpdatedAt?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

export type KitStatusEventType = {
  __typename?: 'KitStatusEventType';
  code: KitStatusCode;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['UUID'];
  partnerStatusCode: PartnerStatusCode;
  removedAt?: Maybe<Scalars['DateTime']>;
  sequence: Scalars['Int'];
};

export type KitStatusEventTypeFilterInput = {
  and?: InputMaybe<Array<KitStatusEventTypeFilterInput>>;
  code?: InputMaybe<KitStatusCodeOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<KitStatusEventTypeFilterInput>>;
  partnerStatusCode?: InputMaybe<PartnerStatusCodeOperationFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  sequence?: InputMaybe<IntOperationFilterInput>;
};

export type KitStatusEventTypeSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  partnerStatusCode?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  sequence?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type KitStatusEventTypesConnection = {
  __typename?: 'KitStatusEventTypesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<KitStatusEventTypesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<KitStatusEventType>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type KitStatusEventTypesEdge = {
  __typename?: 'KitStatusEventTypesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: KitStatusEventType;
};

/** A connection to a list of items. */
export type KitStatusEventsConnection = {
  __typename?: 'KitStatusEventsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<KitStatusEventsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<KitStatusEvent>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type KitStatusEventsEdge = {
  __typename?: 'KitStatusEventsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: KitStatusEvent;
};

export type KitVin = {
  __typename?: 'KitVin';
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  kit: Kit;
  kitId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  vin: Scalars['String'];
};

export type KitVinFilterInput = {
  and?: InputMaybe<Array<KitVinFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  kit?: InputMaybe<KitFilterInput>;
  kitId?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<KitVinFilterInput>>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  vin?: InputMaybe<StringOperationFilterInput>;
};

export type KitVinInput = {
  kitNo: Scalars['String'];
  vin: Scalars['String'];
};

export type KitVinSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  kit?: InputMaybe<KitSortInput>;
  kitId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  vin?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type KitVinsConnection = {
  __typename?: 'KitVinsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<KitVinsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<KitVin>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type KitVinsEdge = {
  __typename?: 'KitVinsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: KitVin;
};

/** A connection to a list of items. */
export type KitsByCurrentKitStatusConnection = {
  __typename?: 'KitsByCurrentKitStatusConnection';
  /** A list of edges. */
  edges?: Maybe<Array<KitsByCurrentKitStatusEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Kit>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type KitsByCurrentKitStatusEdge = {
  __typename?: 'KitsByCurrentKitStatusEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Kit;
};

/** A connection to a list of items. */
export type KitsConnection = {
  __typename?: 'KitsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<KitsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Kit>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
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
  all?: InputMaybe<BomFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<BomFilterInput>;
  some?: InputMaybe<BomFilterInput>;
};

export type ListFilterInputTypeOfComponentSerialFilterInput = {
  all?: InputMaybe<ComponentSerialFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ComponentSerialFilterInput>;
  some?: InputMaybe<ComponentSerialFilterInput>;
};

export type ListFilterInputTypeOfComponentStationFilterInput = {
  all?: InputMaybe<ComponentStationFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ComponentStationFilterInput>;
  some?: InputMaybe<ComponentStationFilterInput>;
};

export type ListFilterInputTypeOfDcwsResponseFilterInput = {
  all?: InputMaybe<DcwsResponseFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<DcwsResponseFilterInput>;
  some?: InputMaybe<DcwsResponseFilterInput>;
};

export type ListFilterInputTypeOfDealerFilterInput = {
  all?: InputMaybe<DealerFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<DealerFilterInput>;
  some?: InputMaybe<DealerFilterInput>;
};

export type ListFilterInputTypeOfHandlingUnitFilterInput = {
  all?: InputMaybe<HandlingUnitFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<HandlingUnitFilterInput>;
  some?: InputMaybe<HandlingUnitFilterInput>;
};

export type ListFilterInputTypeOfHandlingUnitReceivedFilterInput = {
  all?: InputMaybe<HandlingUnitReceivedFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<HandlingUnitReceivedFilterInput>;
  some?: InputMaybe<HandlingUnitReceivedFilterInput>;
};

export type ListFilterInputTypeOfKitComponentFilterInput = {
  all?: InputMaybe<KitComponentFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<KitComponentFilterInput>;
  some?: InputMaybe<KitComponentFilterInput>;
};

export type ListFilterInputTypeOfKitFilterInput = {
  all?: InputMaybe<KitFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<KitFilterInput>;
  some?: InputMaybe<KitFilterInput>;
};

export type ListFilterInputTypeOfKitStatusEventFilterInput = {
  all?: InputMaybe<KitStatusEventFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<KitStatusEventFilterInput>;
  some?: InputMaybe<KitStatusEventFilterInput>;
};

export type ListFilterInputTypeOfKitVinFilterInput = {
  all?: InputMaybe<KitVinFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<KitVinFilterInput>;
  some?: InputMaybe<KitVinFilterInput>;
};

export type ListFilterInputTypeOfLotFilterInput = {
  all?: InputMaybe<LotFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<LotFilterInput>;
  some?: InputMaybe<LotFilterInput>;
};

export type ListFilterInputTypeOfLotPartFilterInput = {
  all?: InputMaybe<LotPartFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<LotPartFilterInput>;
  some?: InputMaybe<LotPartFilterInput>;
};

export type ListFilterInputTypeOfLotPartReceivedFilterInput = {
  all?: InputMaybe<LotPartReceivedFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<LotPartReceivedFilterInput>;
  some?: InputMaybe<LotPartReceivedFilterInput>;
};

export type ListFilterInputTypeOfPcvFilterInput = {
  all?: InputMaybe<PcvFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<PcvFilterInput>;
  some?: InputMaybe<PcvFilterInput>;
};

export type ListFilterInputTypeOfPartFilterInput = {
  all?: InputMaybe<PartFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<PartFilterInput>;
  some?: InputMaybe<PartFilterInput>;
};

export type ListFilterInputTypeOfPcvComponentFilterInput = {
  all?: InputMaybe<PcvComponentFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<PcvComponentFilterInput>;
  some?: InputMaybe<PcvComponentFilterInput>;
};

export type ListFilterInputTypeOfShipmentFilterInput = {
  all?: InputMaybe<ShipmentFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ShipmentFilterInput>;
  some?: InputMaybe<ShipmentFilterInput>;
};

export type ListFilterInputTypeOfShipmentInvoiceFilterInput = {
  all?: InputMaybe<ShipmentInvoiceFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ShipmentInvoiceFilterInput>;
  some?: InputMaybe<ShipmentInvoiceFilterInput>;
};

export type ListFilterInputTypeOfShipmentLotFilterInput = {
  all?: InputMaybe<ShipmentLotFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ShipmentLotFilterInput>;
  some?: InputMaybe<ShipmentLotFilterInput>;
};

export type ListFilterInputTypeOfShipmentPartFilterInput = {
  all?: InputMaybe<ShipmentPartFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ShipmentPartFilterInput>;
  some?: InputMaybe<ShipmentPartFilterInput>;
};

export type ListFilterInputTypeOfStationFilterInput = {
  all?: InputMaybe<StationFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<StationFilterInput>;
  some?: InputMaybe<StationFilterInput>;
};

export type Lot = {
  __typename?: 'Lot';
  bom?: Maybe<Bom>;
  bomId?: Maybe<Scalars['UUID']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  kits: Array<Kit>;
  lotNo: Scalars['String'];
  lotParts: Array<LotPart>;
  note?: Maybe<Scalars['String']>;
  pcv: Pcv;
  pcvId: Scalars['UUID'];
  plant: Plant;
  plantId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  shipmentLots: Array<ShipmentLot>;
};

export type LotDto = {
  __typename?: 'LotDTO';
  createdAt: Scalars['DateTime'];
  lotNo: Scalars['String'];
  model: Scalars['String'];
  modelBody: Scalars['String'];
  modelCode: Scalars['String'];
  modelDesc: Scalars['String'];
  modelSeries: Scalars['String'];
};

export type LotFilterInput = {
  and?: InputMaybe<Array<LotFilterInput>>;
  bom?: InputMaybe<BomFilterInput>;
  bomId?: InputMaybe<UuidOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  kits?: InputMaybe<ListFilterInputTypeOfKitFilterInput>;
  lotNo?: InputMaybe<StringOperationFilterInput>;
  lotParts?: InputMaybe<ListFilterInputTypeOfLotPartFilterInput>;
  note?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<LotFilterInput>>;
  pcv?: InputMaybe<PcvFilterInput>;
  pcvId?: InputMaybe<UuidOperationFilterInput>;
  plant?: InputMaybe<PlantFilterInput>;
  plantId?: InputMaybe<UuidOperationFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  shipmentLots?: InputMaybe<ListFilterInputTypeOfShipmentLotFilterInput>;
};

export type LotKitStatusEventInput = {
  eventCode: KitStatusCode;
  eventDate: Scalars['DateTime'];
  eventNote: Scalars['String'];
  lotNo: Scalars['String'];
};

export type LotKitsQueryInput = {
  lotNo: Scalars['String'];
};

export type LotKitsQueryResult = {
  __typename?: 'LotKitsQueryResult';
  items: Array<LotKitsQueryResultItem>;
};

export type LotKitsQueryResultItem = {
  __typename?: 'LotKitsQueryResultItem';
  kitNo: Scalars['String'];
  kitStatusCode?: Maybe<Scalars['String']>;
  kitStatusCreatedAt?: Maybe<Scalars['DateTime']>;
  kitStatusEventDate?: Maybe<Scalars['DateTime']>;
  model: Scalars['String'];
  partnerStatusCode?: Maybe<Scalars['String']>;
  requiredComponentCount: Scalars['Int'];
  verifiedComponentCount: Scalars['Int'];
  vin: Scalars['String'];
};

export type LotListDto = {
  __typename?: 'LotListDTO';
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  kitCount: Scalars['Int'];
  kitStatusCode?: Maybe<KitStatusCode>;
  lotNo: Scalars['String'];
  plantCode: Scalars['String'];
};

export type LotOverviewDto = {
  __typename?: 'LotOverviewDTO';
  bomId: Scalars['UUID'];
  bomSequence: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  customReceived?: Maybe<StatusEventDto>;
  id: Scalars['UUID'];
  lotNo: Scalars['String'];
  note: Scalars['String'];
  pcvCode: Scalars['String'];
  pcvDescription: Scalars['String'];
  pcvId: Scalars['UUID'];
  plantCode: Scalars['String'];
  shipmentId: Scalars['UUID'];
  shipmentSequence: Scalars['Int'];
};

export type LotOverviewQueryInput = {
  lotNo: Scalars['String'];
};

export type LotOverviewQueryResult = {
  __typename?: 'LotOverviewQueryResult';
  bomId?: Maybe<Scalars['UUID']>;
  bomSequence?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  drive: Scalars['String'];
  engine: Scalars['String'];
  lotNo: Scalars['String'];
  model: Scalars['String'];
  paint: Scalars['String'];
  pcvCode: Scalars['String'];
  plantCode: Scalars['String'];
  priorLotNo?: Maybe<Scalars['String']>;
  series: Scalars['String'];
  shipmentId?: Maybe<Scalars['UUID']>;
  shipmentSequence?: Maybe<Scalars['Int']>;
  subModel: Scalars['String'];
  transmission: Scalars['String'];
  trim: Scalars['String'];
};

export type LotPart = {
  __typename?: 'LotPart';
  bomQuantity: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  lot: Lot;
  lotId: Scalars['UUID'];
  part: Part;
  partId: Scalars['UUID'];
  received: Array<LotPartReceived>;
  removedAt?: Maybe<Scalars['DateTime']>;
  shipmentQuantity: Scalars['Int'];
};

export type LotPartDto = {
  __typename?: 'LotPartDTO';
  bomQuantity: Scalars['Int'];
  importDate: Scalars['DateTime'];
  lotNo: Scalars['String'];
  partDesc: Scalars['String'];
  partNo: Scalars['String'];
  partType: Scalars['String'];
  receivedDate?: Maybe<Scalars['DateTime']>;
  receivedQuantity: Scalars['Int'];
  removedDate?: Maybe<Scalars['DateTime']>;
  shipmentQuantity: Scalars['Int'];
};

export type LotPartDiffItem = {
  __typename?: 'LotPartDiffItem';
  diffType: LotPartDiffType;
  firstLotNo: Scalars['String'];
  firstLotQuantity: Scalars['Int'];
  partDesc: Scalars['String'];
  partNo: Scalars['String'];
  partType: Scalars['String'];
  secondLotNo: Scalars['String'];
  secondLotQuantity: Scalars['Int'];
};

export type LotPartDiffQueryInput = {
  lotNo: Scalars['String'];
};

export type LotPartDiffQueryResult = {
  __typename?: 'LotPartDiffQueryResult';
  items: Array<LotPartDiffItem>;
};

export enum LotPartDiffType {
  Both = 'BOTH',
  FirstOnly = 'FIRST_ONLY',
  SecondOnly = 'SECOND_ONLY'
}

export type LotPartFilterInput = {
  and?: InputMaybe<Array<LotPartFilterInput>>;
  bomQuantity?: InputMaybe<IntOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  lot?: InputMaybe<LotFilterInput>;
  lotId?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<LotPartFilterInput>>;
  part?: InputMaybe<PartFilterInput>;
  partId?: InputMaybe<UuidOperationFilterInput>;
  received?: InputMaybe<ListFilterInputTypeOfLotPartReceivedFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  shipmentQuantity?: InputMaybe<IntOperationFilterInput>;
};

export type LotPartReceived = {
  __typename?: 'LotPartReceived';
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  lotPart: LotPart;
  lotPartId: Scalars['UUID'];
  quantity: Scalars['Int'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type LotPartReceivedDto = {
  __typename?: 'LotPartReceivedDTO';
  bomQuantity: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  lotNo: Scalars['String'];
  partDesc: Scalars['String'];
  partNo: Scalars['String'];
  receivedQuantity: Scalars['Int'];
  removedAt?: Maybe<Scalars['DateTime']>;
  shipmentQuantity: Scalars['Int'];
};

export type LotPartReceivedFilterInput = {
  and?: InputMaybe<Array<LotPartReceivedFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  lotPart?: InputMaybe<LotPartFilterInput>;
  lotPartId?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<LotPartReceivedFilterInput>>;
  quantity?: InputMaybe<IntOperationFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type LotPartReceivedSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  lotPart?: InputMaybe<LotPartSortInput>;
  lotPartId?: InputMaybe<SortEnumType>;
  quantity?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

export type LotPartSortInput = {
  bomQuantity?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  lot?: InputMaybe<LotSortInput>;
  lotId?: InputMaybe<SortEnumType>;
  part?: InputMaybe<PartSortInput>;
  partId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  shipmentQuantity?: InputMaybe<SortEnumType>;
};

export type LotPartsByShipOrBomQueryResult = {
  __typename?: 'LotPartsByShipOrBomQueryResult';
  items: Array<LotPartsByShipOrBomQueryResultItem>;
};

export type LotPartsByShipOrBomQueryResultItem = {
  __typename?: 'LotPartsByShipOrBomQueryResultItem';
  bomQuantity: Scalars['Int'];
  importDate: Scalars['DateTime'];
  lotNo: Scalars['String'];
  partDesc: Scalars['String'];
  partNo: Scalars['String'];
  partType: Scalars['String'];
  receivedDate?: Maybe<Scalars['DateTime']>;
  receivedQuantity: Scalars['Int'];
  removedDate?: Maybe<Scalars['DateTime']>;
  shipmentQuantity: Scalars['Int'];
};

export type LotPartsByShipmentQueryInput = {
  id: Scalars['UUID'];
  queryBy: LotPartsQueryBy;
};

/** A connection to a list of items. */
export type LotPartsConnection = {
  __typename?: 'LotPartsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<LotPartsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<LotPart>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type LotPartsEdge = {
  __typename?: 'LotPartsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: LotPart;
};

export enum LotPartsQueryBy {
  Bom = 'BOM',
  Shipment = 'SHIPMENT'
}

export type LotPartsQueryInput = {
  lotNo: Scalars['String'];
};

export type LotPartsQueryResult = {
  __typename?: 'LotPartsQueryResult';
  items: Array<LotPartsQueryResultItem>;
};

export type LotPartsQueryResultItem = {
  __typename?: 'LotPartsQueryResultItem';
  partDesc: Scalars['String'];
  partNo: Scalars['String'];
  partType: Scalars['String'];
  quantity: Scalars['Int'];
  quantityReceived: Scalars['Int'];
  receivedAt?: Maybe<Scalars['DateTime']>;
  receivedCanceled?: Maybe<Scalars['Boolean']>;
};

/** A connection to a list of items. */
export type LotPartsReceivedConnection = {
  __typename?: 'LotPartsReceivedConnection';
  /** A list of edges. */
  edges?: Maybe<Array<LotPartsReceivedEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<LotPartReceived>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type LotPartsReceivedEdge = {
  __typename?: 'LotPartsReceivedEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: LotPartReceived;
};

export type LotSortInput = {
  bom?: InputMaybe<BomSortInput>;
  bomId?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  lotNo?: InputMaybe<SortEnumType>;
  note?: InputMaybe<SortEnumType>;
  pcv?: InputMaybe<PcvSortInput>;
  pcvId?: InputMaybe<SortEnumType>;
  plant?: InputMaybe<PlantSortInput>;
  plantId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

export type LotsByKitStatusQueryInput = {
  kitStatusCode: KitStatusCode;
  plantCode: Scalars['String'];
};

export type LotsByKitStatusQueryResult = {
  __typename?: 'LotsByKitStatusQueryResult';
  eventDate: Scalars['DateTime'];
  lotNo: Scalars['String'];
  model: Scalars['String'];
  modelYear: Scalars['String'];
  pcvCode: Scalars['String'];
};

/** A connection to a list of items. */
export type LotsConnection = {
  __typename?: 'LotsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<LotsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Lot>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
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
  applyComponentSerialFormat: ComponentSerial;
  captureComponentSerial: ResultOrOfComponentSerialDto;
  /** Create build start event for a kit */
  createBuildStartEvent: ResultOrOfKitStatusEvent;
  createDcwsResponse: ResultOrOfDcwsResponse;
  /** Create a kit status event for a kit */
  createKitStatusEvent: ResultOrOfKitStatusEvent;
  /** Create csutom received event for all kits in a lot */
  createLotKitStatusEvents: ResultOrOfLot;
  createLotPartQuantityReceived: ResultOrOfLotPartDto;
  createPlant: ResultOrOfPlantOverviewDto;
  /** Import BOM given the BomPlantSet input */
  importBOM: ResultOrOfImportBomResult;
  /** Import BOM given the BomPlantSet input */
  importBOMFileText: ResultOrOfImportBomResult;
  /** Import shipment given the ShipFile input */
  importShipment: ResultOrOfImportShipmentResult;
  /** Import shipment given the ShipFile input */
  importShipmentFileText: ResultOrOfImportShipmentResult;
  /** Parse a BOM file and return a ParseBomFileResult object */
  parseBomFile: ParseBomFileResult;
  /** Parse a BOM file and return a ParseBomFileResult object */
  parseBomFileText: ParseBomFileResult;
  /** Parses a PCV xlsx file and returns a list of PCV, and Component code records */
  parsePcvsXlsx: ResultOrOfParsePcvsXlxsResult;
  /** Parse a shipment file and return a ShipFile object */
  parseShipmentFile: ShipFile;
  /** Parse a shipment file and return a ShipFile object */
  parseShipmentFileText: ShipFile;
  parseStationsXlsx: ResultOrOfParseStationsXlsxCommandResult;
  removeAllComponentStationMappings: ResultOrOfRemoveAllComponentStationMappingsPayload;
  saveDcwsComponentResponse: ResultOrOfDcwsResponse;
  savePCV: ResultOrOfSavePcvResult;
  /**
   * Save a station inludeing the sequence and component codes
   * If station already exists, it will be updated
   */
  saveStation: ResultOrOfSaveStationCommandResult;
  setComponentStationMappings: ResultOrOfSetComponentStationMappingsPayload;
  setHandlingUnitReceived: ResultOrOfReceiveHandlingUnitPayload;
  /**
   * Set the VIN for a Kit.
   * This will mark the existing VIN as removed and add a new VIN.
   */
  setKitVin: ResultOrOfKit;
  /** Update Part */
  setPartType: ResultOrOfSetPartTypeResult;
  /**
   * Update kit component stations mappings to match the component station mappings template
   * where kit does not have a BUILD_COMPLETE status event
   */
  syncKitCompoents: ResultOrOfSyncKitComponentsResult;
  /** Update each KitStatusEvent.PartnerStatusUpdatedAt based on the partners kit status. */
  syncKitToPartnerStatus: ResultOrOfUpdatePartnerStatusPayload;
  /**
   * Gets a VIN from the KitStatusFeedService and sets / updates  it to the kit
   * Does not throw an error if the VIN is not found or if the VIN has not changed
   */
  updateKitVin: ResultOrOfUpdateKitVinPayload;
  /**
   * Given a Kit number update the partner status with the kit's current statuses
   * Does NOT set the KitStatusEvent.PartnerStatusUpdatedAt
   */
  updatePartnerStatus: ResultOrOfUpdatePartnerStatusPayload;
  verifyComponentSerial: ResultOrOfDcwsResponse;
};


export type MutationApplyComponentSerialFormatArgs = {
  input: ApplyComponentSerialFormatInput;
};


export type MutationCaptureComponentSerialArgs = {
  input: ComponentSerialInput;
};


export type MutationCreateBuildStartEventArgs = {
  kitNo: Scalars['String'];
};


export type MutationCreateDcwsResponseArgs = {
  input: DcwsComponentResponseInput;
};


export type MutationCreateKitStatusEventArgs = {
  input: KitStatusEventInput;
};


export type MutationCreateLotKitStatusEventsArgs = {
  input: LotKitStatusEventInput;
};


export type MutationCreateLotPartQuantityReceivedArgs = {
  input: ReceiveLotPartInput;
};


export type MutationCreatePlantArgs = {
  input: PlantInput;
};


export type MutationImportBomArgs = {
  file: Scalars['Upload'];
};


export type MutationImportBomFileTextArgs = {
  filename: Scalars['String'];
  text: Scalars['String'];
};


export type MutationImportShipmentArgs = {
  file: Scalars['Upload'];
};


export type MutationImportShipmentFileTextArgs = {
  filename: Scalars['String'];
  text: Scalars['String'];
};


export type MutationParseBomFileArgs = {
  file: Scalars['Upload'];
};


export type MutationParseBomFileTextArgs = {
  filename: Scalars['String'];
  text: Scalars['String'];
};


export type MutationParsePcvsXlsxArgs = {
  file: Scalars['Upload'];
};


export type MutationParseShipmentFileArgs = {
  file: Scalars['Upload'];
};


export type MutationParseShipmentFileTextArgs = {
  filename: Scalars['String'];
  text: Scalars['String'];
};


export type MutationParseStationsXlsxArgs = {
  file: Scalars['Upload'];
  worksheetNumber: Scalars['Int'];
};


export type MutationSaveDcwsComponentResponseArgs = {
  input: DcwsComponentResponseInput;
};


export type MutationSavePcvArgs = {
  input: SavePcvInput;
};


export type MutationSaveStationArgs = {
  input: SaveStationCommandInput;
};


export type MutationSetComponentStationMappingsArgs = {
  input: ComponentStationMappingsInput;
};


export type MutationSetHandlingUnitReceivedArgs = {
  input: ReceiveHandlingUnitInput;
};


export type MutationSetKitVinArgs = {
  input: KitVinInput;
};


export type MutationSetPartTypeArgs = {
  input: SetPartTypeCommandInput;
};


export type MutationSyncKitToPartnerStatusArgs = {
  input: UpdatePartnerStatusInput;
};


export type MutationUpdateKitVinArgs = {
  input: UpdateKitVinInput;
};


export type MutationUpdatePartnerStatusArgs = {
  input: UpdatePartnerStatusInput;
};


export type MutationVerifyComponentSerialArgs = {
  kitComponentId: Scalars['UUID'];
};

export type Pcv = {
  __typename?: 'PCV';
  body: Scalars['String'];
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['UUID'];
  lots: Array<Lot>;
  model: Scalars['String'];
  modelYear: Scalars['String'];
  pcvComponents: Array<PcvComponent>;
  pcvDrive?: Maybe<PcvDrive>;
  pcvDriveId?: Maybe<Scalars['UUID']>;
  pcvEngine?: Maybe<PcvEngine>;
  pcvEngineId?: Maybe<Scalars['UUID']>;
  pcvModel?: Maybe<PcvModel>;
  pcvModelId?: Maybe<Scalars['UUID']>;
  pcvPaint?: Maybe<PcvPaint>;
  pcvPaintId?: Maybe<Scalars['UUID']>;
  pcvSeries?: Maybe<PcvSeries>;
  pcvSeriesId?: Maybe<Scalars['UUID']>;
  pcvSubmodel?: Maybe<PcvSubmodel>;
  pcvSubmodelId?: Maybe<Scalars['UUID']>;
  pcvTransmission?: Maybe<PcvTransmission>;
  pcvTransmissionId?: Maybe<Scalars['UUID']>;
  pcvTrim?: Maybe<PcvTrim>;
  pcvTrimId?: Maybe<Scalars['UUID']>;
  plant: Plant;
  plantId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  series: Scalars['String'];
};

export type PcvFilterInput = {
  and?: InputMaybe<Array<PcvFilterInput>>;
  body?: InputMaybe<StringOperationFilterInput>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  lots?: InputMaybe<ListFilterInputTypeOfLotFilterInput>;
  model?: InputMaybe<StringOperationFilterInput>;
  modelYear?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PcvFilterInput>>;
  pcvComponents?: InputMaybe<ListFilterInputTypeOfPcvComponentFilterInput>;
  pcvDrive?: InputMaybe<PcvDriveFilterInput>;
  pcvDriveId?: InputMaybe<UuidOperationFilterInput>;
  pcvEngine?: InputMaybe<PcvEngineFilterInput>;
  pcvEngineId?: InputMaybe<UuidOperationFilterInput>;
  pcvModel?: InputMaybe<PcvModelFilterInput>;
  pcvModelId?: InputMaybe<UuidOperationFilterInput>;
  pcvPaint?: InputMaybe<PcvPaintFilterInput>;
  pcvPaintId?: InputMaybe<UuidOperationFilterInput>;
  pcvSeries?: InputMaybe<PcvSeriesFilterInput>;
  pcvSeriesId?: InputMaybe<UuidOperationFilterInput>;
  pcvSubmodel?: InputMaybe<PcvSubmodelFilterInput>;
  pcvSubmodelId?: InputMaybe<UuidOperationFilterInput>;
  pcvTransmission?: InputMaybe<PcvTransmissionFilterInput>;
  pcvTransmissionId?: InputMaybe<UuidOperationFilterInput>;
  pcvTrim?: InputMaybe<PcvTrimFilterInput>;
  pcvTrimId?: InputMaybe<UuidOperationFilterInput>;
  plant?: InputMaybe<PlantFilterInput>;
  plantId?: InputMaybe<UuidOperationFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  series?: InputMaybe<StringOperationFilterInput>;
};

export type PcvSortInput = {
  body?: InputMaybe<SortEnumType>;
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  model?: InputMaybe<SortEnumType>;
  modelYear?: InputMaybe<SortEnumType>;
  pcvDrive?: InputMaybe<PcvDriveSortInput>;
  pcvDriveId?: InputMaybe<SortEnumType>;
  pcvEngine?: InputMaybe<PcvEngineSortInput>;
  pcvEngineId?: InputMaybe<SortEnumType>;
  pcvModel?: InputMaybe<PcvModelSortInput>;
  pcvModelId?: InputMaybe<SortEnumType>;
  pcvPaint?: InputMaybe<PcvPaintSortInput>;
  pcvPaintId?: InputMaybe<SortEnumType>;
  pcvSeries?: InputMaybe<PcvSeriesSortInput>;
  pcvSeriesId?: InputMaybe<SortEnumType>;
  pcvSubmodel?: InputMaybe<PcvSubmodelSortInput>;
  pcvSubmodelId?: InputMaybe<SortEnumType>;
  pcvTransmission?: InputMaybe<PcvTransmissionSortInput>;
  pcvTransmissionId?: InputMaybe<SortEnumType>;
  pcvTrim?: InputMaybe<PcvTrimSortInput>;
  pcvTrimId?: InputMaybe<SortEnumType>;
  plant?: InputMaybe<PlantSortInput>;
  plantId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  series?: InputMaybe<SortEnumType>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type ParseBomFileResult = {
  __typename?: 'ParseBomFileResult';
  bomPlantSets: Array<BomPlantSet>;
  errors: Array<Scalars['String']>;
};

export type ParsePcvsXlxsResult = {
  __typename?: 'ParsePcvsXlxsResult';
  componentCodes: Array<Scalars['String']>;
  pcvData: Array<PcvDataFromXlsx>;
};

export type ParseStationsXlsxCommandResult = {
  __typename?: 'ParseStationsXlsxCommandResult';
  stations: Array<ParsedStation>;
};

export type ParsedStation = {
  __typename?: 'ParsedStation';
  code: Scalars['String'];
  componentCodes: Scalars['String'];
  exists: Scalars['Boolean'];
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};

export type Part = {
  __typename?: 'Part';
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  lotParts: Array<LotPart>;
  originalPartNo: Scalars['String'];
  partDesc: Scalars['String'];
  partNo: Scalars['String'];
  partType?: Maybe<PartType>;
  partTypeId?: Maybe<Scalars['UUID']>;
  removedAt?: Maybe<Scalars['DateTime']>;
  shipmentParts: Array<ShipmentPart>;
};

export type PartFilterInput = {
  and?: InputMaybe<Array<PartFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  lotParts?: InputMaybe<ListFilterInputTypeOfLotPartFilterInput>;
  or?: InputMaybe<Array<PartFilterInput>>;
  originalPartNo?: InputMaybe<StringOperationFilterInput>;
  partDesc?: InputMaybe<StringOperationFilterInput>;
  partNo?: InputMaybe<StringOperationFilterInput>;
  partType?: InputMaybe<PartTypeFilterInput>;
  partTypeId?: InputMaybe<UuidOperationFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  shipmentParts?: InputMaybe<ListFilterInputTypeOfShipmentPartFilterInput>;
};

export type PartLotPartsQueryInput = {
  partNo: Scalars['String'];
  plantCode: Scalars['String'];
};

export type PartLotPartsQueryResult = {
  __typename?: 'PartLotPartsQueryResult';
  items: Array<PartLotPartsQueryResultItem>;
  plantCode: Scalars['String'];
};

export type PartLotPartsQueryResultItem = {
  __typename?: 'PartLotPartsQueryResultItem';
  bomQuantity: Scalars['Int'];
  lotNo: Scalars['String'];
  model: Scalars['String'];
  shipQuantity: Scalars['Int'];
};

export type PartOverviewQueryInput = {
  partNo: Scalars['String'];
};

export type PartOverviewQueryResult = {
  __typename?: 'PartOverviewQueryResult';
  createdAt: Scalars['DateTime'];
  lotCount: Scalars['Int'];
  originalPartNo: Scalars['String'];
  partDesc: Scalars['String'];
  partNo: Scalars['String'];
  partType: Scalars['String'];
};

export type PartQuantityDto = {
  __typename?: 'PartQuantityDTO';
  partDesc: Scalars['String'];
  partNo: Scalars['String'];
  quantity: Scalars['Int'];
};

export type PartSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  originalPartNo?: InputMaybe<SortEnumType>;
  partDesc?: InputMaybe<SortEnumType>;
  partNo?: InputMaybe<SortEnumType>;
  partType?: InputMaybe<PartTypeSortInput>;
  partTypeId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

export type PartType = {
  __typename?: 'PartType';
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  isPhysicalPart: Scalars['Boolean'];
  name: Scalars['String'];
  parts: Array<Part>;
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type PartTypeFilterInput = {
  and?: InputMaybe<Array<PartTypeFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  isPhysicalPart?: InputMaybe<BooleanOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PartTypeFilterInput>>;
  parts?: InputMaybe<ListFilterInputTypeOfPartFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type PartTypeSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isPhysicalPart?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type PartTypesConnection = {
  __typename?: 'PartTypesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<PartTypesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<PartType>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PartTypesEdge = {
  __typename?: 'PartTypesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PartType;
};

export enum PartnerStatusCode {
  Fpbc = 'FPBC',
  Fpbp = 'FPBP',
  Fpbs = 'FPBS',
  Fpcr = 'FPCR',
  Fpgr = 'FPGR',
  Fpws = 'FPWS',
  Shpc = 'SHPC'
}

export type PartnerStatusCodeOperationFilterInput = {
  eq?: InputMaybe<PartnerStatusCode>;
  in?: InputMaybe<Array<PartnerStatusCode>>;
  neq?: InputMaybe<PartnerStatusCode>;
  nin?: InputMaybe<Array<PartnerStatusCode>>;
};

/** A connection to a list of items. */
export type PartsConnection = {
  __typename?: 'PartsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<PartsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Part>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
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
  component: Component;
  componentId: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  pcv: Pcv;
  pcvId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type PcvComponentFilterInput = {
  and?: InputMaybe<Array<PcvComponentFilterInput>>;
  component?: InputMaybe<ComponentFilterInput>;
  componentId?: InputMaybe<UuidOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<PcvComponentFilterInput>>;
  pcv?: InputMaybe<PcvFilterInput>;
  pcvId?: InputMaybe<UuidOperationFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type PcvComponentSortInput = {
  component?: InputMaybe<ComponentSortInput>;
  componentId?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  pcv?: InputMaybe<PcvSortInput>;
  pcvId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type PcvComponentsConnection = {
  __typename?: 'PcvComponentsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<PcvComponentsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<PcvComponent>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PcvComponentsEdge = {
  __typename?: 'PcvComponentsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PcvComponent;
};

export type PcvDataFromXlsx = {
  __typename?: 'PcvDataFromXlsx';
  componentCodes: Array<Scalars['String']>;
  drive: Scalars['String'];
  engine: Scalars['String'];
  exists: Scalars['Boolean'];
  model: Scalars['String'];
  modelYear: Scalars['String'];
  paint: Scalars['String'];
  pcv: Scalars['String'];
  plantCode: Scalars['String'];
  series: Scalars['String'];
  submodel: Scalars['String'];
  transmission: Scalars['String'];
  trim: Scalars['String'];
};

export type PcvDrive = ICategory & {
  __typename?: 'PcvDrive';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  pcvs: Array<Pcv>;
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type PcvDriveFilterInput = {
  and?: InputMaybe<Array<PcvDriveFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PcvDriveFilterInput>>;
  pcvs?: InputMaybe<ListFilterInputTypeOfPcvFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type PcvDriveSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type PcvDrivesConnection = {
  __typename?: 'PcvDrivesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<PcvDrivesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<PcvDrive>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
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
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  pcvs: Array<Pcv>;
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type PcvEngineFilterInput = {
  and?: InputMaybe<Array<PcvEngineFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PcvEngineFilterInput>>;
  pcvs?: InputMaybe<ListFilterInputTypeOfPcvFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type PcvEngineSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type PcvEnginesConnection = {
  __typename?: 'PcvEnginesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<PcvEnginesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<PcvEngine>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PcvEnginesEdge = {
  __typename?: 'PcvEnginesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PcvEngine;
};

export type PcvItem = {
  __typename?: 'PcvItem';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  drive?: Maybe<Scalars['String']>;
  engine?: Maybe<Scalars['String']>;
  lotCount: Scalars['Int'];
  model?: Maybe<Scalars['String']>;
  modelYear?: Maybe<Scalars['String']>;
  paint?: Maybe<Scalars['String']>;
  pcvCode: Scalars['String'];
  plantCode: Scalars['String'];
  series?: Maybe<Scalars['String']>;
  submodel?: Maybe<Scalars['String']>;
  transmission?: Maybe<Scalars['String']>;
  trim?: Maybe<Scalars['String']>;
};

export type PcvModel = ICategory & {
  __typename?: 'PcvModel';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  pcvs: Array<Pcv>;
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type PcvModelFilterInput = {
  and?: InputMaybe<Array<PcvModelFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PcvModelFilterInput>>;
  pcvs?: InputMaybe<ListFilterInputTypeOfPcvFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type PcvModelSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type PcvModelsConnection = {
  __typename?: 'PcvModelsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<PcvModelsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<PcvModel>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
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
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  pcvs: Array<Pcv>;
  removedAt?: Maybe<Scalars['DateTime']>;
};

/** A connection to a list of items. */
export type PcvPaintConnection = {
  __typename?: 'PcvPaintConnection';
  /** A list of edges. */
  edges?: Maybe<Array<PcvPaintEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<PcvPaint>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
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
  and?: InputMaybe<Array<PcvPaintFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PcvPaintFilterInput>>;
  pcvs?: InputMaybe<ListFilterInputTypeOfPcvFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type PcvPaintSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

export type PcvSeries = ICategory & {
  __typename?: 'PcvSeries';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  pcvs: Array<Pcv>;
  removedAt?: Maybe<Scalars['DateTime']>;
};

/** A connection to a list of items. */
export type PcvSeriesConnection = {
  __typename?: 'PcvSeriesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<PcvSeriesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<PcvSeries>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
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
  and?: InputMaybe<Array<PcvSeriesFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PcvSeriesFilterInput>>;
  pcvs?: InputMaybe<ListFilterInputTypeOfPcvFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type PcvSeriesSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

export type PcvSubmodel = ICategory & {
  __typename?: 'PcvSubmodel';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  pcvs: Array<Pcv>;
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type PcvSubmodelFilterInput = {
  and?: InputMaybe<Array<PcvSubmodelFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PcvSubmodelFilterInput>>;
  pcvs?: InputMaybe<ListFilterInputTypeOfPcvFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type PcvSubmodelSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type PcvSubmodelsConnection = {
  __typename?: 'PcvSubmodelsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<PcvSubmodelsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<PcvSubmodel>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
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
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  pcvs: Array<Pcv>;
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type PcvTransmissionFilterInput = {
  and?: InputMaybe<Array<PcvTransmissionFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PcvTransmissionFilterInput>>;
  pcvs?: InputMaybe<ListFilterInputTypeOfPcvFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type PcvTransmissionSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type PcvTransmissionsConnection = {
  __typename?: 'PcvTransmissionsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<PcvTransmissionsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<PcvTransmission>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
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
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  pcvs: Array<Pcv>;
  removedAt?: Maybe<Scalars['DateTime']>;
};

/** A connection to a list of items. */
export type PcvTrimConnection = {
  __typename?: 'PcvTrimConnection';
  /** A list of edges. */
  edges?: Maybe<Array<PcvTrimEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<PcvTrim>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
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
  and?: InputMaybe<Array<PcvTrimFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PcvTrimFilterInput>>;
  pcvs?: InputMaybe<ListFilterInputTypeOfPcvFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type PcvTrimSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type PcvsConnection = {
  __typename?: 'PcvsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<PcvsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Pcv>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
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
  boms: Array<Bom>;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  dealers: Array<Dealer>;
  id: Scalars['UUID'];
  kittingPlantCode: Scalars['String'];
  lots: Array<Lot>;
  name: Scalars['String'];
  pcVs: Array<Pcv>;
  removedAt?: Maybe<Scalars['DateTime']>;
  shipments: Array<Shipment>;
  stations: Array<Station>;
};

export type PlantFilterInput = {
  and?: InputMaybe<Array<PlantFilterInput>>;
  boms?: InputMaybe<ListFilterInputTypeOfBomFilterInput>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  dealers?: InputMaybe<ListFilterInputTypeOfDealerFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  kittingPlantCode?: InputMaybe<StringOperationFilterInput>;
  lots?: InputMaybe<ListFilterInputTypeOfLotFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PlantFilterInput>>;
  pcVs?: InputMaybe<ListFilterInputTypeOfPcvFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  shipments?: InputMaybe<ListFilterInputTypeOfShipmentFilterInput>;
  stations?: InputMaybe<ListFilterInputTypeOfStationFilterInput>;
};

export type PlantInput = {
  code: Scalars['String'];
  kittingPlantCode: Scalars['String'];
  name: Scalars['String'];
};

export type PlantOverviewDto = {
  __typename?: 'PlantOverviewDTO';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  name: Scalars['String'];
};

export type PlantSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  kittingPlantCode?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type PlantsConnection = {
  __typename?: 'PlantsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<PlantsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Plant>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PlantsEdge = {
  __typename?: 'PlantsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Plant;
};

export type PvinFeedLayoutData = {
  __typename?: 'PvinFeedLayoutData';
  buildDate: Scalars['String'];
  kdPlantGsdb: Scalars['String'];
  kitNumber: Scalars['String'];
  lotNumber: Scalars['String'];
  partnerGsdb: Scalars['String'];
  physicalVin?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  appSettings?: Maybe<AppSettingsConnection>;
  basicKitInfo?: Maybe<BasicKitInfo>;
  bomById?: Maybe<Bom>;
  bomList?: Maybe<BomListConnection>;
  bomOverview: BomOverviewQueryResult;
  bomPartsQuantity: Array<PartQuantityDto>;
  boms?: Maybe<BomsConnection>;
  /**
   * Gets kits where status is BUILD_START status should be created
   * Current status is PLAN_BUILD and has component serial input
   */
  buildStartPendingKits: Array<KitInfoDto>;
  componentById?: Maybe<Component>;
  componentSerials?: Maybe<ComponentSerialsConnection>;
  componentStations?: Maybe<ComponentStationsConnection>;
  components?: Maybe<ComponentsConnection>;
  dcwsResponses?: Maybe<DcwsResponsesConnection>;
  dcwsServiceVersion: Scalars['String'];
  dealers?: Maybe<DealersConnection>;
  fordInterfaceFileType: FordInterfaceFileType;
  handlingUnitInfo?: Maybe<HandlingUnitInfoPayload>;
  handlingUnitOverviews: Array<HandlingUnitOverview>;
  handlingUnitReceived?: Maybe<HandlingUnitReceivedConnection>;
  handlingUnits?: Maybe<HandlingUnitsConnection>;
  info: Scalars['String'];
  kitById?: Maybe<Kit>;
  kitByKitNo?: Maybe<Kit>;
  kitComponentSerialInfo?: Maybe<KitComponentSerialInfo>;
  kitComponents?: Maybe<KitComponentsConnection>;
  kitCurrentStatus: KitInfoDto;
  kitList?: Maybe<KitListConnection>;
  kitOverview?: Maybe<KitOverviewQueryResult>;
  kitStatus?: Maybe<KitStatusDto>;
  kitStatusEventTypes?: Maybe<KitStatusEventTypesConnection>;
  kitStatusEvents?: Maybe<KitStatusEventsConnection>;
  kitStatusEventsByDate: Array<KitStatusEvent>;
  kitVins?: Maybe<KitVinsConnection>;
  kits?: Maybe<KitsConnection>;
  kitsByCurrentKitStatus?: Maybe<KitsByCurrentKitStatusConnection>;
  kitsByKitStatusCount: Array<ItemCountDto>;
  kitsByLot: Array<Kit>;
  lotByLotNo?: Maybe<Lot>;
  lotInfo?: Maybe<LotDto>;
  /** Get list of kits for a given lot number */
  lotKits: LotKitsQueryResult;
  lotListByBomId: Array<LotListDto>;
  lotOverview?: Maybe<LotOverviewDto>;
  /** Get the lot overview for a given lot number */
  lotOverview2: ResultOrOfLotOverviewQueryResult;
  /** Get the difference in lot parts between the current lot and the prior lot if it exists */
  lotPartDiff: ResultOrOfLotPartDiffQueryResult;
  lotPartInfo?: Maybe<LotPartDto>;
  lotParts?: Maybe<LotPartsConnection>;
  lotParts2: LotPartsQueryResult;
  lotPartsByShipOrBom: ResultOrOfLotPartsByShipOrBomQueryResult;
  lotPartsReceived?: Maybe<LotPartsReceivedConnection>;
  lots?: Maybe<LotsConnection>;
  lotsByKitStatus: Array<LotsByKitStatusQueryResult>;
  partLotParts: ResultOrOfPartLotPartsQueryResult;
  partOverview: ResultOrOfPartOverviewQueryResult;
  partTypes?: Maybe<PartTypesConnection>;
  /** Get kit current status from Kit Status Feed api */
  partnerKitCurrentStatus: KitCurrentStatusResponse;
  partnerKitPhysicalVin: PvinFeedLayoutData;
  /** Get kits that have kit status event entries that have not been synced to partner status */
  partnerStatusUpdatePendingKits: Array<KitInfoDto>;
  parts?: Maybe<PartsConnection>;
  pcvComponents?: Maybe<PcvComponentsConnection>;
  pcvDrives?: Maybe<PcvDrivesConnection>;
  pcvEngines?: Maybe<PcvEnginesConnection>;
  pcvModels?: Maybe<PcvModelsConnection>;
  pcvPaint?: Maybe<PcvPaintConnection>;
  pcvSeries?: Maybe<PcvSeriesConnection>;
  pcvSubmodels?: Maybe<PcvSubmodelsConnection>;
  pcvTransmissions?: Maybe<PcvTransmissionsConnection>;
  pcvTrim?: Maybe<PcvTrimConnection>;
  pcvs?: Maybe<PcvsConnection>;
  pcvsByPlant: GetPcvsByPlantQueryResult;
  pingDcwsService: Scalars['Boolean'];
  planBuildVinPendingKits: Array<KitInfoDto>;
  plants?: Maybe<PlantsConnection>;
  recentLotPartsReceived: Array<LotPartReceivedDto>;
  serverConfigSettings: AppSettings;
  shipmentInvoices?: Maybe<ShipmentInvoicesConnection>;
  shipmentLots?: Maybe<ShipmentLotsConnection>;
  shipmentOverview?: Maybe<ShipmentOverviewDto>;
  shipmentParts?: Maybe<ShipmentPartsConnection>;
  shipments?: Maybe<ShipmentsConnection>;
  stations?: Maybe<StationsConnection>;
  /** @deprecated no longer used */
  vehicleComponentByVinAndComponent?: Maybe<KitComponent>;
  vinAllocation: VinAllocationQueryResult;
};


export type QueryAppSettingsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<AppSettingSortInput>>;
  where?: InputMaybe<AppSettingFilterInput>;
};


export type QueryBasicKitInfoArgs = {
  vin: Scalars['String'];
};


export type QueryBomByIdArgs = {
  id: Scalars['UUID'];
};


export type QueryBomListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<BomListDtoSortInput>>;
  plantCode: Scalars['String'];
};


export type QueryBomOverviewArgs = {
  input: BomOverviewQueryInput;
};


export type QueryBomPartsQuantityArgs = {
  id: Scalars['UUID'];
};


export type QueryBomsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<BomSortInput>>;
  where?: InputMaybe<BomFilterInput>;
};


export type QueryBuildStartPendingKitsArgs = {
  plantCode: Scalars['String'];
};


export type QueryComponentByIdArgs = {
  id: Scalars['UUID'];
};


export type QueryComponentSerialsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<ComponentSerialSortInput>>;
  where?: InputMaybe<ComponentSerialFilterInput>;
};


export type QueryComponentStationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<ComponentStationSortInput>>;
  where?: InputMaybe<ComponentStationFilterInput>;
};


export type QueryComponentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<ComponentSortInput>>;
  where?: InputMaybe<ComponentFilterInput>;
};


export type QueryDcwsResponsesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<DcwsResponseSortInput>>;
  where?: InputMaybe<DcwsResponseFilterInput>;
};


export type QueryDealersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<DealerSortInput>>;
  where?: InputMaybe<DealerFilterInput>;
};


export type QueryFordInterfaceFileTypeArgs = {
  filename: Scalars['String'];
};


export type QueryHandlingUnitInfoArgs = {
  huCode: Scalars['String'];
};


export type QueryHandlingUnitOverviewsArgs = {
  shipmentId: Scalars['UUID'];
};


export type QueryHandlingUnitReceivedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<HandlingUnitReceivedSortInput>>;
  where?: InputMaybe<HandlingUnitReceivedFilterInput>;
};


export type QueryHandlingUnitsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<HandlingUnitSortInput>>;
  where?: InputMaybe<HandlingUnitFilterInput>;
};


export type QueryKitByIdArgs = {
  id: Scalars['UUID'];
};


export type QueryKitByKitNoArgs = {
  kitNo: Scalars['String'];
};


export type QueryKitComponentSerialInfoArgs = {
  componentCode: Scalars['String'];
  kitNo: Scalars['String'];
};


export type QueryKitComponentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<KitComponentSortInput>>;
  where?: InputMaybe<KitComponentFilterInput>;
};


export type QueryKitCurrentStatusArgs = {
  kitNo: Scalars['String'];
};


export type QueryKitListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<KitListItemDtoSortInput>>;
  plantCode: Scalars['String'];
};


export type QueryKitOverviewArgs = {
  input: KitOverviewQueryInput;
};


export type QueryKitStatusArgs = {
  kitNo: Scalars['String'];
};


export type QueryKitStatusEventTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<KitStatusEventTypeSortInput>>;
  where?: InputMaybe<KitStatusEventTypeFilterInput>;
};


export type QueryKitStatusEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<KitStatusEventSortInput>>;
  where?: InputMaybe<KitStatusEventFilterInput>;
};


export type QueryKitStatusEventsByDateArgs = {
  fromDate: Scalars['DateTime'];
  kitStatusCode?: InputMaybe<KitStatusCode>;
  plantCode: Scalars['String'];
  toDate: Scalars['DateTime'];
};


export type QueryKitVinsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<KitVinSortInput>>;
  where?: InputMaybe<KitVinFilterInput>;
};


export type QueryKitsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<KitSortInput>>;
  where?: InputMaybe<KitFilterInput>;
};


export type QueryKitsByCurrentKitStatusArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  eventCode?: InputMaybe<KitStatusCode>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<KitSortInput>>;
  plantCode: Scalars['String'];
  where?: InputMaybe<KitFilterInput>;
};


export type QueryKitsByKitStatusCountArgs = {
  plantCode: Scalars['String'];
};


export type QueryKitsByLotArgs = {
  lotNo: Scalars['String'];
};


export type QueryLotByLotNoArgs = {
  lotNo: Scalars['String'];
};


export type QueryLotInfoArgs = {
  lotNo: Scalars['String'];
};


export type QueryLotKitsArgs = {
  input: LotKitsQueryInput;
};


export type QueryLotListByBomIdArgs = {
  id: Scalars['UUID'];
};


export type QueryLotOverviewArgs = {
  lotNo: Scalars['String'];
};


export type QueryLotOverview2Args = {
  input: LotOverviewQueryInput;
};


export type QueryLotPartDiffArgs = {
  input: LotPartDiffQueryInput;
};


export type QueryLotPartInfoArgs = {
  lotNo: Scalars['String'];
  partNo: Scalars['String'];
};


export type QueryLotPartsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<LotPartSortInput>>;
  where?: InputMaybe<LotPartFilterInput>;
};


export type QueryLotParts2Args = {
  input: LotPartsQueryInput;
};


export type QueryLotPartsByShipOrBomArgs = {
  input: LotPartsByShipmentQueryInput;
};


export type QueryLotPartsReceivedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<LotPartReceivedSortInput>>;
  where?: InputMaybe<LotPartReceivedFilterInput>;
};


export type QueryLotsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<LotSortInput>>;
  where?: InputMaybe<LotFilterInput>;
};


export type QueryLotsByKitStatusArgs = {
  input: LotsByKitStatusQueryInput;
};


export type QueryPartLotPartsArgs = {
  input: PartLotPartsQueryInput;
};


export type QueryPartOverviewArgs = {
  input: PartOverviewQueryInput;
};


export type QueryPartTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<PartTypeSortInput>>;
  where?: InputMaybe<PartTypeFilterInput>;
};


export type QueryPartnerKitCurrentStatusArgs = {
  kitNo: Scalars['String'];
};


export type QueryPartnerKitPhysicalVinArgs = {
  kitNo: Scalars['String'];
};


export type QueryPartnerStatusUpdatePendingKitsArgs = {
  plantCode: Scalars['String'];
};


export type QueryPartsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<PartSortInput>>;
  where?: InputMaybe<PartFilterInput>;
};


export type QueryPcvComponentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<PcvComponentSortInput>>;
  where?: InputMaybe<PcvComponentFilterInput>;
};


export type QueryPcvDrivesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<PcvDriveSortInput>>;
  where?: InputMaybe<PcvDriveFilterInput>;
};


export type QueryPcvEnginesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<PcvEngineSortInput>>;
  where?: InputMaybe<PcvEngineFilterInput>;
};


export type QueryPcvModelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<PcvModelSortInput>>;
  where?: InputMaybe<PcvModelFilterInput>;
};


export type QueryPcvPaintArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<PcvPaintSortInput>>;
  where?: InputMaybe<PcvPaintFilterInput>;
};


export type QueryPcvSeriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<PcvSeriesSortInput>>;
  where?: InputMaybe<PcvSeriesFilterInput>;
};


export type QueryPcvSubmodelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<PcvSubmodelSortInput>>;
  where?: InputMaybe<PcvSubmodelFilterInput>;
};


export type QueryPcvTransmissionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<PcvTransmissionSortInput>>;
  where?: InputMaybe<PcvTransmissionFilterInput>;
};


export type QueryPcvTrimArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<PcvTrimSortInput>>;
  where?: InputMaybe<PcvTrimFilterInput>;
};


export type QueryPcvsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<PcvSortInput>>;
  where?: InputMaybe<PcvFilterInput>;
};


export type QueryPcvsByPlantArgs = {
  input: GetPcvsByPlantQueryInput;
};


export type QueryPlanBuildVinPendingKitsArgs = {
  plantCode: Scalars['String'];
};


export type QueryPlantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<PlantSortInput>>;
  where?: InputMaybe<PlantFilterInput>;
};


export type QueryRecentLotPartsReceivedArgs = {
  count?: Scalars['Int'];
};


export type QueryShipmentInvoicesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<ShipmentInvoiceSortInput>>;
  where?: InputMaybe<ShipmentInvoiceFilterInput>;
};


export type QueryShipmentLotsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<ShipmentLotSortInput>>;
  where?: InputMaybe<ShipmentLotFilterInput>;
};


export type QueryShipmentOverviewArgs = {
  shipmentId: Scalars['UUID'];
};


export type QueryShipmentPartsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<ShipmentPartSortInput>>;
  where?: InputMaybe<ShipmentPartFilterInput>;
};


export type QueryShipmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<ShipmentSortInput>>;
  where?: InputMaybe<ShipmentFilterInput>;
};


export type QueryStationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<StationSortInput>>;
  where?: InputMaybe<StationFilterInput>;
};


export type QueryVehicleComponentByVinAndComponentArgs = {
  componentCode: Scalars['String'];
  vin: Scalars['String'];
};


export type QueryVinAllocationArgs = {
  input: VinAllocationQueryInput;
};

export type ReceiveHandlingUnitInput = {
  handlingUnitCode: Scalars['String'];
  remove?: Scalars['Boolean'];
};

export type ReceiveHandlingUnitPayload = {
  __typename?: 'ReceiveHandlingUnitPayload';
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  invoiceNo?: Maybe<Scalars['String']>;
  lotNo?: Maybe<Scalars['String']>;
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type ReceiveLotPartInput = {
  lotNo: Scalars['String'];
  partNo: Scalars['String'];
  quantity: Scalars['Int'];
};

export type RemoveAllComponentStationMappingsPayload = {
  __typename?: 'RemoveAllComponentStationMappingsPayload';
  removedCount: Scalars['Int'];
};

export type ResultOrOfComponentSerialDto = {
  __typename?: 'ResultOrOfComponentSerialDTO';
  errors: Array<Error>;
  isFailure: Scalars['Boolean'];
  isSuccess: Scalars['Boolean'];
  payload?: Maybe<ComponentSerialDto>;
};

export type ResultOrOfDcwsResponse = {
  __typename?: 'ResultOrOfDcwsResponse';
  errors: Array<Error>;
  isFailure: Scalars['Boolean'];
  isSuccess: Scalars['Boolean'];
  payload?: Maybe<DcwsResponse>;
};

export type ResultOrOfImportBomResult = {
  __typename?: 'ResultOrOfImportBomResult';
  errors: Array<Error>;
  isFailure: Scalars['Boolean'];
  isSuccess: Scalars['Boolean'];
  payload?: Maybe<ImportBomResult>;
};

export type ResultOrOfImportShipmentResult = {
  __typename?: 'ResultOrOfImportShipmentResult';
  errors: Array<Error>;
  isFailure: Scalars['Boolean'];
  isSuccess: Scalars['Boolean'];
  payload?: Maybe<ImportShipmentResult>;
};

export type ResultOrOfKit = {
  __typename?: 'ResultOrOfKit';
  errors: Array<Error>;
  isFailure: Scalars['Boolean'];
  isSuccess: Scalars['Boolean'];
  payload?: Maybe<Kit>;
};

export type ResultOrOfKitStatusEvent = {
  __typename?: 'ResultOrOfKitStatusEvent';
  errors: Array<Error>;
  isFailure: Scalars['Boolean'];
  isSuccess: Scalars['Boolean'];
  payload?: Maybe<KitStatusEvent>;
};

export type ResultOrOfLot = {
  __typename?: 'ResultOrOfLot';
  errors: Array<Error>;
  isFailure: Scalars['Boolean'];
  isSuccess: Scalars['Boolean'];
  payload?: Maybe<Lot>;
};

export type ResultOrOfLotOverviewQueryResult = {
  __typename?: 'ResultOrOfLotOverviewQueryResult';
  errors: Array<Error>;
  isFailure: Scalars['Boolean'];
  isSuccess: Scalars['Boolean'];
  payload?: Maybe<LotOverviewQueryResult>;
};

export type ResultOrOfLotPartDto = {
  __typename?: 'ResultOrOfLotPartDTO';
  errors: Array<Error>;
  isFailure: Scalars['Boolean'];
  isSuccess: Scalars['Boolean'];
  payload?: Maybe<LotPartDto>;
};

export type ResultOrOfLotPartDiffQueryResult = {
  __typename?: 'ResultOrOfLotPartDiffQueryResult';
  errors: Array<Error>;
  isFailure: Scalars['Boolean'];
  isSuccess: Scalars['Boolean'];
  payload?: Maybe<LotPartDiffQueryResult>;
};

export type ResultOrOfLotPartsByShipOrBomQueryResult = {
  __typename?: 'ResultOrOfLotPartsByShipOrBomQueryResult';
  errors: Array<Error>;
  isFailure: Scalars['Boolean'];
  isSuccess: Scalars['Boolean'];
  payload?: Maybe<LotPartsByShipOrBomQueryResult>;
};

export type ResultOrOfParsePcvsXlxsResult = {
  __typename?: 'ResultOrOfParsePcvsXlxsResult';
  errors: Array<Error>;
  isFailure: Scalars['Boolean'];
  isSuccess: Scalars['Boolean'];
  payload?: Maybe<ParsePcvsXlxsResult>;
};

export type ResultOrOfParseStationsXlsxCommandResult = {
  __typename?: 'ResultOrOfParseStationsXlsxCommandResult';
  errors: Array<Error>;
  isFailure: Scalars['Boolean'];
  isSuccess: Scalars['Boolean'];
  payload?: Maybe<ParseStationsXlsxCommandResult>;
};

export type ResultOrOfPartLotPartsQueryResult = {
  __typename?: 'ResultOrOfPartLotPartsQueryResult';
  errors: Array<Error>;
  isFailure: Scalars['Boolean'];
  isSuccess: Scalars['Boolean'];
  payload?: Maybe<PartLotPartsQueryResult>;
};

export type ResultOrOfPartOverviewQueryResult = {
  __typename?: 'ResultOrOfPartOverviewQueryResult';
  errors: Array<Error>;
  isFailure: Scalars['Boolean'];
  isSuccess: Scalars['Boolean'];
  payload?: Maybe<PartOverviewQueryResult>;
};

export type ResultOrOfPlantOverviewDto = {
  __typename?: 'ResultOrOfPlantOverviewDTO';
  errors: Array<Error>;
  isFailure: Scalars['Boolean'];
  isSuccess: Scalars['Boolean'];
  payload?: Maybe<PlantOverviewDto>;
};

export type ResultOrOfReceiveHandlingUnitPayload = {
  __typename?: 'ResultOrOfReceiveHandlingUnitPayload';
  errors: Array<Error>;
  isFailure: Scalars['Boolean'];
  isSuccess: Scalars['Boolean'];
  payload?: Maybe<ReceiveHandlingUnitPayload>;
};

export type ResultOrOfRemoveAllComponentStationMappingsPayload = {
  __typename?: 'ResultOrOfRemoveAllComponentStationMappingsPayload';
  errors: Array<Error>;
  isFailure: Scalars['Boolean'];
  isSuccess: Scalars['Boolean'];
  payload?: Maybe<RemoveAllComponentStationMappingsPayload>;
};

export type ResultOrOfSavePcvResult = {
  __typename?: 'ResultOrOfSavePcvResult';
  errors: Array<Error>;
  isFailure: Scalars['Boolean'];
  isSuccess: Scalars['Boolean'];
  payload?: Maybe<SavePcvResult>;
};

export type ResultOrOfSaveStationCommandResult = {
  __typename?: 'ResultOrOfSaveStationCommandResult';
  errors: Array<Error>;
  isFailure: Scalars['Boolean'];
  isSuccess: Scalars['Boolean'];
  payload?: Maybe<SaveStationCommandResult>;
};

export type ResultOrOfSetComponentStationMappingsPayload = {
  __typename?: 'ResultOrOfSetComponentStationMappingsPayload';
  errors: Array<Error>;
  isFailure: Scalars['Boolean'];
  isSuccess: Scalars['Boolean'];
  payload?: Maybe<SetComponentStationMappingsPayload>;
};

export type ResultOrOfSetPartTypeResult = {
  __typename?: 'ResultOrOfSetPartTypeResult';
  errors: Array<Error>;
  isFailure: Scalars['Boolean'];
  isSuccess: Scalars['Boolean'];
  payload?: Maybe<SetPartTypeResult>;
};

export type ResultOrOfSyncKitComponentsResult = {
  __typename?: 'ResultOrOfSyncKitComponentsResult';
  errors: Array<Error>;
  isFailure: Scalars['Boolean'];
  isSuccess: Scalars['Boolean'];
  payload?: Maybe<SyncKitComponentsResult>;
};

export type ResultOrOfUpdateKitVinPayload = {
  __typename?: 'ResultOrOfUpdateKitVinPayload';
  errors: Array<Error>;
  isFailure: Scalars['Boolean'];
  isSuccess: Scalars['Boolean'];
  payload?: Maybe<UpdateKitVinPayload>;
};

export type ResultOrOfUpdatePartnerStatusPayload = {
  __typename?: 'ResultOrOfUpdatePartnerStatusPayload';
  errors: Array<Error>;
  isFailure: Scalars['Boolean'];
  isSuccess: Scalars['Boolean'];
  payload?: Maybe<UpdatePartnerStatusPayload>;
};

export type SavePcvInput = {
  componentCodes: Array<Scalars['String']>;
  modelYear: Scalars['String'];
  pcvCode: Scalars['String'];
  pcvDrive: Scalars['String'];
  pcvEngine: Scalars['String'];
  pcvModel: Scalars['String'];
  pcvPaint: Scalars['String'];
  pcvSeries: Scalars['String'];
  pcvSubmodel: Scalars['String'];
  pcvTransmission: Scalars['String'];
  pcvTrim: Scalars['String'];
  plantCode: Scalars['String'];
};

export type SavePcvResult = {
  __typename?: 'SavePcvResult';
  id: Scalars['UUID'];
  modelYear: Scalars['String'];
  pcvCode: Scalars['String'];
  pcvComponentCodes: Array<Scalars['String']>;
  pcvDrive?: Maybe<ICategory>;
  pcvEngine?: Maybe<ICategory>;
  pcvModel?: Maybe<ICategory>;
  pcvPaint?: Maybe<ICategory>;
  pcvSeries?: Maybe<ICategory>;
  pcvSubmodel?: Maybe<ICategory>;
  pcvTransmission?: Maybe<ICategory>;
  pcvTrim?: Maybe<ICategory>;
  plantCode: Scalars['String'];
};

export type SaveStationCommandInput = {
  code: Scalars['String'];
  componentCodes: Array<Scalars['String']>;
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};

export type SaveStationCommandResult = {
  __typename?: 'SaveStationCommandResult';
  code: Scalars['String'];
  componentCodes: Array<Scalars['String']>;
  id: Scalars['UUID'];
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};

export type SetComponentStationMappingsPayload = {
  __typename?: 'SetComponentStationMappingsPayload';
  mappings: Array<ComponentStationMapping>;
};

export type SetPartTypeCommandInput = {
  partDescription: Scalars['String'];
  partNo: Scalars['String'];
  partType: Scalars['String'];
};

export type SetPartTypeResult = {
  __typename?: 'SetPartTypeResult';
  partDescription: Scalars['String'];
  partId: Scalars['UUID'];
  partNo: Scalars['String'];
  partType: Scalars['String'];
};

export type ShipFile = {
  __typename?: 'ShipFile';
  created: Scalars['DateTime'];
  filename: Scalars['String'];
  lots: Array<ShipFileLot>;
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};

export type ShipFileInvoice = {
  __typename?: 'ShipFileInvoice';
  invoiceNo: Scalars['String'];
  parts: Array<ShipFilePart>;
  shipDate: Scalars['DateTime'];
};

export type ShipFileLot = {
  __typename?: 'ShipFileLot';
  invoices: Array<ShipFileInvoice>;
  lotNo: Scalars['String'];
};

export type ShipFilePart = {
  __typename?: 'ShipFilePart';
  customerPartDesc: Scalars['String'];
  customerPartNo: Scalars['String'];
  handlingUnitCode: Scalars['String'];
  originalPartNo: Scalars['String'];
  partNo: Scalars['String'];
  quantity: Scalars['Int'];
};

export type Shipment = {
  __typename?: 'Shipment';
  createdAt: Scalars['DateTime'];
  filename?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  plant: Plant;
  plantId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  sequence: Scalars['Int'];
  shipmentLots: Array<ShipmentLot>;
};

export type ShipmentFilterInput = {
  and?: InputMaybe<Array<ShipmentFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  filename?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<ShipmentFilterInput>>;
  plant?: InputMaybe<PlantFilterInput>;
  plantId?: InputMaybe<UuidOperationFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  sequence?: InputMaybe<IntOperationFilterInput>;
  shipmentLots?: InputMaybe<ListFilterInputTypeOfShipmentLotFilterInput>;
};

export type ShipmentInvoice = {
  __typename?: 'ShipmentInvoice';
  createdAt: Scalars['DateTime'];
  handlingUnits: Array<HandlingUnit>;
  id: Scalars['UUID'];
  invoiceNo: Scalars['String'];
  removedAt?: Maybe<Scalars['DateTime']>;
  shipDate: Scalars['DateTime'];
  shipmentLot: ShipmentLot;
  shipmentLotId: Scalars['UUID'];
};

export type ShipmentInvoiceFilterInput = {
  and?: InputMaybe<Array<ShipmentInvoiceFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  handlingUnits?: InputMaybe<ListFilterInputTypeOfHandlingUnitFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  invoiceNo?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ShipmentInvoiceFilterInput>>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  shipDate?: InputMaybe<DateTimeOperationFilterInput>;
  shipmentLot?: InputMaybe<ShipmentLotFilterInput>;
  shipmentLotId?: InputMaybe<UuidOperationFilterInput>;
};

export type ShipmentInvoiceSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  invoiceNo?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  shipDate?: InputMaybe<SortEnumType>;
  shipmentLot?: InputMaybe<ShipmentLotSortInput>;
  shipmentLotId?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type ShipmentInvoicesConnection = {
  __typename?: 'ShipmentInvoicesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ShipmentInvoicesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ShipmentInvoice>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ShipmentInvoicesEdge = {
  __typename?: 'ShipmentInvoicesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ShipmentInvoice;
};

export type ShipmentLot = {
  __typename?: 'ShipmentLot';
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  invoices: Array<ShipmentInvoice>;
  lot: Lot;
  lotId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  shipment: Shipment;
  shipmentId: Scalars['UUID'];
};

export type ShipmentLotFilterInput = {
  and?: InputMaybe<Array<ShipmentLotFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  invoices?: InputMaybe<ListFilterInputTypeOfShipmentInvoiceFilterInput>;
  lot?: InputMaybe<LotFilterInput>;
  lotId?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<ShipmentLotFilterInput>>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  shipment?: InputMaybe<ShipmentFilterInput>;
  shipmentId?: InputMaybe<UuidOperationFilterInput>;
};

export type ShipmentLotSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  lot?: InputMaybe<LotSortInput>;
  lotId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  shipment?: InputMaybe<ShipmentSortInput>;
  shipmentId?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type ShipmentLotsConnection = {
  __typename?: 'ShipmentLotsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ShipmentLotsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ShipmentLot>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ShipmentLotsEdge = {
  __typename?: 'ShipmentLotsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ShipmentLot;
};

export type ShipmentOverviewDto = {
  __typename?: 'ShipmentOverviewDTO';
  bomId?: Maybe<Scalars['UUID']>;
  bomSequence?: Maybe<Scalars['Int']>;
  bomShipDiffCount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  handlingUnitCount: Scalars['Int'];
  handlingUnitReceivedCount: Scalars['Int'];
  id: Scalars['UUID'];
  invoiceCount: Scalars['Int'];
  lotCount: Scalars['Int'];
  lotNumbers: Array<Scalars['String']>;
  lotPartCount: Scalars['Int'];
  lotPartReceiveBomDiffCount: Scalars['Int'];
  lotPartReceivedCount: Scalars['Int'];
  partCount: Scalars['Int'];
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};

export type ShipmentPart = {
  __typename?: 'ShipmentPart';
  createdAt: Scalars['DateTime'];
  handlingUnit: HandlingUnit;
  handlingUnitId?: Maybe<Scalars['UUID']>;
  id: Scalars['UUID'];
  part: Part;
  partId: Scalars['UUID'];
  quantity: Scalars['Int'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type ShipmentPartFilterInput = {
  and?: InputMaybe<Array<ShipmentPartFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  handlingUnit?: InputMaybe<HandlingUnitFilterInput>;
  handlingUnitId?: InputMaybe<UuidOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<ShipmentPartFilterInput>>;
  part?: InputMaybe<PartFilterInput>;
  partId?: InputMaybe<UuidOperationFilterInput>;
  quantity?: InputMaybe<IntOperationFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type ShipmentPartSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  handlingUnit?: InputMaybe<HandlingUnitSortInput>;
  handlingUnitId?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  part?: InputMaybe<PartSortInput>;
  partId?: InputMaybe<SortEnumType>;
  quantity?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type ShipmentPartsConnection = {
  __typename?: 'ShipmentPartsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ShipmentPartsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ShipmentPart>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
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
  createdAt?: InputMaybe<SortEnumType>;
  filename?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  plant?: InputMaybe<PlantSortInput>;
  plantId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  sequence?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type ShipmentsConnection = {
  __typename?: 'ShipmentsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ShipmentsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Shipment>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ShipmentsEdge = {
  __typename?: 'ShipmentsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Shipment;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StatcionSerialInfo = {
  __typename?: 'StatcionSerialInfo';
  createdAt?: Maybe<Scalars['DateTime']>;
  kitComponentId: Scalars['UUID'];
  serial1?: Maybe<Scalars['String']>;
  serial2?: Maybe<Scalars['String']>;
  stationCode: Scalars['String'];
  stationName: Scalars['String'];
  stationSequence: Scalars['Int'];
  verifiedAt?: Maybe<Scalars['DateTime']>;
};

export type Station = {
  __typename?: 'Station';
  code: Scalars['String'];
  components: Array<ComponentStation>;
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  kitComponents: Array<KitComponent>;
  name: Scalars['String'];
  plant: Plant;
  plantId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  sequence: Scalars['Int'];
};

export type StationFilterInput = {
  and?: InputMaybe<Array<StationFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  components?: InputMaybe<ListFilterInputTypeOfComponentStationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  kitComponents?: InputMaybe<ListFilterInputTypeOfKitComponentFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<StationFilterInput>>;
  plant?: InputMaybe<PlantFilterInput>;
  plantId?: InputMaybe<UuidOperationFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  sequence?: InputMaybe<IntOperationFilterInput>;
};

export type StationSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  plant?: InputMaybe<PlantSortInput>;
  plantId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  sequence?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type StationsConnection = {
  __typename?: 'StationsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<StationsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Station>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type StationsEdge = {
  __typename?: 'StationsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Station;
};

export type StatusEventDto = {
  __typename?: 'StatusEventDTO';
  createdAt?: Maybe<Scalars['DateTime']>;
  eventDate?: Maybe<Scalars['DateTime']>;
  eventNote?: Maybe<Scalars['String']>;
  eventType: KitStatusCode;
  partnerStatusUpdatedAt?: Maybe<Scalars['DateTime']>;
  removedAt?: Maybe<Scalars['DateTime']>;
  sequence: Scalars['Int'];
};

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ncontains?: InputMaybe<Scalars['String']>;
  nendsWith?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nstartsWith?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type SyncKitComponentsResult = {
  __typename?: 'SyncKitComponentsResult';
  kits: Array<SyncKitComponentsResultItem>;
};

export type SyncKitComponentsResultItem = {
  __typename?: 'SyncKitComponentsResultItem';
  kitNo: Scalars['String'];
};

export type UpdateKitVinInput = {
  kitNo: Scalars['String'];
};

export type UpdateKitVinPayload = {
  __typename?: 'UpdateKitVinPayload';
  kitNo: Scalars['String'];
  vin?: Maybe<Scalars['String']>;
};

export type UpdatePartnerStatusInput = {
  kitNo: Scalars['String'];
};

export type UpdatePartnerStatusPayload = {
  __typename?: 'UpdatePartnerStatusPayload';
  kitNo: Scalars['String'];
  message: Scalars['String'];
  updatedStatuses: Array<PartnerStatusCode>;
};

export type UuidOperationFilterInput = {
  eq?: InputMaybe<Scalars['UUID']>;
  gt?: InputMaybe<Scalars['UUID']>;
  gte?: InputMaybe<Scalars['UUID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  lt?: InputMaybe<Scalars['UUID']>;
  lte?: InputMaybe<Scalars['UUID']>;
  neq?: InputMaybe<Scalars['UUID']>;
  ngt?: InputMaybe<Scalars['UUID']>;
  ngte?: InputMaybe<Scalars['UUID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  nlt?: InputMaybe<Scalars['UUID']>;
  nlte?: InputMaybe<Scalars['UUID']>;
};

export type VinAllocationQueryInput = {
  lotNo: Scalars['String'];
};

export type VinAllocationQueryResult = {
  __typename?: 'VinAllocationQueryResult';
  items: Array<VinAllocationQueryResultItem>;
};

export type VinAllocationQueryResultItem = {
  __typename?: 'VinAllocationQueryResultItem';
  drive?: Maybe<Scalars['String']>;
  engine?: Maybe<Scalars['String']>;
  handlingUnitCount: Scalars['Int'];
  kitNo: Scalars['String'];
  lotNo: Scalars['String'];
  model: Scalars['String'];
  modelYear: Scalars['String'];
  paint?: Maybe<Scalars['String']>;
  pcvCode: Scalars['String'];
  plabBuildDate?: Maybe<Scalars['DateTime']>;
  plantCode: Scalars['String'];
  series?: Maybe<Scalars['String']>;
  shipmentSequence: Scalars['Int'];
  subModel?: Maybe<Scalars['String']>;
  transmission?: Maybe<Scalars['String']>;
  trim?: Maybe<Scalars['String']>;
  vin: Scalars['String'];
};

export type ImoprtBomMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type ImoprtBomMutation = { __typename?: 'Mutation', importBOM: { __typename?: 'ResultOrOfImportBomResult', payload?: { __typename?: 'ImportBomResult', items: Array<{ __typename?: 'ImportBomResultItem', bomId: any, plantCode: string, sequence: number }> } | null, errors: Array<{ __typename?: 'Error', description: string }> } };

export type ImportBomFileTextMutationVariables = Exact<{
  filename: Scalars['String'];
  text: Scalars['String'];
}>;


export type ImportBomFileTextMutation = { __typename?: 'Mutation', importBOMFileText: { __typename?: 'ResultOrOfImportBomResult', payload?: { __typename?: 'ImportBomResult', items: Array<{ __typename?: 'ImportBomResultItem', bomId: any, plantCode: string, sequence: number }> } | null, errors: Array<{ __typename?: 'Error', description: string }> } };

export type ImportShipmentMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type ImportShipmentMutation = { __typename?: 'Mutation', importShipment: { __typename?: 'ResultOrOfImportShipmentResult', payload?: { __typename?: 'ImportShipmentResult', shipmentId: any, plantCode: string, sequence: number, lotCount: number } | null, errors: Array<{ __typename?: 'Error', code: string, description: string }> } };

export type ImportShipmentFileTextMutationVariables = Exact<{
  filename: Scalars['String'];
  text: Scalars['String'];
}>;


export type ImportShipmentFileTextMutation = { __typename?: 'Mutation', importShipmentFileText: { __typename?: 'ResultOrOfImportShipmentResult', payload?: { __typename?: 'ImportShipmentResult', shipmentId: any, plantCode: string, sequence: number, lotCount: number } | null, errors: Array<{ __typename?: 'Error', code: string, description: string }> } };

export type ParseBomFileMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type ParseBomFileMutation = { __typename?: 'Mutation', parseBomFile: { __typename?: 'ParseBomFileResult', bomPlantSets: Array<{ __typename?: 'BomPlantSet', plantCode: string, filename: string, sequenceNumber: number, kittingPlantCode: string, lots: Array<{ __typename?: 'BomLot', lotNo: string, pcvCode: string, lotParts: Array<{ __typename?: 'BomLotPart', partNo: string, partDesc: string, quantity: number }>, kits: Array<{ __typename?: 'BomLotKit', kitNo: string }> }> }> } };

export type ParseBomFileTextMutationVariables = Exact<{
  filename: Scalars['String'];
  text: Scalars['String'];
}>;


export type ParseBomFileTextMutation = { __typename?: 'Mutation', parseBomFileText: { __typename?: 'ParseBomFileResult', bomPlantSets: Array<{ __typename?: 'BomPlantSet', plantCode: string, filename: string, sequenceNumber: number, kittingPlantCode: string, lots: Array<{ __typename?: 'BomLot', lotNo: string, pcvCode: string, lotParts: Array<{ __typename?: 'BomLotPart', partNo: string, partDesc: string, quantity: number }>, kits: Array<{ __typename?: 'BomLotKit', kitNo: string }> }> }> } };

export type ParseShipmentFileMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type ParseShipmentFileMutation = { __typename?: 'Mutation', parseShipmentFile: { __typename?: 'ShipFile', sequence: number, plantCode: string, created: any, filename: string, lots: Array<{ __typename?: 'ShipFileLot', lotNo: string, invoices: Array<{ __typename?: 'ShipFileInvoice', invoiceNo: string, shipDate: any, parts: Array<{ __typename?: 'ShipFilePart', partNo: string, handlingUnitCode: string, customerPartNo: string, customerPartDesc: string, quantity: number }> }> }> } };

export type ParseShipmentFileTextMutationVariables = Exact<{
  filename: Scalars['String'];
  text: Scalars['String'];
}>;


export type ParseShipmentFileTextMutation = { __typename?: 'Mutation', parseShipmentFileText: { __typename?: 'ShipFile', sequence: number, plantCode: string, created: any, filename: string, lots: Array<{ __typename?: 'ShipFileLot', lotNo: string, invoices: Array<{ __typename?: 'ShipFileInvoice', invoiceNo: string, shipDate: any, parts: Array<{ __typename?: 'ShipFilePart', partNo: string, handlingUnitCode: string, customerPartNo: string, customerPartDesc: string, quantity: number }> }> }> } };

export type UpdatePartnerStatusMutationVariables = Exact<{
  input: UpdatePartnerStatusInput;
}>;


export type UpdatePartnerStatusMutation = { __typename?: 'Mutation', updatePartnerStatus: { __typename?: 'ResultOrOfUpdatePartnerStatusPayload', payload?: { __typename?: 'UpdatePartnerStatusPayload', kitNo: string, updatedStatuses: Array<PartnerStatusCode> } | null, errors: Array<{ __typename?: 'Error', code: string, description: string }> } };

export type SyncKitStatusToPartnerStatusMutationVariables = Exact<{
  input: UpdatePartnerStatusInput;
}>;


export type SyncKitStatusToPartnerStatusMutation = { __typename?: 'Mutation', syncKitToPartnerStatus: { __typename?: 'ResultOrOfUpdatePartnerStatusPayload', payload?: { __typename?: 'UpdatePartnerStatusPayload', kitNo: string, updatedStatuses: Array<PartnerStatusCode> } | null, errors: Array<{ __typename?: 'Error', code: string, description: string }> } };

export type CreateBuildStartEventMutationVariables = Exact<{
  kitNo: Scalars['String'];
}>;


export type CreateBuildStartEventMutation = { __typename?: 'Mutation', createBuildStartEvent: { __typename?: 'ResultOrOfKitStatusEvent', payload?: { __typename?: 'KitStatusEvent', id: any, kitId: any, eventDate: any } | null, errors: Array<{ __typename?: 'Error', code: string, description: string }> } };

export type UpdateKitVinMutationVariables = Exact<{
  input: UpdateKitVinInput;
}>;


export type UpdateKitVinMutation = { __typename?: 'Mutation', updateKitVin: { __typename?: 'ResultOrOfUpdateKitVinPayload', payload?: { __typename?: 'UpdateKitVinPayload', vin?: string | null, kitNo: string } | null, errors: Array<{ __typename?: 'Error', code: string, description: string }> } };

export type PlantsQueryVariables = Exact<{ [key: string]: never; }>;


export type PlantsQuery = { __typename?: 'Query', plants?: { __typename?: 'PlantsConnection', nodes?: Array<{ __typename?: 'Plant', code: string, name: string, kittingPlantCode: string, createdAt: any }> | null } | null };

export type FordInterfaceFileTypeQueryVariables = Exact<{
  filename: Scalars['String'];
}>;


export type FordInterfaceFileTypeQuery = { __typename?: 'Query', fordInterfaceFileType: FordInterfaceFileType };

export type BuildStartPendingKitsQueryVariables = Exact<{
  plantCode: Scalars['String'];
}>;


export type BuildStartPendingKitsQuery = { __typename?: 'Query', buildStartPendingKits: Array<{ __typename?: 'KitInfoDTO', id: any, kitNo: string, lotNo: string, vin?: string | null, model: string, series: string, kitStatusCode?: KitStatusCode | null, partnerStatusCode?: PartnerStatusCode | null }> };

export type PartnerStatusUpdatePendingKitsQueryVariables = Exact<{
  plantCode: Scalars['String'];
}>;


export type PartnerStatusUpdatePendingKitsQuery = { __typename?: 'Query', partnerStatusUpdatePendingKits: Array<{ __typename?: 'KitInfoDTO', kitNo: string, lotNo: string, vin?: string | null, model: string, series: string, eventDtate?: any | null, partnerStatusCode?: PartnerStatusCode | null, kitStatusCode?: KitStatusCode | null, partnerStatusPending: boolean }> };

export type PlanBuildVinPendingKitsQueryVariables = Exact<{
  plantCode: Scalars['String'];
}>;


export type PlanBuildVinPendingKitsQuery = { __typename?: 'Query', planBuildVinPendingKits: Array<{ __typename?: 'KitInfoDTO', id: any, kitNo: string, lotNo: string, vin?: string | null, model: string, series: string, kitStatusCode?: KitStatusCode | null, partnerStatusCode?: PartnerStatusCode | null, partnerStatusPending: boolean }> };
