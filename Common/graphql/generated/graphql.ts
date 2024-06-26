export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Long: { input: any; output: any; }
  UUID: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

/** SKD Server app settings section */
export type ApiServerOptions = {
  __typename?: 'ApiServerOptions';
  allowGraphqlIntrospection: Scalars['Boolean']['output'];
  dcwsServiceAddress: Scalars['String']['output'];
  executionTimeoutSeconds: Scalars['Int']['output'];
  graphqlExposeDetailedErrors: Scalars['Boolean']['output'];
};

export type AppSetting = {
  __typename?: 'AppSetting';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  value: Scalars['String']['output'];
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
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AppSetting;
};

export type BasicKitInfo = {
  __typename?: 'BasicKitInfo';
  kitNo: Scalars['String']['output'];
  lotNo: Scalars['String']['output'];
  modelCode: Scalars['String']['output'];
  modelName: Scalars['String']['output'];
  vin: Scalars['String']['output'];
};

export type Bom = {
  __typename?: 'Bom';
  createdAt: Scalars['DateTime']['output'];
  filename?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  lotPartQuantitiesMatchShipment: Scalars['Boolean']['output'];
  lots: Array<Lot>;
  plant: Plant;
  plantId: Scalars['UUID']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  sequence: Scalars['Int']['output'];
};

export type BomFileQueryInput = {
  fileName: Scalars['String']['input'];
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
  createdAt: Scalars['DateTime']['output'];
  filename: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  lots: Array<BomList_Lot>;
  plantCode: Scalars['String']['output'];
  sequence: Scalars['Int']['output'];
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
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: BomListDto;
};

export type BomList_Lot = {
  __typename?: 'BomList_Lot';
  lotNo: Scalars['String']['output'];
  shipmentSequence?: Maybe<Scalars['Int']['output']>;
};

export type BomOverviewQueryInput = {
  bomId: Scalars['UUID']['input'];
};

export type BomOverviewQueryResult = {
  __typename?: 'BomOverviewQueryResult';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  lotNumbers: Array<Scalars['String']['output']>;
  partCount: Scalars['Int']['output'];
  pcvCodes: Array<Scalars['String']['output']>;
  plantCode: Scalars['String']['output'];
  sequence: Scalars['Int']['output'];
  shipments: Array<BomOverviewQueryResultShipment>;
  vehicleCount: Scalars['Int']['output'];
};

export type BomOverviewQueryResultShipment = {
  __typename?: 'BomOverviewQueryResultShipment';
  plantCode: Scalars['String']['output'];
  sequence?: Maybe<Scalars['Int']['output']>;
  shipmentId?: Maybe<Scalars['UUID']['output']>;
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
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Bom;
};

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CdcPendingSerialsQueryInput = {
  first?: Scalars['Int']['input'];
  plantCode?: InputMaybe<Scalars['String']['input']>;
};

export type CdcPendingSerialsQueryResult = {
  __typename?: 'CdcPendingSerialsQueryResult';
  componentCode: Scalars['String']['output'];
  kitComponentId: Scalars['UUID']['output'];
  kitNo: Scalars['String']['output'];
  plantCode: Scalars['String']['output'];
  serial1: Scalars['String']['output'];
  serial2: Scalars['String']['output'];
  vin: Scalars['String']['output'];
};

export type Component = {
  __typename?: 'Component';
  code: Scalars['String']['output'];
  componentSerialRule: ComponentSerialRule;
  createdAt: Scalars['DateTime']['output'];
  iconURL: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  kitComponents: Array<KitComponent>;
  name: Scalars['String']['output'];
  pcvComponents: Array<PcvComponent>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  requiresDcwsSubmission: Scalars['Boolean']['output'];
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
  createdAt: Scalars['DateTime']['output'];
  dcwsResponses: Array<DcwsResponse>;
  id: Scalars['UUID']['output'];
  kitComponent: KitComponent;
  kitComponentId: Scalars['UUID']['output'];
  original_Serial1?: Maybe<Scalars['String']['output']>;
  original_Serial2?: Maybe<Scalars['String']['output']>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  serial1: Scalars['String']['output'];
  serial2: Scalars['String']['output'];
  verifiedAt?: Maybe<Scalars['DateTime']['output']>;
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
  cursor: Scalars['String']['output'];
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
  componentId: Scalars['UUID']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  saveCDCComponent: Scalars['Boolean']['output'];
  station: Station;
  stationId: Scalars['UUID']['output'];
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
  componentCode: Scalars['String']['output'];
  saveCDCComponent: Scalars['Boolean']['output'];
  stationCode: Scalars['String']['output'];
};

export type ComponentStationMappingInput = {
  componentCode: Scalars['String']['input'];
  saveCDCComponent: Scalars['Boolean']['input'];
  stationCode: Scalars['String']['input'];
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
  cursor: Scalars['String']['output'];
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
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Component;
};

export type CreateComponentSerialCommandInput = {
  kitComponentId: Scalars['UUID']['input'];
  replace?: Scalars['Boolean']['input'];
  serial1?: Scalars['String']['input'];
  serial2?: Scalars['String']['input'];
};

export type CreateComponentSerialCommandResult = {
  __typename?: 'CreateComponentSerialCommandResult';
  componentCode: Scalars['String']['output'];
  componentName: Scalars['String']['output'];
  componentSerialId: Scalars['UUID']['output'];
  createdAt: Scalars['DateTime']['output'];
  lotNo: Scalars['String']['output'];
  serial1: Scalars['String']['output'];
  serial2: Scalars['String']['output'];
  stationCode: Scalars['String']['output'];
  stationName: Scalars['String']['output'];
  verifiedAt?: Maybe<Scalars['DateTime']['output']>;
  vin: Scalars['String']['output'];
};

export type DateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  ngt?: InputMaybe<Scalars['DateTime']['input']>;
  ngte?: InputMaybe<Scalars['DateTime']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  nlt?: InputMaybe<Scalars['DateTime']['input']>;
  nlte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DcwsComponentResponseInput = {
  errorMessage: Scalars['String']['input'];
  kitComponentId: Scalars['UUID']['input'];
  responseCode: Scalars['String']['input'];
};

export type DcwsResponse = {
  __typename?: 'DcwsResponse';
  componentSerial: ComponentSerial;
  componentSerialId: Scalars['UUID']['output'];
  createdAt: Scalars['DateTime']['output'];
  dcwsErrorMessage?: Maybe<Scalars['String']['output']>;
  dcwsProcessExcptionCode: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  submissionAccepted: Scalars['Boolean']['output'];
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
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: DcwsResponse;
};

export type Dealer = {
  __typename?: 'Dealer';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  kits: Array<Kit>;
  name: Scalars['String']['output'];
  plant: Plant;
  plantId: Scalars['UUID']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
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
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Dealer;
};

export type Error = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  description: Scalars['String']['output'];
};

export enum FordInterfaceFileType {
  Bom = 'BOM',
  PartnerStatusAck = 'PARTNER_STATUS_ACK',
  Ship = 'SHIP',
  Unkown = 'UNKOWN',
  Vin = 'VIN'
}

export type GetPcvsByPlantQueryInput = {
  first?: Scalars['Int']['input'];
  plantCode: Scalars['String']['input'];
};

export type GetPcvsByPlantQueryResult = {
  __typename?: 'GetPcvsByPlantQueryResult';
  pcvs: Array<PcvItem>;
};

export type Hu_Part = {
  __typename?: 'HU_Part';
  partDesc: Scalars['String']['output'];
  partNo: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
};

export type HandlingUnit = {
  __typename?: 'HandlingUnit';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  lot: Lot;
  lotId: Scalars['UUID']['output'];
  lotParts: Array<LotPart>;
  received: Array<HandlingUnitReceived>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  shipmentInvoice?: Maybe<ShipmentInvoice>;
  shipmentInvoiceId?: Maybe<Scalars['UUID']['output']>;
};

export type HandlingUnitFilterInput = {
  and?: InputMaybe<Array<HandlingUnitFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  lot?: InputMaybe<LotFilterInput>;
  lotId?: InputMaybe<UuidOperationFilterInput>;
  lotParts?: InputMaybe<ListFilterInputTypeOfLotPartFilterInput>;
  or?: InputMaybe<Array<HandlingUnitFilterInput>>;
  received?: InputMaybe<ListFilterInputTypeOfHandlingUnitReceivedFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  shipmentInvoice?: InputMaybe<ShipmentInvoiceFilterInput>;
  shipmentInvoiceId?: InputMaybe<UuidOperationFilterInput>;
};

export type HandlingUnitInfoPayload = {
  __typename?: 'HandlingUnitInfoPayload';
  code?: Maybe<Scalars['String']['output']>;
  invoiceNo?: Maybe<Scalars['String']['output']>;
  lotNo?: Maybe<Scalars['String']['output']>;
  partCount: Scalars['Int']['output'];
  parts: Array<Hu_Part>;
  pcvCode?: Maybe<Scalars['String']['output']>;
  pcvDescription?: Maybe<Scalars['String']['output']>;
  plantCode: Scalars['String']['output'];
  receivedAt?: Maybe<Scalars['DateTime']['output']>;
  receivedRemovedAt?: Maybe<Scalars['DateTime']['output']>;
  shipmentId: Scalars['UUID']['output'];
  shipmentSequence: Scalars['Int']['output'];
};

export type HandlingUnitOverview = {
  __typename?: 'HandlingUnitOverview';
  createdAt: Scalars['DateTime']['output'];
  handlingUnitCode: Scalars['String']['output'];
  invoiceNo: Scalars['String']['output'];
  lotNo: Scalars['String']['output'];
  partCount: Scalars['Int']['output'];
  plantCode: Scalars['String']['output'];
  receiveCancledAt?: Maybe<Scalars['DateTime']['output']>;
  receivedAt?: Maybe<Scalars['DateTime']['output']>;
  shipmentSequence: Scalars['Int']['output'];
};

export type HandlingUnitReceived = {
  __typename?: 'HandlingUnitReceived';
  createdAt: Scalars['DateTime']['output'];
  handlingUnit: HandlingUnit;
  handlingUnitId: Scalars['UUID']['output'];
  id: Scalars['UUID']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
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
  cursor: Scalars['String']['output'];
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
  lot?: InputMaybe<LotSortInput>;
  lotId?: InputMaybe<SortEnumType>;
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
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: HandlingUnit;
};

export type ICategory = {
  code: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type ImportBomResult = {
  __typename?: 'ImportBomResult';
  bomId: Scalars['UUID']['output'];
  plantCode: Scalars['String']['output'];
  sequence: Scalars['Int']['output'];
};

export type ImportShipmentResult = {
  __typename?: 'ImportShipmentResult';
  invoiceCount: Scalars['Int']['output'];
  invoice_HandlingUnitCount: Scalars['Int']['output'];
  lotCount: Scalars['Int']['output'];
  lot_HandlingUnitCount: Scalars['Int']['output'];
  plantCode: Scalars['String']['output'];
  sequence: Scalars['Int']['output'];
  shipmentId: Scalars['UUID']['output'];
};

export type IntOperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  ngt?: InputMaybe<Scalars['Int']['input']>;
  ngte?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  nlt?: InputMaybe<Scalars['Int']['input']>;
  nlte?: InputMaybe<Scalars['Int']['input']>;
};

export type ItemCountDto = {
  __typename?: 'ItemCountDTO';
  code: Scalars['String']['output'];
  count: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Kit = {
  __typename?: 'Kit';
  createdAt: Scalars['DateTime']['output'];
  dealer?: Maybe<Dealer>;
  dealerId?: Maybe<Scalars['UUID']['output']>;
  id: Scalars['UUID']['output'];
  kitComponents: Array<KitComponent>;
  kitNo: Scalars['String']['output'];
  kitStatusEvents: Array<KitStatusEvent>;
  kitVins: Array<KitVin>;
  lot: Lot;
  lotId: Scalars['UUID']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  vin: Scalars['String']['output'];
};

export type KitComponent = {
  __typename?: 'KitComponent';
  component: Component;
  componentId: Scalars['UUID']['output'];
  componentSerials: Array<ComponentSerial>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  kit: Kit;
  kitId: Scalars['UUID']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  station: Station;
  stationId: Scalars['UUID']['output'];
  verifiedAt?: Maybe<Scalars['DateTime']['output']>;
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
  componentCode: Scalars['String']['output'];
  componentIconURL: Scalars['String']['output'];
  componentName: Scalars['String']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
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
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: KitComponent;
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
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: KitListItemDto;
};

export type KitListItemDto = {
  __typename?: 'KitListItemDTO';
  id: Scalars['UUID']['output'];
  imported?: Maybe<Scalars['DateTime']['output']>;
  kitNo: Scalars['String']['output'];
  lastKitStatusEvent?: Maybe<Scalars['String']['output']>;
  lastKitStatusEventDate?: Maybe<Scalars['DateTime']['output']>;
  lotNo: Scalars['String']['output'];
  modelCode: Scalars['String']['output'];
  modelName: Scalars['String']['output'];
  requiredComponentCount?: Maybe<Scalars['Int']['output']>;
  scannedComponentCount?: Maybe<Scalars['Int']['output']>;
  verifiedComponentCount?: Maybe<Scalars['Int']['output']>;
  vin: Scalars['String']['output'];
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
  vinOrKitNo: Scalars['String']['input'];
};

export type KitOverviewQueryResult = {
  __typename?: 'KitOverviewQueryResult';
  createdAt: Scalars['DateTime']['output'];
  currentKitStatusCode?: Maybe<KitStatusCode>;
  currentKitStatusDate?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  kitNo: Scalars['String']['output'];
  lotNo: Scalars['String']['output'];
  model: Scalars['String']['output'];
  modelYear: Scalars['String']['output'];
  pcvCode: Scalars['String']['output'];
  vin: Scalars['String']['output'];
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
  kitNo: Scalars['String']['output'];
  kitStatusItems: Array<StatusEventDto>;
  lotNo: Scalars['String']['output'];
  vin: Scalars['String']['output'];
};

export type KitStatusEvent = {
  __typename?: 'KitStatusEvent';
  createdAt: Scalars['DateTime']['output'];
  eventDate: Scalars['DateTime']['output'];
  eventNote?: Maybe<Scalars['String']['output']>;
  eventType: KitStatusEventType;
  id: Scalars['UUID']['output'];
  kit: Kit;
  kitId: Scalars['UUID']['output'];
  kitStatusEventTypeId: Scalars['UUID']['output'];
  partnerStatusUpdatedAt?: Maybe<Scalars['DateTime']['output']>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
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
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  partnerStatusCode: PartnerStatusCode;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  sequence: Scalars['Int']['output'];
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
  cursor: Scalars['String']['output'];
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
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: KitStatusEvent;
};

export type KitVin = {
  __typename?: 'KitVin';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  kit: Kit;
  kitId: Scalars['UUID']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  vin: Scalars['String']['output'];
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
  cursor: Scalars['String']['output'];
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
  cursor: Scalars['String']['output'];
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
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Kit;
};

export type ListFilterInputTypeOfBomFilterInput = {
  all?: InputMaybe<BomFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<BomFilterInput>;
  some?: InputMaybe<BomFilterInput>;
};

export type ListFilterInputTypeOfComponentSerialFilterInput = {
  all?: InputMaybe<ComponentSerialFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ComponentSerialFilterInput>;
  some?: InputMaybe<ComponentSerialFilterInput>;
};

export type ListFilterInputTypeOfComponentStationFilterInput = {
  all?: InputMaybe<ComponentStationFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ComponentStationFilterInput>;
  some?: InputMaybe<ComponentStationFilterInput>;
};

export type ListFilterInputTypeOfDcwsResponseFilterInput = {
  all?: InputMaybe<DcwsResponseFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<DcwsResponseFilterInput>;
  some?: InputMaybe<DcwsResponseFilterInput>;
};

export type ListFilterInputTypeOfDealerFilterInput = {
  all?: InputMaybe<DealerFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<DealerFilterInput>;
  some?: InputMaybe<DealerFilterInput>;
};

export type ListFilterInputTypeOfHandlingUnitFilterInput = {
  all?: InputMaybe<HandlingUnitFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<HandlingUnitFilterInput>;
  some?: InputMaybe<HandlingUnitFilterInput>;
};

export type ListFilterInputTypeOfHandlingUnitReceivedFilterInput = {
  all?: InputMaybe<HandlingUnitReceivedFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<HandlingUnitReceivedFilterInput>;
  some?: InputMaybe<HandlingUnitReceivedFilterInput>;
};

export type ListFilterInputTypeOfKitComponentFilterInput = {
  all?: InputMaybe<KitComponentFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<KitComponentFilterInput>;
  some?: InputMaybe<KitComponentFilterInput>;
};

export type ListFilterInputTypeOfKitFilterInput = {
  all?: InputMaybe<KitFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<KitFilterInput>;
  some?: InputMaybe<KitFilterInput>;
};

export type ListFilterInputTypeOfKitStatusEventFilterInput = {
  all?: InputMaybe<KitStatusEventFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<KitStatusEventFilterInput>;
  some?: InputMaybe<KitStatusEventFilterInput>;
};

export type ListFilterInputTypeOfKitVinFilterInput = {
  all?: InputMaybe<KitVinFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<KitVinFilterInput>;
  some?: InputMaybe<KitVinFilterInput>;
};

export type ListFilterInputTypeOfLotFilterInput = {
  all?: InputMaybe<LotFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<LotFilterInput>;
  some?: InputMaybe<LotFilterInput>;
};

export type ListFilterInputTypeOfLotPartFilterInput = {
  all?: InputMaybe<LotPartFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<LotPartFilterInput>;
  some?: InputMaybe<LotPartFilterInput>;
};

export type ListFilterInputTypeOfLotPartReceivedFilterInput = {
  all?: InputMaybe<LotPartReceivedFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<LotPartReceivedFilterInput>;
  some?: InputMaybe<LotPartReceivedFilterInput>;
};

export type ListFilterInputTypeOfPcvFilterInput = {
  all?: InputMaybe<PcvFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<PcvFilterInput>;
  some?: InputMaybe<PcvFilterInput>;
};

export type ListFilterInputTypeOfPartFilterInput = {
  all?: InputMaybe<PartFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<PartFilterInput>;
  some?: InputMaybe<PartFilterInput>;
};

export type ListFilterInputTypeOfPcvComponentFilterInput = {
  all?: InputMaybe<PcvComponentFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<PcvComponentFilterInput>;
  some?: InputMaybe<PcvComponentFilterInput>;
};

export type ListFilterInputTypeOfShipmentFilterInput = {
  all?: InputMaybe<ShipmentFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ShipmentFilterInput>;
  some?: InputMaybe<ShipmentFilterInput>;
};

export type ListFilterInputTypeOfShipmentInvoiceFilterInput = {
  all?: InputMaybe<ShipmentInvoiceFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ShipmentInvoiceFilterInput>;
  some?: InputMaybe<ShipmentInvoiceFilterInput>;
};

export type ListFilterInputTypeOfStationFilterInput = {
  all?: InputMaybe<StationFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<StationFilterInput>;
  some?: InputMaybe<StationFilterInput>;
};

export type Lot = {
  __typename?: 'Lot';
  bom?: Maybe<Bom>;
  bomId?: Maybe<Scalars['UUID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  handlingUnits: Array<HandlingUnit>;
  id: Scalars['UUID']['output'];
  invoices: Array<ShipmentInvoice>;
  kits: Array<Kit>;
  lotNo: Scalars['String']['output'];
  lotParts: Array<LotPart>;
  note?: Maybe<Scalars['String']['output']>;
  pcv: Pcv;
  pcvId: Scalars['UUID']['output'];
  plant: Plant;
  plantId: Scalars['UUID']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  shipment?: Maybe<Shipment>;
  shipmentId?: Maybe<Scalars['UUID']['output']>;
};

export type LotDto = {
  __typename?: 'LotDTO';
  createdAt: Scalars['DateTime']['output'];
  lotNo: Scalars['String']['output'];
  model: Scalars['String']['output'];
  modelBody: Scalars['String']['output'];
  modelCode: Scalars['String']['output'];
  modelDesc: Scalars['String']['output'];
  modelSeries: Scalars['String']['output'];
};

export type LotFilterInput = {
  and?: InputMaybe<Array<LotFilterInput>>;
  bom?: InputMaybe<BomFilterInput>;
  bomId?: InputMaybe<UuidOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  handlingUnits?: InputMaybe<ListFilterInputTypeOfHandlingUnitFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  invoices?: InputMaybe<ListFilterInputTypeOfShipmentInvoiceFilterInput>;
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
  shipment?: InputMaybe<ShipmentFilterInput>;
  shipmentId?: InputMaybe<UuidOperationFilterInput>;
};

export type LotKitsQueryInput = {
  lotNo: Scalars['String']['input'];
};

export type LotKitsQueryResult = {
  __typename?: 'LotKitsQueryResult';
  items: Array<LotKitsQueryResultItem>;
};

export type LotKitsQueryResultItem = {
  __typename?: 'LotKitsQueryResultItem';
  kitNo: Scalars['String']['output'];
  kitStatusCode?: Maybe<Scalars['String']['output']>;
  kitStatusCreatedAt?: Maybe<Scalars['DateTime']['output']>;
  kitStatusEventDate?: Maybe<Scalars['DateTime']['output']>;
  model: Scalars['String']['output'];
  partnerStatusCode?: Maybe<Scalars['String']['output']>;
  requiredComponentCount: Scalars['Int']['output'];
  verifiedComponentCount: Scalars['Int']['output'];
  vin: Scalars['String']['output'];
};

export type LotListDto = {
  __typename?: 'LotListDTO';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  kitCount: Scalars['Int']['output'];
  kitStatusCode?: Maybe<KitStatusCode>;
  lotNo: Scalars['String']['output'];
  plantCode: Scalars['String']['output'];
};

export type LotOverviewQueryInput = {
  lotNo: Scalars['String']['input'];
};

export type LotOverviewQueryResult = {
  __typename?: 'LotOverviewQueryResult';
  bomId?: Maybe<Scalars['UUID']['output']>;
  bomSequence?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  drive: Scalars['String']['output'];
  engine: Scalars['String']['output'];
  lotNo: Scalars['String']['output'];
  model: Scalars['String']['output'];
  paint: Scalars['String']['output'];
  pcvCode: Scalars['String']['output'];
  plantCode: Scalars['String']['output'];
  priorLotNo?: Maybe<Scalars['String']['output']>;
  series: Scalars['String']['output'];
  shipmentId?: Maybe<Scalars['UUID']['output']>;
  shipmentSequence?: Maybe<Scalars['Int']['output']>;
  subModel: Scalars['String']['output'];
  transmission: Scalars['String']['output'];
  trim: Scalars['String']['output'];
};

export type LotPart = {
  __typename?: 'LotPart';
  bomQuantity: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  handlingUnit?: Maybe<HandlingUnit>;
  handlingUnitId?: Maybe<Scalars['UUID']['output']>;
  id: Scalars['UUID']['output'];
  lot: Lot;
  lotId: Scalars['UUID']['output'];
  part: Part;
  partId: Scalars['UUID']['output'];
  received: Array<LotPartReceived>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  shipmentQuantity: Scalars['Int']['output'];
};

export type LotPartDto = {
  __typename?: 'LotPartDTO';
  bomQuantity: Scalars['Int']['output'];
  importDate: Scalars['DateTime']['output'];
  lotNo: Scalars['String']['output'];
  partDesc: Scalars['String']['output'];
  partNo: Scalars['String']['output'];
  partType: Scalars['String']['output'];
  receivedDate?: Maybe<Scalars['DateTime']['output']>;
  receivedQuantity: Scalars['Int']['output'];
  removedDate?: Maybe<Scalars['DateTime']['output']>;
  shipmentQuantity: Scalars['Int']['output'];
};

export type LotPartDiffItem = {
  __typename?: 'LotPartDiffItem';
  diffType: LotPartDiffType;
  firstLotNo: Scalars['String']['output'];
  firstLotQuantity: Scalars['Int']['output'];
  partDesc: Scalars['String']['output'];
  partNo: Scalars['String']['output'];
  partType: Scalars['String']['output'];
  secondLotNo: Scalars['String']['output'];
  secondLotQuantity: Scalars['Int']['output'];
};

export type LotPartDiffQueryInput = {
  lotNo: Scalars['String']['input'];
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
  handlingUnit?: InputMaybe<HandlingUnitFilterInput>;
  handlingUnitId?: InputMaybe<UuidOperationFilterInput>;
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
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  lotPart: LotPart;
  lotPartId: Scalars['UUID']['output'];
  quantity: Scalars['Int']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LotPartReceivedDto = {
  __typename?: 'LotPartReceivedDTO';
  bomQuantity: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  lotNo: Scalars['String']['output'];
  partDesc: Scalars['String']['output'];
  partNo: Scalars['String']['output'];
  receivedQuantity: Scalars['Int']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  shipmentQuantity: Scalars['Int']['output'];
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
  handlingUnit?: InputMaybe<HandlingUnitSortInput>;
  handlingUnitId?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  lot?: InputMaybe<LotSortInput>;
  lotId?: InputMaybe<SortEnumType>;
  part?: InputMaybe<PartSortInput>;
  partId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  shipmentQuantity?: InputMaybe<SortEnumType>;
};

export type LotPartsByShipOrBomQueryInput = {
  id: Scalars['UUID']['input'];
  queryBy: LotPartsQueryBy;
};

export type LotPartsByShipOrBomQueryResult = {
  __typename?: 'LotPartsByShipOrBomQueryResult';
  items: Array<LotPartsByShipOrBomQueryResultItem>;
};

export type LotPartsByShipOrBomQueryResultItem = {
  __typename?: 'LotPartsByShipOrBomQueryResultItem';
  bomQuantity: Scalars['Int']['output'];
  importDate: Scalars['DateTime']['output'];
  lotNo: Scalars['String']['output'];
  partDesc: Scalars['String']['output'];
  partNo: Scalars['String']['output'];
  partType: Scalars['String']['output'];
  receivedDate?: Maybe<Scalars['DateTime']['output']>;
  receivedQuantity: Scalars['Int']['output'];
  removedDate?: Maybe<Scalars['DateTime']['output']>;
  shipmentQuantity: Scalars['Int']['output'];
};

export enum LotPartsQueryBy {
  Bom = 'BOM',
  Shipment = 'SHIPMENT'
}

export type LotPartsQueryInput = {
  lotNo: Scalars['String']['input'];
};

export type LotPartsQueryResult = {
  __typename?: 'LotPartsQueryResult';
  items: Array<LotPartsQueryResultItem>;
};

export type LotPartsQueryResultItem = {
  __typename?: 'LotPartsQueryResultItem';
  handlingUnitCode: Scalars['String']['output'];
  handlingUnitReceivedAt?: Maybe<Scalars['DateTime']['output']>;
  partDesc: Scalars['String']['output'];
  partNo: Scalars['String']['output'];
  partType: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  quantityReceived: Scalars['Int']['output'];
  receivedAt?: Maybe<Scalars['DateTime']['output']>;
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
  cursor: Scalars['String']['output'];
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
  shipment?: InputMaybe<ShipmentSortInput>;
  shipmentId?: InputMaybe<SortEnumType>;
};

export type LotsByKitStatusQueryInput = {
  kitStatusCode: KitStatusCode;
  plantCode: Scalars['String']['input'];
};

export type LotsByKitStatusQueryResult = {
  __typename?: 'LotsByKitStatusQueryResult';
  eventDate: Scalars['DateTime']['output'];
  lotNo: Scalars['String']['output'];
  model: Scalars['String']['output'];
  modelYear: Scalars['String']['output'];
  pcvCode: Scalars['String']['output'];
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
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Lot;
};

export type Mutation = {
  __typename?: 'Mutation';
  captureComponentSerial: ResultOrOfCreateComponentSerialCommandResult;
  createDcwsResponse: ResultOrOfDcwsResponse;
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
  parseBomFile: ResultOrOfRawBom;
  /** Parse a BOM file and return a ParseBomFileResult object */
  parseBomFileText: ResultOrOfRawBom;
  /** Parses a PCV xlsx file and returns a list of PCV, and Component code records */
  parsePcvsXlsx: ResultOrOfParsePcvsXlxsResult;
  /** Parse a shipment file and return a ShipFile object */
  parseShipmentFile: ShipFile;
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
  setKitVin: ResultOrOfSetKitVinCommandResult;
  /** Update Part Types */
  setPartType: ResultOrOfSetPartTypeResult;
  /**
   * Update kit component stations mappings to match the component station mappings template
   * where kit does not have a BUILD_COMPLETE status event
   */
  syncKitCompoents: ResultOrOfSyncKitComponentsResult;
  /** Create a kit status event for a kit */
  updateKitStatus: ResultOrOfUpdateKitStatusCommandResult;
  /** Create build start event for a kit */
  updateKitStatusToBuildStart: ResultOrOfUpdateKitStatusCommandResult;
  /** Update kit status by lot */
  updateLotKitStatus: ResultOrOfListOfUpdateLotKitStatusCommandResult;
  updatePartnerKitStatus: ResultOrOfUpdatePartnerKitStatusCommandResult;
  verifyComponentSerial: ResultOrOfDcwsResponse;
};


export type MutationCaptureComponentSerialArgs = {
  input: CreateComponentSerialCommandInput;
};


export type MutationCreateDcwsResponseArgs = {
  input: DcwsComponentResponseInput;
};


export type MutationCreateLotPartQuantityReceivedArgs = {
  input: ReceiveLotPartInput;
};


export type MutationCreatePlantArgs = {
  input: PlantInput;
};


export type MutationImportBomArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationImportBomFileTextArgs = {
  filename: Scalars['String']['input'];
  text: Scalars['String']['input'];
};


export type MutationImportShipmentArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationImportShipmentFileTextArgs = {
  filename: Scalars['String']['input'];
  text: Scalars['String']['input'];
};


export type MutationParseBomFileArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationParseBomFileTextArgs = {
  filename: Scalars['String']['input'];
  text: Scalars['String']['input'];
};


export type MutationParsePcvsXlsxArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationParseShipmentFileArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationParseShipmentFileTextArgs = {
  filename: Scalars['String']['input'];
  text: Scalars['String']['input'];
};


export type MutationParseStationsXlsxArgs = {
  file: Scalars['Upload']['input'];
  worksheetNumber: Scalars['Int']['input'];
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
  input: SetKitVinCommandInput;
};


export type MutationSetPartTypeArgs = {
  input: SetPartTypeCommandInput;
};


export type MutationUpdateKitStatusArgs = {
  input: UpdateKitStatusCommandInput;
};


export type MutationUpdateKitStatusToBuildStartArgs = {
  kitNo: Scalars['String']['input'];
};


export type MutationUpdateLotKitStatusArgs = {
  input: UpdateLotKitStatusCommandInput;
};


export type MutationUpdatePartnerKitStatusArgs = {
  input: UpdatePartnerKitStatusCommandInput;
};


export type MutationVerifyComponentSerialArgs = {
  kitComponentId: Scalars['UUID']['input'];
};

export type Pcv = {
  __typename?: 'PCV';
  body: Scalars['String']['output'];
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  lots: Array<Lot>;
  model: Scalars['String']['output'];
  modelYear: Scalars['String']['output'];
  pcvComponents: Array<PcvComponent>;
  pcvDrive?: Maybe<PcvDrive>;
  pcvDriveId?: Maybe<Scalars['UUID']['output']>;
  pcvEngine?: Maybe<PcvEngine>;
  pcvEngineId?: Maybe<Scalars['UUID']['output']>;
  pcvModel?: Maybe<PcvModel>;
  pcvModelId?: Maybe<Scalars['UUID']['output']>;
  pcvPaint?: Maybe<PcvPaint>;
  pcvPaintId?: Maybe<Scalars['UUID']['output']>;
  pcvSeries?: Maybe<PcvSeries>;
  pcvSeriesId?: Maybe<Scalars['UUID']['output']>;
  pcvSubmodel?: Maybe<PcvSubmodel>;
  pcvSubmodelId?: Maybe<Scalars['UUID']['output']>;
  pcvTransmission?: Maybe<PcvTransmission>;
  pcvTransmissionId?: Maybe<Scalars['UUID']['output']>;
  pcvTrim?: Maybe<PcvTrim>;
  pcvTrimId?: Maybe<Scalars['UUID']['output']>;
  plant: Plant;
  plantId: Scalars['UUID']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  series: Scalars['String']['output'];
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
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type ParsePcvsXlxsResult = {
  __typename?: 'ParsePcvsXlxsResult';
  componentCodes: Array<Scalars['String']['output']>;
  pcvData: Array<PcvDataFromXlsx>;
};

export type ParseStationsXlsxCommandResult = {
  __typename?: 'ParseStationsXlsxCommandResult';
  stations: Array<ParsedStation>;
};

export type ParsedStation = {
  __typename?: 'ParsedStation';
  code: Scalars['String']['output'];
  componentCodes: Scalars['String']['output'];
  exists: Scalars['Boolean']['output'];
  plantCode: Scalars['String']['output'];
  sequence: Scalars['Int']['output'];
};

export type Part = {
  __typename?: 'Part';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  lotParts: Array<LotPart>;
  originalPartNo: Scalars['String']['output'];
  partDesc: Scalars['String']['output'];
  partNo: Scalars['String']['output'];
  partType?: Maybe<PartType>;
  partTypeId?: Maybe<Scalars['UUID']['output']>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
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
};

export type PartLotPartsQueryInput = {
  partNo: Scalars['String']['input'];
  plantCode: Scalars['String']['input'];
};

export type PartLotPartsQueryResult = {
  __typename?: 'PartLotPartsQueryResult';
  items: Array<PartLotPartsQueryResultItem>;
  plantCode: Scalars['String']['output'];
};

export type PartLotPartsQueryResultItem = {
  __typename?: 'PartLotPartsQueryResultItem';
  bomQuantity: Scalars['Int']['output'];
  lotNo: Scalars['String']['output'];
  model: Scalars['String']['output'];
  shipQuantity: Scalars['Int']['output'];
};

export type PartOverviewQueryInput = {
  partNo: Scalars['String']['input'];
};

export type PartOverviewQueryResult = {
  __typename?: 'PartOverviewQueryResult';
  createdAt: Scalars['DateTime']['output'];
  lotCount: Scalars['Int']['output'];
  originalPartNo: Scalars['String']['output'];
  partDesc: Scalars['String']['output'];
  partNo: Scalars['String']['output'];
  partType: Scalars['String']['output'];
};

export type PartQuantityDto = {
  __typename?: 'PartQuantityDTO';
  partDesc: Scalars['String']['output'];
  partNo: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
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
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  isPhysicalPart: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  parts: Array<Part>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
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
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PartType;
};

export type PartneKitVinQueryInput = {
  kitNo: Scalars['String']['input'];
};

export type PartnerGetVinQueryResult = {
  __typename?: 'PartnerGetVinQueryResult';
  kitNo: Scalars['String']['output'];
  vin: Scalars['String']['output'];
};

export type PartnerKitStatusQueryInput = {
  kitNo: Scalars['String']['input'];
};

export type PartnerKitStatusQueryResult = {
  __typename?: 'PartnerKitStatusQueryResult';
  kitNumber: Scalars['String']['output'];
  lotNumber: Scalars['String']['output'];
  plantGsdb: Scalars['String']['output'];
  status: PartnerStatusCode;
  statusDate: Scalars['String']['output'];
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
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Part;
};

export type PcvComponent = {
  __typename?: 'PcvComponent';
  component: Component;
  componentId: Scalars['UUID']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  pcv: Pcv;
  pcvId: Scalars['UUID']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
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
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PcvComponent;
};

export type PcvDataFromXlsx = {
  __typename?: 'PcvDataFromXlsx';
  componentCodes: Array<Scalars['String']['output']>;
  drive: Scalars['String']['output'];
  engine: Scalars['String']['output'];
  exists: Scalars['Boolean']['output'];
  model: Scalars['String']['output'];
  modelYear: Scalars['String']['output'];
  paint: Scalars['String']['output'];
  pcv: Scalars['String']['output'];
  plantCode: Scalars['String']['output'];
  series: Scalars['String']['output'];
  submodel: Scalars['String']['output'];
  transmission: Scalars['String']['output'];
  trim: Scalars['String']['output'];
};

export type PcvDrive = ICategory & {
  __typename?: 'PcvDrive';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  pcvs: Array<Pcv>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
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
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PcvDrive;
};

export type PcvEngine = ICategory & {
  __typename?: 'PcvEngine';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  pcvs: Array<Pcv>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
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
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PcvEngine;
};

export type PcvItem = {
  __typename?: 'PcvItem';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  drive?: Maybe<Scalars['String']['output']>;
  engine?: Maybe<Scalars['String']['output']>;
  lotCount: Scalars['Int']['output'];
  model?: Maybe<Scalars['String']['output']>;
  modelYear?: Maybe<Scalars['String']['output']>;
  paint?: Maybe<Scalars['String']['output']>;
  pcvCode: Scalars['String']['output'];
  plantCode: Scalars['String']['output'];
  series?: Maybe<Scalars['String']['output']>;
  submodel?: Maybe<Scalars['String']['output']>;
  transmission?: Maybe<Scalars['String']['output']>;
  trim?: Maybe<Scalars['String']['output']>;
};

export type PcvModel = ICategory & {
  __typename?: 'PcvModel';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  pcvs: Array<Pcv>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
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
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PcvModel;
};

export type PcvPaint = ICategory & {
  __typename?: 'PcvPaint';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  pcvs: Array<Pcv>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
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
  cursor: Scalars['String']['output'];
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
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  pcvs: Array<Pcv>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
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
  cursor: Scalars['String']['output'];
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
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  pcvs: Array<Pcv>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
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
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PcvSubmodel;
};

export type PcvTransmission = ICategory & {
  __typename?: 'PcvTransmission';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  pcvs: Array<Pcv>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
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
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PcvTransmission;
};

export type PcvTrim = ICategory & {
  __typename?: 'PcvTrim';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  pcvs: Array<Pcv>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
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
  cursor: Scalars['String']['output'];
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
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Pcv;
};

export type Plant = {
  __typename?: 'Plant';
  boms: Array<Bom>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  dealers: Array<Dealer>;
  id: Scalars['UUID']['output'];
  kittingPlantCode: Scalars['String']['output'];
  lots: Array<Lot>;
  name: Scalars['String']['output'];
  pcVs: Array<Pcv>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
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
  code: Scalars['String']['input'];
  kittingPlantCode: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type PlantOverviewDto = {
  __typename?: 'PlantOverviewDTO';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
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
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Plant;
};

export type Query = {
  __typename?: 'Query';
  appSettings?: Maybe<AppSettingsConnection>;
  basicKitInfo?: Maybe<BasicKitInfo>;
  bomById?: Maybe<Bom>;
  bomFile: ResultOrOfRawBom;
  bomList?: Maybe<BomListConnection>;
  bomOverview: BomOverviewQueryResult;
  bomPartsQuantity: Array<PartQuantityDto>;
  boms?: Maybe<BomsConnection>;
  cdcPendingSerials: ResultOrOfListOfCdcPendingSerialsQueryResult;
  componentById?: Maybe<Component>;
  componentSerials?: Maybe<ComponentSerialsConnection>;
  componentStations?: Maybe<ComponentStationsConnection>;
  components?: Maybe<ComponentsConnection>;
  dcwsResponses?: Maybe<DcwsResponsesConnection>;
  dcwsServiceVersion: Scalars['String']['output'];
  dealers?: Maybe<DealersConnection>;
  fordInterfaceFileType: FordInterfaceFileType;
  handlingUnitInfo?: Maybe<HandlingUnitInfoPayload>;
  handlingUnitOverviews: Array<HandlingUnitOverview>;
  handlingUnitReceived?: Maybe<HandlingUnitReceivedConnection>;
  handlingUnits?: Maybe<HandlingUnitsConnection>;
  info: Scalars['String']['output'];
  kitById?: Maybe<Kit>;
  kitByKitNo?: Maybe<Kit>;
  kitComponentSerialInfo?: Maybe<KitComponentSerialInfo>;
  kitComponents?: Maybe<KitComponentsConnection>;
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
  /** Get the lot overview for a given lot number */
  lotOverview2: ResultOrOfLotOverviewQueryResult;
  /** Get the difference in lot parts between the current lot and the prior lot if it exists */
  lotPartDiff: ResultOrOfLotPartDiffQueryResult;
  lotPartInfo?: Maybe<LotPartDto>;
  lotParts: LotPartsQueryResult;
  lotPartsByShipOrBom: ResultOrOfLotPartsByShipOrBomQueryResult;
  lotPartsReceived?: Maybe<LotPartsReceivedConnection>;
  lots?: Maybe<LotsConnection>;
  lotsByKitStatus: Array<LotsByKitStatusQueryResult>;
  partLotParts: ResultOrOfPartLotPartsQueryResult;
  partOverview: ResultOrOfPartOverviewQueryResult;
  partTypes?: Maybe<PartTypesConnection>;
  partnerKitStatus: ResultOrOfPartnerKitStatusQueryResult;
  partnerKitVin: ResultOrOfPartnerGetVinQueryResult;
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
  pendingComponentSerials: ResultOrOfListOfCdcPendingSerialsQueryResult;
  pingDcwsService: Scalars['Boolean']['output'];
  plants?: Maybe<PlantsConnection>;
  recentBomFiles: Array<RecentBomFilesQueryResult>;
  recentLotPartsReceived: Array<LotPartReceivedDto>;
  recentShipmentFiles: Array<RecentShipmentFilesQueryResult>;
  serverConfigSettings: ApiServerOptions;
  shipmentInvoices?: Maybe<ShipmentInvoicesConnection>;
  shipmentOverview?: Maybe<ResultOrOfShipmentOverviewQueryResult>;
  shipments?: Maybe<ShipmentsConnection>;
  stations?: Maybe<StationsConnection>;
  /** @deprecated no longer used */
  vehicleComponentByVinAndComponent?: Maybe<KitComponent>;
  vinAllocation: VinAllocationQueryResult;
};


export type QueryAppSettingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<AppSettingSortInput>>;
  where?: InputMaybe<AppSettingFilterInput>;
};


export type QueryBasicKitInfoArgs = {
  vin: Scalars['String']['input'];
};


export type QueryBomByIdArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryBomFileArgs = {
  request: BomFileQueryInput;
};


export type QueryBomListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<BomListDtoSortInput>>;
  plantCode: Scalars['String']['input'];
};


export type QueryBomOverviewArgs = {
  input: BomOverviewQueryInput;
};


export type QueryBomPartsQuantityArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryBomsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<BomSortInput>>;
  where?: InputMaybe<BomFilterInput>;
};


export type QueryCdcPendingSerialsArgs = {
  request: CdcPendingSerialsQueryInput;
};


export type QueryComponentByIdArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryComponentSerialsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ComponentSerialSortInput>>;
  where?: InputMaybe<ComponentSerialFilterInput>;
};


export type QueryComponentStationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ComponentStationSortInput>>;
  where?: InputMaybe<ComponentStationFilterInput>;
};


export type QueryComponentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ComponentSortInput>>;
  where?: InputMaybe<ComponentFilterInput>;
};


export type QueryDcwsResponsesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<DcwsResponseSortInput>>;
  where?: InputMaybe<DcwsResponseFilterInput>;
};


export type QueryDealersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<DealerSortInput>>;
  where?: InputMaybe<DealerFilterInput>;
};


export type QueryFordInterfaceFileTypeArgs = {
  filename: Scalars['String']['input'];
};


export type QueryHandlingUnitInfoArgs = {
  huCode: Scalars['String']['input'];
};


export type QueryHandlingUnitOverviewsArgs = {
  shipmentId: Scalars['UUID']['input'];
};


export type QueryHandlingUnitReceivedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<HandlingUnitReceivedSortInput>>;
  where?: InputMaybe<HandlingUnitReceivedFilterInput>;
};


export type QueryHandlingUnitsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<HandlingUnitSortInput>>;
  where?: InputMaybe<HandlingUnitFilterInput>;
};


export type QueryKitByIdArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryKitByKitNoArgs = {
  kitNo: Scalars['String']['input'];
};


export type QueryKitComponentSerialInfoArgs = {
  componentCode: Scalars['String']['input'];
  kitNo: Scalars['String']['input'];
};


export type QueryKitComponentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<KitComponentSortInput>>;
  where?: InputMaybe<KitComponentFilterInput>;
};


export type QueryKitListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<KitListItemDtoSortInput>>;
  plantCode: Scalars['String']['input'];
};


export type QueryKitOverviewArgs = {
  input: KitOverviewQueryInput;
};


export type QueryKitStatusArgs = {
  kitNo: Scalars['String']['input'];
};


export type QueryKitStatusEventTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<KitStatusEventTypeSortInput>>;
  where?: InputMaybe<KitStatusEventTypeFilterInput>;
};


export type QueryKitStatusEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<KitStatusEventSortInput>>;
  where?: InputMaybe<KitStatusEventFilterInput>;
};


export type QueryKitStatusEventsByDateArgs = {
  fromDate: Scalars['DateTime']['input'];
  kitStatusCode?: InputMaybe<KitStatusCode>;
  plantCode: Scalars['String']['input'];
  toDate: Scalars['DateTime']['input'];
};


export type QueryKitVinsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<KitVinSortInput>>;
  where?: InputMaybe<KitVinFilterInput>;
};


export type QueryKitsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<KitSortInput>>;
  where?: InputMaybe<KitFilterInput>;
};


export type QueryKitsByCurrentKitStatusArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  eventCode?: InputMaybe<KitStatusCode>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<KitSortInput>>;
  plantCode: Scalars['String']['input'];
  where?: InputMaybe<KitFilterInput>;
};


export type QueryKitsByKitStatusCountArgs = {
  plantCode: Scalars['String']['input'];
};


export type QueryKitsByLotArgs = {
  lotNo: Scalars['String']['input'];
};


export type QueryLotByLotNoArgs = {
  lotNo: Scalars['String']['input'];
};


export type QueryLotInfoArgs = {
  lotNo: Scalars['String']['input'];
};


export type QueryLotKitsArgs = {
  input: LotKitsQueryInput;
};


export type QueryLotListByBomIdArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryLotOverview2Args = {
  input: LotOverviewQueryInput;
};


export type QueryLotPartDiffArgs = {
  input: LotPartDiffQueryInput;
};


export type QueryLotPartInfoArgs = {
  lotNo: Scalars['String']['input'];
  partNo: Scalars['String']['input'];
};


export type QueryLotPartsArgs = {
  input: LotPartsQueryInput;
};


export type QueryLotPartsByShipOrBomArgs = {
  input: LotPartsByShipOrBomQueryInput;
};


export type QueryLotPartsReceivedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<LotPartReceivedSortInput>>;
  where?: InputMaybe<LotPartReceivedFilterInput>;
};


export type QueryLotsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
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
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<PartTypeSortInput>>;
  where?: InputMaybe<PartTypeFilterInput>;
};


export type QueryPartnerKitStatusArgs = {
  request: PartnerKitStatusQueryInput;
};


export type QueryPartnerKitVinArgs = {
  request: PartneKitVinQueryInput;
};


export type QueryPartsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<PartSortInput>>;
  where?: InputMaybe<PartFilterInput>;
};


export type QueryPcvComponentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<PcvComponentSortInput>>;
  where?: InputMaybe<PcvComponentFilterInput>;
};


export type QueryPcvDrivesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<PcvDriveSortInput>>;
  where?: InputMaybe<PcvDriveFilterInput>;
};


export type QueryPcvEnginesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<PcvEngineSortInput>>;
  where?: InputMaybe<PcvEngineFilterInput>;
};


export type QueryPcvModelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<PcvModelSortInput>>;
  where?: InputMaybe<PcvModelFilterInput>;
};


export type QueryPcvPaintArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<PcvPaintSortInput>>;
  where?: InputMaybe<PcvPaintFilterInput>;
};


export type QueryPcvSeriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<PcvSeriesSortInput>>;
  where?: InputMaybe<PcvSeriesFilterInput>;
};


export type QueryPcvSubmodelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<PcvSubmodelSortInput>>;
  where?: InputMaybe<PcvSubmodelFilterInput>;
};


export type QueryPcvTransmissionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<PcvTransmissionSortInput>>;
  where?: InputMaybe<PcvTransmissionFilterInput>;
};


export type QueryPcvTrimArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<PcvTrimSortInput>>;
  where?: InputMaybe<PcvTrimFilterInput>;
};


export type QueryPcvsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<PcvSortInput>>;
  where?: InputMaybe<PcvFilterInput>;
};


export type QueryPcvsByPlantArgs = {
  input: GetPcvsByPlantQueryInput;
};


export type QueryPendingComponentSerialsArgs = {
  request: CdcPendingSerialsQueryInput;
};


export type QueryPlantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<PlantSortInput>>;
  where?: InputMaybe<PlantFilterInput>;
};


export type QueryRecentBomFilesArgs = {
  input: RecentBomFilesQueryInput;
};


export type QueryRecentLotPartsReceivedArgs = {
  count?: Scalars['Int']['input'];
};


export type QueryRecentShipmentFilesArgs = {
  input: RecentShipmentFilesQueryInput;
};


export type QueryShipmentInvoicesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ShipmentInvoiceSortInput>>;
  where?: InputMaybe<ShipmentInvoiceFilterInput>;
};


export type QueryShipmentOverviewArgs = {
  query: ShipmentOverviewQueryInput;
};


export type QueryShipmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ShipmentSortInput>>;
  where?: InputMaybe<ShipmentFilterInput>;
};


export type QueryStationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<StationSortInput>>;
  where?: InputMaybe<StationFilterInput>;
};


export type QueryVehicleComponentByVinAndComponentArgs = {
  componentCode: Scalars['String']['input'];
  vin: Scalars['String']['input'];
};


export type QueryVinAllocationArgs = {
  input: VinAllocationQueryInput;
};

export type RawBom = {
  __typename?: 'RawBom';
  bomFileCreatedAt: Scalars['DateTime']['output'];
  filename: Scalars['String']['output'];
  kittingPlantCode: Scalars['String']['output'];
  lots: Array<RawBomLot>;
  plantCode: Scalars['String']['output'];
  sequenceNumber: Scalars['Int']['output'];
};

export type RawBomLot = {
  __typename?: 'RawBomLot';
  kits: Array<RawBomLotKit>;
  lotNo: Scalars['String']['output'];
  lotParts: Array<RawBomLotPart>;
  pcvCode: Scalars['String']['output'];
};

export type RawBomLotKit = {
  __typename?: 'RawBomLotKit';
  kitNo: Scalars['String']['output'];
};

export type RawBomLotPart = {
  __typename?: 'RawBomLotPart';
  lotNo: Scalars['String']['output'];
  originalPartNo: Scalars['String']['output'];
  partDesc: Scalars['String']['output'];
  partNo: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
};

export type ReceiveHandlingUnitInput = {
  handlingUnitCode: Scalars['String']['input'];
  remove?: Scalars['Boolean']['input'];
};

export type ReceiveHandlingUnitPayload = {
  __typename?: 'ReceiveHandlingUnitPayload';
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  invoiceNo?: Maybe<Scalars['String']['output']>;
  lotNo?: Maybe<Scalars['String']['output']>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ReceiveLotPartInput = {
  lotNo: Scalars['String']['input'];
  partNo: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
};

export type RecentBomFilesQueryInput = {
  count: Scalars['Int']['input'];
};

export type RecentBomFilesQueryResult = {
  __typename?: 'RecentBomFilesQueryResult';
  fileName: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lengthBytes: Scalars['Long']['output'];
  lotNumbers: Array<Scalars['String']['output']>;
};

export type RecentShipmentFilesQueryInput = {
  count: Scalars['Int']['input'];
};

export type RecentShipmentFilesQueryResult = {
  __typename?: 'RecentShipmentFilesQueryResult';
  fileName: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lengthBytes: Scalars['Long']['output'];
  lotNumbers: Array<Scalars['String']['output']>;
};

export type RemoveAllComponentStationMappingsPayload = {
  __typename?: 'RemoveAllComponentStationMappingsPayload';
  removedCount: Scalars['Int']['output'];
};

export type ResultOrOfCreateComponentSerialCommandResult = {
  __typename?: 'ResultOrOfCreateComponentSerialCommandResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<CreateComponentSerialCommandResult>;
};

export type ResultOrOfDcwsResponse = {
  __typename?: 'ResultOrOfDcwsResponse';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<DcwsResponse>;
};

export type ResultOrOfImportBomResult = {
  __typename?: 'ResultOrOfImportBomResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<ImportBomResult>;
};

export type ResultOrOfImportShipmentResult = {
  __typename?: 'ResultOrOfImportShipmentResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<ImportShipmentResult>;
};

export type ResultOrOfListOfCdcPendingSerialsQueryResult = {
  __typename?: 'ResultOrOfListOfCdcPendingSerialsQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<Array<Maybe<CdcPendingSerialsQueryResult>>>;
};

export type ResultOrOfListOfUpdateLotKitStatusCommandResult = {
  __typename?: 'ResultOrOfListOfUpdateLotKitStatusCommandResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<Array<Maybe<UpdateLotKitStatusCommandResult>>>;
};

export type ResultOrOfLotOverviewQueryResult = {
  __typename?: 'ResultOrOfLotOverviewQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<LotOverviewQueryResult>;
};

export type ResultOrOfLotPartDto = {
  __typename?: 'ResultOrOfLotPartDTO';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<LotPartDto>;
};

export type ResultOrOfLotPartDiffQueryResult = {
  __typename?: 'ResultOrOfLotPartDiffQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<LotPartDiffQueryResult>;
};

export type ResultOrOfLotPartsByShipOrBomQueryResult = {
  __typename?: 'ResultOrOfLotPartsByShipOrBomQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<LotPartsByShipOrBomQueryResult>;
};

export type ResultOrOfParsePcvsXlxsResult = {
  __typename?: 'ResultOrOfParsePcvsXlxsResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<ParsePcvsXlxsResult>;
};

export type ResultOrOfParseStationsXlsxCommandResult = {
  __typename?: 'ResultOrOfParseStationsXlsxCommandResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<ParseStationsXlsxCommandResult>;
};

export type ResultOrOfPartLotPartsQueryResult = {
  __typename?: 'ResultOrOfPartLotPartsQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<PartLotPartsQueryResult>;
};

export type ResultOrOfPartOverviewQueryResult = {
  __typename?: 'ResultOrOfPartOverviewQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<PartOverviewQueryResult>;
};

export type ResultOrOfPartnerGetVinQueryResult = {
  __typename?: 'ResultOrOfPartnerGetVinQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<PartnerGetVinQueryResult>;
};

export type ResultOrOfPartnerKitStatusQueryResult = {
  __typename?: 'ResultOrOfPartnerKitStatusQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<PartnerKitStatusQueryResult>;
};

export type ResultOrOfPlantOverviewDto = {
  __typename?: 'ResultOrOfPlantOverviewDTO';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<PlantOverviewDto>;
};

export type ResultOrOfRawBom = {
  __typename?: 'ResultOrOfRawBom';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<RawBom>;
};

export type ResultOrOfReceiveHandlingUnitPayload = {
  __typename?: 'ResultOrOfReceiveHandlingUnitPayload';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<ReceiveHandlingUnitPayload>;
};

export type ResultOrOfRemoveAllComponentStationMappingsPayload = {
  __typename?: 'ResultOrOfRemoveAllComponentStationMappingsPayload';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<RemoveAllComponentStationMappingsPayload>;
};

export type ResultOrOfSavePcvResult = {
  __typename?: 'ResultOrOfSavePcvResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<SavePcvResult>;
};

export type ResultOrOfSaveStationCommandResult = {
  __typename?: 'ResultOrOfSaveStationCommandResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<SaveStationCommandResult>;
};

export type ResultOrOfSetComponentStationMappingsPayload = {
  __typename?: 'ResultOrOfSetComponentStationMappingsPayload';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<SetComponentStationMappingsPayload>;
};

export type ResultOrOfSetKitVinCommandResult = {
  __typename?: 'ResultOrOfSetKitVinCommandResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<SetKitVinCommandResult>;
};

export type ResultOrOfSetPartTypeResult = {
  __typename?: 'ResultOrOfSetPartTypeResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<SetPartTypeResult>;
};

export type ResultOrOfShipmentOverviewQueryResult = {
  __typename?: 'ResultOrOfShipmentOverviewQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<ShipmentOverviewQueryResult>;
};

export type ResultOrOfSyncKitComponentsResult = {
  __typename?: 'ResultOrOfSyncKitComponentsResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<SyncKitComponentsResult>;
};

export type ResultOrOfUpdateKitStatusCommandResult = {
  __typename?: 'ResultOrOfUpdateKitStatusCommandResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<UpdateKitStatusCommandResult>;
};

export type ResultOrOfUpdatePartnerKitStatusCommandResult = {
  __typename?: 'ResultOrOfUpdatePartnerKitStatusCommandResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<UpdatePartnerKitStatusCommandResult>;
};

export type SavePcvInput = {
  componentCodes: Array<Scalars['String']['input']>;
  modelYear: Scalars['String']['input'];
  pcvCode: Scalars['String']['input'];
  pcvDrive: Scalars['String']['input'];
  pcvEngine: Scalars['String']['input'];
  pcvModel: Scalars['String']['input'];
  pcvPaint: Scalars['String']['input'];
  pcvSeries: Scalars['String']['input'];
  pcvSubmodel: Scalars['String']['input'];
  pcvTransmission: Scalars['String']['input'];
  pcvTrim: Scalars['String']['input'];
  plantCode: Scalars['String']['input'];
};

export type SavePcvResult = {
  __typename?: 'SavePcvResult';
  id: Scalars['UUID']['output'];
  modelYear: Scalars['String']['output'];
  pcvCode: Scalars['String']['output'];
  pcvComponentCodes: Array<Scalars['String']['output']>;
  pcvDrive?: Maybe<ICategory>;
  pcvEngine?: Maybe<ICategory>;
  pcvModel?: Maybe<ICategory>;
  pcvPaint?: Maybe<ICategory>;
  pcvSeries?: Maybe<ICategory>;
  pcvSubmodel?: Maybe<ICategory>;
  pcvTransmission?: Maybe<ICategory>;
  pcvTrim?: Maybe<ICategory>;
  plantCode: Scalars['String']['output'];
};

export type SaveStationCommandInput = {
  code: Scalars['String']['input'];
  componentCodes: Array<Scalars['String']['input']>;
  plantCode: Scalars['String']['input'];
  sequence: Scalars['Int']['input'];
};

export type SaveStationCommandResult = {
  __typename?: 'SaveStationCommandResult';
  code: Scalars['String']['output'];
  componentCodes: Array<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  plantCode: Scalars['String']['output'];
  sequence: Scalars['Int']['output'];
};

export type SetComponentStationMappingsPayload = {
  __typename?: 'SetComponentStationMappingsPayload';
  mappings: Array<ComponentStationMapping>;
};

export type SetKitVinCommandInput = {
  kitNo: Scalars['String']['input'];
  vin: Scalars['String']['input'];
};

export type SetKitVinCommandResult = {
  __typename?: 'SetKitVinCommandResult';
  kitId: Scalars['UUID']['output'];
  kitNo: Scalars['String']['output'];
  vin: Scalars['String']['output'];
};

export type SetPartTypeCommandInput = {
  partDescription: Scalars['String']['input'];
  partNo: Scalars['String']['input'];
  partType: Scalars['String']['input'];
};

export type SetPartTypeResult = {
  __typename?: 'SetPartTypeResult';
  partDescription: Scalars['String']['output'];
  partId: Scalars['UUID']['output'];
  partNo: Scalars['String']['output'];
  partType: Scalars['String']['output'];
};

export type ShipFile = {
  __typename?: 'ShipFile';
  created: Scalars['DateTime']['output'];
  filename: Scalars['String']['output'];
  lots: Array<ShipFileLot>;
  plantCode: Scalars['String']['output'];
  sequence: Scalars['Int']['output'];
};

export type ShipFileInvoice = {
  __typename?: 'ShipFileInvoice';
  invoiceNo: Scalars['String']['output'];
  parts: Array<ShipFilePart>;
  shipDate: Scalars['DateTime']['output'];
};

export type ShipFileLot = {
  __typename?: 'ShipFileLot';
  invoices: Array<ShipFileInvoice>;
  lotNo: Scalars['String']['output'];
};

export type ShipFilePart = {
  __typename?: 'ShipFilePart';
  customerPartDesc: Scalars['String']['output'];
  customerPartNo: Scalars['String']['output'];
  handlingUnitCode: Scalars['String']['output'];
  originalPartNo: Scalars['String']['output'];
  partNo: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
};

export type Shipment = {
  __typename?: 'Shipment';
  createdAt: Scalars['DateTime']['output'];
  filename?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  lots: Array<Lot>;
  plant: Plant;
  plantId: Scalars['UUID']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  sequence: Scalars['Int']['output'];
};

export type ShipmentFilterInput = {
  and?: InputMaybe<Array<ShipmentFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  filename?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  lots?: InputMaybe<ListFilterInputTypeOfLotFilterInput>;
  or?: InputMaybe<Array<ShipmentFilterInput>>;
  plant?: InputMaybe<PlantFilterInput>;
  plantId?: InputMaybe<UuidOperationFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  sequence?: InputMaybe<IntOperationFilterInput>;
};

export type ShipmentInvoice = {
  __typename?: 'ShipmentInvoice';
  createdAt: Scalars['DateTime']['output'];
  handlingUnits: Array<HandlingUnit>;
  id: Scalars['UUID']['output'];
  invoiceNo: Scalars['String']['output'];
  lot: Lot;
  lotId: Scalars['UUID']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  shipDate: Scalars['DateTime']['output'];
  shipmentLotId?: Maybe<Scalars['UUID']['output']>;
};

export type ShipmentInvoiceFilterInput = {
  and?: InputMaybe<Array<ShipmentInvoiceFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  handlingUnits?: InputMaybe<ListFilterInputTypeOfHandlingUnitFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  invoiceNo?: InputMaybe<StringOperationFilterInput>;
  lot?: InputMaybe<LotFilterInput>;
  lotId?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<ShipmentInvoiceFilterInput>>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  shipDate?: InputMaybe<DateTimeOperationFilterInput>;
  shipmentLotId?: InputMaybe<UuidOperationFilterInput>;
};

export type ShipmentInvoiceSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  invoiceNo?: InputMaybe<SortEnumType>;
  lot?: InputMaybe<LotSortInput>;
  lotId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  shipDate?: InputMaybe<SortEnumType>;
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
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ShipmentInvoice;
};

export type ShipmentOverviewQueryInput = {
  id: Scalars['UUID']['input'];
};

export type ShipmentOverviewQueryResult = {
  __typename?: 'ShipmentOverviewQueryResult';
  bomId?: Maybe<Scalars['UUID']['output']>;
  bomSequence?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  handlingUnitCount: Scalars['Int']['output'];
  handlingUnitReceivedCount: Scalars['Int']['output'];
  id: Scalars['UUID']['output'];
  invoiceCount: Scalars['Int']['output'];
  lotNumbers: Array<Scalars['String']['output']>;
  lotPartCount: Scalars['Int']['output'];
  lotPartReceivedCount: Scalars['Int']['output'];
  plantCode: Scalars['String']['output'];
  sequence: Scalars['Int']['output'];
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
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Shipment;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StatcionSerialInfo = {
  __typename?: 'StatcionSerialInfo';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  kitComponentId: Scalars['UUID']['output'];
  serial1?: Maybe<Scalars['String']['output']>;
  serial2?: Maybe<Scalars['String']['output']>;
  stationCode: Scalars['String']['output'];
  stationName: Scalars['String']['output'];
  stationSequence: Scalars['Int']['output'];
  verifiedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Station = {
  __typename?: 'Station';
  code: Scalars['String']['output'];
  components: Array<ComponentStation>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  kitComponents: Array<KitComponent>;
  name: Scalars['String']['output'];
  plant: Plant;
  plantId: Scalars['UUID']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  sequence: Scalars['Int']['output'];
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
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Station;
};

export type StatusEventDto = {
  __typename?: 'StatusEventDTO';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  eventDate?: Maybe<Scalars['DateTime']['output']>;
  eventNote?: Maybe<Scalars['String']['output']>;
  eventType: KitStatusCode;
  partnerStatusUpdatedAt?: Maybe<Scalars['DateTime']['output']>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  sequence: Scalars['Int']['output'];
};

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ncontains?: InputMaybe<Scalars['String']['input']>;
  nendsWith?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nstartsWith?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type SyncKitComponentsResult = {
  __typename?: 'SyncKitComponentsResult';
  kits: Array<SyncKitComponentsResultItem>;
};

export type SyncKitComponentsResultItem = {
  __typename?: 'SyncKitComponentsResultItem';
  kitNo: Scalars['String']['output'];
};

export type UpdateKitStatusCommandInput = {
  dealerCode: Scalars['String']['input'];
  eventCode: KitStatusCode;
  eventDate: Scalars['DateTime']['input'];
  kitNo: Scalars['String']['input'];
};

export type UpdateKitStatusCommandResult = {
  __typename?: 'UpdateKitStatusCommandResult';
  dealerCode: Scalars['String']['output'];
  eventDateTime: Scalars['DateTime']['output'];
  kitNo: Scalars['String']['output'];
  kitStatusCode: KitStatusCode;
  kitStatusEventId: Scalars['UUID']['output'];
};

export type UpdateLotKitStatusCommandInput = {
  dealerCode: Scalars['String']['input'];
  eventDate: Scalars['DateTime']['input'];
  kitStatusCode: KitStatusCode;
  lotNo: Scalars['String']['input'];
};

export type UpdateLotKitStatusCommandResult = {
  __typename?: 'UpdateLotKitStatusCommandResult';
  dealerCode: Scalars['String']['output'];
  eventDateTime: Scalars['DateTime']['output'];
  kitNo: Scalars['String']['output'];
  kitStatusCode: KitStatusCode;
  kitStatusEventId: Scalars['UUID']['output'];
};

export type UpdatePartnerKitStatusCommandInput = {
  kitNumber: Scalars['String']['input'];
  status: PartnerStatusCode;
  statusDate: Scalars['DateTime']['input'];
};

export type UpdatePartnerKitStatusCommandResult = {
  __typename?: 'UpdatePartnerKitStatusCommandResult';
  kitNumber: Scalars['String']['output'];
  kittingPlantCode: Scalars['String']['output'];
  lotNumber: Scalars['String']['output'];
  plantCode: Scalars['String']['output'];
  status: Scalars['String']['output'];
  statusDate: Scalars['String']['output'];
};

export type UuidOperationFilterInput = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  gt?: InputMaybe<Scalars['UUID']['input']>;
  gte?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  lt?: InputMaybe<Scalars['UUID']['input']>;
  lte?: InputMaybe<Scalars['UUID']['input']>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
  ngt?: InputMaybe<Scalars['UUID']['input']>;
  ngte?: InputMaybe<Scalars['UUID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  nlt?: InputMaybe<Scalars['UUID']['input']>;
  nlte?: InputMaybe<Scalars['UUID']['input']>;
};

export type VinAllocationQueryInput = {
  lotNo: Scalars['String']['input'];
};

export type VinAllocationQueryResult = {
  __typename?: 'VinAllocationQueryResult';
  items: Array<VinAllocationQueryResultItem>;
};

export type VinAllocationQueryResultItem = {
  __typename?: 'VinAllocationQueryResultItem';
  drive?: Maybe<Scalars['String']['output']>;
  engine?: Maybe<Scalars['String']['output']>;
  handlingUnitCount: Scalars['Int']['output'];
  kitNo: Scalars['String']['output'];
  lotNo: Scalars['String']['output'];
  model: Scalars['String']['output'];
  modelYear: Scalars['String']['output'];
  paint?: Maybe<Scalars['String']['output']>;
  pcvCode: Scalars['String']['output'];
  plabBuildDate?: Maybe<Scalars['DateTime']['output']>;
  plantCode: Scalars['String']['output'];
  series?: Maybe<Scalars['String']['output']>;
  shipmentSequence: Scalars['Int']['output'];
  subModel?: Maybe<Scalars['String']['output']>;
  transmission?: Maybe<Scalars['String']['output']>;
  trim?: Maybe<Scalars['String']['output']>;
  vin: Scalars['String']['output'];
};

export type ImoprtBomMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
}>;


export type ImoprtBomMutation = { __typename?: 'Mutation', importBOM: { __typename?: 'ResultOrOfImportBomResult', payload?: { __typename?: 'ImportBomResult', bomId: any, plantCode: string, sequence: number } | null, errors: Array<{ __typename?: 'Error', description: string }> } };

export type ImportBomFileTextMutationVariables = Exact<{
  filename: Scalars['String']['input'];
  text: Scalars['String']['input'];
}>;


export type ImportBomFileTextMutation = { __typename?: 'Mutation', importBOMFileText: { __typename?: 'ResultOrOfImportBomResult', payload?: { __typename?: 'ImportBomResult', bomId: any, plantCode: string, sequence: number } | null, errors: Array<{ __typename?: 'Error', description: string }> } };

export type ImportShipmentMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
}>;


export type ImportShipmentMutation = { __typename?: 'Mutation', importShipment: { __typename?: 'ResultOrOfImportShipmentResult', payload?: { __typename?: 'ImportShipmentResult', shipmentId: any, plantCode: string, sequence: number, lotCount: number } | null, errors: Array<{ __typename?: 'Error', code: string, description: string }> } };

export type ImportShipmentFileTextMutationVariables = Exact<{
  filename: Scalars['String']['input'];
  text: Scalars['String']['input'];
}>;


export type ImportShipmentFileTextMutation = { __typename?: 'Mutation', importShipmentFileText: { __typename?: 'ResultOrOfImportShipmentResult', payload?: { __typename?: 'ImportShipmentResult', shipmentId: any, plantCode: string, sequence: number, lotCount: number } | null, errors: Array<{ __typename?: 'Error', code: string, description: string }> } };

export type ParseBomFileMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
}>;


export type ParseBomFileMutation = { __typename?: 'Mutation', parseBomFile: { __typename?: 'ResultOrOfRawBom', isSuccess: boolean, payload?: { __typename?: 'RawBom', plantCode: string, filename: string, sequenceNumber: number, kittingPlantCode: string, lots: Array<{ __typename?: 'RawBomLot', lotNo: string }> } | null, errors: Array<{ __typename?: 'Error', description: string }> } };

export type ParseBomFileTextMutationVariables = Exact<{
  filename: Scalars['String']['input'];
  text: Scalars['String']['input'];
}>;


export type ParseBomFileTextMutation = { __typename?: 'Mutation', parseBomFileText: { __typename?: 'ResultOrOfRawBom', isFailure: boolean, isSuccess: boolean, errors: Array<{ __typename?: 'Error', description: string }>, payload?: { __typename?: 'RawBom', bomFileCreatedAt: any, filename: string, kittingPlantCode: string, plantCode: string, sequenceNumber: number, lots: Array<{ __typename?: 'RawBomLot', lotNo: string }> } | null } };

export type ParseShipmentFileMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
}>;


export type ParseShipmentFileMutation = { __typename?: 'Mutation', parseShipmentFile: { __typename?: 'ShipFile', sequence: number, plantCode: string, created: any, filename: string, lots: Array<{ __typename?: 'ShipFileLot', lotNo: string, invoices: Array<{ __typename?: 'ShipFileInvoice', invoiceNo: string, shipDate: any, parts: Array<{ __typename?: 'ShipFilePart', partNo: string, handlingUnitCode: string, customerPartNo: string, customerPartDesc: string, quantity: number }> }> }> } };

export type ParseShipmentFileTextMutationVariables = Exact<{
  filename: Scalars['String']['input'];
  text: Scalars['String']['input'];
}>;


export type ParseShipmentFileTextMutation = { __typename?: 'Mutation', parseShipmentFileText: { __typename?: 'ShipFile', sequence: number, plantCode: string, created: any, filename: string, lots: Array<{ __typename?: 'ShipFileLot', lotNo: string, invoices: Array<{ __typename?: 'ShipFileInvoice', invoiceNo: string, shipDate: any, parts: Array<{ __typename?: 'ShipFilePart', partNo: string, handlingUnitCode: string, customerPartNo: string, customerPartDesc: string, quantity: number }> }> }> } };

export type SetKitVinMutationVariables = Exact<{
  input: SetKitVinCommandInput;
}>;


export type SetKitVinMutation = { __typename?: 'Mutation', setKitVin: { __typename?: 'ResultOrOfSetKitVinCommandResult', payload?: { __typename?: 'SetKitVinCommandResult', vin: string, kitNo: string } | null, errors: Array<{ __typename?: 'Error', code: string, description: string }> } };

export type PlantsQueryVariables = Exact<{ [key: string]: never; }>;


export type PlantsQuery = { __typename?: 'Query', plants?: { __typename?: 'PlantsConnection', nodes?: Array<{ __typename?: 'Plant', code: string, name: string, kittingPlantCode: string, createdAt: any }> | null } | null };

export type FordInterfaceFileTypeQueryVariables = Exact<{
  filename: Scalars['String']['input'];
}>;


export type FordInterfaceFileTypeQuery = { __typename?: 'Query', fordInterfaceFileType: FordInterfaceFileType };
