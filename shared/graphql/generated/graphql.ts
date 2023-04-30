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

export type BomFile = {
  __typename?: 'BomFile';
  bomFileCreatedAt: Scalars['String'];
  filename: Scalars['String'];
  lotEntries: Array<BomFileLot>;
  lotParts: Array<BomFileLotPart>;
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};

export type BomFileInput = {
  bomFileCreatedAt: Scalars['String'];
  filename: Scalars['String'];
  lotEntries: Array<BomFileLotInput>;
  lotParts: Array<BomFileLotPartInput>;
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
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
  kits: Array<BomFileKit>;
  lotNo: Scalars['String'];
};

export type BomFileLotInput = {
  kits: Array<BomFileKitInput>;
  lotNo: Scalars['String'];
};

export type BomFileLotPart = {
  __typename?: 'BomFileLotPart';
  lotNo: Scalars['String'];
  partDesc: Scalars['String'];
  partNo: Scalars['String'];
  quantity: Scalars['Int'];
};

export type BomFileLotPartInput = {
  lotNo: Scalars['String'];
  partDesc: Scalars['String'];
  partNo: Scalars['String'];
  quantity: Scalars['Int'];
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
  filename?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  lots?: Maybe<Array<Maybe<BomList_Lot>>>;
  plantCode?: Maybe<Scalars['String']>;
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
  lotNo?: Maybe<Scalars['String']>;
  shipmentSequence?: Maybe<Scalars['Int']>;
};

export type BomOverviewDto = {
  __typename?: 'BomOverviewDTO';
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  lotNumbers: Array<Scalars['String']>;
  partCount: Scalars['Int'];
  pcvCodes: Array<Scalars['String']>;
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
  shipments: Array<BomShipInfoDto>;
  vehicleCount: Scalars['Int'];
};

export type BomShipInfoDto = {
  __typename?: 'BomShipInfoDTO';
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
  shipmentId: Scalars['UUID'];
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
  componentStations: Array<ComponentStation>;
  createdAt: Scalars['DateTime'];
  dcwsRequired: Scalars['Boolean'];
  iconURL: Scalars['String'];
  id: Scalars['UUID'];
  kitComponents: Array<KitComponent>;
  name: Scalars['String'];
  pcvComponents: Array<PcvComponent>;
  productionStation?: Maybe<ProductionStation>;
  productionStationId?: Maybe<Scalars['UUID']>;
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type ComponentFilterInput = {
  and?: InputMaybe<Array<ComponentFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  componentSerialRule?: InputMaybe<ComponentSerialRuleOperationFilterInput>;
  componentStations?: InputMaybe<ListFilterInputTypeOfComponentStationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  dcwsRequired?: InputMaybe<BooleanOperationFilterInput>;
  iconURL?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  kitComponents?: InputMaybe<ListFilterInputTypeOfKitComponentFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ComponentFilterInput>>;
  pcvComponents?: InputMaybe<ListFilterInputTypeOfPcvComponentFilterInput>;
  productionStation?: InputMaybe<ProductionStationFilterInput>;
  productionStationId?: InputMaybe<UuidOperationFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type ComponentInput = {
  code: Scalars['String'];
  dcwsRequired?: InputMaybe<Scalars['Boolean']>;
  dcwsSerialCaptureRule: ComponentSerialRule;
  id?: InputMaybe<Scalars['UUID']>;
  name: Scalars['String'];
  productionStationCode?: InputMaybe<Scalars['String']>;
};

export type ComponentSerial = {
  __typename?: 'ComponentSerial';
  createdAt: Scalars['DateTime'];
  dcwsResponses?: Maybe<Array<Maybe<DcwsResponse>>>;
  id: Scalars['UUID'];
  kitComponent?: Maybe<KitComponent>;
  kitComponentId: Scalars['UUID'];
  original_Serial1?: Maybe<Scalars['String']>;
  original_Serial2?: Maybe<Scalars['String']>;
  removedAt?: Maybe<Scalars['DateTime']>;
  serial1?: Maybe<Scalars['String']>;
  serial2?: Maybe<Scalars['String']>;
  verifiedAt?: Maybe<Scalars['DateTime']>;
};

export type ComponentSerialDto = {
  __typename?: 'ComponentSerialDTO';
  componentCode: Scalars['String'];
  componentName: Scalars['String'];
  componentSerialId: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  lotNo: Scalars['String'];
  productionStationCode: Scalars['String'];
  productionStationName: Scalars['String'];
  serial1: Scalars['String'];
  serial2: Scalars['String'];
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
  serial1?: InputMaybe<Scalars['String']>;
  serial2?: InputMaybe<Scalars['String']>;
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
  dcwsRequired?: InputMaybe<SortEnumType>;
  iconURL?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  productionStation?: InputMaybe<ProductionStationSortInput>;
  productionStationId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

export type ComponentStation = {
  __typename?: 'ComponentStation';
  component: Component;
  componentId: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  saveCDCComponent: Scalars['Boolean'];
  station: ProductionStation;
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
  station?: InputMaybe<ProductionStationFilterInput>;
  stationId?: InputMaybe<UuidOperationFilterInput>;
};

export type ComponentStationMapping = {
  __typename?: 'ComponentStationMapping';
  componentCode?: Maybe<Scalars['String']>;
  saveCDCComponent: Scalars['Boolean'];
  stationCode?: Maybe<Scalars['String']>;
};

export type ComponentStationMappingInput = {
  componentCode?: InputMaybe<Scalars['String']>;
  saveCDCComponent: Scalars['Boolean'];
  stationCode?: InputMaybe<Scalars['String']>;
};

export type ComponentStationMappingsInput = {
  mappings?: InputMaybe<Array<InputMaybe<ComponentStationMappingInput>>>;
};

export type ComponentStationSortInput = {
  component?: InputMaybe<ComponentSortInput>;
  componentId?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  saveCDCComponent?: InputMaybe<SortEnumType>;
  station?: InputMaybe<ProductionStationSortInput>;
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

export type ConfigurationDto = {
  __typename?: 'ConfigurationDTO';
  allowGraphqlIntrospection: Scalars['String'];
  dcwsServiceAddress: Scalars['String'];
  executionTimeoutSeconds: Scalars['String'];
  kitStatusFeedUrl: Scalars['String'];
};

export type CreateCategoryInput = {
  code?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
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
  errorMessage?: InputMaybe<Scalars['String']>;
  kitComponentId: Scalars['UUID'];
  responseCode?: InputMaybe<Scalars['String']>;
};

export type DcwsResponse = {
  __typename?: 'DcwsResponse';
  componentSerial?: Maybe<ComponentSerial>;
  componentSerialId: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  dcwsSuccessfulSave: Scalars['Boolean'];
  errorMessage?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  processExcptionCode?: Maybe<Scalars['String']>;
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type DcwsResponseFilterInput = {
  and?: InputMaybe<Array<DcwsResponseFilterInput>>;
  componentSerial?: InputMaybe<ComponentSerialFilterInput>;
  componentSerialId?: InputMaybe<UuidOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  dcwsSuccessfulSave?: InputMaybe<BooleanOperationFilterInput>;
  errorMessage?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<DcwsResponseFilterInput>>;
  processExcptionCode?: InputMaybe<StringOperationFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type DcwsResponseSortInput = {
  componentSerial?: InputMaybe<ComponentSerialSortInput>;
  componentSerialId?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  dcwsSuccessfulSave?: InputMaybe<SortEnumType>;
  errorMessage?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  processExcptionCode?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
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
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type DealerSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
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

export type Entry = {
  __typename?: 'Entry';
  buildCompleted?: Maybe<Scalars['DateTime']>;
  currentTimeLineCode: TimeLineEventCode;
  customReceived?: Maybe<Scalars['DateTime']>;
  dealerCode?: Maybe<Scalars['String']>;
  engineSerialNumber?: Maybe<Scalars['String']>;
  gateRelease?: Maybe<Scalars['DateTime']>;
  kitNo?: Maybe<Scalars['String']>;
  lotNo?: Maybe<Scalars['String']>;
  originalPlanBuild?: Maybe<Scalars['DateTime']>;
  planBuild?: Maybe<Scalars['DateTime']>;
  txType: SnapshotChangeStatus;
  verifyVIN?: Maybe<Scalars['DateTime']>;
  vin?: Maybe<Scalars['String']>;
  wholesale?: Maybe<Scalars['DateTime']>;
};

export type Error = {
  __typename?: 'Error';
  message: Scalars['String'];
  path: Array<Scalars['String']>;
};

export enum FordInterfaceFileType {
  Bom = 'BOM',
  PartnerStatusAck = 'PARTNER_STATUS_ACK',
  Ship = 'SHIP',
  Unkown = 'UNKOWN',
  Vin = 'VIN'
}

export type Hu_Part = {
  __typename?: 'HU_Part';
  partDesc: Scalars['String'];
  partNo: Scalars['String'];
  quantity: Scalars['Int'];
};

export type HandlingUnit = {
  __typename?: 'HandlingUnit';
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  parts?: Maybe<Array<Maybe<ShipmentPart>>>;
  received?: Maybe<Array<Maybe<HandlingUnitReceived>>>;
  removedAt?: Maybe<Scalars['DateTime']>;
  shipmentInvoice?: Maybe<ShipmentInvoice>;
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
  modelCode?: Maybe<Scalars['String']>;
  modelName?: Maybe<Scalars['String']>;
  partCount: Scalars['Int'];
  parts: Array<Hu_Part>;
  plantCode: Scalars['String'];
  receivedAt?: Maybe<Scalars['DateTime']>;
  shipmentId: Scalars['UUID'];
  shipmentSequence: Scalars['Int'];
};

export type HandlingUnitOverview = {
  __typename?: 'HandlingUnitOverview';
  createdAt: Scalars['DateTime'];
  handlingUnitCode?: Maybe<Scalars['String']>;
  invoiceNo?: Maybe<Scalars['String']>;
  lotNo?: Maybe<Scalars['String']>;
  partCount: Scalars['Int'];
  plantCode?: Maybe<Scalars['String']>;
  receiveCancledAt?: Maybe<Scalars['DateTime']>;
  receivedAt?: Maybe<Scalars['DateTime']>;
  shipmentSequence: Scalars['Int'];
};

export type HandlingUnitReceived = {
  __typename?: 'HandlingUnitReceived';
  createdAt: Scalars['DateTime'];
  handlingUnit?: Maybe<HandlingUnit>;
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
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
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
  code?: Maybe<Scalars['String']>;
  count: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
};

export type Kit = {
  __typename?: 'Kit';
  createdAt: Scalars['DateTime'];
  dealer?: Maybe<Dealer>;
  dealerId?: Maybe<Scalars['UUID']>;
  id: Scalars['UUID'];
  kitComponents: Array<KitComponent>;
  kitNo: Scalars['String'];
  kitVins: Array<KitVin>;
  lot: Lot;
  lotId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  snapshots: Array<KitSnapshot>;
  timelineEvents: Array<KitTimelineEvent>;
  vin: Scalars['String'];
};

export type KitComponent = {
  __typename?: 'KitComponent';
  component?: Maybe<Component>;
  componentId: Scalars['UUID'];
  componentSerials?: Maybe<Array<Maybe<ComponentSerial>>>;
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  kit?: Maybe<Kit>;
  kitId: Scalars['UUID'];
  productionStation?: Maybe<ProductionStation>;
  productionStationId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  verifiedAt?: Maybe<Scalars['DateTime']>;
};


export type KitComponentComponentSerialsArgs = {
  where?: InputMaybe<ComponentSerialFilterInput>;
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
  productionStation?: InputMaybe<ProductionStationFilterInput>;
  productionStationId?: InputMaybe<UuidOperationFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
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
  productionStation?: InputMaybe<ProductionStationSortInput>;
  productionStationId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
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

export type KitFilterInput = {
  and?: InputMaybe<Array<KitFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  dealer?: InputMaybe<DealerFilterInput>;
  dealerId?: InputMaybe<UuidOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  kitComponents?: InputMaybe<ListFilterInputTypeOfKitComponentFilterInput>;
  kitNo?: InputMaybe<StringOperationFilterInput>;
  kitVins?: InputMaybe<ListFilterInputTypeOfKitVinFilterInput>;
  lot?: InputMaybe<LotFilterInput>;
  lotId?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<KitFilterInput>>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  snapshots?: InputMaybe<ListFilterInputTypeOfKitSnapshotFilterInput>;
  timelineEvents?: InputMaybe<ListFilterInputTypeOfKitTimelineEventFilterInput>;
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
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: KitListItemDto;
};

export type KitListItemDto = {
  __typename?: 'KitListItemDTO';
  componentCount?: Maybe<Scalars['Int']>;
  id: Scalars['UUID'];
  imported?: Maybe<Scalars['DateTime']>;
  kitNo: Scalars['String'];
  lastTimelineEvent?: Maybe<Scalars['String']>;
  lastTimelineEventDate?: Maybe<Scalars['DateTime']>;
  lotNo: Scalars['String'];
  modelCode: Scalars['String'];
  modelName: Scalars['String'];
  scannedComponentCount?: Maybe<Scalars['Int']>;
  verifiedComponentCount?: Maybe<Scalars['Int']>;
  vin: Scalars['String'];
};

export type KitListItemDtoSortInput = {
  componentCount?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  imported?: InputMaybe<SortEnumType>;
  kitNo?: InputMaybe<SortEnumType>;
  lastTimelineEvent?: InputMaybe<SortEnumType>;
  lastTimelineEventDate?: InputMaybe<SortEnumType>;
  lotNo?: InputMaybe<SortEnumType>;
  modelCode?: InputMaybe<SortEnumType>;
  modelName?: InputMaybe<SortEnumType>;
  scannedComponentCount?: InputMaybe<SortEnumType>;
  verifiedComponentCount?: InputMaybe<SortEnumType>;
  vin?: InputMaybe<SortEnumType>;
};

export type KitSnapshot = {
  __typename?: 'KitSnapshot';
  buildCompleted?: Maybe<Scalars['DateTime']>;
  changeStatusCode: SnapshotChangeStatus;
  createdAt: Scalars['DateTime'];
  customReceived?: Maybe<Scalars['DateTime']>;
  dealerCode?: Maybe<Scalars['String']>;
  engineSerialNumber?: Maybe<Scalars['String']>;
  gateRelease?: Maybe<Scalars['DateTime']>;
  id: Scalars['UUID'];
  kit?: Maybe<Kit>;
  kitId: Scalars['UUID'];
  kitSnapshotRun?: Maybe<KitSnapshotRun>;
  kitSnapshotRunId: Scalars['UUID'];
  kitTimeLineEventType?: Maybe<KitTimelineEventType>;
  kitTimeLineEventTypeId: Scalars['UUID'];
  orginalPlanBuild?: Maybe<Scalars['DateTime']>;
  planBuild?: Maybe<Scalars['DateTime']>;
  removedAt?: Maybe<Scalars['DateTime']>;
  verifyVIN?: Maybe<Scalars['DateTime']>;
  vin?: Maybe<Scalars['String']>;
  wholesale?: Maybe<Scalars['DateTime']>;
};

export type KitSnapshotFilterInput = {
  and?: InputMaybe<Array<KitSnapshotFilterInput>>;
  buildCompleted?: InputMaybe<DateTimeOperationFilterInput>;
  changeStatusCode?: InputMaybe<SnapshotChangeStatusOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  customReceived?: InputMaybe<DateTimeOperationFilterInput>;
  dealerCode?: InputMaybe<StringOperationFilterInput>;
  engineSerialNumber?: InputMaybe<StringOperationFilterInput>;
  gateRelease?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  kit?: InputMaybe<KitFilterInput>;
  kitId?: InputMaybe<UuidOperationFilterInput>;
  kitSnapshotRun?: InputMaybe<KitSnapshotRunFilterInput>;
  kitSnapshotRunId?: InputMaybe<UuidOperationFilterInput>;
  kitTimeLineEventType?: InputMaybe<KitTimelineEventTypeFilterInput>;
  kitTimeLineEventTypeId?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<KitSnapshotFilterInput>>;
  orginalPlanBuild?: InputMaybe<DateTimeOperationFilterInput>;
  planBuild?: InputMaybe<DateTimeOperationFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  verifyVIN?: InputMaybe<DateTimeOperationFilterInput>;
  vin?: InputMaybe<StringOperationFilterInput>;
  wholesale?: InputMaybe<DateTimeOperationFilterInput>;
};

export type KitSnapshotInput = {
  allowMultipleSnapshotsPerDay: Scalars['Boolean'];
  plantCode: Scalars['String'];
  rejectIfNoChanges: Scalars['Boolean'];
  rejectIfPriorSnapshotNotAcknowledged: Scalars['Boolean'];
  runDate?: InputMaybe<Scalars['DateTime']>;
};

export type KitSnapshotRun = {
  __typename?: 'KitSnapshotRun';
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  kitSnapshots?: Maybe<Array<Maybe<KitSnapshot>>>;
  partnerStatusAck?: Maybe<PartnerStatusAck>;
  plant?: Maybe<Plant>;
  plantId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  runDate: Scalars['DateTime'];
  sequence: Scalars['Int'];
};

export type KitSnapshotRunDto = {
  __typename?: 'KitSnapshotRunDTO';
  entries?: Maybe<Array<Maybe<Entry>>>;
  partnerPlantCode?: Maybe<Scalars['String']>;
  partnerPlantType?: Maybe<Scalars['String']>;
  partnerStatusAck?: Maybe<PartnerStatusAckDto>;
  partnerStatusFilename?: Maybe<Scalars['String']>;
  plantCode?: Maybe<Scalars['String']>;
  runDate: Scalars['DateTime'];
  sequence: Scalars['Int'];
};

export type KitSnapshotRunFilterInput = {
  and?: InputMaybe<Array<KitSnapshotRunFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  kitSnapshots?: InputMaybe<ListFilterInputTypeOfKitSnapshotFilterInput>;
  or?: InputMaybe<Array<KitSnapshotRunFilterInput>>;
  partnerStatusAck?: InputMaybe<PartnerStatusAckFilterInput>;
  plant?: InputMaybe<PlantFilterInput>;
  plantId?: InputMaybe<UuidOperationFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  runDate?: InputMaybe<DateTimeOperationFilterInput>;
  sequence?: InputMaybe<IntOperationFilterInput>;
};

export type KitSnapshotRunSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  partnerStatusAck?: InputMaybe<PartnerStatusAckSortInput>;
  plant?: InputMaybe<PlantSortInput>;
  plantId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  runDate?: InputMaybe<SortEnumType>;
  sequence?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type KitSnapshotRunsConnection = {
  __typename?: 'KitSnapshotRunsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<KitSnapshotRunsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<KitSnapshotRun>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
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
  buildCompleted?: InputMaybe<SortEnumType>;
  changeStatusCode?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  customReceived?: InputMaybe<SortEnumType>;
  dealerCode?: InputMaybe<SortEnumType>;
  engineSerialNumber?: InputMaybe<SortEnumType>;
  gateRelease?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  kit?: InputMaybe<KitSortInput>;
  kitId?: InputMaybe<SortEnumType>;
  kitSnapshotRun?: InputMaybe<KitSnapshotRunSortInput>;
  kitSnapshotRunId?: InputMaybe<SortEnumType>;
  kitTimeLineEventType?: InputMaybe<KitTimelineEventTypeSortInput>;
  kitTimeLineEventTypeId?: InputMaybe<SortEnumType>;
  orginalPlanBuild?: InputMaybe<SortEnumType>;
  planBuild?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  verifyVIN?: InputMaybe<SortEnumType>;
  vin?: InputMaybe<SortEnumType>;
  wholesale?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type KitSnapshotsConnection = {
  __typename?: 'KitSnapshotsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<KitSnapshotsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<KitSnapshot>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
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
  Fpbc = 'FPBC',
  Fpbp = 'FPBP',
  Fpbs = 'FPBS',
  Fpcr = 'FPCR',
  Fpgr = 'FPGR',
  Fpws = 'FPWS'
}

export type KitStatusCodeOperationFilterInput = {
  eq?: InputMaybe<KitStatusCode>;
  in?: InputMaybe<Array<KitStatusCode>>;
  neq?: InputMaybe<KitStatusCode>;
  nin?: InputMaybe<Array<KitStatusCode>>;
};

export type KitTimelineDto = {
  __typename?: 'KitTimelineDTO';
  kitNo: Scalars['String'];
  lotNo: Scalars['String'];
  timelineItems: Array<TimelineEventDto>;
  vin: Scalars['String'];
};

export type KitTimelineEvent = {
  __typename?: 'KitTimelineEvent';
  createdAt: Scalars['DateTime'];
  eventDate: Scalars['DateTime'];
  eventNote?: Maybe<Scalars['String']>;
  eventType?: Maybe<KitTimelineEventType>;
  id: Scalars['UUID'];
  kit?: Maybe<Kit>;
  kitId: Scalars['UUID'];
  kitTimelineEventTypeId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type KitTimelineEventFilterInput = {
  and?: InputMaybe<Array<KitTimelineEventFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  eventDate?: InputMaybe<DateTimeOperationFilterInput>;
  eventNote?: InputMaybe<StringOperationFilterInput>;
  eventType?: InputMaybe<KitTimelineEventTypeFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  kit?: InputMaybe<KitFilterInput>;
  kitId?: InputMaybe<UuidOperationFilterInput>;
  kitTimelineEventTypeId?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<KitTimelineEventFilterInput>>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type KitTimelineEventInput = {
  dealerCode: Scalars['String'];
  eventCode: TimeLineEventCode;
  eventDate: Scalars['DateTime'];
  eventNote: Scalars['String'];
  kitNo: Scalars['String'];
};

export type KitTimelineEventSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  eventDate?: InputMaybe<SortEnumType>;
  eventNote?: InputMaybe<SortEnumType>;
  eventType?: InputMaybe<KitTimelineEventTypeSortInput>;
  id?: InputMaybe<SortEnumType>;
  kit?: InputMaybe<KitSortInput>;
  kitId?: InputMaybe<SortEnumType>;
  kitTimelineEventTypeId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

export type KitTimelineEventType = {
  __typename?: 'KitTimelineEventType';
  code: TimeLineEventCode;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['UUID'];
  kitStatusCode: KitStatusCode;
  removedAt?: Maybe<Scalars['DateTime']>;
  sequence: Scalars['Int'];
  snapshots: Array<KitSnapshot>;
};

export type KitTimelineEventTypeFilterInput = {
  and?: InputMaybe<Array<KitTimelineEventTypeFilterInput>>;
  code?: InputMaybe<TimeLineEventCodeOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  kitStatusCode?: InputMaybe<KitStatusCodeOperationFilterInput>;
  or?: InputMaybe<Array<KitTimelineEventTypeFilterInput>>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  sequence?: InputMaybe<IntOperationFilterInput>;
  snapshots?: InputMaybe<ListFilterInputTypeOfKitSnapshotFilterInput>;
};

export type KitTimelineEventTypeSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  kitStatusCode?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  sequence?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type KitTimelineEventTypesConnection = {
  __typename?: 'KitTimelineEventTypesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<KitTimelineEventTypesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<KitTimelineEventType>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type KitTimelineEventTypesEdge = {
  __typename?: 'KitTimelineEventTypesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: KitTimelineEventType;
};

/** A connection to a list of items. */
export type KitTimelineEventsConnection = {
  __typename?: 'KitTimelineEventsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<KitTimelineEventsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<KitTimelineEvent>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
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
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  kit?: Maybe<Kit>;
  kitId: Scalars['UUID'];
  kitVinImport?: Maybe<KitVinImport>;
  kitVinImportId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  vin?: Maybe<Scalars['String']>;
};

export type KitVinAckDto = {
  __typename?: 'KitVinAckDTO';
  errorMessage: Scalars['String'];
  filename: Scalars['String'];
  payloadText: Scalars['String'];
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};

export type KitVinFilterInput = {
  and?: InputMaybe<Array<KitVinFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  kit?: InputMaybe<KitFilterInput>;
  kitId?: InputMaybe<UuidOperationFilterInput>;
  kitVinImport?: InputMaybe<KitVinImportFilterInput>;
  kitVinImportId?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<KitVinFilterInput>>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  vin?: InputMaybe<StringOperationFilterInput>;
};

export type KitVinImport = {
  __typename?: 'KitVinImport';
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  kitVins?: Maybe<Array<Maybe<KitVin>>>;
  partnerPlantCode?: Maybe<Scalars['String']>;
  plant?: Maybe<Plant>;
  plantId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  sequence: Scalars['Int'];
};

export type KitVinImportFilterInput = {
  and?: InputMaybe<Array<KitVinImportFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  kitVins?: InputMaybe<ListFilterInputTypeOfKitVinFilterInput>;
  or?: InputMaybe<Array<KitVinImportFilterInput>>;
  partnerPlantCode?: InputMaybe<StringOperationFilterInput>;
  plant?: InputMaybe<PlantFilterInput>;
  plantId?: InputMaybe<UuidOperationFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  sequence?: InputMaybe<IntOperationFilterInput>;
};

export type KitVinImportSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  partnerPlantCode?: InputMaybe<SortEnumType>;
  plant?: InputMaybe<PlantSortInput>;
  plantId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  sequence?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type KitVinImportsConnection = {
  __typename?: 'KitVinImportsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<KitVinImportsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<KitVinImport>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type KitVinImportsEdge = {
  __typename?: 'KitVinImportsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: KitVinImport;
};

export type KitVinSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  kit?: InputMaybe<KitSortInput>;
  kitId?: InputMaybe<SortEnumType>;
  kitVinImport?: InputMaybe<KitVinImportSortInput>;
  kitVinImportId?: InputMaybe<SortEnumType>;
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
export type KitsByCurrentTimelineEventConnection = {
  __typename?: 'KitsByCurrentTimelineEventConnection';
  /** A list of edges. */
  edges?: Maybe<Array<KitsByCurrentTimelineEventEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Kit>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
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

export type ListFilterInputTypeOfComponentFilterInput = {
  all?: InputMaybe<ComponentFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ComponentFilterInput>;
  some?: InputMaybe<ComponentFilterInput>;
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

export type ListFilterInputTypeOfKitSnapshotFilterInput = {
  all?: InputMaybe<KitSnapshotFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<KitSnapshotFilterInput>;
  some?: InputMaybe<KitSnapshotFilterInput>;
};

export type ListFilterInputTypeOfKitSnapshotRunFilterInput = {
  all?: InputMaybe<KitSnapshotRunFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<KitSnapshotRunFilterInput>;
  some?: InputMaybe<KitSnapshotRunFilterInput>;
};

export type ListFilterInputTypeOfKitTimelineEventFilterInput = {
  all?: InputMaybe<KitTimelineEventFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<KitTimelineEventFilterInput>;
  some?: InputMaybe<KitTimelineEventFilterInput>;
};

export type ListFilterInputTypeOfKitVinFilterInput = {
  all?: InputMaybe<KitVinFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<KitVinFilterInput>;
  some?: InputMaybe<KitVinFilterInput>;
};

export type ListFilterInputTypeOfKitVinImportFilterInput = {
  all?: InputMaybe<KitVinImportFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<KitVinImportFilterInput>;
  some?: InputMaybe<KitVinImportFilterInput>;
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

export type Lot = {
  __typename?: 'Lot';
  bom?: Maybe<Bom>;
  bomId: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  kits?: Maybe<Array<Maybe<Kit>>>;
  lotNo?: Maybe<Scalars['String']>;
  lotParts?: Maybe<Array<Maybe<LotPart>>>;
  modelId: Scalars['UUID'];
  note?: Maybe<Scalars['String']>;
  pcv?: Maybe<Pcv>;
  plant?: Maybe<Plant>;
  plantId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  shipmentLots?: Maybe<Array<Maybe<ShipmentLot>>>;
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
  modelId?: InputMaybe<UuidOperationFilterInput>;
  note?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<LotFilterInput>>;
  pcv?: InputMaybe<PcvFilterInput>;
  plant?: InputMaybe<PlantFilterInput>;
  plantId?: InputMaybe<UuidOperationFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  shipmentLots?: InputMaybe<ListFilterInputTypeOfShipmentLotFilterInput>;
};

export type LotListDto = {
  __typename?: 'LotListDTO';
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  kitCount: Scalars['Int'];
  lotNo: Scalars['String'];
  plantCode: Scalars['String'];
  timelineStatus?: Maybe<TimeLineEventCode>;
};

export type LotNoteInput = {
  lotNo?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
};

export type LotOverviewDto = {
  __typename?: 'LotOverviewDTO';
  bomId: Scalars['UUID'];
  bomSequence: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  customReceived?: Maybe<TimelineEventDto>;
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

export type LotPart = {
  __typename?: 'LotPart';
  bomQuantity: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  lot?: Maybe<Lot>;
  lotId: Scalars['UUID'];
  part?: Maybe<Part>;
  partId: Scalars['UUID'];
  received?: Maybe<Array<Maybe<LotPartReceived>>>;
  removedAt?: Maybe<Scalars['DateTime']>;
  shipmentQuantity: Scalars['Int'];
};

export type LotPartDto = {
  __typename?: 'LotPartDTO';
  bomQuantity: Scalars['Int'];
  importDate: Scalars['DateTime'];
  lotNo?: Maybe<Scalars['String']>;
  partDesc?: Maybe<Scalars['String']>;
  partNo?: Maybe<Scalars['String']>;
  receivedDate?: Maybe<Scalars['DateTime']>;
  receivedQuantity: Scalars['Int'];
  removedDate?: Maybe<Scalars['DateTime']>;
  shipmentQuantity: Scalars['Int'];
};

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
  lotPart?: Maybe<LotPart>;
  lotPartId: Scalars['UUID'];
  quantity: Scalars['Int'];
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type LotPartReceivedDto = {
  __typename?: 'LotPartReceivedDTO';
  bomQuantity: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  lotNo?: Maybe<Scalars['String']>;
  partDesc?: Maybe<Scalars['String']>;
  partNo?: Maybe<Scalars['String']>;
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
  modelId?: InputMaybe<SortEnumType>;
  note?: InputMaybe<SortEnumType>;
  pcv?: InputMaybe<PcvSortInput>;
  plant?: InputMaybe<PlantSortInput>;
  plantId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

export type LotTimelineEventInput = {
  eventCode: TimeLineEventCode;
  eventDate: Scalars['DateTime'];
  eventNote: Scalars['String'];
  lotNo: Scalars['String'];
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
  autoVerifyVIN: MutationResultOfVerifyVinsPayload;
  captureComponentSerial: MutationResultOfComponentSerialDto;
  createDcwsResponse: MutationResultOfDcwsResponse;
  createKitTimelineEvent: MutationResultOfKitTimelineEvent;
  createLotPartQuantityReceived: MutationResultOfLotPartDto;
  createLotTimelineEvent: MutationResultOfLot;
  createPcvMetaData: MutationResultOfUpdateCategoryPayload;
  createPlant: MutationResultOfPlantOverviewDto;
  generateKitSnapshotRun: MutationResultOfSnapshotDto;
  importBom: MutationResultOfBomOverviewDto;
  importPartnerStatusAck: MutationResultOfPartnerStatusAck;
  importShipment: MutationResultOfShipmentOverviewDto;
  importVIN: MutationResultOfKitVinImport;
  removeAllComponentStationMappings: MutationResultOfRemoveAllComponentStationMappingsPayload;
  removeBom: MutationResultOfString;
  removeShipment: MutationResultOfString;
  rollbackKitsnapshots: MutationResultOfListOfKitSnapshot;
  /** Create or update a component */
  saveComponent: MutationResultOfUpdateComponentPayload;
  saveDcwsComponentResponse: MutationResultOfDcwsResponse;
  savePCV: MutationResultOfSavePcvPayload;
  /** Create or update a production station */
  saveStation: MutationResultOfUpdateStationPayload;
  /** Set or remove component default production station */
  setComponentDefaultStation: MutationResultOfUpdateComponentPayload;
  setComponentStationMappings: MutationResultOfSetComponentStationMappingsPayload;
  setHandlingUnitReceived: MutationResultOfReceiveHandlingUnitPayload;
  setLotNote: MutationResultOfLot;
  /**
   * Update kit comoponent stations mappings to match the component station mappings template
   * where kit does not have a BUILD_COMPLETE timeline event
   */
  syncKitsWithComponentStationMappings: MutationResultOfSyncKitComponentsPayload;
  updatePcvMetaData: MutationResultOfUpdateCategoryPayload;
  verifyComponentSerial: MutationResultOfDcwsResponse;
};


export type MutationApplyComponentSerialFormatArgs = {
  input: ApplyComponentSerialFormatInput;
};


export type MutationAutoVerifyVinArgs = {
  currentDate?: InputMaybe<Scalars['DateTime']>;
};


export type MutationCaptureComponentSerialArgs = {
  input: ComponentSerialInput;
};


export type MutationCreateDcwsResponseArgs = {
  input: DcwsComponentResponseInput;
};


export type MutationCreateKitTimelineEventArgs = {
  input: KitTimelineEventInput;
};


export type MutationCreateLotPartQuantityReceivedArgs = {
  input: ReceiveLotPartInput;
};


export type MutationCreateLotTimelineEventArgs = {
  input: LotTimelineEventInput;
};


export type MutationCreatePcvMetaDataArgs = {
  input: CreateCategoryInput;
  pcvMetadataType: PcvMetaType;
};


export type MutationCreatePlantArgs = {
  input: PlantInput;
};


export type MutationGenerateKitSnapshotRunArgs = {
  input: KitSnapshotInput;
};


export type MutationImportBomArgs = {
  input: BomFileInput;
};


export type MutationImportPartnerStatusAckArgs = {
  input: PartnerStatusAckDtoInput;
};


export type MutationImportShipmentArgs = {
  input: ShipFileInput;
};


export type MutationImportVinArgs = {
  input: VinFileInput;
};


export type MutationRemoveBomArgs = {
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};


export type MutationRemoveShipmentArgs = {
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};


export type MutationRollbackKitsnapshotsArgs = {
  kitNo: Scalars['String'];
  toTimelineEventCode: TimeLineEventCode;
};


export type MutationSaveComponentArgs = {
  input: ComponentInput;
};


export type MutationSaveDcwsComponentResponseArgs = {
  input: DcwsComponentResponseInput;
};


export type MutationSavePcvArgs = {
  input: SavePcvInput;
};


export type MutationSaveStationArgs = {
  input: StationInput;
};


export type MutationSetComponentDefaultStationArgs = {
  input: SetDefaultStationInput;
};


export type MutationSetComponentStationMappingsArgs = {
  input: ComponentStationMappingsInput;
};


export type MutationSetHandlingUnitReceivedArgs = {
  input: ReceiveHandlingUnitInput;
};


export type MutationSetLotNoteArgs = {
  input: LotNoteInput;
};


export type MutationUpdatePcvMetaDataArgs = {
  input: UpdateCategoryInput;
  pcvMetadataType: PcvMetaType;
};


export type MutationVerifyComponentSerialArgs = {
  kitComponentId: Scalars['UUID'];
};

export type MutationResultOfBomOverviewDto = {
  __typename?: 'MutationResultOfBomOverviewDTO';
  errors: Array<Error>;
  payload?: Maybe<BomOverviewDto>;
};

export type MutationResultOfComponentSerialDto = {
  __typename?: 'MutationResultOfComponentSerialDTO';
  errors: Array<Error>;
  payload?: Maybe<ComponentSerialDto>;
};

export type MutationResultOfDcwsResponse = {
  __typename?: 'MutationResultOfDcwsResponse';
  errors: Array<Error>;
  payload?: Maybe<DcwsResponse>;
};

export type MutationResultOfKitTimelineEvent = {
  __typename?: 'MutationResultOfKitTimelineEvent';
  errors: Array<Error>;
  payload?: Maybe<KitTimelineEvent>;
};

export type MutationResultOfKitVinImport = {
  __typename?: 'MutationResultOfKitVinImport';
  errors: Array<Error>;
  payload?: Maybe<KitVinImport>;
};

export type MutationResultOfListOfKitSnapshot = {
  __typename?: 'MutationResultOfListOfKitSnapshot';
  errors: Array<Error>;
  payload?: Maybe<Array<Maybe<KitSnapshot>>>;
};

export type MutationResultOfLot = {
  __typename?: 'MutationResultOfLot';
  errors: Array<Error>;
  payload?: Maybe<Lot>;
};

export type MutationResultOfLotPartDto = {
  __typename?: 'MutationResultOfLotPartDTO';
  errors: Array<Error>;
  payload?: Maybe<LotPartDto>;
};

export type MutationResultOfPartnerStatusAck = {
  __typename?: 'MutationResultOfPartnerStatusAck';
  errors: Array<Error>;
  payload?: Maybe<PartnerStatusAck>;
};

export type MutationResultOfPlantOverviewDto = {
  __typename?: 'MutationResultOfPlantOverviewDTO';
  errors: Array<Error>;
  payload?: Maybe<PlantOverviewDto>;
};

export type MutationResultOfReceiveHandlingUnitPayload = {
  __typename?: 'MutationResultOfReceiveHandlingUnitPayload';
  errors: Array<Error>;
  payload?: Maybe<ReceiveHandlingUnitPayload>;
};

export type MutationResultOfRemoveAllComponentStationMappingsPayload = {
  __typename?: 'MutationResultOfRemoveAllComponentStationMappingsPayload';
  errors: Array<Error>;
  payload?: Maybe<RemoveAllComponentStationMappingsPayload>;
};

export type MutationResultOfSavePcvPayload = {
  __typename?: 'MutationResultOfSavePcvPayload';
  errors: Array<Error>;
  payload?: Maybe<SavePcvPayload>;
};

export type MutationResultOfSetComponentStationMappingsPayload = {
  __typename?: 'MutationResultOfSetComponentStationMappingsPayload';
  errors: Array<Error>;
  payload?: Maybe<SetComponentStationMappingsPayload>;
};

export type MutationResultOfShipmentOverviewDto = {
  __typename?: 'MutationResultOfShipmentOverviewDTO';
  errors: Array<Error>;
  payload?: Maybe<ShipmentOverviewDto>;
};

export type MutationResultOfSnapshotDto = {
  __typename?: 'MutationResultOfSnapshotDTO';
  errors: Array<Error>;
  payload?: Maybe<SnapshotDto>;
};

export type MutationResultOfString = {
  __typename?: 'MutationResultOfString';
  errors: Array<Error>;
  payload?: Maybe<Scalars['String']>;
};

export type MutationResultOfSyncKitComponentsPayload = {
  __typename?: 'MutationResultOfSyncKitComponentsPayload';
  errors: Array<Error>;
  payload?: Maybe<SyncKitComponentsPayload>;
};

export type MutationResultOfUpdateCategoryPayload = {
  __typename?: 'MutationResultOfUpdateCategoryPayload';
  errors: Array<Error>;
  payload?: Maybe<UpdateCategoryPayload>;
};

export type MutationResultOfUpdateComponentPayload = {
  __typename?: 'MutationResultOfUpdateComponentPayload';
  errors: Array<Error>;
  payload?: Maybe<UpdateComponentPayload>;
};

export type MutationResultOfUpdateStationPayload = {
  __typename?: 'MutationResultOfUpdateStationPayload';
  errors: Array<Error>;
  payload?: Maybe<UpdateStationPayload>;
};

export type MutationResultOfVerifyVinsPayload = {
  __typename?: 'MutationResultOfVerifyVinsPayload';
  errors: Array<Error>;
  payload?: Maybe<VerifyVinsPayload>;
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

export type Part = {
  __typename?: 'Part';
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  lotParts: Array<LotPart>;
  originalPartNo: Scalars['String'];
  partDesc: Scalars['String'];
  partNo: Scalars['String'];
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
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  shipmentParts?: InputMaybe<ListFilterInputTypeOfShipmentPartFilterInput>;
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
  removedAt?: InputMaybe<SortEnumType>;
};

export type PartnerStatusAck = {
  __typename?: 'PartnerStatusAck';
  createdAt: Scalars['DateTime'];
  fileDate: Scalars['DateTime'];
  id: Scalars['UUID'];
  kitSnapshotRun: KitSnapshotRun;
  kitSnapshotRunId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  totalAccepted: Scalars['Int'];
  totalProcessed: Scalars['Int'];
  totalRejected: Scalars['Int'];
};

export type PartnerStatusAckDto = {
  __typename?: 'PartnerStatusAckDTO';
  fileDate: Scalars['String'];
  partnerPlantCode: Scalars['String'];
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
  totalAccepted: Scalars['Int'];
  totalProcessed: Scalars['Int'];
  totalRejected: Scalars['Int'];
};

export type PartnerStatusAckDtoInput = {
  fileDate: Scalars['String'];
  partnerPlantCode: Scalars['String'];
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
  totalAccepted: Scalars['Int'];
  totalProcessed: Scalars['Int'];
  totalRejected: Scalars['Int'];
};

export type PartnerStatusAckFilterInput = {
  and?: InputMaybe<Array<PartnerStatusAckFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  fileDate?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  kitSnapshotRun?: InputMaybe<KitSnapshotRunFilterInput>;
  kitSnapshotRunId?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<PartnerStatusAckFilterInput>>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  totalAccepted?: InputMaybe<IntOperationFilterInput>;
  totalProcessed?: InputMaybe<IntOperationFilterInput>;
  totalRejected?: InputMaybe<IntOperationFilterInput>;
};

export type PartnerStatusAckSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  fileDate?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  kitSnapshotRun?: InputMaybe<KitSnapshotRunSortInput>;
  kitSnapshotRunId?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  totalAccepted?: InputMaybe<SortEnumType>;
  totalProcessed?: InputMaybe<SortEnumType>;
  totalRejected?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type PartnerStatusAcksConnection = {
  __typename?: 'PartnerStatusAcksConnection';
  /** A list of edges. */
  edges?: Maybe<Array<PartnerStatusAcksEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<PartnerStatusAck>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PartnerStatusAcksEdge = {
  __typename?: 'PartnerStatusAcksEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PartnerStatusAck;
};

export type PartnerStatusDto = {
  __typename?: 'PartnerStatusDTO';
  errorMessage: Scalars['String'];
  filename: Scalars['String'];
  payloadText: Scalars['String'];
  plantCode: Scalars['String'];
  runDate?: Maybe<Scalars['DateTime']>;
  sequence: Scalars['Int'];
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
  component?: Maybe<Component>;
  componentId: Scalars['UUID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  pcv?: Maybe<Pcv>;
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

export enum PcvMetaType {
  PcvDrive = 'PCV_DRIVE',
  PcvEngine = 'PCV_ENGINE',
  PcvModel = 'PCV_MODEL',
  PcvPaint = 'PCV_PAINT',
  PcvSeries = 'PCV_SERIES',
  PcvSubmodel = 'PCV_SUBMODEL',
  PcvTransmission = 'PCV_TRANSMISSION',
  PcvTrim = 'PCV_TRIM'
}

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
  boms?: Maybe<Array<Maybe<Bom>>>;
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  kitSnapshotRuns?: Maybe<Array<Maybe<KitSnapshotRun>>>;
  kitVinImports?: Maybe<Array<Maybe<KitVinImport>>>;
  lots?: Maybe<Array<Maybe<Lot>>>;
  name?: Maybe<Scalars['String']>;
  partnerPlantCode?: Maybe<Scalars['String']>;
  partnerPlantType?: Maybe<Scalars['String']>;
  removedAt?: Maybe<Scalars['DateTime']>;
  shipments?: Maybe<Array<Maybe<Shipment>>>;
};

export type PlantFilterInput = {
  and?: InputMaybe<Array<PlantFilterInput>>;
  boms?: InputMaybe<ListFilterInputTypeOfBomFilterInput>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  kitSnapshotRuns?: InputMaybe<ListFilterInputTypeOfKitSnapshotRunFilterInput>;
  kitVinImports?: InputMaybe<ListFilterInputTypeOfKitVinImportFilterInput>;
  lots?: InputMaybe<ListFilterInputTypeOfLotFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PlantFilterInput>>;
  partnerPlantCode?: InputMaybe<StringOperationFilterInput>;
  partnerPlantType?: InputMaybe<StringOperationFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  shipments?: InputMaybe<ListFilterInputTypeOfShipmentFilterInput>;
};

export type PlantInput = {
  code?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  partnerPlantCode?: InputMaybe<Scalars['String']>;
  partnerPlantType?: InputMaybe<Scalars['String']>;
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
  name?: InputMaybe<SortEnumType>;
  partnerPlantCode?: InputMaybe<SortEnumType>;
  partnerPlantType?: InputMaybe<SortEnumType>;
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

export type ProductionStation = {
  __typename?: 'ProductionStation';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  defaultStationComponents: Array<Component>;
  id: Scalars['UUID'];
  kitComponents: Array<KitComponent>;
  name: Scalars['String'];
  removedAt?: Maybe<Scalars['DateTime']>;
  sequence: Scalars['Int'];
};

export type ProductionStationFilterInput = {
  and?: InputMaybe<Array<ProductionStationFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  defaultStationComponents?: InputMaybe<ListFilterInputTypeOfComponentFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  kitComponents?: InputMaybe<ListFilterInputTypeOfKitComponentFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ProductionStationFilterInput>>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  sequence?: InputMaybe<IntOperationFilterInput>;
};

export type ProductionStationSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
  sequence?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type ProductionStationsConnection = {
  __typename?: 'ProductionStationsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ProductionStationsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ProductionStation>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
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
  appSettings?: Maybe<AppSettingsConnection>;
  basicKitInfo?: Maybe<BasicKitInfo>;
  bomById?: Maybe<Bom>;
  bomList?: Maybe<BomListConnection>;
  bomOverview?: Maybe<BomOverviewDto>;
  bomPartsQuantity: Array<PartQuantityDto>;
  boms?: Maybe<BomsConnection>;
  componentById?: Maybe<Component>;
  /** @deprecated no longer used */
  componentScanById?: Maybe<ComponentSerial>;
  componentSerials?: Maybe<ComponentSerialsConnection>;
  componentStations?: Maybe<ComponentStationsConnection>;
  components?: Maybe<ComponentsConnection>;
  dcwsResponses?: Maybe<DcwsResponsesConnection>;
  dcwsServiceVersion: Scalars['String'];
  dealers?: Maybe<DealersConnection>;
  /** @deprecated no longer used */
  existingComponentScan?: Maybe<ComponentSerial>;
  fordInterfaceFileType: FordInterfaceFileType;
  genPartnerStatusFilename: Scalars['String'];
  genVinImportAcknowledgment: KitVinAckDto;
  handlingUnitInfo?: Maybe<HandlingUnitInfoPayload>;
  handlingUnitOverviews: Array<HandlingUnitOverview>;
  handlingUnitReceived?: Maybe<HandlingUnitReceivedConnection>;
  handlingUnits?: Maybe<HandlingUnitsConnection>;
  info: Scalars['String'];
  kitById?: Maybe<Kit>;
  kitByKitNo?: Maybe<Kit>;
  kitComponentSerialInfo?: Maybe<KitComponentSerialInfo>;
  kitComponents?: Maybe<KitComponentsConnection>;
  kitList?: Maybe<KitListConnection>;
  kitSnapshotRun?: Maybe<KitSnapshotRunDto>;
  kitSnapshotRunByDate?: Maybe<KitSnapshotRunDto>;
  kitSnapshotRuns?: Maybe<KitSnapshotRunsConnection>;
  kitSnapshots?: Maybe<KitSnapshotsConnection>;
  kitTimeline?: Maybe<KitTimelineDto>;
  kitTimelineEventTypes?: Maybe<KitTimelineEventTypesConnection>;
  kitTimelineEvents?: Maybe<KitTimelineEventsConnection>;
  kitTimelineEventsByDate: Array<KitTimelineEvent>;
  kitVinImports?: Maybe<KitVinImportsConnection>;
  kitVins?: Maybe<KitVinsConnection>;
  kits?: Maybe<KitsConnection>;
  kitsByCurrentTimelineEvent?: Maybe<KitsByCurrentTimelineEventConnection>;
  kitsByLot: Array<Kit>;
  kitsByTimelineStatusSummary: Array<ItemCountDto>;
  lotByLotNo?: Maybe<Lot>;
  lotInfo?: Maybe<LotDto>;
  lotListByBomId: Array<LotListDto>;
  lotOverview?: Maybe<LotOverviewDto>;
  lotPartInfo?: Maybe<LotPartDto>;
  lotParts?: Maybe<LotPartsConnection>;
  lotPartsByBom: Array<LotPartDto>;
  lotPartsByShipment: Array<LotPartDto>;
  lotPartsReceived?: Maybe<LotPartsReceivedConnection>;
  lots?: Maybe<LotsConnection>;
  parseBomFile: BomFile;
  parsePartnerStatusAckFile: PartnerStatusAckDto;
  parseShipFile: ShipFile;
  parseVinFile: VinFile;
  partnerStatusAcks?: Maybe<PartnerStatusAcksConnection>;
  partnerStatusFilePayload: PartnerStatusDto;
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
  pingDcwsService: Scalars['Boolean'];
  plants?: Maybe<PlantsConnection>;
  productionStations?: Maybe<ProductionStationsConnection>;
  recentLotPartsReceived: Array<LotPartReceivedDto>;
  serverConfigSettings: ConfigurationDto;
  shipmentInvoices?: Maybe<ShipmentInvoicesConnection>;
  shipmentLots?: Maybe<ShipmentLotsConnection>;
  shipmentOverview?: Maybe<ShipmentOverviewDto>;
  shipmentParts?: Maybe<ShipmentPartsConnection>;
  shipments?: Maybe<ShipmentsConnection>;
  /** @deprecated no longer used */
  vehicleComponentByVinAndComponent?: Maybe<KitComponent>;
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
  id: Scalars['UUID'];
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


export type QueryComponentByIdArgs = {
  id: Scalars['UUID'];
};


export type QueryComponentScanByIdArgs = {
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


export type QueryExistingComponentScanArgs = {
  vehicleComponentId: Scalars['UUID'];
};


export type QueryFordInterfaceFileTypeArgs = {
  filename: Scalars['String'];
};


export type QueryGenPartnerStatusFilenameArgs = {
  kitSnapshotRunId: Scalars['UUID'];
};


export type QueryGenVinImportAcknowledgmentArgs = {
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
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


export type QueryKitListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<KitListItemDtoSortInput>>;
  plantCode: Scalars['String'];
};


export type QueryKitSnapshotRunArgs = {
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};


export type QueryKitSnapshotRunByDateArgs = {
  plantCode: Scalars['String'];
  runDate: Scalars['DateTime'];
};


export type QueryKitSnapshotRunsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<KitSnapshotRunSortInput>>;
  where?: InputMaybe<KitSnapshotRunFilterInput>;
};


export type QueryKitSnapshotsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<KitSnapshotSortInput>>;
  where?: InputMaybe<KitSnapshotFilterInput>;
};


export type QueryKitTimelineArgs = {
  kitNo: Scalars['String'];
};


export type QueryKitTimelineEventTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<KitTimelineEventTypeSortInput>>;
  where?: InputMaybe<KitTimelineEventTypeFilterInput>;
};


export type QueryKitTimelineEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<KitTimelineEventSortInput>>;
  where?: InputMaybe<KitTimelineEventFilterInput>;
};


export type QueryKitTimelineEventsByDateArgs = {
  fromDate: Scalars['DateTime'];
  plantCode: Scalars['String'];
  timelineEventCode?: InputMaybe<TimeLineEventCode>;
  toDate: Scalars['DateTime'];
};


export type QueryKitVinImportsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<KitVinImportSortInput>>;
  where?: InputMaybe<KitVinImportFilterInput>;
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


export type QueryKitsByCurrentTimelineEventArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  eventCode?: InputMaybe<TimeLineEventCode>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<KitSortInput>>;
  plantCode: Scalars['String'];
  where?: InputMaybe<KitFilterInput>;
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


export type QueryLotListByBomIdArgs = {
  id: Scalars['UUID'];
};


export type QueryLotOverviewArgs = {
  lotNo: Scalars['String'];
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


export type QueryLotPartsByBomArgs = {
  bomId: Scalars['UUID'];
};


export type QueryLotPartsByShipmentArgs = {
  shipmentId: Scalars['UUID'];
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


export type QueryParseBomFileArgs = {
  text: Scalars['String'];
};


export type QueryParsePartnerStatusAckFileArgs = {
  text: Scalars['String'];
};


export type QueryParseShipFileArgs = {
  text: Scalars['String'];
};


export type QueryParseVinFileArgs = {
  text: Scalars['String'];
};


export type QueryPartnerStatusAcksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<PartnerStatusAckSortInput>>;
  where?: InputMaybe<PartnerStatusAckFilterInput>;
};


export type QueryPartnerStatusFilePayloadArgs = {
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
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


export type QueryPlantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<PlantSortInput>>;
  where?: InputMaybe<PlantFilterInput>;
};


export type QueryProductionStationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<ProductionStationSortInput>>;
  where?: InputMaybe<ProductionStationFilterInput>;
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


export type QueryVehicleComponentByVinAndComponentArgs = {
  componentCode: Scalars['String'];
  vin: Scalars['String'];
};

export type ReceiveHandlingUnitInput = {
  handlingUnitCode?: InputMaybe<Scalars['String']>;
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

export type SavePcvInput = {
  componentCodes: Array<Scalars['String']>;
  modelYear: Scalars['Int'];
  pcvCode: Scalars['String'];
  pcvDrive: Scalars['String'];
  pcvEngine: Scalars['String'];
  pcvModel: Scalars['String'];
  pcvPaint: Scalars['String'];
  pcvSeries: Scalars['String'];
  pcvSubmodel: Scalars['String'];
  pcvTransmission: Scalars['String'];
  pcvTrim: Scalars['String'];
};

export type SavePcvPayload = {
  __typename?: 'SavePcvPayload';
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
};

export type SetComponentStationMappingsPayload = {
  __typename?: 'SetComponentStationMappingsPayload';
  mappings?: Maybe<Array<Maybe<ComponentStationMapping>>>;
};

export type SetDefaultStationInput = {
  componentCode: Scalars['String'];
  productionStationCode: Scalars['String'];
};

export type ShipFile = {
  __typename?: 'ShipFile';
  created: Scalars['DateTime'];
  filename: Scalars['String'];
  lots: Array<ShipFileLot>;
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};

export type ShipFileInput = {
  created: Scalars['DateTime'];
  filename: Scalars['String'];
  lots: Array<ShipFileLotInput>;
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
};

export type ShipFileInvoice = {
  __typename?: 'ShipFileInvoice';
  invoiceNo: Scalars['String'];
  parts: Array<ShipFilePart>;
  shipDate: Scalars['DateTime'];
};

export type ShipFileInvoiceInput = {
  invoiceNo: Scalars['String'];
  parts: Array<ShipFilePartInput>;
  shipDate: Scalars['DateTime'];
};

export type ShipFileLot = {
  __typename?: 'ShipFileLot';
  invoices: Array<ShipFileInvoice>;
  lotNo: Scalars['String'];
};

export type ShipFileLotInput = {
  invoices: Array<ShipFileInvoiceInput>;
  lotNo: Scalars['String'];
};

export type ShipFilePart = {
  __typename?: 'ShipFilePart';
  customerPartDesc: Scalars['String'];
  customerPartNo: Scalars['String'];
  handlingUnitCode: Scalars['String'];
  partNo: Scalars['String'];
  quantity: Scalars['Int'];
};

export type ShipFilePartInput = {
  customerPartDesc: Scalars['String'];
  customerPartNo: Scalars['String'];
  handlingUnitCode: Scalars['String'];
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
  invoices?: Maybe<Array<Maybe<ShipmentInvoice>>>;
  lot?: Maybe<Lot>;
  lotId: Scalars['UUID'];
  removedAt?: Maybe<Scalars['DateTime']>;
  shipment?: Maybe<Shipment>;
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
  bomId: Scalars['UUID'];
  bomSequence: Scalars['Int'];
  bomShipDiffCount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  handlingUnitCount: Scalars['Int'];
  handlingUnitReceivedCount: Scalars['Int'];
  id: Scalars['UUID'];
  invoiceCount: Scalars['Int'];
  lotCount: Scalars['Int'];
  lotNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  lotPartCount: Scalars['Int'];
  lotPartReceiveBomDiffCount: Scalars['Int'];
  lotPartReceivedCount: Scalars['Int'];
  partCount: Scalars['Int'];
  plantCode?: Maybe<Scalars['String']>;
  sequence: Scalars['Int'];
};

export type ShipmentPart = {
  __typename?: 'ShipmentPart';
  createdAt: Scalars['DateTime'];
  handlingUnit?: Maybe<HandlingUnit>;
  handlingUnitId?: Maybe<Scalars['UUID']>;
  id: Scalars['UUID'];
  part?: Maybe<Part>;
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

export enum SnapshotChangeStatus {
  Added = 'ADDED',
  Changed = 'CHANGED',
  Final = 'FINAL',
  NoChange = 'NO_CHANGE'
}

export type SnapshotChangeStatusOperationFilterInput = {
  eq?: InputMaybe<SnapshotChangeStatus>;
  in?: InputMaybe<Array<SnapshotChangeStatus>>;
  neq?: InputMaybe<SnapshotChangeStatus>;
  nin?: InputMaybe<Array<SnapshotChangeStatus>>;
};

export type SnapshotDto = {
  __typename?: 'SnapshotDTO';
  changedCount: Scalars['Int'];
  plantCode?: Maybe<Scalars['String']>;
  removedAt?: Maybe<Scalars['DateTime']>;
  runDate: Scalars['DateTime'];
  sequence: Scalars['Int'];
  snapshotCount: Scalars['Int'];
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

export type StationInput = {
  code: Scalars['String'];
  id?: InputMaybe<Scalars['UUID']>;
  name: Scalars['String'];
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

export type SyncKitComponentsPayload = {
  __typename?: 'SyncKitComponentsPayload';
  kitNos?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum TimeLineEventCode {
  BuildCompleted = 'BUILD_COMPLETED',
  CustomReceived = 'CUSTOM_RECEIVED',
  GateReleased = 'GATE_RELEASED',
  PlanBuild = 'PLAN_BUILD',
  VerifyVin = 'VERIFY_VIN',
  WholeSale = 'WHOLE_SALE'
}

export type TimeLineEventCodeOperationFilterInput = {
  eq?: InputMaybe<TimeLineEventCode>;
  in?: InputMaybe<Array<TimeLineEventCode>>;
  neq?: InputMaybe<TimeLineEventCode>;
  nin?: InputMaybe<Array<TimeLineEventCode>>;
};

export type TimelineEventDto = {
  __typename?: 'TimelineEventDTO';
  createdAt?: Maybe<Scalars['DateTime']>;
  eventDate?: Maybe<Scalars['DateTime']>;
  eventNote?: Maybe<Scalars['String']>;
  eventType: TimeLineEventCode;
  removedAt?: Maybe<Scalars['DateTime']>;
  sequence: Scalars['Int'];
};

export type UpdateCategoryInput = {
  code?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateCategoryPayload = {
  __typename?: 'UpdateCategoryPayload';
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type UpdateComponentPayload = {
  __typename?: 'UpdateComponentPayload';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  dcwsRequired: Scalars['Boolean'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  productionStationCode?: Maybe<Scalars['String']>;
  removedAt?: Maybe<Scalars['DateTime']>;
};

export type UpdateStationPayload = {
  __typename?: 'UpdateStationPayload';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id?: Maybe<Scalars['UUID']>;
  name: Scalars['String'];
  removedAt?: Maybe<Scalars['DateTime']>;
  sequence: Scalars['Int'];
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

export type VerifyVinsPayload = {
  __typename?: 'VerifyVinsPayload';
  kitNos: Array<Scalars['String']>;
};

export type VinFile = {
  __typename?: 'VinFile';
  kits?: Maybe<Array<Maybe<VinFileKit>>>;
  partnerPlantCode?: Maybe<Scalars['String']>;
  plantCode?: Maybe<Scalars['String']>;
  sequence: Scalars['Int'];
};

export type VinFileInput = {
  kits?: InputMaybe<Array<InputMaybe<VinFileKitInput>>>;
  partnerPlantCode?: InputMaybe<Scalars['String']>;
  plantCode?: InputMaybe<Scalars['String']>;
  sequence: Scalars['Int'];
};

export type VinFileKit = {
  __typename?: 'VinFileKit';
  kitNo?: Maybe<Scalars['String']>;
  lotNo?: Maybe<Scalars['String']>;
  vin?: Maybe<Scalars['String']>;
};

export type VinFileKitInput = {
  kitNo?: InputMaybe<Scalars['String']>;
  lotNo?: InputMaybe<Scalars['String']>;
  vin?: InputMaybe<Scalars['String']>;
};

export type ImportBomMutationVariables = Exact<{
  input: BomFileInput;
}>;


export type ImportBomMutation = { __typename?: 'Mutation', importBom: { __typename?: 'MutationResultOfBomOverviewDTO', payload?: { __typename?: 'BomOverviewDTO', id: any, sequence: number, plantCode: string, lotNumbers: Array<string>, partCount: number, vehicleCount: number, createdAt: any } | null, errors: Array<{ __typename?: 'Error', path: Array<string>, message: string }> } };

export type ImportShipmentMutationVariables = Exact<{
  input: ShipFileInput;
}>;


export type ImportShipmentMutation = { __typename?: 'Mutation', importShipment: { __typename?: 'MutationResultOfShipmentOverviewDTO', payload?: { __typename?: 'ShipmentOverviewDTO', id: any, plantCode?: string | null, sequence: number, invoiceCount: number, lotCount: number, partCount: number } | null, errors: Array<{ __typename?: 'Error', path: Array<string>, message: string }> } };

export type ImportVinMutationVariables = Exact<{
  input: VinFileInput;
}>;


export type ImportVinMutation = { __typename?: 'Mutation', importVIN: { __typename?: 'MutationResultOfKitVinImport', payload?: { __typename?: 'KitVinImport', sequence: number, partnerPlantCode?: string | null, plant?: { __typename?: 'Plant', code?: string | null } | null, kitVins?: Array<{ __typename?: 'KitVin', vin?: string | null, kit?: { __typename?: 'Kit', kitNo: string, lot: { __typename?: 'Lot', lotNo?: string | null } } | null } | null> | null } | null, errors: Array<{ __typename?: 'Error', path: Array<string>, message: string }> } };

export type ImportPartnerStatusAckMutationVariables = Exact<{
  input: PartnerStatusAckDtoInput;
}>;


export type ImportPartnerStatusAckMutation = { __typename?: 'Mutation', importPartnerStatusAck: { __typename?: 'MutationResultOfPartnerStatusAck', payload?: { __typename?: 'PartnerStatusAck', id: any, fileDate: any, totalProcessed: number, totalAccepted: number, totalRejected: number, kitSnapshotRun: { __typename?: 'KitSnapshotRun', plantId: any, sequence: number, plant?: { __typename?: 'Plant', code?: string | null } | null } } | null, errors: Array<{ __typename?: 'Error', message: string }> } };

export type PlantsQueryVariables = Exact<{ [key: string]: never; }>;


export type PlantsQuery = { __typename?: 'Query', plants?: { __typename?: 'PlantsConnection', nodes?: Array<{ __typename?: 'Plant', code?: string | null, partnerPlantCode?: string | null, partnerPlantType?: string | null, name?: string | null, createdAt: any }> | null } | null };

export type GenerateKitSnapshotRunMutationVariables = Exact<{
  input: KitSnapshotInput;
}>;


export type GenerateKitSnapshotRunMutation = { __typename?: 'Mutation', generateKitSnapshotRun: { __typename?: 'MutationResultOfSnapshotDTO', payload?: { __typename?: 'SnapshotDTO', plantCode?: string | null, runDate: any, snapshotCount: number, sequence: number } | null, errors: Array<{ __typename?: 'Error', path: Array<string>, message: string }> } };

export type KitSnapshotRunBySequenceQueryVariables = Exact<{
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
}>;


export type KitSnapshotRunBySequenceQuery = { __typename?: 'Query', kitSnapshotRuns?: { __typename?: 'KitSnapshotRunsConnection', nodes?: Array<{ __typename?: 'KitSnapshotRun', id: any, sequence: number, runDate: any, createdAt: any, removedAt?: any | null, plant?: { __typename?: 'Plant', code?: string | null, partnerPlantCode?: string | null, partnerPlantType?: string | null } | null }> | null } | null };

export type KitSnapshotRunsQueryVariables = Exact<{
  plantCode: Scalars['String'];
  first: Scalars['Int'];
  sort: SortEnumType;
}>;


export type KitSnapshotRunsQuery = { __typename?: 'Query', kitSnapshotRuns?: { __typename?: 'KitSnapshotRunsConnection', nodes?: Array<{ __typename?: 'KitSnapshotRun', id: any, sequence: number, runDate: any, createdAt: any, removedAt?: any | null, plant?: { __typename?: 'Plant', code?: string | null, partnerPlantCode?: string | null, partnerPlantType?: string | null } | null }> | null } | null };

export type LatestKitSnapshotRunQueryVariables = Exact<{
  plantCode: Scalars['String'];
}>;


export type LatestKitSnapshotRunQuery = { __typename?: 'Query', kitSnapshotRuns?: { __typename?: 'KitSnapshotRunsConnection', nodes?: Array<{ __typename?: 'KitSnapshotRun', id: any, sequence: number, runDate: any, createdAt: any, plant?: { __typename?: 'Plant', code?: string | null, partnerPlantCode?: string | null, partnerPlantType?: string | null } | null }> | null } | null };

export type PartnerStatusFilePayloadQueryVariables = Exact<{
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
}>;


export type PartnerStatusFilePayloadQuery = { __typename?: 'Query', partnerStatusFilePayload: { __typename?: 'PartnerStatusDTO', plantCode: string, runDate?: any | null, sequence: number, filename: string, errorMessage: string, payloadText: string } };

export type GenPartnerStatusFilenameQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type GenPartnerStatusFilenameQuery = { __typename?: 'Query', genPartnerStatusFilename: string };

export type ParseBomFileQueryVariables = Exact<{
  text: Scalars['String'];
}>;


export type ParseBomFileQuery = { __typename?: 'Query', parseBomFile: { __typename?: 'BomFile', plantCode: string, sequence: number, bomFileCreatedAt: string, filename: string, lotEntries: Array<{ __typename?: 'BomFileLot', lotNo: string, kits: Array<{ __typename?: 'BomFileKit', kitNo: string, pcvCode: string }> }>, lotParts: Array<{ __typename?: 'BomFileLotPart', lotNo: string, partNo: string, partDesc: string, quantity: number }> } };

export type ParseShipFileQueryVariables = Exact<{
  text: Scalars['String'];
}>;


export type ParseShipFileQuery = { __typename?: 'Query', parseShipFile: { __typename?: 'ShipFile', sequence: number, plantCode: string, created: any, filename: string, lots: Array<{ __typename?: 'ShipFileLot', lotNo: string, invoices: Array<{ __typename?: 'ShipFileInvoice', invoiceNo: string, shipDate: any, parts: Array<{ __typename?: 'ShipFilePart', partNo: string, handlingUnitCode: string, customerPartNo: string, customerPartDesc: string, quantity: number }> }> }> } };

export type ParseVinFileQueryVariables = Exact<{
  text: Scalars['String'];
}>;


export type ParseVinFileQuery = { __typename?: 'Query', parseVinFile: { __typename?: 'VinFile', plantCode?: string | null, partnerPlantCode?: string | null, sequence: number, kits?: Array<{ __typename?: 'VinFileKit', lotNo?: string | null, kitNo?: string | null, vin?: string | null } | null> | null } };

export type ParsePartnerStatusAckQueryVariables = Exact<{
  text: Scalars['String'];
}>;


export type ParsePartnerStatusAckQuery = { __typename?: 'Query', parsePartnerStatusAckFile: { __typename?: 'PartnerStatusAckDTO', plantCode: string, partnerPlantCode: string, sequence: number, totalProcessed: number, totalAccepted: number, totalRejected: number, fileDate: string } };

export type GenVinImportAckQueryVariables = Exact<{
  plantCode: Scalars['String'];
  sequence: Scalars['Int'];
}>;


export type GenVinImportAckQuery = { __typename?: 'Query', genVinImportAcknowledgment: { __typename?: 'KitVinAckDTO', plantCode: string, sequence: number, filename: string, payloadText: string, errorMessage: string } };

export type FordInterfaceFileTypeQueryVariables = Exact<{
  filename: Scalars['String'];
}>;


export type FordInterfaceFileTypeQuery = { __typename?: 'Query', fordInterfaceFileType: FordInterfaceFileType };
