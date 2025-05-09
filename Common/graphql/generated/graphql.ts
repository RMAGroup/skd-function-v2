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
  Decimal: { input: any; output: any; }
  Long: { input: any; output: any; }
  UUID: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

/** SKD Server app settings section */
export type ApiServerOptions = {
  __typename?: 'ApiServerOptions';
  allowGraphqlIntrospection: Scalars['Boolean']['output'];
  executionTimeoutSeconds: Scalars['Int']['output'];
  graphqlExposeDetailedErrors: Scalars['Boolean']['output'];
  maxRequestBodySizeMB: Scalars['Int']['output'];
};

export type AssignVinCommandInput = {
  kitNo: Scalars['String']['input'];
};

export type AssignVinCommandResult = {
  __typename?: 'AssignVinCommandResult';
  kitNo: Scalars['String']['output'];
  message: Scalars['String']['output'];
  vin: Scalars['String']['output'];
};

export type AssignedVinsItem = {
  __typename?: 'AssignedVinsItem';
  ackToObtainVinDelayMins?: Maybe<Scalars['Int']['output']>;
  kitNo: Scalars['String']['output'];
  lotNo: Scalars['String']['output'];
  model: Scalars['String']['output'];
  planBuildAckDelayMins?: Maybe<Scalars['Int']['output']>;
  planBuildAckDelaySeconds?: Maybe<Scalars['Int']['output']>;
  planBuildAknowledgedAt?: Maybe<Scalars['DateTime']['output']>;
  planBuildCreatedAt: Scalars['DateTime']['output'];
  planBuildDate: Scalars['DateTime']['output'];
  plantCode: Scalars['String']['output'];
  vin: Scalars['String']['output'];
  vinObtainedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AssignedVinsQueryInput = {
  first?: Scalars['Int']['input'];
  plantCode: Scalars['String']['input'];
};

export type AssignedVinsQueryResult = {
  __typename?: 'AssignedVinsQueryResult';
  items: Array<AssignedVinsItem>;
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
  id: BomId;
  lotPartQuantitiesMatchShipment: Scalars['Boolean']['output'];
  lots: Array<Lot>;
  plant: Plant;
  plantId: PlantId;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  sequence: Scalars['Int']['output'];
};

export type BomFileQueryInput = {
  fileName: Scalars['String']['input'];
};

export type BomFileTextQueryInput = {
  fileName: Scalars['String']['input'];
};

export type BomFileTextQueryResult = {
  __typename?: 'BomFileTextQueryResult';
  fileName: Scalars['String']['output'];
  fileText: Scalars['String']['output'];
};

export type BomFilterInput = {
  and?: InputMaybe<Array<BomFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  filename?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<BomIdFilterInput>;
  lotPartQuantitiesMatchShipment?: InputMaybe<BooleanOperationFilterInput>;
  lots?: InputMaybe<ListFilterInputTypeOfLotFilterInput>;
  or?: InputMaybe<Array<BomFilterInput>>;
  plant?: InputMaybe<PlantFilterInput>;
  plantId?: InputMaybe<PlantIdFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  sequence?: InputMaybe<IntOperationFilterInput>;
};

export type BomId = {
  __typename?: 'BomId';
  value: Scalars['UUID']['output'];
};

export type BomIdFilterInput = {
  and?: InputMaybe<Array<BomIdFilterInput>>;
  or?: InputMaybe<Array<BomIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type BomIdInput = {
  value: Scalars['UUID']['input'];
};

export type BomIdSortInput = {
  value?: InputMaybe<SortEnumType>;
};

export type BomInput = {
  createdAt: Scalars['DateTime']['input'];
  filename?: InputMaybe<Scalars['String']['input']>;
  id: BomIdInput;
  lotPartQuantitiesMatchShipment: Scalars['Boolean']['input'];
  lots: Array<LotInput>;
  plant: PlantInput;
  plantId: PlantIdInput;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sequence: Scalars['Int']['input'];
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
  revisedTargetShipDate?: Maybe<Scalars['DateTime']['output']>;
  sequence: Scalars['Int']['output'];
};

export type BomListDtoSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  filename?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  plantCode?: InputMaybe<SortEnumType>;
  revisedTargetShipDate?: InputMaybe<SortEnumType>;
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
  kitCount: Scalars['Int']['output'];
  lots: Array<BomOverviewQueryResultLot>;
  partCount: Scalars['Int']['output'];
  pcvCodes: Array<Scalars['String']['output']>;
  plantCode: Scalars['String']['output'];
  sequence: Scalars['Int']['output'];
  shipments: Array<BomOverviewQueryResultShipment>;
};

export type BomOverviewQueryResultLot = {
  __typename?: 'BomOverviewQueryResultLot';
  lotNo: Scalars['String']['output'];
  sequenceByPlant: Scalars['Int']['output'];
};

export type BomOverviewQueryResultShipment = {
  __typename?: 'BomOverviewQueryResultShipment';
  plantCode: Scalars['String']['output'];
  sequence?: Maybe<Scalars['Int']['output']>;
  shipmentId?: Maybe<Scalars['UUID']['output']>;
};

export type BomPartsQueryInput = {
  bomId: Scalars['UUID']['input'];
};

export type BomPartsQueryResult = {
  __typename?: 'BomPartsQueryResult';
  bomSequence: Scalars['Int']['output'];
  items: Array<BomPartsQueryResultItem>;
  lotNumbers: Array<Scalars['String']['output']>;
};

export type BomPartsQueryResultItem = {
  __typename?: 'BomPartsQueryResultItem';
  kitPartType: Scalars['String']['output'];
  partDesc: Scalars['String']['output'];
  partNo: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
};

export type BomSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  filename?: InputMaybe<SortEnumType>;
  id?: InputMaybe<BomIdSortInput>;
  lotPartQuantitiesMatchShipment?: InputMaybe<SortEnumType>;
  plant?: InputMaybe<PlantSortInput>;
  plantId?: InputMaybe<PlantIdSortInput>;
  removedAt?: InputMaybe<SortEnumType>;
  sequence?: InputMaybe<SortEnumType>;
};

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Component = {
  __typename?: 'Component';
  allowDuplicateSerial: Scalars['Boolean']['output'];
  assignedStations: Array<ComponentStation>;
  code: Scalars['String']['output'];
  componentSerialRule: ComponentSerialRule;
  componentSerials: Array<ComponentSerial>;
  createdAt: Scalars['DateTime']['output'];
  dcwsSubmissionRequired: Scalars['Boolean']['output'];
  iconURL: Scalars['String']['output'];
  id: ComponentId;
  name: Scalars['String']['output'];
  pcvComponents: Array<PcvComponent>;
  plantStationComponents: Array<PcvModelStationComponent>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ComponentFilterInput = {
  allowDuplicateSerial?: InputMaybe<BooleanOperationFilterInput>;
  and?: InputMaybe<Array<ComponentFilterInput>>;
  assignedStations?: InputMaybe<ListFilterInputTypeOfComponentStationFilterInput>;
  code?: InputMaybe<StringOperationFilterInput>;
  componentSerialRule?: InputMaybe<ComponentSerialRuleOperationFilterInput>;
  componentSerials?: InputMaybe<ListFilterInputTypeOfComponentSerialFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  dcwsSubmissionRequired?: InputMaybe<BooleanOperationFilterInput>;
  iconURL?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComponentIdFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ComponentFilterInput>>;
  pcvComponents?: InputMaybe<ListFilterInputTypeOfPcvComponentFilterInput>;
  plantStationComponents?: InputMaybe<ListFilterInputTypeOfPcvModelStationComponentFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type ComponentId = {
  __typename?: 'ComponentId';
  value: Scalars['UUID']['output'];
};

export type ComponentIdFilterInput = {
  and?: InputMaybe<Array<ComponentIdFilterInput>>;
  or?: InputMaybe<Array<ComponentIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type ComponentIdInput = {
  value: Scalars['UUID']['input'];
};

export type ComponentInput = {
  allowDuplicateSerial: Scalars['Boolean']['input'];
  assignedStations: Array<ComponentStationInput>;
  code: Scalars['String']['input'];
  componentSerialRule: ComponentSerialRule;
  componentSerials: Array<ComponentSerialInput>;
  createdAt: Scalars['DateTime']['input'];
  dcwsSubmissionRequired: Scalars['Boolean']['input'];
  iconURL: Scalars['String']['input'];
  id: ComponentIdInput;
  name: Scalars['String']['input'];
  pcvComponents: Array<PcvComponentInput>;
  plantStationComponents: Array<PcvModelStationComponentInput>;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ComponentSerial = {
  __typename?: 'ComponentSerial';
  component: Component;
  componentId: ComponentId;
  createdAt: Scalars['DateTime']['output'];
  dcwsResponses: Array<DcwsResponse>;
  id: ComponentSerialId;
  kit: Kit;
  kitId: KitId;
  kitVin: KitVin;
  kitVinId?: Maybe<KitVinId>;
  original_Serial1?: Maybe<Scalars['String']['output']>;
  original_Serial2?: Maybe<Scalars['String']['output']>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  serial1: Scalars['String']['output'];
  serial2: Scalars['String']['output'];
  station: Station;
  stationId: StationId;
  unsetVerifiedAt: ResultOrOfComponentSerial;
  verifiedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ComponentSerialByKitQueryResultItem = {
  __typename?: 'ComponentSerialByKitQueryResultItem';
  componentCode: Scalars['String']['output'];
  componentIconUrl: Scalars['String']['output'];
  componentName: Scalars['String']['output'];
  componentSerialId: Scalars['UUID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dcwsResponseCode?: Maybe<Scalars['String']['output']>;
  dcwsSubmissionRequired: Scalars['Boolean']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  serial1?: Maybe<Scalars['String']['output']>;
  serial2?: Maybe<Scalars['String']['output']>;
  stationCode?: Maybe<Scalars['String']['output']>;
  stationSequence: Scalars['Int']['output'];
  verifiedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ComponentSerialFilterInput = {
  and?: InputMaybe<Array<ComponentSerialFilterInput>>;
  component?: InputMaybe<ComponentFilterInput>;
  componentId?: InputMaybe<ComponentIdFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  dcwsResponses?: InputMaybe<ListFilterInputTypeOfDcwsResponseFilterInput>;
  id?: InputMaybe<ComponentSerialIdFilterInput>;
  kit?: InputMaybe<KitFilterInput>;
  kitId?: InputMaybe<KitIdFilterInput>;
  kitVin?: InputMaybe<KitVinFilterInput>;
  kitVinId?: InputMaybe<KitVinIdFilterInput>;
  or?: InputMaybe<Array<ComponentSerialFilterInput>>;
  original_Serial1?: InputMaybe<StringOperationFilterInput>;
  original_Serial2?: InputMaybe<StringOperationFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  serial1?: InputMaybe<StringOperationFilterInput>;
  serial2?: InputMaybe<StringOperationFilterInput>;
  station?: InputMaybe<StationFilterInput>;
  stationId?: InputMaybe<StationIdFilterInput>;
  verifiedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type ComponentSerialId = {
  __typename?: 'ComponentSerialId';
  value: Scalars['UUID']['output'];
};

export type ComponentSerialIdFilterInput = {
  and?: InputMaybe<Array<ComponentSerialIdFilterInput>>;
  or?: InputMaybe<Array<ComponentSerialIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type ComponentSerialIdInput = {
  value: Scalars['UUID']['input'];
};

export type ComponentSerialInput = {
  component: ComponentInput;
  componentId: ComponentIdInput;
  createdAt: Scalars['DateTime']['input'];
  dcwsResponses: Array<DcwsResponseInput>;
  id: ComponentSerialIdInput;
  kit: KitInput;
  kitId: KitIdInput;
  kitVin: KitVinInput;
  kitVinId?: InputMaybe<KitVinIdInput>;
  original_Serial1?: InputMaybe<Scalars['String']['input']>;
  original_Serial2?: InputMaybe<Scalars['String']['input']>;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
  serial1: Scalars['String']['input'];
  serial2: Scalars['String']['input'];
  station: StationInput;
  stationId: StationIdInput;
  verifiedAt?: InputMaybe<Scalars['DateTime']['input']>;
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

export type ComponentSerialsByKitQueryInput = {
  kitNo: Scalars['String']['input'];
};

export type ComponentSerialsByKitQueryResult = {
  __typename?: 'ComponentSerialsByKitQueryResult';
  items: Array<ComponentSerialByKitQueryResultItem>;
  kitNo: Scalars['String']['output'];
};

export enum ComponentSerialsQueryFilter {
  All = 'ALL',
  ComponentCode = 'COMPONENT_CODE',
  LotNoOrSequence = 'LOT_NO_OR_SEQUENCE',
  Serial1 = 'SERIAL1',
  StationCode = 'STATION_CODE',
  VerificationPending = 'VERIFICATION_PENDING',
  Vin = 'VIN'
}

export type ComponentSerialsQueryInput = {
  filterBy?: ComponentSerialsQueryFilter;
  filterValue?: InputMaybe<Scalars['String']['input']>;
  fromDate: Scalars['DateTime']['input'];
  plantCode: Scalars['String']['input'];
  toDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ComponentSerialsQueryResult = {
  __typename?: 'ComponentSerialsQueryResult';
  componentCode: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  dcwsResponseCode?: Maybe<Scalars['String']['output']>;
  kitNo: Scalars['String']['output'];
  lotNo: Scalars['String']['output'];
  model: Scalars['String']['output'];
  plantCode: Scalars['String']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  sequenceByPlant: Scalars['Int']['output'];
  serial1: Scalars['String']['output'];
  serial2: Scalars['String']['output'];
  stationCode: Scalars['String']['output'];
  stationSequence: Scalars['Int']['output'];
  status: Scalars['String']['output'];
  verifiedAt?: Maybe<Scalars['DateTime']['output']>;
  vin: Scalars['String']['output'];
};

export type ComponentStation = {
  __typename?: 'ComponentStation';
  component: Component;
  componentId: ComponentId;
  createdAt: Scalars['DateTime']['output'];
  id: ComponentStationId;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  saveCDCComponent: Scalars['Boolean']['output'];
  station: Station;
  stationId: StationId;
};

export type ComponentStationFilterInput = {
  and?: InputMaybe<Array<ComponentStationFilterInput>>;
  component?: InputMaybe<ComponentFilterInput>;
  componentId?: InputMaybe<ComponentIdFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<ComponentStationIdFilterInput>;
  or?: InputMaybe<Array<ComponentStationFilterInput>>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  saveCDCComponent?: InputMaybe<BooleanOperationFilterInput>;
  station?: InputMaybe<StationFilterInput>;
  stationId?: InputMaybe<StationIdFilterInput>;
};

export type ComponentStationId = {
  __typename?: 'ComponentStationId';
  value: Scalars['UUID']['output'];
};

export type ComponentStationIdFilterInput = {
  and?: InputMaybe<Array<ComponentStationIdFilterInput>>;
  or?: InputMaybe<Array<ComponentStationIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type ComponentStationIdInput = {
  value: Scalars['UUID']['input'];
};

export type ComponentStationInput = {
  component: ComponentInput;
  componentId: ComponentIdInput;
  createdAt: Scalars['DateTime']['input'];
  id: ComponentStationIdInput;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
  saveCDCComponent: Scalars['Boolean']['input'];
  station: StationInput;
  stationId: StationIdInput;
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

export type ComponentStationsQueryInput = {
  first?: Scalars['Int']['input'];
  plantCode: Scalars['String']['input'];
};

export type ComponentStationsQueryResult = {
  __typename?: 'ComponentStationsQueryResult';
  componentStations: Array<ComponentStationsQueryResultItem>;
};

export type ComponentStationsQueryResultItem = {
  __typename?: 'ComponentStationsQueryResultItem';
  componentCode: Scalars['String']['output'];
  componentIconUrl: Scalars['String']['output'];
  componentName: Scalars['String']['output'];
  dcwsSubmissionRequired: Scalars['Boolean']['output'];
  plantCode: Scalars['String']['output'];
  stationCode: Scalars['String']['output'];
  stationSequence: Scalars['Int']['output'];
};

export type ComponentsQueryInput = {
  plantCode?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentsQueryResult = {
  __typename?: 'ComponentsQueryResult';
  allowDuplicateSerial: Scalars['Boolean']['output'];
  associatedStationCodes: Array<Scalars['String']['output']>;
  code: Scalars['String']['output'];
  componentSerialRule: ComponentSerialRule;
  createdAt: Scalars['DateTime']['output'];
  dcwsSubmissionRequired: Scalars['Boolean']['output'];
  iconURL?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Conveyance = {
  __typename?: 'Conveyance';
  conveyanceNo: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  dsConvInitials: Scalars['String']['output'];
  handlingUnits: Array<HandlingUnit>;
  id: ConveyanceId;
  invoiceNo: Scalars['String']['output'];
  lot: Lot;
  lotId: LotId;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  shipDate: Scalars['DateTime']['output'];
  wtGross?: Maybe<Scalars['Decimal']['output']>;
};

export type ConveyanceFilterInput = {
  and?: InputMaybe<Array<ConveyanceFilterInput>>;
  conveyanceNo?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  dsConvInitials?: InputMaybe<StringOperationFilterInput>;
  handlingUnits?: InputMaybe<ListFilterInputTypeOfHandlingUnitFilterInput>;
  id?: InputMaybe<ConveyanceIdFilterInput>;
  invoiceNo?: InputMaybe<StringOperationFilterInput>;
  lot?: InputMaybe<LotFilterInput>;
  lotId?: InputMaybe<LotIdFilterInput>;
  or?: InputMaybe<Array<ConveyanceFilterInput>>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  shipDate?: InputMaybe<DateTimeOperationFilterInput>;
  wtGross?: InputMaybe<DecimalOperationFilterInput>;
};

export type ConveyanceId = {
  __typename?: 'ConveyanceId';
  value: Scalars['UUID']['output'];
};

export type ConveyanceIdFilterInput = {
  and?: InputMaybe<Array<ConveyanceIdFilterInput>>;
  or?: InputMaybe<Array<ConveyanceIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type ConveyanceIdInput = {
  value: Scalars['UUID']['input'];
};

export type ConveyanceInput = {
  conveyanceNo: Scalars['String']['input'];
  createdAt: Scalars['DateTime']['input'];
  dsConvInitials: Scalars['String']['input'];
  handlingUnits: Array<HandlingUnitInput>;
  id: ConveyanceIdInput;
  invoiceNo: Scalars['String']['input'];
  lot: LotInput;
  lotId: LotIdInput;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
  shipDate: Scalars['DateTime']['input'];
  wtGross?: InputMaybe<Scalars['Decimal']['input']>;
};

export type CreateComponentSerialCommandInput = {
  componentCode: Scalars['String']['input'];
  replace?: Scalars['Boolean']['input'];
  serial1?: Scalars['String']['input'];
  serial2?: Scalars['String']['input'];
  stationCode: Scalars['String']['input'];
  vin: Scalars['String']['input'];
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

export type CreateDcwsResponseInput = {
  componentSerialId: ComponentSerialIdInput;
  errorMessage: Scalars['String']['input'];
  responseCode: Scalars['String']['input'];
};

export type CreateKitStatusCommandInput = {
  dealerCode: Scalars['String']['input'];
  eventCode: KitStatusCode;
  eventDate: Scalars['DateTime']['input'];
  kitNo: Scalars['String']['input'];
};

export type CreateKitStatusCommandResult = {
  __typename?: 'CreateKitStatusCommandResult';
  dealerCode: Scalars['String']['output'];
  eventDateTime: Scalars['DateTime']['output'];
  kitNo: Scalars['String']['output'];
  kitStatusCode: KitStatusCode;
  kitStatusEventId: Scalars['UUID']['output'];
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

export type DcwsResponse = {
  __typename?: 'DcwsResponse';
  componentSerial: ComponentSerial;
  componentSerialId: ComponentSerialId;
  createdAt: Scalars['DateTime']['output'];
  dcwsErrorMessage?: Maybe<Scalars['String']['output']>;
  dcwsProcessExcptionCode: Scalars['String']['output'];
  id: DcwsResponseId;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  submissionAccepted: Scalars['Boolean']['output'];
};

export type DcwsResponseFilterInput = {
  and?: InputMaybe<Array<DcwsResponseFilterInput>>;
  componentSerial?: InputMaybe<ComponentSerialFilterInput>;
  componentSerialId?: InputMaybe<ComponentSerialIdFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  dcwsErrorMessage?: InputMaybe<StringOperationFilterInput>;
  dcwsProcessExcptionCode?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<DcwsResponseIdFilterInput>;
  or?: InputMaybe<Array<DcwsResponseFilterInput>>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  submissionAccepted?: InputMaybe<BooleanOperationFilterInput>;
};

export type DcwsResponseId = {
  __typename?: 'DcwsResponseId';
  value: Scalars['UUID']['output'];
};

export type DcwsResponseIdFilterInput = {
  and?: InputMaybe<Array<DcwsResponseIdFilterInput>>;
  or?: InputMaybe<Array<DcwsResponseIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type DcwsResponseIdInput = {
  value: Scalars['UUID']['input'];
};

export type DcwsResponseInput = {
  componentSerial: ComponentSerialInput;
  componentSerialId: ComponentSerialIdInput;
  createdAt: Scalars['DateTime']['input'];
  dcwsErrorMessage?: InputMaybe<Scalars['String']['input']>;
  dcwsProcessExcptionCode: Scalars['String']['input'];
  id: DcwsResponseIdInput;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
  submissionAccepted: Scalars['Boolean']['input'];
};

export type Dealer = {
  __typename?: 'Dealer';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: DealerId;
  kits: Array<Kit>;
  name: Scalars['String']['output'];
  plant: Plant;
  plantId: PlantId;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DealerFilterInput = {
  and?: InputMaybe<Array<DealerFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<DealerIdFilterInput>;
  kits?: InputMaybe<ListFilterInputTypeOfKitFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<DealerFilterInput>>;
  plant?: InputMaybe<PlantFilterInput>;
  plantId?: InputMaybe<PlantIdFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type DealerId = {
  __typename?: 'DealerId';
  value: Scalars['UUID']['output'];
};

export type DealerIdFilterInput = {
  and?: InputMaybe<Array<DealerIdFilterInput>>;
  or?: InputMaybe<Array<DealerIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type DealerIdInput = {
  value: Scalars['UUID']['input'];
};

export type DealerIdSortInput = {
  value?: InputMaybe<SortEnumType>;
};

export type DealerInput = {
  code: Scalars['String']['input'];
  createdAt: Scalars['DateTime']['input'];
  id: DealerIdInput;
  kits: Array<KitInput>;
  name: Scalars['String']['input'];
  plant: PlantInput;
  plantId: PlantIdInput;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DealerSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<DealerIdSortInput>;
  name?: InputMaybe<SortEnumType>;
  plant?: InputMaybe<PlantSortInput>;
  plantId?: InputMaybe<PlantIdSortInput>;
  removedAt?: InputMaybe<SortEnumType>;
};

export type DealersListQueryInput = {
  plantCode?: InputMaybe<Scalars['String']['input']>;
};

export type DealersQueryResult = {
  __typename?: 'DealersQueryResult';
  dealers: Array<DealersQueryResultItem>;
};

export type DealersQueryResultItem = {
  __typename?: 'DealersQueryResultItem';
  createdAt: Scalars['DateTime']['output'];
  dealerCode: Scalars['String']['output'];
  dealerName: Scalars['String']['output'];
  plantCode: Scalars['String']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DecimalOperationFilterInput = {
  eq?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  neq?: InputMaybe<Scalars['Decimal']['input']>;
  ngt?: InputMaybe<Scalars['Decimal']['input']>;
  ngte?: InputMaybe<Scalars['Decimal']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  nlt?: InputMaybe<Scalars['Decimal']['input']>;
  nlte?: InputMaybe<Scalars['Decimal']['input']>;
};

export type Error = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  description: Scalars['String']['output'];
};

export type GetImportLotJsonQueryInput = {
  fileName: Scalars['String']['input'];
};

export type GetImportLotJsonQueryResult = {
  __typename?: 'GetImportLotJsonQueryResult';
  fileName: Scalars['String']['output'];
  jsonText: Scalars['String']['output'];
};

export type GetLotDetailForReceivingQueryInput = {
  lotNo: Scalars['String']['input'];
  plantCode: Scalars['String']['input'];
};

export type GetLotDetailForReceivingQueryResult = {
  __typename?: 'GetLotDetailForReceivingQueryResult';
  lotNo: Scalars['String']['output'];
  model: Scalars['String']['output'];
  paint: Scalars['String']['output'];
  plantCode: Scalars['String']['output'];
  sourceLotNo: Scalars['String']['output'];
  subModel: Scalars['String']['output'];
};

export type GetPcvComponentsByPlantQueryInput = {
  plantCode: Scalars['String']['input'];
};

export type GetPcvComponentsByPlantQueryResult = {
  __typename?: 'GetPcvComponentsByPlantQueryResult';
  componentCode: Scalars['String']['output'];
  componentName: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  modelYear: Scalars['String']['output'];
  pcvCode: Scalars['String']['output'];
  pcvModel: Scalars['String']['output'];
  pcvSeries: Scalars['String']['output'];
  plantCode: Scalars['String']['output'];
};

export type GetPcvsByPlantQueryInput = {
  first?: Scalars['Int']['input'];
  includeRemoved?: Scalars['Boolean']['input'];
  plantCode: Scalars['String']['input'];
};

export type GetPcvsByPlantQueryResult = {
  __typename?: 'GetPcvsByPlantQueryResult';
  pcvs: Array<PcvItem>;
};

export type GetRecentKitsQueryInput = {
  first: Scalars['Int']['input'];
  plantCode: Scalars['String']['input'];
  statusCode?: InputMaybe<KitStatusCode>;
};

export type GetRecentKitsQueryResult = {
  __typename?: 'GetRecentKitsQueryResult';
  capturedComponentSerialCount?: Maybe<Scalars['Int']['output']>;
  imported?: Maybe<Scalars['DateTime']['output']>;
  kitNo: Scalars['String']['output'];
  lastKitStatusCode?: Maybe<Scalars['String']['output']>;
  lastKitStatusEventDate?: Maybe<Scalars['DateTime']['output']>;
  lotNo: Scalars['String']['output'];
  modelCode: Scalars['String']['output'];
  requiredComponentSerialCount?: Maybe<Scalars['Int']['output']>;
  submittedComponentSerialCount?: Maybe<Scalars['Int']['output']>;
  vin: Scalars['String']['output'];
};

export type HandlingUnit = {
  __typename?: 'HandlingUnit';
  code: Scalars['String']['output'];
  commodityCode: Scalars['String']['output'];
  conveyance?: Maybe<Conveyance>;
  conveyanceId?: Maybe<ConveyanceId>;
  createdAt: Scalars['DateTime']['output'];
  id: HandlingUnitId;
  lot: Lot;
  lotId: LotId;
  msCntrHeight?: Maybe<Scalars['Decimal']['output']>;
  msCntrLength?: Maybe<Scalars['Decimal']['output']>;
  msCntrWidth?: Maybe<Scalars['Decimal']['output']>;
  parts: Array<HandlingUnitPart>;
  received: Array<HandlingUnitReceived>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HandlingUnitDetailQueryInput = {
  handlingUnitCode: Scalars['String']['input'];
};

export type HandlingUnitDetailQueryResult = {
  __typename?: 'HandlingUnitDetailQueryResult';
  code: Scalars['String']['output'];
  commodityCode: Scalars['String']['output'];
  conveyanceNo: Scalars['String']['output'];
  invoiceNo?: Maybe<Scalars['String']['output']>;
  lotNo?: Maybe<Scalars['String']['output']>;
  msCntrHeight?: Maybe<Scalars['Decimal']['output']>;
  msCntrLength?: Maybe<Scalars['Decimal']['output']>;
  msCntrWidth?: Maybe<Scalars['Decimal']['output']>;
  partCount: Scalars['Int']['output'];
  parts: Array<HandlingUnitDetailQueryResultPart>;
  pcvCode?: Maybe<Scalars['String']['output']>;
  pcvDescription?: Maybe<Scalars['String']['output']>;
  plantCode: Scalars['String']['output'];
  receivedAt?: Maybe<Scalars['DateTime']['output']>;
  receivedRemovedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HandlingUnitDetailQueryResultPart = {
  __typename?: 'HandlingUnitDetailQueryResultPart';
  cdUnitOfMeasure: Scalars['String']['output'];
  commodityCode: Scalars['String']['output'];
  partDesc: Scalars['String']['output'];
  partNo: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  wtPart: Scalars['Decimal']['output'];
};

export type HandlingUnitFilterInput = {
  and?: InputMaybe<Array<HandlingUnitFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  commodityCode?: InputMaybe<StringOperationFilterInput>;
  conveyance?: InputMaybe<ConveyanceFilterInput>;
  conveyanceId?: InputMaybe<ConveyanceIdFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<HandlingUnitIdFilterInput>;
  lot?: InputMaybe<LotFilterInput>;
  lotId?: InputMaybe<LotIdFilterInput>;
  msCntrHeight?: InputMaybe<DecimalOperationFilterInput>;
  msCntrLength?: InputMaybe<DecimalOperationFilterInput>;
  msCntrWidth?: InputMaybe<DecimalOperationFilterInput>;
  or?: InputMaybe<Array<HandlingUnitFilterInput>>;
  parts?: InputMaybe<ListFilterInputTypeOfHandlingUnitPartFilterInput>;
  received?: InputMaybe<ListFilterInputTypeOfHandlingUnitReceivedFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type HandlingUnitId = {
  __typename?: 'HandlingUnitId';
  value: Scalars['UUID']['output'];
};

export type HandlingUnitIdFilterInput = {
  and?: InputMaybe<Array<HandlingUnitIdFilterInput>>;
  or?: InputMaybe<Array<HandlingUnitIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type HandlingUnitIdInput = {
  value: Scalars['UUID']['input'];
};

export type HandlingUnitInput = {
  code: Scalars['String']['input'];
  commodityCode: Scalars['String']['input'];
  conveyance?: InputMaybe<ConveyanceInput>;
  conveyanceId?: InputMaybe<ConveyanceIdInput>;
  createdAt: Scalars['DateTime']['input'];
  id: HandlingUnitIdInput;
  lot: LotInput;
  lotId: LotIdInput;
  msCntrHeight?: InputMaybe<Scalars['Decimal']['input']>;
  msCntrLength?: InputMaybe<Scalars['Decimal']['input']>;
  msCntrWidth?: InputMaybe<Scalars['Decimal']['input']>;
  parts: Array<HandlingUnitPartInput>;
  received: Array<HandlingUnitReceivedInput>;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HandlingUnitOverview = {
  __typename?: 'HandlingUnitOverview';
  commodityCode: Scalars['String']['output'];
  conveyanceNo: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  handlingUnitCode: Scalars['String']['output'];
  lotNo: Scalars['String']['output'];
  partCount: Scalars['Int']['output'];
  plantCode: Scalars['String']['output'];
  receiveCancledAt?: Maybe<Scalars['DateTime']['output']>;
  receivedAt?: Maybe<Scalars['DateTime']['output']>;
  shipmentSequence: Scalars['Int']['output'];
};

export type HandlingUnitPart = {
  __typename?: 'HandlingUnitPart';
  cdUnitOfMeasure: Scalars['String']['output'];
  commodityCode: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customerPartNo: Scalars['String']['output'];
  handlingUnit: HandlingUnit;
  handlingUnitId: HandlingUnitId;
  id: HandlingUnitPartId;
  lotPart?: Maybe<LotPart>;
  lotPartId?: Maybe<LotPartId>;
  part: Part;
  partId: PartId;
  quantity: Scalars['Int']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  wtPart?: Maybe<Scalars['Decimal']['output']>;
};

export type HandlingUnitPartFilterInput = {
  and?: InputMaybe<Array<HandlingUnitPartFilterInput>>;
  cdUnitOfMeasure?: InputMaybe<StringOperationFilterInput>;
  commodityCode?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  customerPartNo?: InputMaybe<StringOperationFilterInput>;
  handlingUnit?: InputMaybe<HandlingUnitFilterInput>;
  handlingUnitId?: InputMaybe<HandlingUnitIdFilterInput>;
  id?: InputMaybe<HandlingUnitPartIdFilterInput>;
  lotPart?: InputMaybe<LotPartFilterInput>;
  lotPartId?: InputMaybe<LotPartIdFilterInput>;
  or?: InputMaybe<Array<HandlingUnitPartFilterInput>>;
  part?: InputMaybe<PartFilterInput>;
  partId?: InputMaybe<PartIdFilterInput>;
  quantity?: InputMaybe<IntOperationFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  wtPart?: InputMaybe<DecimalOperationFilterInput>;
};

export type HandlingUnitPartId = {
  __typename?: 'HandlingUnitPartId';
  value: Scalars['UUID']['output'];
};

export type HandlingUnitPartIdFilterInput = {
  and?: InputMaybe<Array<HandlingUnitPartIdFilterInput>>;
  or?: InputMaybe<Array<HandlingUnitPartIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type HandlingUnitPartIdInput = {
  value: Scalars['UUID']['input'];
};

export type HandlingUnitPartInput = {
  cdUnitOfMeasure: Scalars['String']['input'];
  commodityCode: Scalars['String']['input'];
  createdAt: Scalars['DateTime']['input'];
  customerPartNo: Scalars['String']['input'];
  handlingUnit: HandlingUnitInput;
  handlingUnitId: HandlingUnitIdInput;
  id: HandlingUnitPartIdInput;
  lotPart?: InputMaybe<LotPartInput>;
  lotPartId?: InputMaybe<LotPartIdInput>;
  part: PartInput;
  partId: PartIdInput;
  quantity: Scalars['Int']['input'];
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
  wtPart?: InputMaybe<Scalars['Decimal']['input']>;
};

export type HandlingUnitPartsQueryInput = {
  handlingUnitCode: Scalars['String']['input'];
};

export type HandlingUnitPartsQueryResult = {
  __typename?: 'HandlingUnitPartsQueryResult';
  cdUnitOfMeasure: Scalars['String']['output'];
  partDesc: Scalars['String']['output'];
  partNo: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
};

export enum HandlingUnitQueryFilter {
  ByLotNo = 'BY_LOT_NO',
  ByShipmentId = 'BY_SHIPMENT_ID',
  ByShipmentSequence = 'BY_SHIPMENT_SEQUENCE'
}

export type HandlingUnitReceived = {
  __typename?: 'HandlingUnitReceived';
  createdAt: Scalars['DateTime']['output'];
  handlingUnit: HandlingUnit;
  handlingUnitId: HandlingUnitId;
  id: HandlingUnitReceivedId;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HandlingUnitReceivedFilterInput = {
  and?: InputMaybe<Array<HandlingUnitReceivedFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  handlingUnit?: InputMaybe<HandlingUnitFilterInput>;
  handlingUnitId?: InputMaybe<HandlingUnitIdFilterInput>;
  id?: InputMaybe<HandlingUnitReceivedIdFilterInput>;
  or?: InputMaybe<Array<HandlingUnitReceivedFilterInput>>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type HandlingUnitReceivedId = {
  __typename?: 'HandlingUnitReceivedId';
  value: Scalars['UUID']['output'];
};

export type HandlingUnitReceivedIdFilterInput = {
  and?: InputMaybe<Array<HandlingUnitReceivedIdFilterInput>>;
  or?: InputMaybe<Array<HandlingUnitReceivedIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type HandlingUnitReceivedIdInput = {
  value: Scalars['UUID']['input'];
};

export type HandlingUnitReceivedInput = {
  createdAt: Scalars['DateTime']['input'];
  handlingUnit: HandlingUnitInput;
  handlingUnitId: HandlingUnitIdInput;
  id: HandlingUnitReceivedIdInput;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HandlingUnitsQueryInput = {
  filterBy: HandlingUnitQueryFilter;
  filterValue: Scalars['String']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  plantCode: Scalars['String']['input'];
};

export type HandlingUnitsQueryResult = {
  __typename?: 'HandlingUnitsQueryResult';
  commodityCode: Scalars['String']['output'];
  containerHeight?: Maybe<Scalars['Decimal']['output']>;
  containerLength?: Maybe<Scalars['Decimal']['output']>;
  containerWidth?: Maybe<Scalars['Decimal']['output']>;
  conveyanceNo: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  handlingUnitCode: Scalars['String']['output'];
  invoiceNo: Scalars['String']['output'];
  lotNo: Scalars['String']['output'];
  partsCount: Scalars['Int']['output'];
  plantCode: Scalars['String']['output'];
  receivedAt?: Maybe<Scalars['DateTime']['output']>;
  receivedCanceled: Scalars['Boolean']['output'];
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

export type ImportShipmentCommandResult = {
  __typename?: 'ImportShipmentCommandResult';
  lotNos: Array<Scalars['String']['output']>;
  plantCode: Scalars['String']['output'];
  sequence: Scalars['Int']['output'];
  shipmentId: Scalars['UUID']['output'];
};

export type ImportTransactionsQueryResultItem = {
  __typename?: 'ImportTransactionsQueryResultItem';
  environmentIndicator: Scalars['String']['output'];
  importType: LotImportType;
  importedAt: Scalars['DateTime']['output'];
  lotNummber: Scalars['String']['output'];
  partsAddedCount?: Maybe<Scalars['Int']['output']>;
  partsRemovedCount?: Maybe<Scalars['Int']['output']>;
  partsUpdatedCount?: Maybe<Scalars['Int']['output']>;
  receiverID: Scalars['String']['output'];
  senderID: Scalars['String']['output'];
  totalPartsCount?: Maybe<Scalars['Int']['output']>;
  transactionDate: Scalars['String']['output'];
  transactionID: Scalars['String']['output'];
  transactionTime: Scalars['String']['output'];
  transactionType: Scalars['String']['output'];
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
  count: Scalars['Int']['output'];
  kitStatusCode: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Kit = {
  __typename?: 'Kit';
  assignVIN: ResultOrOfKit;
  createdAt: Scalars['DateTime']['output'];
  dealer?: Maybe<Dealer>;
  dealerId?: Maybe<DealerId>;
  id: KitId;
  kitNo: Scalars['String']['output'];
  kitStatusEvents: Array<KitStatusEvent>;
  lot: Lot;
  lotId: LotId;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  vin: Scalars['String']['output'];
};


export type KitAssignVinArgs = {
  vin: Scalars['String']['input'];
};

export type KitComponentSerialInfo = {
  __typename?: 'KitComponentSerialInfo';
  componentCode: Scalars['String']['output'];
  componentIconURL: Scalars['String']['output'];
  componentName: Scalars['String']['output'];
  componentSerialRule: ComponentSerialRule;
  stations: Array<StatcionSerialInfo>;
};

export type KitFilterInput = {
  and?: InputMaybe<Array<KitFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  dealer?: InputMaybe<DealerFilterInput>;
  dealerId?: InputMaybe<DealerIdFilterInput>;
  id?: InputMaybe<KitIdFilterInput>;
  kitNo?: InputMaybe<StringOperationFilterInput>;
  kitStatusEvents?: InputMaybe<ListFilterInputTypeOfKitStatusEventFilterInput>;
  lot?: InputMaybe<LotFilterInput>;
  lotId?: InputMaybe<LotIdFilterInput>;
  or?: InputMaybe<Array<KitFilterInput>>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  vin?: InputMaybe<StringOperationFilterInput>;
};

export type KitId = {
  __typename?: 'KitId';
  value: Scalars['UUID']['output'];
};

export type KitIdFilterInput = {
  and?: InputMaybe<Array<KitIdFilterInput>>;
  or?: InputMaybe<Array<KitIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type KitIdInput = {
  value: Scalars['UUID']['input'];
};

export type KitIdSortInput = {
  value?: InputMaybe<SortEnumType>;
};

export type KitInput = {
  createdAt: Scalars['DateTime']['input'];
  dealer?: InputMaybe<DealerInput>;
  dealerId?: InputMaybe<DealerIdInput>;
  id: KitIdInput;
  kitNo: Scalars['String']['input'];
  kitStatusEvents: Array<KitStatusEventInput>;
  lot: LotInput;
  lotId: LotIdInput;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
  vin: Scalars['String']['input'];
};

export type KitOverviewQueryInput = {
  vinOrKitNo: Scalars['String']['input'];
};

export type KitOverviewQueryResult = {
  __typename?: 'KitOverviewQueryResult';
  createdAt: Scalars['DateTime']['output'];
  currentKitStatusCode?: Maybe<KitStatusCode>;
  currentKitStatusDate?: Maybe<Scalars['DateTime']['output']>;
  currentKitStatusDescription: Scalars['String']['output'];
  dealerCode: Scalars['String']['output'];
  dealerName: Scalars['String']['output'];
  kitNo: Scalars['String']['output'];
  lotNo: Scalars['String']['output'];
  lotSequnceByPlant: Scalars['Int']['output'];
  model: Scalars['String']['output'];
  modelDescription: Scalars['String']['output'];
  modelYear: Scalars['String']['output'];
  pcvCode: Scalars['String']['output'];
  plantCode: Scalars['String']['output'];
  sourceLotNo: Scalars['String']['output'];
  vin: Scalars['String']['output'];
};

export type KitSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  dealer?: InputMaybe<DealerSortInput>;
  dealerId?: InputMaybe<DealerIdSortInput>;
  id?: InputMaybe<KitIdSortInput>;
  kitNo?: InputMaybe<SortEnumType>;
  lot?: InputMaybe<LotSortInput>;
  lotId?: InputMaybe<LotIdSortInput>;
  removedAt?: InputMaybe<SortEnumType>;
  vin?: InputMaybe<SortEnumType>;
};

export enum KitStatusCode {
  Fpbc = 'FPBC',
  Fpbp = 'FPBP',
  Fpbs = 'FPBS',
  Fpcr = 'FPCR',
  Fpgr = 'FPGR',
  Fpws = 'FPWS',
  Kitc = 'KITC',
  Shpc = 'SHPC'
}

export enum KitStatusCodeEx {
  All = 'ALL',
  Fpbc = 'FPBC',
  Fpbp = 'FPBP',
  Fpbs = 'FPBS',
  Fpcr = 'FPCR',
  Fpgr = 'FPGR',
  Fpws = 'FPWS',
  Kitc = 'KITC',
  Shpc = 'SHPC'
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
  id: KitStatusEventId;
  kit: Kit;
  kitId: KitId;
  kitStatusEventTypeId: KitStatusEventTypeId;
  partnerStatusUpdatedAt?: Maybe<Scalars['DateTime']['output']>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type KitStatusEventFilterInput = {
  and?: InputMaybe<Array<KitStatusEventFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  eventDate?: InputMaybe<DateTimeOperationFilterInput>;
  eventNote?: InputMaybe<StringOperationFilterInput>;
  eventType?: InputMaybe<KitStatusEventTypeFilterInput>;
  id?: InputMaybe<KitStatusEventIdFilterInput>;
  kit?: InputMaybe<KitFilterInput>;
  kitId?: InputMaybe<KitIdFilterInput>;
  kitStatusEventTypeId?: InputMaybe<KitStatusEventTypeIdFilterInput>;
  or?: InputMaybe<Array<KitStatusEventFilterInput>>;
  partnerStatusUpdatedAt?: InputMaybe<DateTimeOperationFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type KitStatusEventId = {
  __typename?: 'KitStatusEventId';
  value: Scalars['UUID']['output'];
};

export type KitStatusEventIdFilterInput = {
  and?: InputMaybe<Array<KitStatusEventIdFilterInput>>;
  or?: InputMaybe<Array<KitStatusEventIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type KitStatusEventIdInput = {
  value: Scalars['UUID']['input'];
};

export type KitStatusEventInput = {
  createdAt: Scalars['DateTime']['input'];
  eventDate: Scalars['DateTime']['input'];
  eventNote?: InputMaybe<Scalars['String']['input']>;
  eventType: KitStatusEventTypeInput;
  id: KitStatusEventIdInput;
  kit: KitInput;
  kitId: KitIdInput;
  kitStatusEventTypeId: KitStatusEventTypeIdInput;
  partnerStatusUpdatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type KitStatusEventType = {
  __typename?: 'KitStatusEventType';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: KitStatusEventTypeId;
  kitStatusCode: KitStatusCode;
  kitStatusEvents: Array<KitStatusEvent>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  sequence: Scalars['Int']['output'];
};

export type KitStatusEventTypeFilterInput = {
  and?: InputMaybe<Array<KitStatusEventTypeFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<KitStatusEventTypeIdFilterInput>;
  kitStatusCode?: InputMaybe<KitStatusCodeOperationFilterInput>;
  kitStatusEvents?: InputMaybe<ListFilterInputTypeOfKitStatusEventFilterInput>;
  or?: InputMaybe<Array<KitStatusEventTypeFilterInput>>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  sequence?: InputMaybe<IntOperationFilterInput>;
};

export type KitStatusEventTypeId = {
  __typename?: 'KitStatusEventTypeId';
  value: Scalars['UUID']['output'];
};

export type KitStatusEventTypeIdFilterInput = {
  and?: InputMaybe<Array<KitStatusEventTypeIdFilterInput>>;
  or?: InputMaybe<Array<KitStatusEventTypeIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type KitStatusEventTypeIdInput = {
  value: Scalars['UUID']['input'];
};

export type KitStatusEventTypeInput = {
  createdAt: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  id: KitStatusEventTypeIdInput;
  kitStatusCode: KitStatusCode;
  kitStatusEvents: Array<KitStatusEventInput>;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sequence: Scalars['Int']['input'];
};

export type KitStatusEventsByDateQueryInput = {
  fromDate: Scalars['DateTime']['input'];
  kitStatusCode: KitStatusCodeEx;
  plantCode: Scalars['String']['input'];
  toDate: Scalars['DateTime']['input'];
};

export type KitStatusEventsByDateQueryResult = {
  __typename?: 'KitStatusEventsByDateQueryResult';
  kitStatusEvents: Array<KitStatusEventsByDateQueryResultItem>;
};

export type KitStatusEventsByDateQueryResultItem = {
  __typename?: 'KitStatusEventsByDateQueryResultItem';
  createdAt: Scalars['DateTime']['output'];
  dealerCode: Scalars['String']['output'];
  drive: Scalars['String']['output'];
  eventDate: Scalars['DateTime']['output'];
  kitNo: Scalars['String']['output'];
  kitStatusCode: KitStatusCode;
  lotNo: Scalars['String']['output'];
  model: Scalars['String']['output'];
  paint: Scalars['String']['output'];
  plantCode: Scalars['String']['output'];
  series: Scalars['String']['output'];
  statusCode: Scalars['String']['output'];
  transmission: Scalars['String']['output'];
  trim: Scalars['String']['output'];
  vin: Scalars['String']['output'];
};

export type KitStatusesQueryInput = {
  kitNo: Scalars['String']['input'];
};

export type KitStatusesQueryResult = {
  __typename?: 'KitStatusesQueryResult';
  items: Array<KitStatusesQueryResultItem>;
};

export type KitStatusesQueryResultItem = {
  __typename?: 'KitStatusesQueryResultItem';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  eventDate?: Maybe<Scalars['DateTime']['output']>;
  eventName: Scalars['String']['output'];
  isPending: Scalars['Boolean']['output'];
  kitStatusCode: KitStatusCode;
  partnerUpdatedAt?: Maybe<Scalars['DateTime']['output']>;
  sequence: Scalars['Int']['output'];
};

export type KitVin = {
  __typename?: 'KitVin';
  createdAt: Scalars['DateTime']['output'];
  id: KitVinId;
  kit: Kit;
  kitId: KitId;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  vin: Scalars['String']['output'];
};

export type KitVinAssignmentQueryInput = {
  kitNo: Scalars['String']['input'];
};

export type KitVinAssignmentQueryResult = {
  __typename?: 'KitVinAssignmentQueryResult';
  kitNo: Scalars['String']['output'];
  partnerVIN: Scalars['String']['output'];
  vin: Scalars['String']['output'];
  vinAssignments: Array<KivVinAssignment>;
};

export type KitVinFilterInput = {
  and?: InputMaybe<Array<KitVinFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<KitVinIdFilterInput>;
  kit?: InputMaybe<KitFilterInput>;
  kitId?: InputMaybe<KitIdFilterInput>;
  or?: InputMaybe<Array<KitVinFilterInput>>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  vin?: InputMaybe<StringOperationFilterInput>;
};

export type KitVinId = {
  __typename?: 'KitVinId';
  value: Scalars['UUID']['output'];
};

export type KitVinIdFilterInput = {
  and?: InputMaybe<Array<KitVinIdFilterInput>>;
  or?: InputMaybe<Array<KitVinIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type KitVinIdInput = {
  value: Scalars['UUID']['input'];
};

export type KitVinInput = {
  createdAt: Scalars['DateTime']['input'];
  id: KitVinIdInput;
  kit: KitInput;
  kitId: KitIdInput;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
  vin: Scalars['String']['input'];
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

export type KivVinAssignment = {
  __typename?: 'KivVinAssignment';
  assignedAt: Scalars['DateTime']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  vin: Scalars['String']['output'];
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

export type ListFilterInputTypeOfConveyanceFilterInput = {
  all?: InputMaybe<ConveyanceFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ConveyanceFilterInput>;
  some?: InputMaybe<ConveyanceFilterInput>;
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

export type ListFilterInputTypeOfHandlingUnitPartFilterInput = {
  all?: InputMaybe<HandlingUnitPartFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<HandlingUnitPartFilterInput>;
  some?: InputMaybe<HandlingUnitPartFilterInput>;
};

export type ListFilterInputTypeOfHandlingUnitReceivedFilterInput = {
  all?: InputMaybe<HandlingUnitReceivedFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<HandlingUnitReceivedFilterInput>;
  some?: InputMaybe<HandlingUnitReceivedFilterInput>;
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

export type ListFilterInputTypeOfLotFilterInput = {
  all?: InputMaybe<LotFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<LotFilterInput>;
  some?: InputMaybe<LotFilterInput>;
};

export type ListFilterInputTypeOfLotImportTransactionFilterInput = {
  all?: InputMaybe<LotImportTransactionFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<LotImportTransactionFilterInput>;
  some?: InputMaybe<LotImportTransactionFilterInput>;
};

export type ListFilterInputTypeOfLotPartChangeLogFilterInput = {
  all?: InputMaybe<LotPartChangeLogFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<LotPartChangeLogFilterInput>;
  some?: InputMaybe<LotPartChangeLogFilterInput>;
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

export type ListFilterInputTypeOfPcvModelStationComponentFilterInput = {
  all?: InputMaybe<PcvModelStationComponentFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<PcvModelStationComponentFilterInput>;
  some?: InputMaybe<PcvModelStationComponentFilterInput>;
};

export type ListFilterInputTypeOfPcvModelStationFilterInput = {
  all?: InputMaybe<PcvModelStationFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<PcvModelStationFilterInput>;
  some?: InputMaybe<PcvModelStationFilterInput>;
};

export type ListFilterInputTypeOfShipmentFilterInput = {
  all?: InputMaybe<ShipmentFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ShipmentFilterInput>;
  some?: InputMaybe<ShipmentFilterInput>;
};

export type ListFilterInputTypeOfStationFilterInput = {
  all?: InputMaybe<StationFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<StationFilterInput>;
  some?: InputMaybe<StationFilterInput>;
};

export type Lot = {
  __typename?: 'Lot';
  addLotPart: LotPart;
  altShipToLoc: Scalars['String']['output'];
  bom?: Maybe<Bom>;
  bomId?: Maybe<BomId>;
  cdAiagTransit: Scalars['String']['output'];
  conveyances: Array<Conveyance>;
  createdAt: Scalars['DateTime']['output'];
  handlingUnits: Array<HandlingUnit>;
  id: LotId;
  importLotBom: ResultOrOfLot;
  importLotShipment: ResultOrOfLot;
  importTransactions: Array<LotImportTransaction>;
  inAsnCorrection: Scalars['String']['output'];
  kits: Array<Kit>;
  lotNo: Scalars['String']['output'];
  lotParts: Array<LotPart>;
  marketTerritory: Scalars['String']['output'];
  noOfInvoices: Scalars['Int']['output'];
  orderStatus: Scalars['String']['output'];
  pcv: Pcv;
  pcvId: PcvId;
  plant: Plant;
  plantId: PlantId;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  revisedTargetShipDate?: Maybe<Scalars['DateTime']['output']>;
  sequenceByPlant: Scalars['Int']['output'];
  setShipmentId: ResultOrOfLot;
  shipToLOC: Scalars['String']['output'];
  shipment?: Maybe<Shipment>;
  shipmentId?: Maybe<ShipmentId>;
  soldToLoc: Scalars['String']['output'];
  sourceLotNo: Scalars['String']['output'];
  sourcePlantCode: Scalars['String']['output'];
  updateLotParts: ResultOrOfLot;
  vehicleLine: Scalars['String']['output'];
};


export type LotAddLotPartArgs = {
  bomQuantity: Scalars['Int']['input'];
  commodityCode: Scalars['String']['input'];
  handlingUnitParts: Array<HandlingUnitPartInput>;
  partId: PartIdInput;
  shipmentQuantity: Scalars['Int']['input'];
};


export type LotImportLotBomArgs = {
  importTransactionParams: LotImportTransactionParamsInput;
  lotPartsParamsList: Array<LotPartParamsInput>;
};


export type LotImportLotShipmentArgs = {
  params: LotShipmentParamsInput;
};


export type LotSetShipmentIdArgs = {
  shipmentId?: InputMaybe<ShipmentIdInput>;
};


export type LotUpdateLotPartsArgs = {
  lotParts: Array<LotPartInput>;
};

export type LotBomData = {
  __typename?: 'LotBomData';
  bomHeader: LotBomHeader;
  lotHeader: LotBomLotHeader;
  parts: Array<LotBomLotPart>;
};

export type LotBomHeader = {
  __typename?: 'LotBomHeader';
  environmentIndicator: Scalars['String']['output'];
  receiverID: Scalars['String']['output'];
  senderID: Scalars['String']['output'];
  transactionDate: Scalars['String']['output'];
  transactionID: Scalars['String']['output'];
  transactionTime: Scalars['String']['output'];
  transactionType: Scalars['String']['output'];
};

export type LotBomLotHeader = {
  __typename?: 'LotBomLotHeader';
  customerPlant: Scalars['String']['output'];
  kitCount: Scalars['String']['output'];
  lotNumber: Scalars['String']['output'];
  marketTerritory: Scalars['String']['output'];
  orderStatus: Scalars['String']['output'];
  plant: Scalars['String']['output'];
  revisedTargetShipDate: Scalars['String']['output'];
  sourceLotNumber: Scalars['String']['output'];
  vehicleLine: Scalars['String']['output'];
};

export type LotBomLotPart = {
  __typename?: 'LotBomLotPart';
  kitPartType: Scalars['String']['output'];
  netPartQty: Scalars['String']['output'];
  partDescription: Scalars['String']['output'];
  partNo: Scalars['String']['output'];
};

export type LotBomQueryInput = {
  lotNumberOrTransactionID: Scalars['String']['input'];
  onlyLotsWithImportTransctions?: Scalars['Boolean']['input'];
};

export type LotBomQueryResult = {
  __typename?: 'LotBomQueryResult';
  lotBomData: LotBomData;
};

export type LotConveyance = {
  __typename?: 'LotConveyance';
  conveyanceNo: Scalars['String']['output'];
  dsConvInitials: Scalars['String']['output'];
  handlingUnits: Array<LotShipmentHandlingUnit>;
  invoiceNo: Scalars['String']['output'];
  shipDate: Scalars['DateTime']['output'];
};

export type LotFilterInput = {
  altShipToLoc?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<LotFilterInput>>;
  bom?: InputMaybe<BomFilterInput>;
  bomId?: InputMaybe<BomIdFilterInput>;
  cdAiagTransit?: InputMaybe<StringOperationFilterInput>;
  conveyances?: InputMaybe<ListFilterInputTypeOfConveyanceFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  handlingUnits?: InputMaybe<ListFilterInputTypeOfHandlingUnitFilterInput>;
  id?: InputMaybe<LotIdFilterInput>;
  importTransactions?: InputMaybe<ListFilterInputTypeOfLotImportTransactionFilterInput>;
  inAsnCorrection?: InputMaybe<StringOperationFilterInput>;
  kits?: InputMaybe<ListFilterInputTypeOfKitFilterInput>;
  lotNo?: InputMaybe<StringOperationFilterInput>;
  lotParts?: InputMaybe<ListFilterInputTypeOfLotPartFilterInput>;
  marketTerritory?: InputMaybe<StringOperationFilterInput>;
  noOfInvoices?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<LotFilterInput>>;
  orderStatus?: InputMaybe<StringOperationFilterInput>;
  pcv?: InputMaybe<PcvFilterInput>;
  pcvId?: InputMaybe<PcvIdFilterInput>;
  plant?: InputMaybe<PlantFilterInput>;
  plantId?: InputMaybe<PlantIdFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  revisedTargetShipDate?: InputMaybe<DateTimeOperationFilterInput>;
  sequenceByPlant?: InputMaybe<IntOperationFilterInput>;
  shipToLOC?: InputMaybe<StringOperationFilterInput>;
  shipment?: InputMaybe<ShipmentFilterInput>;
  shipmentId?: InputMaybe<ShipmentIdFilterInput>;
  soldToLoc?: InputMaybe<StringOperationFilterInput>;
  sourceLotNo?: InputMaybe<StringOperationFilterInput>;
  sourcePlantCode?: InputMaybe<StringOperationFilterInput>;
  vehicleLine?: InputMaybe<StringOperationFilterInput>;
};

export type LotId = {
  __typename?: 'LotId';
  value: Scalars['UUID']['output'];
};

export type LotIdFilterInput = {
  and?: InputMaybe<Array<LotIdFilterInput>>;
  or?: InputMaybe<Array<LotIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type LotIdInput = {
  value: Scalars['UUID']['input'];
};

export type LotIdSortInput = {
  value?: InputMaybe<SortEnumType>;
};

export type LotImportTransaction = {
  __typename?: 'LotImportTransaction';
  createdAt: Scalars['DateTime']['output'];
  environmentIndicator: Scalars['String']['output'];
  id: LotImportTransactionId;
  importType: LotImportType;
  lot: Lot;
  lotId: LotId;
  partsAddedCount?: Maybe<Scalars['Int']['output']>;
  partsRemovedCount?: Maybe<Scalars['Int']['output']>;
  partsUpdatedCount?: Maybe<Scalars['Int']['output']>;
  receiverID: Scalars['String']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  senderID: Scalars['String']['output'];
  transactionDate: Scalars['String']['output'];
  transactionID: Scalars['String']['output'];
  transactionTime: Scalars['String']['output'];
  transactionType: Scalars['String']['output'];
};

export type LotImportTransactionFilterInput = {
  and?: InputMaybe<Array<LotImportTransactionFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  environmentIndicator?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<LotImportTransactionIdFilterInput>;
  importType?: InputMaybe<LotImportTypeOperationFilterInput>;
  lot?: InputMaybe<LotFilterInput>;
  lotId?: InputMaybe<LotIdFilterInput>;
  or?: InputMaybe<Array<LotImportTransactionFilterInput>>;
  partsAddedCount?: InputMaybe<IntOperationFilterInput>;
  partsRemovedCount?: InputMaybe<IntOperationFilterInput>;
  partsUpdatedCount?: InputMaybe<IntOperationFilterInput>;
  receiverID?: InputMaybe<StringOperationFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  senderID?: InputMaybe<StringOperationFilterInput>;
  transactionDate?: InputMaybe<StringOperationFilterInput>;
  transactionID?: InputMaybe<StringOperationFilterInput>;
  transactionTime?: InputMaybe<StringOperationFilterInput>;
  transactionType?: InputMaybe<StringOperationFilterInput>;
};

export type LotImportTransactionId = {
  __typename?: 'LotImportTransactionId';
  value: Scalars['UUID']['output'];
};

export type LotImportTransactionIdFilterInput = {
  and?: InputMaybe<Array<LotImportTransactionIdFilterInput>>;
  or?: InputMaybe<Array<LotImportTransactionIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type LotImportTransactionIdInput = {
  value: Scalars['UUID']['input'];
};

export type LotImportTransactionInput = {
  createdAt: Scalars['DateTime']['input'];
  environmentIndicator: Scalars['String']['input'];
  id: LotImportTransactionIdInput;
  importType: LotImportType;
  lot: LotInput;
  lotId: LotIdInput;
  partsAddedCount?: InputMaybe<Scalars['Int']['input']>;
  partsRemovedCount?: InputMaybe<Scalars['Int']['input']>;
  partsUpdatedCount?: InputMaybe<Scalars['Int']['input']>;
  receiverID: Scalars['String']['input'];
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
  senderID: Scalars['String']['input'];
  transactionDate: Scalars['String']['input'];
  transactionID: Scalars['String']['input'];
  transactionTime: Scalars['String']['input'];
  transactionType: Scalars['String']['input'];
};

export type LotImportTransactionOverviewQueryInput = {
  transactionID: Scalars['String']['input'];
};

export type LotImportTransactionOverviewQueryResult = {
  __typename?: 'LotImportTransactionOverviewQueryResult';
  importedAt: Scalars['DateTime']['output'];
  lotNo: Scalars['String']['output'];
  partsAddedCount: Scalars['Int']['output'];
  partsRemovedCount: Scalars['Int']['output'];
  partsUpdatedCount: Scalars['Int']['output'];
  receiverID: Scalars['String']['output'];
  senderID: Scalars['String']['output'];
  transactionID: Scalars['String']['output'];
  transactionType: Scalars['String']['output'];
};

export type LotImportTransactionParamsInput = {
  environmentIndicator: Scalars['String']['input'];
  partsAddedCount?: InputMaybe<Scalars['Int']['input']>;
  partsRemovedCount?: InputMaybe<Scalars['Int']['input']>;
  partsUpdatedCount?: InputMaybe<Scalars['Int']['input']>;
  receiverID: Scalars['String']['input'];
  senderID: Scalars['String']['input'];
  totalPartsCount?: InputMaybe<Scalars['Int']['input']>;
  transactionDate: Scalars['String']['input'];
  transactionID: Scalars['String']['input'];
  transactionTime: Scalars['String']['input'];
  transactionType: Scalars['String']['input'];
};

export type LotImportTransactionsQueryInput = {
  from: Scalars['DateTime']['input'];
  plantCode?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LotImportTransactionsQueryResult = {
  __typename?: 'LotImportTransactionsQueryResult';
  transactions: Array<ImportTransactionsQueryResultItem>;
};

export enum LotImportType {
  Bom = 'BOM',
  Shipment = 'SHIPMENT'
}

export type LotImportTypeOperationFilterInput = {
  eq?: InputMaybe<LotImportType>;
  in?: InputMaybe<Array<LotImportType>>;
  neq?: InputMaybe<LotImportType>;
  nin?: InputMaybe<Array<LotImportType>>;
};

export type LotInput = {
  altShipToLoc: Scalars['String']['input'];
  bom?: InputMaybe<BomInput>;
  bomId?: InputMaybe<BomIdInput>;
  cdAiagTransit: Scalars['String']['input'];
  conveyances: Array<ConveyanceInput>;
  createdAt: Scalars['DateTime']['input'];
  handlingUnits: Array<HandlingUnitInput>;
  id: LotIdInput;
  importTransactions: Array<LotImportTransactionInput>;
  inAsnCorrection: Scalars['String']['input'];
  kits: Array<KitInput>;
  lotNo: Scalars['String']['input'];
  lotParts: Array<LotPartInput>;
  marketTerritory: Scalars['String']['input'];
  noOfInvoices: Scalars['Int']['input'];
  orderStatus: Scalars['String']['input'];
  pcv: PcvInput;
  pcvId: PcvIdInput;
  plant: PlantInput;
  plantId: PlantIdInput;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
  revisedTargetShipDate?: InputMaybe<Scalars['DateTime']['input']>;
  sequenceByPlant: Scalars['Int']['input'];
  shipToLOC: Scalars['String']['input'];
  shipment?: InputMaybe<ShipmentInput>;
  shipmentId?: InputMaybe<ShipmentIdInput>;
  soldToLoc: Scalars['String']['input'];
  sourceLotNo: Scalars['String']['input'];
  sourcePlantCode: Scalars['String']['input'];
  vehicleLine: Scalars['String']['input'];
};

export type LotKitSerialQueryInput = {
  componentCode: Scalars['String']['input'];
  lotNo: Scalars['String']['input'];
};

export type LotKitSerialQueryResult = {
  __typename?: 'LotKitSerialQueryResult';
  componentCode: Scalars['String']['output'];
  kitNo: Scalars['String']['output'];
  serial1: Scalars['String']['output'];
  serial2: Scalars['String']['output'];
  vin: Scalars['String']['output'];
};

export type LotKitsModelDetailQueryInput = {
  lotNo: Scalars['String']['input'];
};

export type LotKitsModelDetailQueryResult = {
  __typename?: 'LotKitsModelDetailQueryResult';
  kitDetails: Array<LotKitsModelDetailQueryResultItem>;
};

export type LotKitsModelDetailQueryResultItem = {
  __typename?: 'LotKitsModelDetailQueryResultItem';
  drive: Scalars['String']['output'];
  engine: Scalars['String']['output'];
  kitNo: Scalars['String']['output'];
  lotNo: Scalars['String']['output'];
  model: Scalars['String']['output'];
  modelCode: Scalars['String']['output'];
  modelYear: Scalars['String']['output'];
  paint: Scalars['String']['output'];
  pcvCode: Scalars['String']['output'];
  series: Scalars['String']['output'];
  transmission: Scalars['String']['output'];
  trim: Scalars['String']['output'];
  vin: Scalars['String']['output'];
};

export type LotKitsQueryInput = {
  lotNo: Scalars['String']['input'];
};

export type LotKitsQueryResult = {
  __typename?: 'LotKitsQueryResult';
  kits: Array<LotKitsQueryResultItem>;
};

export type LotKitsQueryResultItem = {
  __typename?: 'LotKitsQueryResultItem';
  kitNo: Scalars['String']['output'];
  kitStatusCode?: Maybe<Scalars['String']['output']>;
  kitStatusCreatedAt?: Maybe<Scalars['DateTime']['output']>;
  kitStatusDescription?: Maybe<Scalars['String']['output']>;
  kitStatusEventDate?: Maybe<Scalars['DateTime']['output']>;
  model: Scalars['String']['output'];
  pcvCode: Scalars['String']['output'];
  requiredComponentCount: Scalars['Int']['output'];
  verifiedComponentCount: Scalars['Int']['output'];
  vin: Scalars['String']['output'];
};

export type LotListDto = {
  __typename?: 'LotListDTO';
  createdAt: Scalars['DateTime']['output'];
  id: LotId;
  kitCount: Scalars['Int']['output'];
  kitStatusCode?: Maybe<KitStatusCode>;
  lotNo: Scalars['String']['output'];
  plantCode: Scalars['String']['output'];
};

export type LotNumbersByStatusQueryInput = {
  kitStatusCode: KitStatusCode;
};

export type LotNumbersByStatusQueryResult = {
  __typename?: 'LotNumbersByStatusQueryResult';
  lotNumbers: Array<Scalars['String']['output']>;
};

export type LotOverviewQueryInput = {
  lotNo: Scalars['String']['input'];
};

export type LotOverviewQueryResult = {
  __typename?: 'LotOverviewQueryResult';
  altShipToLoc: Scalars['String']['output'];
  bomId?: Maybe<Scalars['UUID']['output']>;
  bomSequence?: Maybe<Scalars['Int']['output']>;
  cdAiagTransit: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  drive: Scalars['String']['output'];
  engine: Scalars['String']['output'];
  handlingUnitCount: Scalars['Int']['output'];
  handlingUnitReceivedCount: Scalars['Int']['output'];
  inAsnCorrection: Scalars['String']['output'];
  lotNo: Scalars['String']['output'];
  marketTerritory: Scalars['String']['output'];
  model: Scalars['String']['output'];
  noOfInvoices: Scalars['Int']['output'];
  orderStatus: Scalars['String']['output'];
  paint: Scalars['String']['output'];
  pcvCode: Scalars['String']['output'];
  plantCode: Scalars['String']['output'];
  priorLotNo?: Maybe<Scalars['String']['output']>;
  priorLotSequenceByPlant?: Maybe<Scalars['Int']['output']>;
  revisedTargetShipDate?: Maybe<Scalars['DateTime']['output']>;
  sequenceByPlant: Scalars['Int']['output'];
  series: Scalars['String']['output'];
  shipToLOC: Scalars['String']['output'];
  shipmentId?: Maybe<Scalars['UUID']['output']>;
  shipmentSequence?: Maybe<Scalars['Int']['output']>;
  soldToLoc: Scalars['String']['output'];
  sourceLotNo: Scalars['String']['output'];
  sourcePlantCode: Scalars['String']['output'];
  subModel: Scalars['String']['output'];
  transmission: Scalars['String']['output'];
  trim: Scalars['String']['output'];
  vehicleLine: Scalars['String']['output'];
};

export type LotPart = {
  __typename?: 'LotPart';
  bomQuantity: Scalars['Int']['output'];
  changeLogs: Array<LotPartChangeLog>;
  commodityCode: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  handlingUnitParts: Array<HandlingUnitPart>;
  id: LotPartId;
  kitPartType: Scalars['String']['output'];
  lot: Lot;
  lotId: LotId;
  part: Part;
  partId: PartId;
  received: Array<LotPartReceived>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  shipmentQuantity: Scalars['Int']['output'];
};

export type LotPartChangeLog = {
  __typename?: 'LotPartChangeLog';
  changeType: LotPartChangeType;
  createdAt: Scalars['DateTime']['output'];
  id: LotPartChangeLogId;
  lotImportTransaction: LotImportTransaction;
  lotImportTransactionId: LotImportTransactionId;
  lotPart: LotPart;
  lotPartId: LotPartId;
  newQuantity?: Maybe<Scalars['Int']['output']>;
  oldQuantity?: Maybe<Scalars['Int']['output']>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LotPartChangeLogFilterInput = {
  and?: InputMaybe<Array<LotPartChangeLogFilterInput>>;
  changeType?: InputMaybe<LotPartChangeTypeOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<LotPartChangeLogIdFilterInput>;
  lotImportTransaction?: InputMaybe<LotImportTransactionFilterInput>;
  lotImportTransactionId?: InputMaybe<LotImportTransactionIdFilterInput>;
  lotPart?: InputMaybe<LotPartFilterInput>;
  lotPartId?: InputMaybe<LotPartIdFilterInput>;
  newQuantity?: InputMaybe<IntOperationFilterInput>;
  oldQuantity?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<LotPartChangeLogFilterInput>>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type LotPartChangeLogId = {
  __typename?: 'LotPartChangeLogId';
  value: Scalars['UUID']['output'];
};

export type LotPartChangeLogIdFilterInput = {
  and?: InputMaybe<Array<LotPartChangeLogIdFilterInput>>;
  or?: InputMaybe<Array<LotPartChangeLogIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type LotPartChangeLogIdInput = {
  value: Scalars['UUID']['input'];
};

export type LotPartChangeLogInput = {
  changeType: LotPartChangeType;
  createdAt: Scalars['DateTime']['input'];
  id: LotPartChangeLogIdInput;
  lotImportTransaction: LotImportTransactionInput;
  lotImportTransactionId: LotImportTransactionIdInput;
  lotPart: LotPartInput;
  lotPartId: LotPartIdInput;
  newQuantity?: InputMaybe<Scalars['Int']['input']>;
  oldQuantity?: InputMaybe<Scalars['Int']['input']>;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum LotPartChangeType {
  Added = 'ADDED',
  Removed = 'REMOVED',
  Updated = 'UPDATED'
}

export type LotPartChangeTypeOperationFilterInput = {
  eq?: InputMaybe<LotPartChangeType>;
  in?: InputMaybe<Array<LotPartChangeType>>;
  neq?: InputMaybe<LotPartChangeType>;
  nin?: InputMaybe<Array<LotPartChangeType>>;
};

export type LotPartChangesByTransactionQueryInput = {
  transactionID: Scalars['String']['input'];
};

export type LotPartChangesByTransactionQueryResult = {
  __typename?: 'LotPartChangesByTransactionQueryResult';
  changes: Array<LotPartChangesByTransactionQueryResultItem>;
  lotNo: Scalars['String']['output'];
  transactionID: Scalars['String']['output'];
  transactionType: Scalars['String']['output'];
};

export type LotPartChangesByTransactionQueryResultItem = {
  __typename?: 'LotPartChangesByTransactionQueryResultItem';
  changeType: LotPartChangeType;
  newQuantity?: Maybe<Scalars['Int']['output']>;
  oldQuantity?: Maybe<Scalars['Int']['output']>;
  partDesc: Scalars['String']['output'];
  partNo: Scalars['String']['output'];
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
  commodityCode: Scalars['String']['output'];
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
  changeLogs?: InputMaybe<ListFilterInputTypeOfLotPartChangeLogFilterInput>;
  commodityCode?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  handlingUnitParts?: InputMaybe<ListFilterInputTypeOfHandlingUnitPartFilterInput>;
  id?: InputMaybe<LotPartIdFilterInput>;
  kitPartType?: InputMaybe<StringOperationFilterInput>;
  lot?: InputMaybe<LotFilterInput>;
  lotId?: InputMaybe<LotIdFilterInput>;
  or?: InputMaybe<Array<LotPartFilterInput>>;
  part?: InputMaybe<PartFilterInput>;
  partId?: InputMaybe<PartIdFilterInput>;
  received?: InputMaybe<ListFilterInputTypeOfLotPartReceivedFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  shipmentQuantity?: InputMaybe<IntOperationFilterInput>;
};

export type LotPartId = {
  __typename?: 'LotPartId';
  value: Scalars['UUID']['output'];
};

export type LotPartIdFilterInput = {
  and?: InputMaybe<Array<LotPartIdFilterInput>>;
  or?: InputMaybe<Array<LotPartIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type LotPartIdInput = {
  value: Scalars['UUID']['input'];
};

export type LotPartInput = {
  bomQuantity: Scalars['Int']['input'];
  changeLogs: Array<LotPartChangeLogInput>;
  commodityCode: Scalars['String']['input'];
  createdAt: Scalars['DateTime']['input'];
  handlingUnitParts: Array<HandlingUnitPartInput>;
  id: LotPartIdInput;
  kitPartType: Scalars['String']['input'];
  lot: LotInput;
  lotId: LotIdInput;
  part: PartInput;
  partId: PartIdInput;
  received: Array<LotPartReceivedInput>;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
  shipmentQuantity: Scalars['Int']['input'];
};

export type LotPartParamsInput = {
  bomQuantity: Scalars['Int']['input'];
  commodityCode: Scalars['String']['input'];
  kitPartType: Scalars['String']['input'];
  partId: PartIdInput;
  shipmentQuantity: Scalars['Int']['input'];
};

export type LotPartReceived = {
  __typename?: 'LotPartReceived';
  createdAt: Scalars['DateTime']['output'];
  id: LotPartReceivedId;
  lotPart: LotPart;
  lotPartId: LotPartId;
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
  id?: InputMaybe<LotPartReceivedIdFilterInput>;
  lotPart?: InputMaybe<LotPartFilterInput>;
  lotPartId?: InputMaybe<LotPartIdFilterInput>;
  or?: InputMaybe<Array<LotPartReceivedFilterInput>>;
  quantity?: InputMaybe<IntOperationFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type LotPartReceivedId = {
  __typename?: 'LotPartReceivedId';
  value: Scalars['UUID']['output'];
};

export type LotPartReceivedIdFilterInput = {
  and?: InputMaybe<Array<LotPartReceivedIdFilterInput>>;
  or?: InputMaybe<Array<LotPartReceivedIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type LotPartReceivedIdInput = {
  value: Scalars['UUID']['input'];
};

export type LotPartReceivedInput = {
  createdAt: Scalars['DateTime']['input'];
  id: LotPartReceivedIdInput;
  lotPart: LotPartInput;
  lotPartId: LotPartIdInput;
  quantity: Scalars['Int']['input'];
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  commodityCode: Scalars['String']['output'];
  importDate: Scalars['DateTime']['output'];
  lotNo: Scalars['String']['output'];
  partDesc: Scalars['String']['output'];
  partNo: Scalars['String']['output'];
  partType: Scalars['String']['output'];
  receivedByHUQantity: Scalars['Int']['output'];
  receivedByLotQuantity: Scalars['Int']['output'];
  receivedDate?: Maybe<Scalars['DateTime']['output']>;
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
  bomQuantity: Scalars['Int']['output'];
  commodityCode: Scalars['String']['output'];
  conveyanceNo: Scalars['String']['output'];
  handlingUnitCodes: Array<Scalars['String']['output']>;
  partDesc: Scalars['String']['output'];
  partNo: Scalars['String']['output'];
  partType: Scalars['String']['output'];
  quantityReceivedByHU: Scalars['Int']['output'];
  quantityReceivedByPart: Scalars['Int']['output'];
  shipmentQuantity: Scalars['Int']['output'];
};

export type LotQueryByLotOrSrouceLotResult = {
  __typename?: 'LotQueryByLotOrSrouceLotResult';
  createdAt: Scalars['DateTime']['output'];
  lotNo: Scalars['String']['output'];
  model: Scalars['String']['output'];
  sourceLotNo: Scalars['String']['output'];
};

export type LotShipment = {
  __typename?: 'LotShipment';
  altShipToLoc: Scalars['String']['output'];
  cdAiagTransit: Scalars['String']['output'];
  conveyances: Array<LotConveyance>;
  lotNo: Scalars['String']['output'];
  lotParts: Array<ParsedShipmentLotPart>;
  noOfInvoices: Scalars['Int']['output'];
  plantCode: Scalars['String']['output'];
  shipToLOC: Scalars['String']['output'];
  soldToLoc: Scalars['String']['output'];
};

export type LotShipmentConveyanceParamsInput = {
  dsConvInitials: Scalars['String']['input'];
  dtShipped: Scalars['String']['input'];
  handlingUnits: Array<LotShipmentHandlingUnitParamsInput>;
  noConveyance: Scalars['String']['input'];
  noInvoice: Scalars['String']['input'];
  wtGross: Scalars['Decimal']['input'];
};

export type LotShipmentData = {
  __typename?: 'LotShipmentData';
  shipmentHeader: ShipmentDataHeader;
  shipmentLot: ShipmentDataLot;
};

export type LotShipmentHandlingUnit = {
  __typename?: 'LotShipmentHandlingUnit';
  code: Scalars['String']['output'];
  commodityCode: Scalars['String']['output'];
  msCntrHeight: Scalars['Decimal']['output'];
  msCntrLength: Scalars['Decimal']['output'];
  msCntrWidth: Scalars['Decimal']['output'];
  parts: Array<LotShipmentHandlingUnitPart>;
};

export type LotShipmentHandlingUnitParamsInput = {
  cdCkdCntrHU: Scalars['String']['input'];
  msCntrHeight: Scalars['Decimal']['input'];
  msCntrLength: Scalars['Decimal']['input'];
  msCntrWidth: Scalars['Decimal']['input'];
  noCntrHu: Scalars['String']['input'];
  noCntrSuffix: Scalars['String']['input'];
  parts: Array<LotShipmentHandlingUnitPartParamsInput>;
};

export type LotShipmentHandlingUnitPart = {
  __typename?: 'LotShipmentHandlingUnitPart';
  cdUnitOfMeasure: Scalars['String']['output'];
  commodityCode: Scalars['String']['output'];
  customerPartNo: Scalars['String']['output'];
  originalPartNo: Scalars['String']['output'];
  partDesc: Scalars['String']['output'];
  partNo: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  wtPart?: Maybe<Scalars['Decimal']['output']>;
};

export type LotShipmentHandlingUnitPartParamsInput = {
  cdUnitOfMeasure: Scalars['String']['input'];
  dsPart: Scalars['String']['input'];
  noCntrBase: Scalars['String']['input'];
  noPart: Scalars['String']['input'];
  noPartBusiness: Scalars['String']['input'];
  partId: PartIdInput;
  qtShipped: Scalars['Int']['input'];
  wtPart: Scalars['Decimal']['input'];
};

export type LotShipmentParamsInput = {
  altShipToLoc: Scalars['String']['input'];
  cdAiagTransit: Scalars['String']['input'];
  cdCustomer: Scalars['String']['input'];
  conveyances: Array<LotShipmentConveyanceParamsInput>;
  importTransaction: LotImportTransactionParamsInput;
  inAsnCorrection: Scalars['String']['input'];
  lotNumber: Scalars['String']['input'];
  noOfInvoices: Scalars['Int']['input'];
  shipToLOC: Scalars['String']['input'];
  shipmentId?: InputMaybe<ShipmentIdInput>;
  soldToLoc: Scalars['String']['input'];
};

export type LotShipmentQueryInput = {
  lotNumberOrTransactionID: Scalars['String']['input'];
};

export type LotShipmentsQueryResult = {
  __typename?: 'LotShipmentsQueryResult';
  lotShipmentData: LotShipmentData;
};

export type LotSortInput = {
  altShipToLoc?: InputMaybe<SortEnumType>;
  bom?: InputMaybe<BomSortInput>;
  bomId?: InputMaybe<BomIdSortInput>;
  cdAiagTransit?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<LotIdSortInput>;
  inAsnCorrection?: InputMaybe<SortEnumType>;
  lotNo?: InputMaybe<SortEnumType>;
  marketTerritory?: InputMaybe<SortEnumType>;
  noOfInvoices?: InputMaybe<SortEnumType>;
  orderStatus?: InputMaybe<SortEnumType>;
  pcv?: InputMaybe<PcvSortInput>;
  pcvId?: InputMaybe<PcvIdSortInput>;
  plant?: InputMaybe<PlantSortInput>;
  plantId?: InputMaybe<PlantIdSortInput>;
  removedAt?: InputMaybe<SortEnumType>;
  revisedTargetShipDate?: InputMaybe<SortEnumType>;
  sequenceByPlant?: InputMaybe<SortEnumType>;
  shipToLOC?: InputMaybe<SortEnumType>;
  shipment?: InputMaybe<ShipmentSortInput>;
  shipmentId?: InputMaybe<ShipmentIdSortInput>;
  soldToLoc?: InputMaybe<SortEnumType>;
  sourceLotNo?: InputMaybe<SortEnumType>;
  sourcePlantCode?: InputMaybe<SortEnumType>;
  vehicleLine?: InputMaybe<SortEnumType>;
};

export type LotVinAllocationQueryInput = {
  lotNo: Scalars['String']['input'];
};

export type LotVinAllocationQueryResult = {
  __typename?: 'LotVinAllocationQueryResult';
  items: Array<LotVinAllocationQueryResultItem>;
};

export type LotVinAllocationQueryResultItem = {
  __typename?: 'LotVinAllocationQueryResultItem';
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

export type LotsByKitStatusQueryInput = {
  kitStatusCodes: Array<KitStatusCode>;
  plantCode: Scalars['String']['input'];
};

export type LotsByKitStatusQueryResult = {
  __typename?: 'LotsByKitStatusQueryResult';
  kitStatusCode: KitStatusCode;
  kitStatusSequence: Scalars['Int']['output'];
  lotNo: Scalars['String']['output'];
  lotSequenceByPlant: Scalars['Int']['output'];
  model: Scalars['String']['output'];
  modelYear: Scalars['String']['output'];
  pcvCode: Scalars['String']['output'];
};

export type LotsQueryInput = {
  first: Scalars['Int']['input'];
  plantCode: Scalars['String']['input'];
};

export type LotsQueryResult = {
  __typename?: 'LotsQueryResult';
  created: Scalars['DateTime']['output'];
  engine: Scalars['String']['output'];
  hasBOM: Scalars['Boolean']['output'];
  hasShipment: Scalars['Boolean']['output'];
  latestKitStatus?: Maybe<Scalars['String']['output']>;
  lotNo: Scalars['String']['output'];
  model: Scalars['String']['output'];
  paint: Scalars['String']['output'];
  pcv: Scalars['String']['output'];
  sequenceByPlant: Scalars['Int']['output'];
  series: Scalars['String']['output'];
  sourceLotNo: Scalars['String']['output'];
  transmission: Scalars['String']['output'];
  trim: Scalars['String']['output'];
};

export type MigrateToModelStationsCommandResult = {
  __typename?: 'MigrateToModelStationsCommandResult';
  items: Array<MigrateToModelStationsCommandResultItem>;
};

export type MigrateToModelStationsCommandResultItem = {
  __typename?: 'MigrateToModelStationsCommandResultItem';
  pcvCode: Scalars['String']['output'];
  plantCode: Scalars['String']['output'];
  stationCodes: Array<Scalars['String']['output']>;
};

export type ModelStationComponents = {
  __typename?: 'ModelStationComponents';
  componentCodes: Array<Scalars['String']['output']>;
  modelCode: Scalars['String']['output'];
  stationCode: Scalars['String']['output'];
  stationSequence: Scalars['Int']['output'];
};

export type ModelStationComponentsQueryResult = {
  __typename?: 'ModelStationComponentsQueryResult';
  items: Array<ModelStationComponents>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Find all kits waiting for VINs and assign them
   * This is done by calling the Ford API which will provide a VIN their system is ready.
   */
  assignVin: ResultOrOfAssignVinCommandResult;
  captureComponentSerial: ResultOrOfCreateComponentSerialCommandResult;
  /** Create a kit status event for a kit */
  createKitStatus: ResultOrOfCreateKitStatusCommandResult;
  createLotPartQuantityReceived: ResultOrOfLotPartDto;
  /** Import BOM given the BomPlantSet input */
  importBOM: ResultOrOfImportBomResult;
  /** Import BOM given the BomPlantSet input */
  importBOMFileText: ResultOrOfImportBomResult;
  importShipment: ResultOrOfImportShipmentCommandResult;
  importShipmentText: ResultOrOfImportShipmentCommandResult;
  migrateToModelStations: ResultOrOfMigrateToModelStationsCommandResult;
  /** Parse a BOM file and return a ParseBomFileResult object */
  parseBomFile: ResultOrOfParsedBom;
  /** Parse a BOM file and return a ParseBomFileResult object */
  parseBomFileText: ResultOrOfParsedBom;
  /** Parses a PCV xlsx file and returns a list of PCV, and Component code records */
  parsePcvsXlsx: ResultOrOfParsePcvsXlxsResult;
  parseStationsXlsx: ResultOrOfParseStationsXlsxCommandResult;
  processPendingBuildStart: ResultOrOfProcessPendingBuildStartCommandResult;
  processPendingPartnerStatus: ResultOrOfProcessPendingPartnerStatusCommandResult;
  remapComponentSerialStations: ResultOrOfRemapComponentSerialStationsCommandResult;
  removeAllComponentStationMappings: ResultOrOfRemoveAllComponentStationMappingsPayload;
  /**
   * Find all kits waiting for VINs and assign them
   * This is done by calling the Ford API which will provide a VIN their system is ready.
   */
  replaceKitVin: ResultOrOfReplaceKitVinCommandResult;
  resetComponentSerialVerification: ResultOrOfResetComponentSerialVerificationCommandResult;
  saveDcwsComponentResponse: ResultOrOfDcwsResponse;
  savePCV: ResultOrOfSavePcvCommandResult;
  /**
   * Save a station inludeing the sequence and component codes
   * If station already exists, it will be updated
   */
  saveStation: ResultOrOfSaveStationCommandResult;
  setComponentStationMappings: ResultOrOfSetComponentStationMappingsPayload;
  setHandlingUnitReceived: ResultOrOfReceiveHandlingUnitPayload;
  /** Update Part Types */
  setPartType: ResultOrOfSetPartTypeResult;
  /** Update kit status by lot */
  updateLotKitStatus: ResultOrOfListOfUpdateLotKitStatusCommandResult;
  verifyComponentSerial: ResultOrOfDcwsResponse;
};


export type MutationAssignVinArgs = {
  input: AssignVinCommandInput;
};


export type MutationCaptureComponentSerialArgs = {
  input: CreateComponentSerialCommandInput;
};


export type MutationCreateKitStatusArgs = {
  input: CreateKitStatusCommandInput;
};


export type MutationCreateLotPartQuantityReceivedArgs = {
  input: ReceiveLotPartInput;
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


export type MutationImportShipmentTextArgs = {
  fileName: Scalars['String']['input'];
  fileText: Scalars['String']['input'];
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


export type MutationParseStationsXlsxArgs = {
  file: Scalars['Upload']['input'];
  worksheetNumber: Scalars['Int']['input'];
};


export type MutationProcessPendingBuildStartArgs = {
  input: ProcessPendingBuildStartCommandInput;
};


export type MutationRemapComponentSerialStationsArgs = {
  input: RemapComponentSerialStationsCommandInput;
};


export type MutationReplaceKitVinArgs = {
  input: ReplaceKitVinCommandInput;
};


export type MutationResetComponentSerialVerificationArgs = {
  input: ResetComponentSerialVerificationComandInput;
};


export type MutationSaveDcwsComponentResponseArgs = {
  input: CreateDcwsResponseInput;
};


export type MutationSavePcvArgs = {
  input: SavePcvCommandInput;
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


export type MutationSetPartTypeArgs = {
  input: SetPartTypeCommandInput;
};


export type MutationUpdateLotKitStatusArgs = {
  input: UpdateLotKitStatusCommandInput;
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
  id: PcvId;
  lots: Array<Lot>;
  model: Scalars['String']['output'];
  modelYear: Scalars['String']['output'];
  pcvComponents: Array<PcvComponent>;
  pcvDrive?: Maybe<PcvDrive>;
  pcvDriveId?: Maybe<PcvDriveId>;
  pcvEngine?: Maybe<PcvEngine>;
  pcvEngineId?: Maybe<PcvEngineId>;
  pcvModel?: Maybe<PcvModel>;
  pcvModelId?: Maybe<PcvModelId>;
  pcvPaint?: Maybe<PcvPaint>;
  pcvPaintId?: Maybe<PcvPaintId>;
  pcvSeries?: Maybe<PcvSeries>;
  pcvSeriesId?: Maybe<PcvSeriesId>;
  pcvSubmodel?: Maybe<PcvSubmodel>;
  pcvSubmodelId?: Maybe<PcvSubmodelId>;
  pcvTransmission?: Maybe<PcvTransmission>;
  pcvTransmissionId?: Maybe<PcvTransmissionId>;
  pcvTrim?: Maybe<PcvTrim>;
  pcvTrimId?: Maybe<PcvTrimId>;
  plant: Plant;
  plantId: PlantId;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  series: Scalars['String']['output'];
  update: ResultOrOfPcv;
};


export type PcvUpdateArgs = {
  pcvParams: PcvParamsInput;
};

export type PcvFilterInput = {
  and?: InputMaybe<Array<PcvFilterInput>>;
  body?: InputMaybe<StringOperationFilterInput>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<PcvIdFilterInput>;
  lots?: InputMaybe<ListFilterInputTypeOfLotFilterInput>;
  model?: InputMaybe<StringOperationFilterInput>;
  modelYear?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PcvFilterInput>>;
  pcvComponents?: InputMaybe<ListFilterInputTypeOfPcvComponentFilterInput>;
  pcvDrive?: InputMaybe<PcvDriveFilterInput>;
  pcvDriveId?: InputMaybe<PcvDriveIdFilterInput>;
  pcvEngine?: InputMaybe<PcvEngineFilterInput>;
  pcvEngineId?: InputMaybe<PcvEngineIdFilterInput>;
  pcvModel?: InputMaybe<PcvModelFilterInput>;
  pcvModelId?: InputMaybe<PcvModelIdFilterInput>;
  pcvPaint?: InputMaybe<PcvPaintFilterInput>;
  pcvPaintId?: InputMaybe<PcvPaintIdFilterInput>;
  pcvSeries?: InputMaybe<PcvSeriesFilterInput>;
  pcvSeriesId?: InputMaybe<PcvSeriesIdFilterInput>;
  pcvSubmodel?: InputMaybe<PcvSubmodelFilterInput>;
  pcvSubmodelId?: InputMaybe<PcvSubmodelIdFilterInput>;
  pcvTransmission?: InputMaybe<PcvTransmissionFilterInput>;
  pcvTransmissionId?: InputMaybe<PcvTransmissionIdFilterInput>;
  pcvTrim?: InputMaybe<PcvTrimFilterInput>;
  pcvTrimId?: InputMaybe<PcvTrimIdFilterInput>;
  plant?: InputMaybe<PlantFilterInput>;
  plantId?: InputMaybe<PlantIdFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  series?: InputMaybe<StringOperationFilterInput>;
};

export type PcvInput = {
  body: Scalars['String']['input'];
  code: Scalars['String']['input'];
  createdAt: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  id: PcvIdInput;
  lots: Array<LotInput>;
  model: Scalars['String']['input'];
  modelYear: Scalars['String']['input'];
  pcvComponents: Array<PcvComponentInput>;
  pcvDrive?: InputMaybe<PcvDriveInput>;
  pcvDriveId?: InputMaybe<PcvDriveIdInput>;
  pcvEngine?: InputMaybe<PcvEngineInput>;
  pcvEngineId?: InputMaybe<PcvEngineIdInput>;
  pcvModel?: InputMaybe<PcvModelInput>;
  pcvModelId?: InputMaybe<PcvModelIdInput>;
  pcvPaint?: InputMaybe<PcvPaintInput>;
  pcvPaintId?: InputMaybe<PcvPaintIdInput>;
  pcvSeries?: InputMaybe<PcvSeriesInput>;
  pcvSeriesId?: InputMaybe<PcvSeriesIdInput>;
  pcvSubmodel?: InputMaybe<PcvSubmodelInput>;
  pcvSubmodelId?: InputMaybe<PcvSubmodelIdInput>;
  pcvTransmission?: InputMaybe<PcvTransmissionInput>;
  pcvTransmissionId?: InputMaybe<PcvTransmissionIdInput>;
  pcvTrim?: InputMaybe<PcvTrimInput>;
  pcvTrimId?: InputMaybe<PcvTrimIdInput>;
  plant: PlantInput;
  plantId: PlantIdInput;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
  series: Scalars['String']['input'];
};

export type PcvSortInput = {
  body?: InputMaybe<SortEnumType>;
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  id?: InputMaybe<PcvIdSortInput>;
  model?: InputMaybe<SortEnumType>;
  modelYear?: InputMaybe<SortEnumType>;
  pcvDrive?: InputMaybe<PcvDriveSortInput>;
  pcvDriveId?: InputMaybe<PcvDriveIdSortInput>;
  pcvEngine?: InputMaybe<PcvEngineSortInput>;
  pcvEngineId?: InputMaybe<PcvEngineIdSortInput>;
  pcvModel?: InputMaybe<PcvModelSortInput>;
  pcvModelId?: InputMaybe<PcvModelIdSortInput>;
  pcvPaint?: InputMaybe<PcvPaintSortInput>;
  pcvPaintId?: InputMaybe<PcvPaintIdSortInput>;
  pcvSeries?: InputMaybe<PcvSeriesSortInput>;
  pcvSeriesId?: InputMaybe<PcvSeriesIdSortInput>;
  pcvSubmodel?: InputMaybe<PcvSubmodelSortInput>;
  pcvSubmodelId?: InputMaybe<PcvSubmodelIdSortInput>;
  pcvTransmission?: InputMaybe<PcvTransmissionSortInput>;
  pcvTransmissionId?: InputMaybe<PcvTransmissionIdSortInput>;
  pcvTrim?: InputMaybe<PcvTrimSortInput>;
  pcvTrimId?: InputMaybe<PcvTrimIdSortInput>;
  plant?: InputMaybe<PlantSortInput>;
  plantId?: InputMaybe<PlantIdSortInput>;
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

export type ParsedBom = {
  __typename?: 'ParsedBOM';
  bomFileCreatedAt: Scalars['DateTime']['output'];
  filename: Scalars['String']['output'];
  lots: Array<ParsedBomLot>;
  plantCode: Scalars['String']['output'];
  sequenceNumber: Scalars['Int']['output'];
  sourcePlantCode: Scalars['String']['output'];
};

export type ParsedBomLot = {
  __typename?: 'ParsedBOMLot';
  kits: Array<ParsedBomLotKit>;
  lotNo: Scalars['String']['output'];
  lotParts: Array<ParsedBomLotPart>;
  marketTerritory: Scalars['String']['output'];
  orderStatus: Scalars['String']['output'];
  pcvCode: Scalars['String']['output'];
  revisedTargetShipDate: Scalars['String']['output'];
  vehicleLine: Scalars['String']['output'];
};

export type ParsedBomLotKit = {
  __typename?: 'ParsedBomLotKit';
  kitNo: Scalars['String']['output'];
};

export type ParsedBomLotPart = {
  __typename?: 'ParsedBomLotPart';
  commodityCode: Scalars['String']['output'];
  kitPartType: Scalars['String']['output'];
  lotNo: Scalars['String']['output'];
  originalPartNo: Scalars['String']['output'];
  partDesc: Scalars['String']['output'];
  partNo: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
};

export type ParsedShipment = {
  __typename?: 'ParsedShipment';
  dateCreated: Scalars['DateTime']['output'];
  fileName: Scalars['String']['output'];
  kittingPlantCode: Scalars['String']['output'];
  lots: Array<LotShipment>;
  sequence: Scalars['Int']['output'];
};

export type ParsedShipmentFileQueryInput = {
  fileName: Scalars['String']['input'];
};

export type ParsedShipmentLotPart = {
  __typename?: 'ParsedShipmentLotPart';
  handlingUnitCodes: Array<Scalars['String']['output']>;
  partNo: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
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
  commodityCode: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  handlingUnitParts: Array<HandlingUnitPart>;
  id: PartId;
  lotParts: Array<LotPart>;
  originalPartNo: Scalars['String']['output'];
  partDesc: Scalars['String']['output'];
  partNo: Scalars['String']['output'];
  partType?: Maybe<PartType>;
  partTypeId?: Maybe<PartTypeId>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PartFilterInput = {
  and?: InputMaybe<Array<PartFilterInput>>;
  commodityCode?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  handlingUnitParts?: InputMaybe<ListFilterInputTypeOfHandlingUnitPartFilterInput>;
  id?: InputMaybe<PartIdFilterInput>;
  lotParts?: InputMaybe<ListFilterInputTypeOfLotPartFilterInput>;
  or?: InputMaybe<Array<PartFilterInput>>;
  originalPartNo?: InputMaybe<StringOperationFilterInput>;
  partDesc?: InputMaybe<StringOperationFilterInput>;
  partNo?: InputMaybe<StringOperationFilterInput>;
  partType?: InputMaybe<PartTypeFilterInput>;
  partTypeId?: InputMaybe<PartTypeIdFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type PartId = {
  __typename?: 'PartId';
  value: Scalars['UUID']['output'];
};

export type PartIdFilterInput = {
  and?: InputMaybe<Array<PartIdFilterInput>>;
  or?: InputMaybe<Array<PartIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type PartIdInput = {
  value: Scalars['UUID']['input'];
};

export type PartInput = {
  commodityCode: Scalars['String']['input'];
  createdAt: Scalars['DateTime']['input'];
  handlingUnitParts: Array<HandlingUnitPartInput>;
  id: PartIdInput;
  lotParts: Array<LotPartInput>;
  originalPartNo: Scalars['String']['input'];
  partDesc: Scalars['String']['input'];
  partNo: Scalars['String']['input'];
  partType?: InputMaybe<PartTypeInput>;
  partTypeId?: InputMaybe<PartTypeIdInput>;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
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

export type PartType = {
  __typename?: 'PartType';
  createdAt: Scalars['DateTime']['output'];
  id: PartTypeId;
  isPhysicalPart: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  parts: Array<Part>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PartTypeFilterInput = {
  and?: InputMaybe<Array<PartTypeFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<PartTypeIdFilterInput>;
  isPhysicalPart?: InputMaybe<BooleanOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PartTypeFilterInput>>;
  parts?: InputMaybe<ListFilterInputTypeOfPartFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type PartTypeId = {
  __typename?: 'PartTypeId';
  value: Scalars['UUID']['output'];
};

export type PartTypeIdFilterInput = {
  and?: InputMaybe<Array<PartTypeIdFilterInput>>;
  or?: InputMaybe<Array<PartTypeIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type PartTypeIdInput = {
  value: Scalars['UUID']['input'];
};

export type PartTypeInput = {
  createdAt: Scalars['DateTime']['input'];
  id: PartTypeIdInput;
  isPhysicalPart: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  parts: Array<PartInput>;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PartTypesQueryResult = {
  __typename?: 'PartTypesQueryResult';
  createdAt: Scalars['DateTime']['output'];
  isPhysicalPart: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type PartnerKitStatusQueryInput = {
  kitNo: Scalars['String']['input'];
};

export type PartnerKitStatusQueryResult = {
  __typename?: 'PartnerKitStatusQueryResult';
  kitNumber: Scalars['String']['output'];
  localKitStatus: Scalars['String']['output'];
  localStatusDate: Scalars['String']['output'];
  lotNumber: Scalars['String']['output'];
  partnerKitStatus: Scalars['String']['output'];
  partnerStatusDate: Scalars['String']['output'];
  plantCode: Scalars['String']['output'];
};

export type PartnerKitStatusesQueryInput = {
  lotOrKitNumbers: Scalars['String']['input'];
  plantCode: Scalars['String']['input'];
};

export type PartnerKitStatusesQueryResult = {
  __typename?: 'PartnerKitStatusesQueryResult';
  partnerKitStatuses: Array<PartnerKitStatusesQueryResultItem>;
};

export type PartnerKitStatusesQueryResultItem = {
  __typename?: 'PartnerKitStatusesQueryResultItem';
  kitNumber: Scalars['String']['output'];
  localKitStatus: Scalars['String']['output'];
  localKitStatusDate: Scalars['String']['output'];
  localStatusNote: Scalars['String']['output'];
  lotNo: Scalars['String']['output'];
  partnerKitStatus: Scalars['String']['output'];
  partnerKitStatusDate: Scalars['String']['output'];
  partnerStatusNote: Scalars['String']['output'];
  plantCode: Scalars['String']['output'];
};

export type PartnerKitVinQueryInput = {
  kitNo: Scalars['String']['input'];
};

export type PartnerKitVinQueryResult = {
  __typename?: 'PartnerKitVinQueryResult';
  kitNo: Scalars['String']['output'];
  vin: Scalars['String']['output'];
};

export type PartsQueryResult = {
  __typename?: 'PartsQueryResult';
  commodityCode: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  originalPartNo: Scalars['String']['output'];
  partDesc: Scalars['String']['output'];
  partNo: Scalars['String']['output'];
  partType: Scalars['String']['output'];
};

export type PcvComponent = {
  __typename?: 'PcvComponent';
  component: Component;
  componentId: ComponentId;
  createdAt: Scalars['DateTime']['output'];
  id: PcvComponentId;
  pcv: Pcv;
  pcvId: PcvId;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PcvComponentFilterInput = {
  and?: InputMaybe<Array<PcvComponentFilterInput>>;
  component?: InputMaybe<ComponentFilterInput>;
  componentId?: InputMaybe<ComponentIdFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<PcvComponentIdFilterInput>;
  or?: InputMaybe<Array<PcvComponentFilterInput>>;
  pcv?: InputMaybe<PcvFilterInput>;
  pcvId?: InputMaybe<PcvIdFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type PcvComponentId = {
  __typename?: 'PcvComponentId';
  value: Scalars['UUID']['output'];
};

export type PcvComponentIdFilterInput = {
  and?: InputMaybe<Array<PcvComponentIdFilterInput>>;
  or?: InputMaybe<Array<PcvComponentIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type PcvComponentIdInput = {
  value: Scalars['UUID']['input'];
};

export type PcvComponentInput = {
  component: ComponentInput;
  componentId: ComponentIdInput;
  createdAt: Scalars['DateTime']['input'];
  id: PcvComponentIdInput;
  pcv: PcvInput;
  pcvId: PcvIdInput;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PcvComponentsQueryInput = {
  pcvCode: Scalars['String']['input'];
};

export type PcvComponentsQueryResult = {
  __typename?: 'PcvComponentsQueryResult';
  pcvComponents: Array<PcvComponentsQueryResultItem>;
};

export type PcvComponentsQueryResultItem = {
  __typename?: 'PcvComponentsQueryResultItem';
  componentCode: Scalars['String']['output'];
  componentName: Scalars['String']['output'];
  iconURL: Scalars['String']['output'];
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

export type PcvDetailQueryInput = {
  pcvCode: Scalars['String']['input'];
};

export type PcvDetailQueryResult = {
  __typename?: 'PcvDetailQueryResult';
  code: Scalars['String']['output'];
  components: Array<PcvDetailQueryResultComponent>;
  createdAt: Scalars['DateTime']['output'];
  drive: Scalars['String']['output'];
  engine: Scalars['String']['output'];
  lotNumbers: Array<Scalars['String']['output']>;
  model: Scalars['String']['output'];
  modelYear: Scalars['String']['output'];
  paint: Scalars['String']['output'];
  pcvId: PcvId;
  plantCode: Scalars['String']['output'];
  series: Scalars['String']['output'];
  subModel: Scalars['String']['output'];
  transmission: Scalars['String']['output'];
  trim: Scalars['String']['output'];
};

export type PcvDetailQueryResultComponent = {
  __typename?: 'PcvDetailQueryResultComponent';
  code: Scalars['String']['output'];
  componentId: Scalars['UUID']['output'];
  iconUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type PcvDrive = ICategory & {
  __typename?: 'PcvDrive';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: PcvDriveId;
  name: Scalars['String']['output'];
  pcVs: Array<Pcv>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PcvDriveFilterInput = {
  and?: InputMaybe<Array<PcvDriveFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<PcvDriveIdFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PcvDriveFilterInput>>;
  pcVs?: InputMaybe<ListFilterInputTypeOfPcvFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type PcvDriveId = {
  __typename?: 'PcvDriveId';
  value: Scalars['UUID']['output'];
};

export type PcvDriveIdFilterInput = {
  and?: InputMaybe<Array<PcvDriveIdFilterInput>>;
  or?: InputMaybe<Array<PcvDriveIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type PcvDriveIdInput = {
  value: Scalars['UUID']['input'];
};

export type PcvDriveIdSortInput = {
  value?: InputMaybe<SortEnumType>;
};

export type PcvDriveInput = {
  code: Scalars['String']['input'];
  createdAt: Scalars['DateTime']['input'];
  id: PcvDriveIdInput;
  name: Scalars['String']['input'];
  pcVs: Array<PcvInput>;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PcvDriveSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<PcvDriveIdSortInput>;
  name?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

export type PcvEngine = ICategory & {
  __typename?: 'PcvEngine';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: PcvEngineId;
  name: Scalars['String']['output'];
  pcVs: Array<Pcv>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PcvEngineFilterInput = {
  and?: InputMaybe<Array<PcvEngineFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<PcvEngineIdFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PcvEngineFilterInput>>;
  pcVs?: InputMaybe<ListFilterInputTypeOfPcvFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type PcvEngineId = {
  __typename?: 'PcvEngineId';
  value: Scalars['UUID']['output'];
};

export type PcvEngineIdFilterInput = {
  and?: InputMaybe<Array<PcvEngineIdFilterInput>>;
  or?: InputMaybe<Array<PcvEngineIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type PcvEngineIdInput = {
  value: Scalars['UUID']['input'];
};

export type PcvEngineIdSortInput = {
  value?: InputMaybe<SortEnumType>;
};

export type PcvEngineInput = {
  code: Scalars['String']['input'];
  createdAt: Scalars['DateTime']['input'];
  id: PcvEngineIdInput;
  name: Scalars['String']['input'];
  pcVs: Array<PcvInput>;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PcvEngineSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<PcvEngineIdSortInput>;
  name?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

export type PcvId = {
  __typename?: 'PcvId';
  value: Scalars['UUID']['output'];
};

export type PcvIdFilterInput = {
  and?: InputMaybe<Array<PcvIdFilterInput>>;
  or?: InputMaybe<Array<PcvIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type PcvIdInput = {
  value: Scalars['UUID']['input'];
};

export type PcvIdSortInput = {
  value?: InputMaybe<SortEnumType>;
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
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  series?: Maybe<Scalars['String']['output']>;
  submodel?: Maybe<Scalars['String']['output']>;
  transmission?: Maybe<Scalars['String']['output']>;
  trim?: Maybe<Scalars['String']['output']>;
};

export type PcvModel = ICategory & {
  __typename?: 'PcvModel';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: PcvModelId;
  name: Scalars['String']['output'];
  pcVs: Array<Pcv>;
  plantStations: Array<PcvModelStation>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PcvModelFilterInput = {
  and?: InputMaybe<Array<PcvModelFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<PcvModelIdFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PcvModelFilterInput>>;
  pcVs?: InputMaybe<ListFilterInputTypeOfPcvFilterInput>;
  plantStations?: InputMaybe<ListFilterInputTypeOfPcvModelStationFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type PcvModelId = {
  __typename?: 'PcvModelId';
  value: Scalars['UUID']['output'];
};

export type PcvModelIdFilterInput = {
  and?: InputMaybe<Array<PcvModelIdFilterInput>>;
  or?: InputMaybe<Array<PcvModelIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type PcvModelIdInput = {
  value: Scalars['UUID']['input'];
};

export type PcvModelIdSortInput = {
  value?: InputMaybe<SortEnumType>;
};

export type PcvModelInput = {
  code: Scalars['String']['input'];
  createdAt: Scalars['DateTime']['input'];
  id: PcvModelIdInput;
  name: Scalars['String']['input'];
  pcVs: Array<PcvInput>;
  plantStations: Array<PcvModelStationInput>;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PcvModelSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<PcvModelIdSortInput>;
  name?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

export type PcvModelStation = {
  __typename?: 'PcvModelStation';
  createdAt: Scalars['DateTime']['output'];
  id: PcvModelStationId;
  pcvModel: PcvModel;
  pcvModelId: PcvModelId;
  plant: Plant;
  plantId: PlantId;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  station: Station;
  stationComponents: Array<PcvModelStationComponent>;
  stationId: StationId;
};

export type PcvModelStationComponent = {
  __typename?: 'PcvModelStationComponent';
  component: Component;
  componentId: ComponentId;
  createdAt: Scalars['DateTime']['output'];
  id: PcvModelStationComponentId;
  pcvModelStation: PcvModelStation;
  pcvModelStationId: PcvModelStationId;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PcvModelStationComponentFilterInput = {
  and?: InputMaybe<Array<PcvModelStationComponentFilterInput>>;
  component?: InputMaybe<ComponentFilterInput>;
  componentId?: InputMaybe<ComponentIdFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<PcvModelStationComponentIdFilterInput>;
  or?: InputMaybe<Array<PcvModelStationComponentFilterInput>>;
  pcvModelStation?: InputMaybe<PcvModelStationFilterInput>;
  pcvModelStationId?: InputMaybe<PcvModelStationIdFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type PcvModelStationComponentId = {
  __typename?: 'PcvModelStationComponentId';
  value: Scalars['UUID']['output'];
};

export type PcvModelStationComponentIdFilterInput = {
  and?: InputMaybe<Array<PcvModelStationComponentIdFilterInput>>;
  or?: InputMaybe<Array<PcvModelStationComponentIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type PcvModelStationComponentIdInput = {
  value: Scalars['UUID']['input'];
};

export type PcvModelStationComponentInput = {
  component: ComponentInput;
  componentId: ComponentIdInput;
  createdAt: Scalars['DateTime']['input'];
  id: PcvModelStationComponentIdInput;
  pcvModelStation: PcvModelStationInput;
  pcvModelStationId: PcvModelStationIdInput;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PcvModelStationFilterInput = {
  and?: InputMaybe<Array<PcvModelStationFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<PcvModelStationIdFilterInput>;
  or?: InputMaybe<Array<PcvModelStationFilterInput>>;
  pcvModel?: InputMaybe<PcvModelFilterInput>;
  pcvModelId?: InputMaybe<PcvModelIdFilterInput>;
  plant?: InputMaybe<PlantFilterInput>;
  plantId?: InputMaybe<PlantIdFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  station?: InputMaybe<StationFilterInput>;
  stationComponents?: InputMaybe<ListFilterInputTypeOfPcvModelStationComponentFilterInput>;
  stationId?: InputMaybe<StationIdFilterInput>;
};

export type PcvModelStationId = {
  __typename?: 'PcvModelStationId';
  value: Scalars['UUID']['output'];
};

export type PcvModelStationIdFilterInput = {
  and?: InputMaybe<Array<PcvModelStationIdFilterInput>>;
  or?: InputMaybe<Array<PcvModelStationIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type PcvModelStationIdInput = {
  value: Scalars['UUID']['input'];
};

export type PcvModelStationInput = {
  createdAt: Scalars['DateTime']['input'];
  id: PcvModelStationIdInput;
  pcvModel: PcvModelInput;
  pcvModelId: PcvModelIdInput;
  plant: PlantInput;
  plantId: PlantIdInput;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
  station: StationInput;
  stationComponents: Array<PcvModelStationComponentInput>;
  stationId: StationIdInput;
};

export type PcvPaint = ICategory & {
  __typename?: 'PcvPaint';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: PcvPaintId;
  name: Scalars['String']['output'];
  pcVs: Array<Pcv>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PcvPaintFilterInput = {
  and?: InputMaybe<Array<PcvPaintFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<PcvPaintIdFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PcvPaintFilterInput>>;
  pcVs?: InputMaybe<ListFilterInputTypeOfPcvFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type PcvPaintId = {
  __typename?: 'PcvPaintId';
  value: Scalars['UUID']['output'];
};

export type PcvPaintIdFilterInput = {
  and?: InputMaybe<Array<PcvPaintIdFilterInput>>;
  or?: InputMaybe<Array<PcvPaintIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type PcvPaintIdInput = {
  value: Scalars['UUID']['input'];
};

export type PcvPaintIdSortInput = {
  value?: InputMaybe<SortEnumType>;
};

export type PcvPaintInput = {
  code: Scalars['String']['input'];
  createdAt: Scalars['DateTime']['input'];
  id: PcvPaintIdInput;
  name: Scalars['String']['input'];
  pcVs: Array<PcvInput>;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PcvPaintSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<PcvPaintIdSortInput>;
  name?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

export type PcvParamsInput = {
  body: Scalars['String']['input'];
  code: Scalars['String']['input'];
  componentIds: Array<ComponentIdInput>;
  description: Scalars['String']['input'];
  model: Scalars['String']['input'];
  modelYear: Scalars['String']['input'];
  pcvDriveId?: InputMaybe<PcvDriveIdInput>;
  pcvEngineId?: InputMaybe<PcvEngineIdInput>;
  pcvModelId?: InputMaybe<PcvModelIdInput>;
  pcvPaintId?: InputMaybe<PcvPaintIdInput>;
  pcvSeriesId?: InputMaybe<PcvSeriesIdInput>;
  pcvSubmodelId?: InputMaybe<PcvSubmodelIdInput>;
  pcvTransmissionId?: InputMaybe<PcvTransmissionIdInput>;
  pcvTrimId?: InputMaybe<PcvTrimIdInput>;
  plantId: PlantIdInput;
  series: Scalars['String']['input'];
};

export type PcvSeries = ICategory & {
  __typename?: 'PcvSeries';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: PcvSeriesId;
  name: Scalars['String']['output'];
  pcVs: Array<Pcv>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PcvSeriesFilterInput = {
  and?: InputMaybe<Array<PcvSeriesFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<PcvSeriesIdFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PcvSeriesFilterInput>>;
  pcVs?: InputMaybe<ListFilterInputTypeOfPcvFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type PcvSeriesId = {
  __typename?: 'PcvSeriesId';
  value: Scalars['UUID']['output'];
};

export type PcvSeriesIdFilterInput = {
  and?: InputMaybe<Array<PcvSeriesIdFilterInput>>;
  or?: InputMaybe<Array<PcvSeriesIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type PcvSeriesIdInput = {
  value: Scalars['UUID']['input'];
};

export type PcvSeriesIdSortInput = {
  value?: InputMaybe<SortEnumType>;
};

export type PcvSeriesInput = {
  code: Scalars['String']['input'];
  createdAt: Scalars['DateTime']['input'];
  id: PcvSeriesIdInput;
  name: Scalars['String']['input'];
  pcVs: Array<PcvInput>;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PcvSeriesSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<PcvSeriesIdSortInput>;
  name?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

export type PcvSubmodel = ICategory & {
  __typename?: 'PcvSubmodel';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: PcvSubmodelId;
  name: Scalars['String']['output'];
  pcVs: Array<Pcv>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PcvSubmodelFilterInput = {
  and?: InputMaybe<Array<PcvSubmodelFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<PcvSubmodelIdFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PcvSubmodelFilterInput>>;
  pcVs?: InputMaybe<ListFilterInputTypeOfPcvFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type PcvSubmodelId = {
  __typename?: 'PcvSubmodelId';
  value: Scalars['UUID']['output'];
};

export type PcvSubmodelIdFilterInput = {
  and?: InputMaybe<Array<PcvSubmodelIdFilterInput>>;
  or?: InputMaybe<Array<PcvSubmodelIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type PcvSubmodelIdInput = {
  value: Scalars['UUID']['input'];
};

export type PcvSubmodelIdSortInput = {
  value?: InputMaybe<SortEnumType>;
};

export type PcvSubmodelInput = {
  code: Scalars['String']['input'];
  createdAt: Scalars['DateTime']['input'];
  id: PcvSubmodelIdInput;
  name: Scalars['String']['input'];
  pcVs: Array<PcvInput>;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PcvSubmodelSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<PcvSubmodelIdSortInput>;
  name?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

export type PcvTransmission = ICategory & {
  __typename?: 'PcvTransmission';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: PcvTransmissionId;
  name: Scalars['String']['output'];
  pcVs: Array<Pcv>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PcvTransmissionFilterInput = {
  and?: InputMaybe<Array<PcvTransmissionFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<PcvTransmissionIdFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PcvTransmissionFilterInput>>;
  pcVs?: InputMaybe<ListFilterInputTypeOfPcvFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type PcvTransmissionId = {
  __typename?: 'PcvTransmissionId';
  value: Scalars['UUID']['output'];
};

export type PcvTransmissionIdFilterInput = {
  and?: InputMaybe<Array<PcvTransmissionIdFilterInput>>;
  or?: InputMaybe<Array<PcvTransmissionIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type PcvTransmissionIdInput = {
  value: Scalars['UUID']['input'];
};

export type PcvTransmissionIdSortInput = {
  value?: InputMaybe<SortEnumType>;
};

export type PcvTransmissionInput = {
  code: Scalars['String']['input'];
  createdAt: Scalars['DateTime']['input'];
  id: PcvTransmissionIdInput;
  name: Scalars['String']['input'];
  pcVs: Array<PcvInput>;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PcvTransmissionSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<PcvTransmissionIdSortInput>;
  name?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

export type PcvTrim = ICategory & {
  __typename?: 'PcvTrim';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: PcvTrimId;
  name: Scalars['String']['output'];
  pcVs: Array<Pcv>;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PcvTrimFilterInput = {
  and?: InputMaybe<Array<PcvTrimFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<PcvTrimIdFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PcvTrimFilterInput>>;
  pcVs?: InputMaybe<ListFilterInputTypeOfPcvFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type PcvTrimId = {
  __typename?: 'PcvTrimId';
  value: Scalars['UUID']['output'];
};

export type PcvTrimIdFilterInput = {
  and?: InputMaybe<Array<PcvTrimIdFilterInput>>;
  or?: InputMaybe<Array<PcvTrimIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type PcvTrimIdInput = {
  value: Scalars['UUID']['input'];
};

export type PcvTrimIdSortInput = {
  value?: InputMaybe<SortEnumType>;
};

export type PcvTrimInput = {
  code: Scalars['String']['input'];
  createdAt: Scalars['DateTime']['input'];
  id: PcvTrimIdInput;
  name: Scalars['String']['input'];
  pcVs: Array<PcvInput>;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PcvTrimSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<PcvTrimIdSortInput>;
  name?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

export type PendingComponentSerialsQueryInput = {
  plantCode?: InputMaybe<Scalars['String']['input']>;
};

export type PendingComponentSerialsQueryResult = {
  __typename?: 'PendingComponentSerialsQueryResult';
  componentCode: Scalars['String']['output'];
  componentSerialId: Scalars['UUID']['output'];
  kitNo: Scalars['String']['output'];
  plantCode: Scalars['String']['output'];
  serial1: Scalars['String']['output'];
  serial2: Scalars['String']['output'];
  vin: Scalars['String']['output'];
};

export type PendingLotShipmentsCountQueryInput = {
  includeLotNumbers: Scalars['Boolean']['input'];
  plantCode: Scalars['String']['input'];
};

export type PendingLotShipmentsCountQueryResult = {
  __typename?: 'PendingLotShipmentsCountQueryResult';
  lotCount: Scalars['Int']['output'];
  lotNumbers: Array<Scalars['String']['output']>;
  plantCode: Scalars['String']['output'];
};

export type PendingParnterKitStatusUpdatesCountQueryInput = {
  includeKitNumbers: Scalars['Boolean']['input'];
  plantCode: Scalars['String']['input'];
};

export type PendingParnterKitStatusUpdatesCountQueryResult = {
  __typename?: 'PendingParnterKitStatusUpdatesCountQueryResult';
  kitCount: Scalars['Int']['output'];
  kitNumbers: Array<Scalars['String']['output']>;
  plantCode: Scalars['String']['output'];
};

export type PendingPartnerStatusUpdateKitsQueryInput = {
  plantCode?: InputMaybe<Scalars['String']['input']>;
};

export type PendingPartnerStatusUpdateKitsQueryResult = {
  __typename?: 'PendingPartnerStatusUpdateKitsQueryResult';
  kitNumbers: Array<Scalars['String']['output']>;
};

export type PendingVinAssignmentsCountQueryInput = {
  includeKitNumbers: Scalars['Boolean']['input'];
  plantCode: Scalars['String']['input'];
};

export type PendingVinAssignmentsCountQueryResult = {
  __typename?: 'PendingVinAssignmentsCountQueryResult';
  kitCount: Scalars['Int']['output'];
  kitNumbers: Array<Scalars['String']['output']>;
  plantCode: Scalars['String']['output'];
};

export type PendingVinAssignmentsQueryInput = {
  plantCode?: InputMaybe<Scalars['String']['input']>;
};

export type PendingVinAssignmentsQueryResult = {
  __typename?: 'PendingVinAssignmentsQueryResult';
  items: Array<PendingVinAssignmentsQueryResultItem>;
};

export type PendingVinAssignmentsQueryResultItem = {
  __typename?: 'PendingVinAssignmentsQueryResultItem';
  elapsedMinutes: Scalars['Int']['output'];
  eventCreatedAt: Scalars['DateTime']['output'];
  kitNo: Scalars['String']['output'];
  partnerStatusUpdatedAt?: Maybe<Scalars['DateTime']['output']>;
  planBuildDate: Scalars['DateTime']['output'];
};

export type Plant = {
  __typename?: 'Plant';
  boms: Array<Bom>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  dealers: Array<Dealer>;
  id: PlantId;
  kittingPlantCode: Scalars['String']['output'];
  lots: Array<Lot>;
  name: Scalars['String']['output'];
  pcVs: Array<Pcv>;
  pcvModelStations: Array<PcvModelStation>;
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
  id?: InputMaybe<PlantIdFilterInput>;
  kittingPlantCode?: InputMaybe<StringOperationFilterInput>;
  lots?: InputMaybe<ListFilterInputTypeOfLotFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PlantFilterInput>>;
  pcVs?: InputMaybe<ListFilterInputTypeOfPcvFilterInput>;
  pcvModelStations?: InputMaybe<ListFilterInputTypeOfPcvModelStationFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  shipments?: InputMaybe<ListFilterInputTypeOfShipmentFilterInput>;
  stations?: InputMaybe<ListFilterInputTypeOfStationFilterInput>;
};

export type PlantId = {
  __typename?: 'PlantId';
  value: Scalars['UUID']['output'];
};

export type PlantIdFilterInput = {
  and?: InputMaybe<Array<PlantIdFilterInput>>;
  or?: InputMaybe<Array<PlantIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type PlantIdInput = {
  value: Scalars['UUID']['input'];
};

export type PlantIdSortInput = {
  value?: InputMaybe<SortEnumType>;
};

export type PlantInput = {
  boms: Array<BomInput>;
  code: Scalars['String']['input'];
  createdAt: Scalars['DateTime']['input'];
  dealers: Array<DealerInput>;
  id: PlantIdInput;
  kittingPlantCode: Scalars['String']['input'];
  lots: Array<LotInput>;
  name: Scalars['String']['input'];
  pcVs: Array<PcvInput>;
  pcvModelStations: Array<PcvModelStationInput>;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
  shipments: Array<ShipmentInput>;
  stations: Array<StationInput>;
};

export type PlantSortInput = {
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<PlantIdSortInput>;
  kittingPlantCode?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  removedAt?: InputMaybe<SortEnumType>;
};

export type PlantsQueryResult = {
  __typename?: 'PlantsQueryResult';
  plants: Array<PlantsQueryResultItem>;
};

export type PlantsQueryResultItem = {
  __typename?: 'PlantsQueryResultItem';
  createdAt: Scalars['DateTime']['output'];
  kittingPlantCode: Scalars['String']['output'];
  plantCode: Scalars['String']['output'];
  plantName: Scalars['String']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProcessPendingBuildStartCommandInput = {
  plantCode?: InputMaybe<Scalars['String']['input']>;
};

export type ProcessPendingBuildStartCommandResult = {
  __typename?: 'ProcessPendingBuildStartCommandResult';
  items: Array<ProcessPendingBuildStartCommandResultItem>;
};

export type ProcessPendingBuildStartCommandResultItem = {
  __typename?: 'ProcessPendingBuildStartCommandResultItem';
  errorMessage?: Maybe<Scalars['String']['output']>;
  kitNo: Scalars['String']['output'];
};

export type ProcessPendingPartnerStatusCommandResult = {
  __typename?: 'ProcessPendingPartnerStatusCommandResult';
  kitNumbers: Array<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  assignedVins: ResultOrOfAssignedVinsQueryResult;
  basicKitInfo?: Maybe<BasicKitInfo>;
  bomById?: Maybe<Bom>;
  bomFile: ResultOrOfParsedBom;
  bomFileText: ResultOrOfBomFileTextQueryResult;
  bomList?: Maybe<BomListConnection>;
  bomOverview: ResultOrOfBomOverviewQueryResult;
  bomParts: ResultOrOfBomPartsQueryResult;
  bomPartsQuantity: Array<PartQuantityDto>;
  componentById?: Maybe<Component>;
  componentSerials?: Maybe<ResultOrOfListOfComponentSerialsQueryResult>;
  componentSerialsByKit: ResultOrOfComponentSerialsByKitQueryResult;
  componentStations: ResultOrOfComponentStationsQueryResult;
  components: ResultOrOfIEnumerableOfComponentsQueryResult;
  dcwsServiceVersion: Scalars['String']['output'];
  dealers: ResultOrOfDealersQueryResult;
  handlingUnitDetail: ResultOrOfHandlingUnitDetailQueryResult;
  handlingUnitOverviewsByShipment: Array<HandlingUnitOverview>;
  handlingUnitParts: ResultOrOfIEnumerableOfHandlingUnitPartsQueryResult;
  handlingUnits: ResultOrOfIEnumerableOfHandlingUnitsQueryResult;
  importLotJson: ResultOrOfGetImportLotJsonQueryResult;
  info: Scalars['String']['output'];
  kitById?: Maybe<Kit>;
  kitByKitNo?: Maybe<Kit>;
  kitComponentSerialInfo?: Maybe<KitComponentSerialInfo>;
  kitOverview: ResultOrOfKitOverviewQueryResult;
  kitStatus?: Maybe<KitStatusDto>;
  kitStatusEventsByDate: ResultOrOfKitStatusEventsByDateQueryResult;
  kitStatuses: ResultOrOfKitStatusesQueryResult;
  kitVinAssignment: ResultOrOfKitVinAssignmentQueryResult;
  kitsByCurrentKitStatus?: Maybe<KitsByCurrentKitStatusConnection>;
  kitsByKitStatusCount: Array<ItemCountDto>;
  kitsByLot: Array<Kit>;
  lotBom: ResultOrOfLotBomQueryResult;
  lotByLotNo?: Maybe<Lot>;
  lotDetailForReceiving: ResultOrOfGetLotDetailForReceivingQueryResult;
  lotImportTransactionOverview: ResultOrOfLotImportTransactionOverviewQueryResult;
  lotImportTransactions: ResultOrOfLotImportTransactionsQueryResult;
  lotInfo?: Maybe<LotQueryByLotOrSrouceLotResult>;
  lotKitSerials: ResultOrOfIEnumerableOfLotKitSerialQueryResult;
  lotKits: ResultOrOfLotKitsQueryResult;
  lotKitsModelDetail: ResultOrOfLotKitsModelDetailQueryResult;
  lotListByBomId: Array<LotListDto>;
  lotNumbersByStatus: ResultOrOfLotNumbersByStatusQueryResult;
  /** Get the lot overview for a given lot number */
  lotOverview: ResultOrOfLotOverviewQueryResult;
  lotPartChangesByTransaction: ResultOrOfLotPartChangesByTransactionQueryResult;
  /** Get the difference in lot parts between the current lot and the prior lot if it exists */
  lotPartDiff: ResultOrOfLotPartDiffQueryResult;
  lotPartInfo?: Maybe<LotPartDto>;
  lotParts: ResultOrOfLotPartsQueryResult;
  lotPartsByShipOrBom: ResultOrOfLotPartsByShipOrBomQueryResult;
  lotShipment: ResultOrOfLotShipmentsQueryResult;
  lotVinAllocation: LotVinAllocationQueryResult;
  lots: ResultOrOfListOfLotsQueryResult;
  lotsByKitStatus: Array<LotsByKitStatusQueryResult>;
  modelStationComponents: ResultOrOfModelStationComponentsQueryResult;
  parseShimpentFile: ResultOrOfParsedShipment;
  parsedShipmentFile: ResultOrOfParsedShipment;
  partLotParts: ResultOrOfPartLotPartsQueryResult;
  partOverview: ResultOrOfPartOverviewQueryResult;
  partTypes: ResultOrOfListOfPartTypesQueryResult;
  partnerKitStatus: ResultOrOfPartnerKitStatusQueryResult;
  partnerKitStatuses: ResultOrOfPartnerKitStatusesQueryResult;
  partnerKitVin: ResultOrOfPartnerKitVinQueryResult;
  parts: ResultOrOfListOfPartsQueryResult;
  pcvComponents: ResultOrOfPcvComponentsQueryResult;
  pcvComponentsByPlant: ResultOrOfIEnumerableOfGetPcvComponentsByPlantQueryResult;
  pcvDetail: ResultOrOfPcvDetailQueryResult;
  pcvsByPlant: GetPcvsByPlantQueryResult;
  pendingComponentSerials?: Maybe<ResultOrOfIEnumerableOfPendingComponentSerialsQueryResult>;
  pendingLotShipmentsCount: ResultOrOfPendingLotShipmentsCountQueryResult;
  pendingPartnerKitStatusUpdatesCount: ResultOrOfPendingParnterKitStatusUpdatesCountQueryResult;
  pendingPartnerStatusUpdateKits: ResultOrOfPendingPartnerStatusUpdateKitsQueryResult;
  pendingVinAssignments: ResultOrOfPendingVinAssignmentsQueryResult;
  pendingVinAssignmentsCount: ResultOrOfPendingVinAssignmentsCountQueryResult;
  pingDcwsService: Scalars['Boolean']['output'];
  plants: ResultOrOfPlantsQueryResult;
  recentBomFiles: Array<RecentBomFilesQueryResult>;
  recentBoms: ResultOrOfRecentBomsQueryResult;
  recentComponentSerials: ResultOrOfListOfRecentComponentSerialsQueryResult;
  recentHandlingUnitsReceived: ResultOrOfListOfRecentHandlingUnitsReceivedQueryResult;
  recentImportLotJsonFiles: ResultOrOfRecentImportLotJsonFilesQueryResult;
  recentKits: ResultOrOfListOfGetRecentKitsQueryResult;
  recentLotPartsReceived: Array<LotPartReceivedDto>;
  recentShipmentFiles: Array<RecentShipmentFilesQueryResult>;
  recentShipments: ResultOrOfRecentShipmentsQueryResult;
  resourceSearch: ResultOrOfResourceSearchQueryResult;
  serverConfigSettings: ApiServerOptions;
  shipmentFileText: ResultOrOfShipmentFileTextQueryResult;
  shipmentOverview?: Maybe<ResultOrOfShipmentOverviewQueryResult>;
  stations: ResultOrOfIEnumerableOfStationsQueryResult;
};


export type QueryAssignedVinsArgs = {
  request: AssignedVinsQueryInput;
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


export type QueryBomFileTextArgs = {
  input: BomFileTextQueryInput;
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
  request: BomOverviewQueryInput;
};


export type QueryBomPartsArgs = {
  request: BomPartsQueryInput;
};


export type QueryBomPartsQuantityArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryComponentByIdArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryComponentSerialsArgs = {
  request: ComponentSerialsQueryInput;
};


export type QueryComponentSerialsByKitArgs = {
  input: ComponentSerialsByKitQueryInput;
};


export type QueryComponentStationsArgs = {
  request: ComponentStationsQueryInput;
};


export type QueryComponentsArgs = {
  request: ComponentsQueryInput;
};


export type QueryDealersArgs = {
  request: DealersListQueryInput;
};


export type QueryHandlingUnitDetailArgs = {
  request: HandlingUnitDetailQueryInput;
};


export type QueryHandlingUnitOverviewsByShipmentArgs = {
  shipmentId: Scalars['UUID']['input'];
};


export type QueryHandlingUnitPartsArgs = {
  request: HandlingUnitPartsQueryInput;
};


export type QueryHandlingUnitsArgs = {
  request: HandlingUnitsQueryInput;
};


export type QueryImportLotJsonArgs = {
  request: GetImportLotJsonQueryInput;
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


export type QueryKitOverviewArgs = {
  input: KitOverviewQueryInput;
};


export type QueryKitStatusArgs = {
  kitNo: Scalars['String']['input'];
};


export type QueryKitStatusEventsByDateArgs = {
  request: KitStatusEventsByDateQueryInput;
};


export type QueryKitStatusesArgs = {
  input: KitStatusesQueryInput;
};


export type QueryKitVinAssignmentArgs = {
  request: KitVinAssignmentQueryInput;
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


export type QueryLotBomArgs = {
  request: LotBomQueryInput;
};


export type QueryLotByLotNoArgs = {
  lotNo: Scalars['String']['input'];
};


export type QueryLotDetailForReceivingArgs = {
  request: GetLotDetailForReceivingQueryInput;
};


export type QueryLotImportTransactionOverviewArgs = {
  input: LotImportTransactionOverviewQueryInput;
};


export type QueryLotImportTransactionsArgs = {
  input: LotImportTransactionsQueryInput;
};


export type QueryLotInfoArgs = {
  lotNo: Scalars['String']['input'];
};


export type QueryLotKitSerialsArgs = {
  input: LotKitSerialQueryInput;
};


export type QueryLotKitsArgs = {
  input: LotKitsQueryInput;
};


export type QueryLotKitsModelDetailArgs = {
  request: LotKitsModelDetailQueryInput;
};


export type QueryLotListByBomIdArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryLotNumbersByStatusArgs = {
  request: LotNumbersByStatusQueryInput;
};


export type QueryLotOverviewArgs = {
  input: LotOverviewQueryInput;
};


export type QueryLotPartChangesByTransactionArgs = {
  input: LotPartChangesByTransactionQueryInput;
};


export type QueryLotPartDiffArgs = {
  input: LotPartDiffQueryInput;
};


export type QueryLotPartInfoArgs = {
  lotNo: Scalars['String']['input'];
  partNo: Scalars['String']['input'];
};


export type QueryLotPartsArgs = {
  request: LotPartsQueryInput;
};


export type QueryLotPartsByShipOrBomArgs = {
  input: LotPartsByShipOrBomQueryInput;
};


export type QueryLotShipmentArgs = {
  request: LotShipmentQueryInput;
};


export type QueryLotVinAllocationArgs = {
  input: LotVinAllocationQueryInput;
};


export type QueryLotsArgs = {
  request: LotsQueryInput;
};


export type QueryLotsByKitStatusArgs = {
  input: LotsByKitStatusQueryInput;
};


export type QueryModelStationComponentsArgs = {
  plantCode: Scalars['String']['input'];
};


export type QueryParseShimpentFileArgs = {
  file: Scalars['Upload']['input'];
};


export type QueryParsedShipmentFileArgs = {
  input: ParsedShipmentFileQueryInput;
};


export type QueryPartLotPartsArgs = {
  input: PartLotPartsQueryInput;
};


export type QueryPartOverviewArgs = {
  input: PartOverviewQueryInput;
};


export type QueryPartnerKitStatusArgs = {
  request: PartnerKitStatusQueryInput;
};


export type QueryPartnerKitStatusesArgs = {
  request: PartnerKitStatusesQueryInput;
};


export type QueryPartnerKitVinArgs = {
  request: PartnerKitVinQueryInput;
};


export type QueryPcvComponentsArgs = {
  request: PcvComponentsQueryInput;
};


export type QueryPcvComponentsByPlantArgs = {
  request: GetPcvComponentsByPlantQueryInput;
};


export type QueryPcvDetailArgs = {
  request: PcvDetailQueryInput;
};


export type QueryPcvsByPlantArgs = {
  input: GetPcvsByPlantQueryInput;
};


export type QueryPendingComponentSerialsArgs = {
  request: PendingComponentSerialsQueryInput;
};


export type QueryPendingLotShipmentsCountArgs = {
  request: PendingLotShipmentsCountQueryInput;
};


export type QueryPendingPartnerKitStatusUpdatesCountArgs = {
  request: PendingParnterKitStatusUpdatesCountQueryInput;
};


export type QueryPendingPartnerStatusUpdateKitsArgs = {
  request: PendingPartnerStatusUpdateKitsQueryInput;
};


export type QueryPendingVinAssignmentsArgs = {
  request: PendingVinAssignmentsQueryInput;
};


export type QueryPendingVinAssignmentsCountArgs = {
  request: PendingVinAssignmentsCountQueryInput;
};


export type QueryRecentBomFilesArgs = {
  input: RecentBomFilesQueryInput;
};


export type QueryRecentBomsArgs = {
  request: RecentBomsQueryInput;
};


export type QueryRecentComponentSerialsArgs = {
  request: RecentComponentSerialsQueryInput;
};


export type QueryRecentHandlingUnitsReceivedArgs = {
  request: RecentHandlingUnitsReceivedQueryInput;
};


export type QueryRecentImportLotJsonFilesArgs = {
  request: RecentImportLotJsonFilesQueryInput;
};


export type QueryRecentKitsArgs = {
  request: GetRecentKitsQueryInput;
};


export type QueryRecentLotPartsReceivedArgs = {
  count?: Scalars['Int']['input'];
  plantCode: Scalars['String']['input'];
};


export type QueryRecentShipmentFilesArgs = {
  input: RecentShipmentFilesQueryInput;
};


export type QueryRecentShipmentsArgs = {
  request: RecentShipmentsQueryInput;
};


export type QueryResourceSearchArgs = {
  request: ResourceSearchQueryInput;
};


export type QueryShipmentFileTextArgs = {
  input: ShipmentFileTextQueryInput;
};


export type QueryShipmentOverviewArgs = {
  query: ShipmentOverviewQueryInput;
};


export type QueryStationsArgs = {
  request: StationsQueryInput;
};

export type ReceiveHandlingUnitInput = {
  handlingUnitCode: Scalars['String']['input'];
  remove?: Scalars['Boolean']['input'];
};

export type ReceiveHandlingUnitPayload = {
  __typename?: 'ReceiveHandlingUnitPayload';
  conveyanceNo: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  handlingUnitCode: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  lotNo: Scalars['String']['output'];
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

export type RecentBomsQueryInput = {
  first: Scalars['Int']['input'];
  plantCode: Scalars['String']['input'];
};

export type RecentBomsQueryResult = {
  __typename?: 'RecentBomsQueryResult';
  boms: Array<RecentBomsQueryResultItem>;
};

export type RecentBomsQueryResultItem = {
  __typename?: 'RecentBomsQueryResultItem';
  bomId: Scalars['UUID']['output'];
  createdAt: Scalars['DateTime']['output'];
  filename: Scalars['String']['output'];
  lotNumbers: Array<Scalars['String']['output']>;
  plantCode: Scalars['String']['output'];
  revisedTargetShipDate?: Maybe<Scalars['DateTime']['output']>;
  sequence: Scalars['Int']['output'];
};

export type RecentComponentSerialsQueryInput = {
  first?: Scalars['Int']['input'];
  plantCode: Scalars['String']['input'];
};

export type RecentComponentSerialsQueryResult = {
  __typename?: 'RecentComponentSerialsQueryResult';
  componentCode: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  dcwsResponseCode?: Maybe<Scalars['String']['output']>;
  kitNo: Scalars['String']['output'];
  lotNo: Scalars['String']['output'];
  model: Scalars['String']['output'];
  plantCode: Scalars['String']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  sequenceByPlant: Scalars['Int']['output'];
  serial1: Scalars['String']['output'];
  serial2: Scalars['String']['output'];
  stationCode: Scalars['String']['output'];
  status: Scalars['String']['output'];
  verifiedAt?: Maybe<Scalars['DateTime']['output']>;
  vin: Scalars['String']['output'];
};

export type RecentHandlingUnitsReceivedQueryInput = {
  first?: Scalars['Int']['input'];
  plantCode: Scalars['String']['input'];
};

export type RecentHandlingUnitsReceivedQueryResult = {
  __typename?: 'RecentHandlingUnitsReceivedQueryResult';
  commodityCode: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  handlingUnitCode: Scalars['String']['output'];
  lotNo: Scalars['String']['output'];
  model: Scalars['String']['output'];
  partsCount: Scalars['Int']['output'];
  plantCode: Scalars['String']['output'];
  shipmentId: Scalars['UUID']['output'];
};

export type RecentImportLotJsonFilesQueryInput = {
  count: Scalars['Int']['input'];
};

export type RecentImportLotJsonFilesQueryResult = {
  __typename?: 'RecentImportLotJsonFilesQueryResult';
  blobs: Array<RecentImportLotJsonFilesQueryResultItem>;
};

export type RecentImportLotJsonFilesQueryResultItem = {
  __typename?: 'RecentImportLotJsonFilesQueryResultItem';
  fileName: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lengthBytes: Scalars['Long']['output'];
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

export type RecentShipmentsQueryInput = {
  first?: Scalars['Int']['input'];
  plantCode: Scalars['String']['input'];
};

export type RecentShipmentsQueryResult = {
  __typename?: 'RecentShipmentsQueryResult';
  shipments: Array<RecentShipmentsQueryResultItem>;
};

export type RecentShipmentsQueryResultItem = {
  __typename?: 'RecentShipmentsQueryResultItem';
  bomMissing: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  fileName: Scalars['String']['output'];
  lotNumbers: Array<Scalars['String']['output']>;
  plantCode: Scalars['String']['output'];
  sequence: Scalars['Int']['output'];
  shipmentId: Scalars['UUID']['output'];
};

export type RemapComponentSerialStationsCommandInput = {
  kitNo: Scalars['String']['input'];
};

export type RemapComponentSerialStationsCommandResult = {
  __typename?: 'RemapComponentSerialStationsCommandResult';
  kitNo: Scalars['String']['output'];
  remappedItems: Array<Scalars['String']['output']>;
};

export type RemoveAllComponentStationMappingsPayload = {
  __typename?: 'RemoveAllComponentStationMappingsPayload';
  removedCount: Scalars['Int']['output'];
};

export type ReplaceKitVinCommandInput = {
  kitNo: Scalars['String']['input'];
  newVin: Scalars['String']['input'];
};

export type ReplaceKitVinCommandResult = {
  __typename?: 'ReplaceKitVinCommandResult';
  kitNo: Scalars['String']['output'];
  newVin: Scalars['String']['output'];
  oldVin: Scalars['String']['output'];
  replacedSerials: Array<ReplacedComponentSerial>;
};

export type ReplacedComponentSerial = {
  __typename?: 'ReplacedComponentSerial';
  componentCode: Scalars['String']['output'];
  serialNo: Scalars['String']['output'];
};

export type ResetComponentSerialVerificationComandInput = {
  componentCode: Scalars['String']['input'];
  kitNo: Scalars['String']['input'];
};

export type ResetComponentSerialVerificationCommandResult = {
  __typename?: 'ResetComponentSerialVerificationCommandResult';
  componentCode: Scalars['String']['output'];
  kitNo: Scalars['String']['output'];
  serial1: Scalars['String']['output'];
  vin: Scalars['String']['output'];
};

export type ResourceSearchQueryInput = {
  plantCode: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type ResourceSearchQueryResult = {
  __typename?: 'ResourceSearchQueryResult';
  type: ResourceSearchType;
  value: Scalars['String']['output'];
};

export enum ResourceSearchType {
  HandlingUnit = 'HANDLING_UNIT',
  Kit = 'KIT',
  Lot = 'LOT',
  Pcv = 'PCV'
}

export type ResultOrOfAssignVinCommandResult = {
  __typename?: 'ResultOrOfAssignVinCommandResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<AssignVinCommandResult>;
};

export type ResultOrOfAssignedVinsQueryResult = {
  __typename?: 'ResultOrOfAssignedVinsQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<AssignedVinsQueryResult>;
};

export type ResultOrOfBomFileTextQueryResult = {
  __typename?: 'ResultOrOfBomFileTextQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<BomFileTextQueryResult>;
};

export type ResultOrOfBomOverviewQueryResult = {
  __typename?: 'ResultOrOfBomOverviewQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<BomOverviewQueryResult>;
};

export type ResultOrOfBomPartsQueryResult = {
  __typename?: 'ResultOrOfBomPartsQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<BomPartsQueryResult>;
};

export type ResultOrOfComponentSerial = {
  __typename?: 'ResultOrOfComponentSerial';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<ComponentSerial>;
};

export type ResultOrOfComponentSerialsByKitQueryResult = {
  __typename?: 'ResultOrOfComponentSerialsByKitQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<ComponentSerialsByKitQueryResult>;
};

export type ResultOrOfComponentStationsQueryResult = {
  __typename?: 'ResultOrOfComponentStationsQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<ComponentStationsQueryResult>;
};

export type ResultOrOfCreateComponentSerialCommandResult = {
  __typename?: 'ResultOrOfCreateComponentSerialCommandResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<CreateComponentSerialCommandResult>;
};

export type ResultOrOfCreateKitStatusCommandResult = {
  __typename?: 'ResultOrOfCreateKitStatusCommandResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<CreateKitStatusCommandResult>;
};

export type ResultOrOfDcwsResponse = {
  __typename?: 'ResultOrOfDcwsResponse';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<DcwsResponse>;
};

export type ResultOrOfDealersQueryResult = {
  __typename?: 'ResultOrOfDealersQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<DealersQueryResult>;
};

export type ResultOrOfGetImportLotJsonQueryResult = {
  __typename?: 'ResultOrOfGetImportLotJsonQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<GetImportLotJsonQueryResult>;
};

export type ResultOrOfGetLotDetailForReceivingQueryResult = {
  __typename?: 'ResultOrOfGetLotDetailForReceivingQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<GetLotDetailForReceivingQueryResult>;
};

export type ResultOrOfHandlingUnitDetailQueryResult = {
  __typename?: 'ResultOrOfHandlingUnitDetailQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<HandlingUnitDetailQueryResult>;
};

export type ResultOrOfIEnumerableOfComponentsQueryResult = {
  __typename?: 'ResultOrOfIEnumerableOfComponentsQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<Array<Maybe<ComponentsQueryResult>>>;
};

export type ResultOrOfIEnumerableOfGetPcvComponentsByPlantQueryResult = {
  __typename?: 'ResultOrOfIEnumerableOfGetPcvComponentsByPlantQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<Array<Maybe<GetPcvComponentsByPlantQueryResult>>>;
};

export type ResultOrOfIEnumerableOfHandlingUnitPartsQueryResult = {
  __typename?: 'ResultOrOfIEnumerableOfHandlingUnitPartsQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<Array<Maybe<HandlingUnitPartsQueryResult>>>;
};

export type ResultOrOfIEnumerableOfHandlingUnitsQueryResult = {
  __typename?: 'ResultOrOfIEnumerableOfHandlingUnitsQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<Array<Maybe<HandlingUnitsQueryResult>>>;
};

export type ResultOrOfIEnumerableOfLotKitSerialQueryResult = {
  __typename?: 'ResultOrOfIEnumerableOfLotKitSerialQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<Array<Maybe<LotKitSerialQueryResult>>>;
};

export type ResultOrOfIEnumerableOfPendingComponentSerialsQueryResult = {
  __typename?: 'ResultOrOfIEnumerableOfPendingComponentSerialsQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<Array<Maybe<PendingComponentSerialsQueryResult>>>;
};

export type ResultOrOfIEnumerableOfStationsQueryResult = {
  __typename?: 'ResultOrOfIEnumerableOfStationsQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<Array<Maybe<StationsQueryResult>>>;
};

export type ResultOrOfImportBomResult = {
  __typename?: 'ResultOrOfImportBomResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<ImportBomResult>;
};

export type ResultOrOfImportShipmentCommandResult = {
  __typename?: 'ResultOrOfImportShipmentCommandResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<ImportShipmentCommandResult>;
};

export type ResultOrOfKit = {
  __typename?: 'ResultOrOfKit';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<Kit>;
};

export type ResultOrOfKitOverviewQueryResult = {
  __typename?: 'ResultOrOfKitOverviewQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<KitOverviewQueryResult>;
};

export type ResultOrOfKitStatusEventsByDateQueryResult = {
  __typename?: 'ResultOrOfKitStatusEventsByDateQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<KitStatusEventsByDateQueryResult>;
};

export type ResultOrOfKitStatusesQueryResult = {
  __typename?: 'ResultOrOfKitStatusesQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<KitStatusesQueryResult>;
};

export type ResultOrOfKitVinAssignmentQueryResult = {
  __typename?: 'ResultOrOfKitVinAssignmentQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<KitVinAssignmentQueryResult>;
};

export type ResultOrOfListOfComponentSerialsQueryResult = {
  __typename?: 'ResultOrOfListOfComponentSerialsQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<Array<Maybe<ComponentSerialsQueryResult>>>;
};

export type ResultOrOfListOfGetRecentKitsQueryResult = {
  __typename?: 'ResultOrOfListOfGetRecentKitsQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<Array<Maybe<GetRecentKitsQueryResult>>>;
};

export type ResultOrOfListOfLotsQueryResult = {
  __typename?: 'ResultOrOfListOfLotsQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<Array<Maybe<LotsQueryResult>>>;
};

export type ResultOrOfListOfPartTypesQueryResult = {
  __typename?: 'ResultOrOfListOfPartTypesQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<Array<Maybe<PartTypesQueryResult>>>;
};

export type ResultOrOfListOfPartsQueryResult = {
  __typename?: 'ResultOrOfListOfPartsQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<Array<Maybe<PartsQueryResult>>>;
};

export type ResultOrOfListOfRecentComponentSerialsQueryResult = {
  __typename?: 'ResultOrOfListOfRecentComponentSerialsQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<Array<Maybe<RecentComponentSerialsQueryResult>>>;
};

export type ResultOrOfListOfRecentHandlingUnitsReceivedQueryResult = {
  __typename?: 'ResultOrOfListOfRecentHandlingUnitsReceivedQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<Array<Maybe<RecentHandlingUnitsReceivedQueryResult>>>;
};

export type ResultOrOfListOfUpdateLotKitStatusCommandResult = {
  __typename?: 'ResultOrOfListOfUpdateLotKitStatusCommandResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<Array<Maybe<UpdateLotKitStatusCommandResult>>>;
};

export type ResultOrOfLot = {
  __typename?: 'ResultOrOfLot';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<Lot>;
};

export type ResultOrOfLotBomQueryResult = {
  __typename?: 'ResultOrOfLotBomQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<LotBomQueryResult>;
};

export type ResultOrOfLotImportTransactionOverviewQueryResult = {
  __typename?: 'ResultOrOfLotImportTransactionOverviewQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<LotImportTransactionOverviewQueryResult>;
};

export type ResultOrOfLotImportTransactionsQueryResult = {
  __typename?: 'ResultOrOfLotImportTransactionsQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<LotImportTransactionsQueryResult>;
};

export type ResultOrOfLotKitsModelDetailQueryResult = {
  __typename?: 'ResultOrOfLotKitsModelDetailQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<LotKitsModelDetailQueryResult>;
};

export type ResultOrOfLotKitsQueryResult = {
  __typename?: 'ResultOrOfLotKitsQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<LotKitsQueryResult>;
};

export type ResultOrOfLotNumbersByStatusQueryResult = {
  __typename?: 'ResultOrOfLotNumbersByStatusQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<LotNumbersByStatusQueryResult>;
};

export type ResultOrOfLotOverviewQueryResult = {
  __typename?: 'ResultOrOfLotOverviewQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<LotOverviewQueryResult>;
};

export type ResultOrOfLotPartChangesByTransactionQueryResult = {
  __typename?: 'ResultOrOfLotPartChangesByTransactionQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<LotPartChangesByTransactionQueryResult>;
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

export type ResultOrOfLotPartsQueryResult = {
  __typename?: 'ResultOrOfLotPartsQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<LotPartsQueryResult>;
};

export type ResultOrOfLotShipmentsQueryResult = {
  __typename?: 'ResultOrOfLotShipmentsQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<LotShipmentsQueryResult>;
};

export type ResultOrOfMigrateToModelStationsCommandResult = {
  __typename?: 'ResultOrOfMigrateToModelStationsCommandResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<MigrateToModelStationsCommandResult>;
};

export type ResultOrOfModelStationComponentsQueryResult = {
  __typename?: 'ResultOrOfModelStationComponentsQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<ModelStationComponentsQueryResult>;
};

export type ResultOrOfPcv = {
  __typename?: 'ResultOrOfPCV';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<Pcv>;
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

export type ResultOrOfParsedBom = {
  __typename?: 'ResultOrOfParsedBOM';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<ParsedBom>;
};

export type ResultOrOfParsedShipment = {
  __typename?: 'ResultOrOfParsedShipment';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<ParsedShipment>;
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

export type ResultOrOfPartnerKitStatusQueryResult = {
  __typename?: 'ResultOrOfPartnerKitStatusQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<PartnerKitStatusQueryResult>;
};

export type ResultOrOfPartnerKitStatusesQueryResult = {
  __typename?: 'ResultOrOfPartnerKitStatusesQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<PartnerKitStatusesQueryResult>;
};

export type ResultOrOfPartnerKitVinQueryResult = {
  __typename?: 'ResultOrOfPartnerKitVinQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<PartnerKitVinQueryResult>;
};

export type ResultOrOfPcvComponentsQueryResult = {
  __typename?: 'ResultOrOfPcvComponentsQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<PcvComponentsQueryResult>;
};

export type ResultOrOfPcvDetailQueryResult = {
  __typename?: 'ResultOrOfPcvDetailQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<PcvDetailQueryResult>;
};

export type ResultOrOfPendingLotShipmentsCountQueryResult = {
  __typename?: 'ResultOrOfPendingLotShipmentsCountQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<PendingLotShipmentsCountQueryResult>;
};

export type ResultOrOfPendingParnterKitStatusUpdatesCountQueryResult = {
  __typename?: 'ResultOrOfPendingParnterKitStatusUpdatesCountQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<PendingParnterKitStatusUpdatesCountQueryResult>;
};

export type ResultOrOfPendingPartnerStatusUpdateKitsQueryResult = {
  __typename?: 'ResultOrOfPendingPartnerStatusUpdateKitsQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<PendingPartnerStatusUpdateKitsQueryResult>;
};

export type ResultOrOfPendingVinAssignmentsCountQueryResult = {
  __typename?: 'ResultOrOfPendingVinAssignmentsCountQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<PendingVinAssignmentsCountQueryResult>;
};

export type ResultOrOfPendingVinAssignmentsQueryResult = {
  __typename?: 'ResultOrOfPendingVinAssignmentsQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<PendingVinAssignmentsQueryResult>;
};

export type ResultOrOfPlantsQueryResult = {
  __typename?: 'ResultOrOfPlantsQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<PlantsQueryResult>;
};

export type ResultOrOfProcessPendingBuildStartCommandResult = {
  __typename?: 'ResultOrOfProcessPendingBuildStartCommandResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<ProcessPendingBuildStartCommandResult>;
};

export type ResultOrOfProcessPendingPartnerStatusCommandResult = {
  __typename?: 'ResultOrOfProcessPendingPartnerStatusCommandResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<ProcessPendingPartnerStatusCommandResult>;
};

export type ResultOrOfReceiveHandlingUnitPayload = {
  __typename?: 'ResultOrOfReceiveHandlingUnitPayload';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<ReceiveHandlingUnitPayload>;
};

export type ResultOrOfRecentBomsQueryResult = {
  __typename?: 'ResultOrOfRecentBomsQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<RecentBomsQueryResult>;
};

export type ResultOrOfRecentImportLotJsonFilesQueryResult = {
  __typename?: 'ResultOrOfRecentImportLotJsonFilesQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<RecentImportLotJsonFilesQueryResult>;
};

export type ResultOrOfRecentShipmentsQueryResult = {
  __typename?: 'ResultOrOfRecentShipmentsQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<RecentShipmentsQueryResult>;
};

export type ResultOrOfRemapComponentSerialStationsCommandResult = {
  __typename?: 'ResultOrOfRemapComponentSerialStationsCommandResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<RemapComponentSerialStationsCommandResult>;
};

export type ResultOrOfRemoveAllComponentStationMappingsPayload = {
  __typename?: 'ResultOrOfRemoveAllComponentStationMappingsPayload';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<RemoveAllComponentStationMappingsPayload>;
};

export type ResultOrOfReplaceKitVinCommandResult = {
  __typename?: 'ResultOrOfReplaceKitVinCommandResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<ReplaceKitVinCommandResult>;
};

export type ResultOrOfResetComponentSerialVerificationCommandResult = {
  __typename?: 'ResultOrOfResetComponentSerialVerificationCommandResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<ResetComponentSerialVerificationCommandResult>;
};

export type ResultOrOfResourceSearchQueryResult = {
  __typename?: 'ResultOrOfResourceSearchQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<ResourceSearchQueryResult>;
};

export type ResultOrOfSavePcvCommandResult = {
  __typename?: 'ResultOrOfSavePcvCommandResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<SavePcvCommandResult>;
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

export type ResultOrOfSetPartTypeResult = {
  __typename?: 'ResultOrOfSetPartTypeResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<SetPartTypeResult>;
};

export type ResultOrOfShipmentFileTextQueryResult = {
  __typename?: 'ResultOrOfShipmentFileTextQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<ShipmentFileTextQueryResult>;
};

export type ResultOrOfShipmentOverviewQueryResult = {
  __typename?: 'ResultOrOfShipmentOverviewQueryResult';
  errorMessage: Scalars['String']['output'];
  errors: Array<Error>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
  payload?: Maybe<ShipmentOverviewQueryResult>;
};

export type SavePcvCommandInput = {
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

export type SavePcvCommandResult = {
  __typename?: 'SavePcvCommandResult';
  description: Scalars['String']['output'];
  id: PcvId;
  model: Scalars['String']['output'];
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

export type Shipment = {
  __typename?: 'Shipment';
  createdAt: Scalars['DateTime']['output'];
  filename?: Maybe<Scalars['String']['output']>;
  id: ShipmentId;
  lots: Array<Lot>;
  plant: Plant;
  plantId: PlantId;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  sequence: Scalars['Int']['output'];
};

export type ShipmentDataConveyance = {
  __typename?: 'ShipmentDataConveyance';
  dsConvInitials: Scalars['String']['output'];
  dtShipped: Scalars['String']['output'];
  handlingUnits: Array<ShipmentDataHandlingUnit>;
  noConveyance: Scalars['String']['output'];
  noInvoice: Scalars['String']['output'];
  wtGross: Scalars['Decimal']['output'];
};

export type ShipmentDataHandlingUnit = {
  __typename?: 'ShipmentDataHandlingUnit';
  cdCkdCntrHU: Scalars['String']['output'];
  msCntrHeight: Scalars['Decimal']['output'];
  msCntrLength: Scalars['Decimal']['output'];
  msCntrWidth: Scalars['Decimal']['output'];
  noCntrHu: Scalars['String']['output'];
  parts: Array<ShipmentDataHandlingUnitPart>;
};

export type ShipmentDataHandlingUnitPart = {
  __typename?: 'ShipmentDataHandlingUnitPart';
  cdUnitOfMeasure: Scalars['String']['output'];
  dsPart: Scalars['String']['output'];
  noPart: Scalars['String']['output'];
  noPartBusiness: Scalars['String']['output'];
  qtShipped: Scalars['Int']['output'];
  wtPart: Scalars['Decimal']['output'];
};

export type ShipmentDataHeader = {
  __typename?: 'ShipmentDataHeader';
  environmentIndicator: Scalars['String']['output'];
  receiverID: Scalars['String']['output'];
  senderID: Scalars['String']['output'];
  transactionDate: Scalars['String']['output'];
  transactionID: Scalars['String']['output'];
  transactionTime: Scalars['String']['output'];
  transactionType: Scalars['String']['output'];
};

export type ShipmentDataLot = {
  __typename?: 'ShipmentDataLot';
  altShipToLoc: Scalars['String']['output'];
  cdAiagTransit: Scalars['String']['output'];
  cdCustomer: Scalars['String']['output'];
  conveyances: Array<ShipmentDataConveyance>;
  inAsnCorrection: Scalars['String']['output'];
  lotNumber: Scalars['String']['output'];
  noOfInvoices: Scalars['Int']['output'];
  shipToLOC: Scalars['String']['output'];
  soldToLoc: Scalars['String']['output'];
};

export type ShipmentFileTextQueryInput = {
  fileName: Scalars['String']['input'];
};

export type ShipmentFileTextQueryResult = {
  __typename?: 'ShipmentFileTextQueryResult';
  fileName: Scalars['String']['output'];
  fileText: Scalars['String']['output'];
};

export type ShipmentFilterInput = {
  and?: InputMaybe<Array<ShipmentFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  filename?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ShipmentIdFilterInput>;
  lots?: InputMaybe<ListFilterInputTypeOfLotFilterInput>;
  or?: InputMaybe<Array<ShipmentFilterInput>>;
  plant?: InputMaybe<PlantFilterInput>;
  plantId?: InputMaybe<PlantIdFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  sequence?: InputMaybe<IntOperationFilterInput>;
};

export type ShipmentId = {
  __typename?: 'ShipmentId';
  value: Scalars['UUID']['output'];
};

export type ShipmentIdFilterInput = {
  and?: InputMaybe<Array<ShipmentIdFilterInput>>;
  or?: InputMaybe<Array<ShipmentIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type ShipmentIdInput = {
  value: Scalars['UUID']['input'];
};

export type ShipmentIdSortInput = {
  value?: InputMaybe<SortEnumType>;
};

export type ShipmentInput = {
  createdAt: Scalars['DateTime']['input'];
  filename?: InputMaybe<Scalars['String']['input']>;
  id: ShipmentIdInput;
  lots: Array<LotInput>;
  plant: PlantInput;
  plantId: PlantIdInput;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sequence: Scalars['Int']['input'];
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
  handlingUnitPartsCount: Scalars['Int']['output'];
  handlingUnitReceivedCount: Scalars['Int']['output'];
  id: Scalars['UUID']['output'];
  invoiceCount: Scalars['Int']['output'];
  lotPartCount: Scalars['Int']['output'];
  lotPartReceivedCount: Scalars['Int']['output'];
  lots: Array<ShipmentOverviewQueryResultLot>;
  plantCode: Scalars['String']['output'];
  sequence: Scalars['Int']['output'];
};

export type ShipmentOverviewQueryResultLot = {
  __typename?: 'ShipmentOverviewQueryResultLot';
  lotNo: Scalars['String']['output'];
  sequenceByPlant: Scalars['Int']['output'];
};

export type ShipmentSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  filename?: InputMaybe<SortEnumType>;
  id?: InputMaybe<ShipmentIdSortInput>;
  plant?: InputMaybe<PlantSortInput>;
  plantId?: InputMaybe<PlantIdSortInput>;
  removedAt?: InputMaybe<SortEnumType>;
  sequence?: InputMaybe<SortEnumType>;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StatcionSerialInfo = {
  __typename?: 'StatcionSerialInfo';
  componentSerialId: ComponentSerialId;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  serial1?: Maybe<Scalars['String']['output']>;
  serial2?: Maybe<Scalars['String']['output']>;
  stationCode: Scalars['String']['output'];
  stationName: Scalars['String']['output'];
  stationSequence: Scalars['Int']['output'];
  verifiedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Station = {
  __typename?: 'Station';
  associatedComponents: Array<ComponentStation>;
  code: Scalars['String']['output'];
  componentSerials: Array<ComponentSerial>;
  createdAt: Scalars['DateTime']['output'];
  id: StationId;
  modelStations: Array<PcvModelStation>;
  name: Scalars['String']['output'];
  plant: Plant;
  plantId: PlantId;
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  sequence: Scalars['Int']['output'];
};

export type StationFilterInput = {
  and?: InputMaybe<Array<StationFilterInput>>;
  associatedComponents?: InputMaybe<ListFilterInputTypeOfComponentStationFilterInput>;
  code?: InputMaybe<StringOperationFilterInput>;
  componentSerials?: InputMaybe<ListFilterInputTypeOfComponentSerialFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<StationIdFilterInput>;
  modelStations?: InputMaybe<ListFilterInputTypeOfPcvModelStationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<StationFilterInput>>;
  plant?: InputMaybe<PlantFilterInput>;
  plantId?: InputMaybe<PlantIdFilterInput>;
  removedAt?: InputMaybe<DateTimeOperationFilterInput>;
  sequence?: InputMaybe<IntOperationFilterInput>;
};

export type StationId = {
  __typename?: 'StationId';
  value: Scalars['UUID']['output'];
};

export type StationIdFilterInput = {
  and?: InputMaybe<Array<StationIdFilterInput>>;
  or?: InputMaybe<Array<StationIdFilterInput>>;
  value?: InputMaybe<UuidOperationFilterInput>;
};

export type StationIdInput = {
  value: Scalars['UUID']['input'];
};

export type StationInput = {
  associatedComponents: Array<ComponentStationInput>;
  code: Scalars['String']['input'];
  componentSerials: Array<ComponentSerialInput>;
  createdAt: Scalars['DateTime']['input'];
  id: StationIdInput;
  modelStations: Array<PcvModelStationInput>;
  name: Scalars['String']['input'];
  plant: PlantInput;
  plantId: PlantIdInput;
  removedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sequence: Scalars['Int']['input'];
};

export type StationsQueryInput = {
  plantCode?: InputMaybe<Scalars['String']['input']>;
};

export type StationsQueryResult = {
  __typename?: 'StationsQueryResult';
  associatedComponentCodes: Array<Scalars['String']['output']>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  plantCode: Scalars['String']['output'];
  removedAt?: Maybe<Scalars['DateTime']['output']>;
  sequence: Scalars['Int']['output'];
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


export type ImportShipmentMutation = { __typename?: 'Mutation', importShipment: { __typename?: 'ResultOrOfImportShipmentCommandResult', payload?: { __typename?: 'ImportShipmentCommandResult', shipmentId: any, plantCode: string, sequence: number, lotNos: Array<string> } | null, errors: Array<{ __typename?: 'Error', code: string, description: string }> } };

export type ImportShipmentFileTextMutationVariables = Exact<{
  fileName: Scalars['String']['input'];
  fileText: Scalars['String']['input'];
}>;


export type ImportShipmentFileTextMutation = { __typename?: 'Mutation', importShipmentText: { __typename?: 'ResultOrOfImportShipmentCommandResult', payload?: { __typename?: 'ImportShipmentCommandResult', shipmentId: any, plantCode: string, sequence: number, lotNos: Array<string> } | null, errors: Array<{ __typename?: 'Error', description: string }> } };

export type ParseBomFileMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
}>;


export type ParseBomFileMutation = { __typename?: 'Mutation', parseBomFile: { __typename?: 'ResultOrOfParsedBOM', isSuccess: boolean, payload?: { __typename?: 'ParsedBOM', plantCode: string, filename: string, sequenceNumber: number, lots: Array<{ __typename?: 'ParsedBOMLot', lotNo: string }> } | null, errors: Array<{ __typename?: 'Error', description: string }> } };

export type ParseBomFileTextMutationVariables = Exact<{
  filename: Scalars['String']['input'];
  text: Scalars['String']['input'];
}>;


export type ParseBomFileTextMutation = { __typename?: 'Mutation', parseBomFileText: { __typename?: 'ResultOrOfParsedBOM', isFailure: boolean, isSuccess: boolean, errors: Array<{ __typename?: 'Error', description: string }>, payload?: { __typename?: 'ParsedBOM', bomFileCreatedAt: any, filename: string, plantCode: string, sequenceNumber: number, lots: Array<{ __typename?: 'ParsedBOMLot', lotNo: string }> } | null } };
