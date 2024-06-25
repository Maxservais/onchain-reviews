/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  Address: { input: any; output: any; }
  Any: { input: any; output: any; }
  DateRange: { input: any; output: any; }
  Identity: { input: any; output: any; }
  IntString: { input: any; output: any; }
  Map: { input: any; output: any; }
  Range: { input: any; output: any; }
  Time: { input: any; output: any; }
  TimeRange: { input: any; output: any; }
};

/** Represents on-chain smart contract account */
export type Account = {
  __typename?: 'Account';
  /** Nested query - on-chain wallet related information, including address, domains, social profile, other token balances, and transfer history */
  address: Wallet;
  /** Blockchain where account is created */
  blockchain?: Maybe<TokenBlockchain>;
  /** Block number of the account creation transaction */
  createdAtBlockNumber?: Maybe<Scalars['Int']['output']>;
  /** Block timestamp of the account creation transaction */
  createdAtBlockTimestamp?: Maybe<Scalars['Time']['output']>;
  /** Transaction Hash of the account creation transaction */
  creationTransactionHash?: Maybe<Scalars['String']['output']>;
  /** Address of deployer */
  deployer?: Maybe<Scalars['String']['output']>;
  /** Airstack unique identifier for the account */
  id: Scalars['ID']['output'];
  /** ERC6551 standard : Implementation address of on chain smart contract account */
  implementation?: Maybe<Scalars['String']['output']>;
  /** Token NFT associated with erc-6551 */
  nft?: Maybe<TokenNft>;
  /** ERC6551 standard : Registry used to deploy smart contract wallet */
  registry?: Maybe<Scalars['Address']['output']>;
  /** ERC6551 standard salt for account creation */
  salt?: Maybe<Scalars['String']['output']>;
  /** Standard of account-  ERC6551, Safe etc */
  standard: AccountStandard;
  /** ERC6551 standard: Address of ERC721 token */
  tokenAddress?: Maybe<Scalars['Address']['output']>;
  /** ERC6551 standard: tokenId of ERC721 token */
  tokenId?: Maybe<Scalars['String']['output']>;
  /** Block number of the account updation transaction */
  updatedAtBlockNumber?: Maybe<Scalars['Int']['output']>;
  /** Block timestamp of the account updation transaction */
  updatedAtBlockTimestamp?: Maybe<Scalars['Time']['output']>;
};

export type AccountFilter = {
  address?: InputMaybe<Identity_Comparator_Exp>;
  createdAtBlockTimestamp?: InputMaybe<Time_Comparator_Exp>;
  implementation?: InputMaybe<Address_Comparator_Exp>;
  registry?: InputMaybe<Address_Comparator_Exp>;
  salt?: InputMaybe<String_Eq_Comparator_Exp>;
  standard?: InputMaybe<AccountStandard_Comparator_Exp>;
  tokenAddress?: InputMaybe<Address_Comparator_Exp>;
  tokenId?: InputMaybe<String_Comparator_Exp>;
};

export type AccountOrderBy = {
  createdAtBlockTimestamp?: InputMaybe<OrderBy>;
};

export enum AccountStandard {
  Erc6551 = 'ERC6551'
}

export type AccountStandard_Comparator_Exp = {
  _eq?: InputMaybe<AccountStandard>;
  _in?: InputMaybe<Array<AccountStandard>>;
};

export type AccountsInput = {
  blockchain: TokenBlockchain;
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AccountFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<AccountOrderBy>>;
};

export type AccountsNestedInput = {
  blockchain?: InputMaybe<TokenBlockchain>;
  filter?: InputMaybe<AccountFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<AccountOrderBy>>>;
  showOptimisticAddress?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AccountsOutput = {
  __typename?: 'AccountsOutput';
  Account?: Maybe<Array<Account>>;
  pageInfo?: Maybe<PageInfo>;
};

export type Address_Comparator_Exp = {
  _eq?: InputMaybe<Scalars['Address']['input']>;
  _in?: InputMaybe<Array<Scalars['Address']['input']>>;
  _ne?: InputMaybe<Scalars['Address']['input']>;
  _nin?: InputMaybe<Array<Scalars['Address']['input']>>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateAttestation = {
  __typename?: 'AggregateAttestation';
  _avg?: Maybe<AttestationAvgAggregate>;
  _count?: Maybe<AttestationCountAggregate>;
  _max?: Maybe<AttestationMaxAggregate>;
  _min?: Maybe<AttestationMinAggregate>;
  _sum?: Maybe<AttestationSumAggregate>;
};

export type AggregateEnsName = {
  __typename?: 'AggregateEnsName';
  _avg?: Maybe<EnsNameAvgAggregate>;
  _count?: Maybe<EnsNameCountAggregate>;
  _max?: Maybe<EnsNameMaxAggregate>;
  _min?: Maybe<EnsNameMinAggregate>;
  _sum?: Maybe<EnsNameSumAggregate>;
};

export type AggregateOffchainRevocation = {
  __typename?: 'AggregateOffchainRevocation';
  _avg?: Maybe<OffchainRevocationAvgAggregate>;
  _count?: Maybe<OffchainRevocationCountAggregate>;
  _max?: Maybe<OffchainRevocationMaxAggregate>;
  _min?: Maybe<OffchainRevocationMinAggregate>;
  _sum?: Maybe<OffchainRevocationSumAggregate>;
};

export type AggregateSchema = {
  __typename?: 'AggregateSchema';
  _avg?: Maybe<SchemaAvgAggregate>;
  _count?: Maybe<SchemaCountAggregate>;
  _max?: Maybe<SchemaMaxAggregate>;
  _min?: Maybe<SchemaMinAggregate>;
  _sum?: Maybe<SchemaSumAggregate>;
};

export type AggregateSchemaName = {
  __typename?: 'AggregateSchemaName';
  _avg?: Maybe<SchemaNameAvgAggregate>;
  _count?: Maybe<SchemaNameCountAggregate>;
  _max?: Maybe<SchemaNameMaxAggregate>;
  _min?: Maybe<SchemaNameMinAggregate>;
  _sum?: Maybe<SchemaNameSumAggregate>;
};

export type AggregateServiceStat = {
  __typename?: 'AggregateServiceStat';
  _count?: Maybe<ServiceStatCountAggregate>;
  _max?: Maybe<ServiceStatMaxAggregate>;
  _min?: Maybe<ServiceStatMinAggregate>;
};

export type AggregateTimestamp = {
  __typename?: 'AggregateTimestamp';
  _avg?: Maybe<TimestampAvgAggregate>;
  _count?: Maybe<TimestampCountAggregate>;
  _max?: Maybe<TimestampMaxAggregate>;
  _min?: Maybe<TimestampMinAggregate>;
  _sum?: Maybe<TimestampSumAggregate>;
};

export type AnimationUrlVariants = {
  __typename?: 'AnimationUrlVariants';
  original?: Maybe<Scalars['String']['output']>;
};

export type Attestation = {
  __typename?: 'Attestation';
  attester: Scalars['String']['output'];
  data: Scalars['String']['output'];
  decodedDataJson: Scalars['String']['output'];
  expirationTime: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  ipfsHash: Scalars['String']['output'];
  isOffchain: Scalars['Boolean']['output'];
  recipient: Scalars['String']['output'];
  refUID: Scalars['String']['output'];
  revocable: Scalars['Boolean']['output'];
  revocationTime: Scalars['Int']['output'];
  revoked: Scalars['Boolean']['output'];
  schema: Schema;
  schemaId: Scalars['String']['output'];
  time: Scalars['Int']['output'];
  timeCreated: Scalars['Int']['output'];
  txid: Scalars['String']['output'];
};

export type AttestationAvgAggregate = {
  __typename?: 'AttestationAvgAggregate';
  expirationTime?: Maybe<Scalars['Float']['output']>;
  revocationTime?: Maybe<Scalars['Float']['output']>;
  time?: Maybe<Scalars['Float']['output']>;
  timeCreated?: Maybe<Scalars['Float']['output']>;
};

export type AttestationAvgOrderByAggregateInput = {
  expirationTime?: InputMaybe<SortOrder>;
  revocationTime?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  timeCreated?: InputMaybe<SortOrder>;
};

export type AttestationCountAggregate = {
  __typename?: 'AttestationCountAggregate';
  _all: Scalars['Int']['output'];
  attester: Scalars['Int']['output'];
  data: Scalars['Int']['output'];
  decodedDataJson: Scalars['Int']['output'];
  expirationTime: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  ipfsHash: Scalars['Int']['output'];
  isOffchain: Scalars['Int']['output'];
  recipient: Scalars['Int']['output'];
  refUID: Scalars['Int']['output'];
  revocable: Scalars['Int']['output'];
  revocationTime: Scalars['Int']['output'];
  revoked: Scalars['Int']['output'];
  schemaId: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
  timeCreated: Scalars['Int']['output'];
  txid: Scalars['Int']['output'];
};

export type AttestationCountOrderByAggregateInput = {
  attester?: InputMaybe<SortOrder>;
  data?: InputMaybe<SortOrder>;
  decodedDataJson?: InputMaybe<SortOrder>;
  expirationTime?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ipfsHash?: InputMaybe<SortOrder>;
  isOffchain?: InputMaybe<SortOrder>;
  recipient?: InputMaybe<SortOrder>;
  refUID?: InputMaybe<SortOrder>;
  revocable?: InputMaybe<SortOrder>;
  revocationTime?: InputMaybe<SortOrder>;
  revoked?: InputMaybe<SortOrder>;
  schemaId?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  timeCreated?: InputMaybe<SortOrder>;
  txid?: InputMaybe<SortOrder>;
};

export type AttestationCreateInput = {
  attester: Scalars['String']['input'];
  data: Scalars['String']['input'];
  decodedDataJson?: InputMaybe<Scalars['String']['input']>;
  expirationTime: Scalars['Int']['input'];
  id: Scalars['String']['input'];
  ipfsHash: Scalars['String']['input'];
  isOffchain: Scalars['Boolean']['input'];
  recipient: Scalars['String']['input'];
  refUID: Scalars['String']['input'];
  revocable: Scalars['Boolean']['input'];
  revocationTime: Scalars['Int']['input'];
  revoked: Scalars['Boolean']['input'];
  schema: SchemaCreateNestedOneWithoutAttestationsInput;
  time: Scalars['Int']['input'];
  timeCreated: Scalars['Int']['input'];
  txid: Scalars['String']['input'];
};

export type AttestationCreateManyInput = {
  attester: Scalars['String']['input'];
  data: Scalars['String']['input'];
  decodedDataJson?: InputMaybe<Scalars['String']['input']>;
  expirationTime: Scalars['Int']['input'];
  id: Scalars['String']['input'];
  ipfsHash: Scalars['String']['input'];
  isOffchain: Scalars['Boolean']['input'];
  recipient: Scalars['String']['input'];
  refUID: Scalars['String']['input'];
  revocable: Scalars['Boolean']['input'];
  revocationTime: Scalars['Int']['input'];
  revoked: Scalars['Boolean']['input'];
  schemaId: Scalars['String']['input'];
  time: Scalars['Int']['input'];
  timeCreated: Scalars['Int']['input'];
  txid: Scalars['String']['input'];
};

export type AttestationCreateManySchemaInput = {
  attester: Scalars['String']['input'];
  data: Scalars['String']['input'];
  decodedDataJson?: InputMaybe<Scalars['String']['input']>;
  expirationTime: Scalars['Int']['input'];
  id: Scalars['String']['input'];
  ipfsHash: Scalars['String']['input'];
  isOffchain: Scalars['Boolean']['input'];
  recipient: Scalars['String']['input'];
  refUID: Scalars['String']['input'];
  revocable: Scalars['Boolean']['input'];
  revocationTime: Scalars['Int']['input'];
  revoked: Scalars['Boolean']['input'];
  time: Scalars['Int']['input'];
  timeCreated: Scalars['Int']['input'];
  txid: Scalars['String']['input'];
};

export type AttestationCreateManySchemaInputEnvelope = {
  data: Array<AttestationCreateManySchemaInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AttestationCreateNestedManyWithoutSchemaInput = {
  connect?: InputMaybe<Array<AttestationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AttestationCreateOrConnectWithoutSchemaInput>>;
  create?: InputMaybe<Array<AttestationCreateWithoutSchemaInput>>;
  createMany?: InputMaybe<AttestationCreateManySchemaInputEnvelope>;
};

export type AttestationCreateOrConnectWithoutSchemaInput = {
  create: AttestationCreateWithoutSchemaInput;
  where: AttestationWhereUniqueInput;
};

export type AttestationCreateWithoutSchemaInput = {
  attester: Scalars['String']['input'];
  data: Scalars['String']['input'];
  decodedDataJson?: InputMaybe<Scalars['String']['input']>;
  expirationTime: Scalars['Int']['input'];
  id: Scalars['String']['input'];
  ipfsHash: Scalars['String']['input'];
  isOffchain: Scalars['Boolean']['input'];
  recipient: Scalars['String']['input'];
  refUID: Scalars['String']['input'];
  revocable: Scalars['Boolean']['input'];
  revocationTime: Scalars['Int']['input'];
  revoked: Scalars['Boolean']['input'];
  time: Scalars['Int']['input'];
  timeCreated: Scalars['Int']['input'];
  txid: Scalars['String']['input'];
};

export type AttestationGroupBy = {
  __typename?: 'AttestationGroupBy';
  _avg?: Maybe<AttestationAvgAggregate>;
  _count?: Maybe<AttestationCountAggregate>;
  _max?: Maybe<AttestationMaxAggregate>;
  _min?: Maybe<AttestationMinAggregate>;
  _sum?: Maybe<AttestationSumAggregate>;
  attester: Scalars['String']['output'];
  data: Scalars['String']['output'];
  decodedDataJson: Scalars['String']['output'];
  expirationTime: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  ipfsHash: Scalars['String']['output'];
  isOffchain: Scalars['Boolean']['output'];
  recipient: Scalars['String']['output'];
  refUID: Scalars['String']['output'];
  revocable: Scalars['Boolean']['output'];
  revocationTime: Scalars['Int']['output'];
  revoked: Scalars['Boolean']['output'];
  schemaId: Scalars['String']['output'];
  time: Scalars['Int']['output'];
  timeCreated: Scalars['Int']['output'];
  txid: Scalars['String']['output'];
};

export type AttestationListRelationFilter = {
  every?: InputMaybe<AttestationWhereInput>;
  none?: InputMaybe<AttestationWhereInput>;
  some?: InputMaybe<AttestationWhereInput>;
};

export type AttestationMaxAggregate = {
  __typename?: 'AttestationMaxAggregate';
  attester?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  decodedDataJson?: Maybe<Scalars['String']['output']>;
  expirationTime?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  ipfsHash?: Maybe<Scalars['String']['output']>;
  isOffchain?: Maybe<Scalars['Boolean']['output']>;
  recipient?: Maybe<Scalars['String']['output']>;
  refUID?: Maybe<Scalars['String']['output']>;
  revocable?: Maybe<Scalars['Boolean']['output']>;
  revocationTime?: Maybe<Scalars['Int']['output']>;
  revoked?: Maybe<Scalars['Boolean']['output']>;
  schemaId?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['Int']['output']>;
  timeCreated?: Maybe<Scalars['Int']['output']>;
  txid?: Maybe<Scalars['String']['output']>;
};

export type AttestationMaxOrderByAggregateInput = {
  attester?: InputMaybe<SortOrder>;
  data?: InputMaybe<SortOrder>;
  decodedDataJson?: InputMaybe<SortOrder>;
  expirationTime?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ipfsHash?: InputMaybe<SortOrder>;
  isOffchain?: InputMaybe<SortOrder>;
  recipient?: InputMaybe<SortOrder>;
  refUID?: InputMaybe<SortOrder>;
  revocable?: InputMaybe<SortOrder>;
  revocationTime?: InputMaybe<SortOrder>;
  revoked?: InputMaybe<SortOrder>;
  schemaId?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  timeCreated?: InputMaybe<SortOrder>;
  txid?: InputMaybe<SortOrder>;
};

export type AttestationMinAggregate = {
  __typename?: 'AttestationMinAggregate';
  attester?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  decodedDataJson?: Maybe<Scalars['String']['output']>;
  expirationTime?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  ipfsHash?: Maybe<Scalars['String']['output']>;
  isOffchain?: Maybe<Scalars['Boolean']['output']>;
  recipient?: Maybe<Scalars['String']['output']>;
  refUID?: Maybe<Scalars['String']['output']>;
  revocable?: Maybe<Scalars['Boolean']['output']>;
  revocationTime?: Maybe<Scalars['Int']['output']>;
  revoked?: Maybe<Scalars['Boolean']['output']>;
  schemaId?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['Int']['output']>;
  timeCreated?: Maybe<Scalars['Int']['output']>;
  txid?: Maybe<Scalars['String']['output']>;
};

export type AttestationMinOrderByAggregateInput = {
  attester?: InputMaybe<SortOrder>;
  data?: InputMaybe<SortOrder>;
  decodedDataJson?: InputMaybe<SortOrder>;
  expirationTime?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ipfsHash?: InputMaybe<SortOrder>;
  isOffchain?: InputMaybe<SortOrder>;
  recipient?: InputMaybe<SortOrder>;
  refUID?: InputMaybe<SortOrder>;
  revocable?: InputMaybe<SortOrder>;
  revocationTime?: InputMaybe<SortOrder>;
  revoked?: InputMaybe<SortOrder>;
  schemaId?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  timeCreated?: InputMaybe<SortOrder>;
  txid?: InputMaybe<SortOrder>;
};

export type AttestationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AttestationOrderByWithAggregationInput = {
  _avg?: InputMaybe<AttestationAvgOrderByAggregateInput>;
  _count?: InputMaybe<AttestationCountOrderByAggregateInput>;
  _max?: InputMaybe<AttestationMaxOrderByAggregateInput>;
  _min?: InputMaybe<AttestationMinOrderByAggregateInput>;
  _sum?: InputMaybe<AttestationSumOrderByAggregateInput>;
  attester?: InputMaybe<SortOrder>;
  data?: InputMaybe<SortOrder>;
  decodedDataJson?: InputMaybe<SortOrder>;
  expirationTime?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ipfsHash?: InputMaybe<SortOrder>;
  isOffchain?: InputMaybe<SortOrder>;
  recipient?: InputMaybe<SortOrder>;
  refUID?: InputMaybe<SortOrder>;
  revocable?: InputMaybe<SortOrder>;
  revocationTime?: InputMaybe<SortOrder>;
  revoked?: InputMaybe<SortOrder>;
  schemaId?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  timeCreated?: InputMaybe<SortOrder>;
  txid?: InputMaybe<SortOrder>;
};

export type AttestationOrderByWithRelationInput = {
  attester?: InputMaybe<SortOrder>;
  data?: InputMaybe<SortOrder>;
  decodedDataJson?: InputMaybe<SortOrder>;
  expirationTime?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ipfsHash?: InputMaybe<SortOrder>;
  isOffchain?: InputMaybe<SortOrder>;
  recipient?: InputMaybe<SortOrder>;
  refUID?: InputMaybe<SortOrder>;
  revocable?: InputMaybe<SortOrder>;
  revocationTime?: InputMaybe<SortOrder>;
  revoked?: InputMaybe<SortOrder>;
  schema?: InputMaybe<SchemaOrderByWithRelationInput>;
  schemaId?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  timeCreated?: InputMaybe<SortOrder>;
  txid?: InputMaybe<SortOrder>;
};

export enum AttestationScalarFieldEnum {
  Attester = 'attester',
  Data = 'data',
  DecodedDataJson = 'decodedDataJson',
  ExpirationTime = 'expirationTime',
  Id = 'id',
  IpfsHash = 'ipfsHash',
  IsOffchain = 'isOffchain',
  Recipient = 'recipient',
  RefUid = 'refUID',
  Revocable = 'revocable',
  RevocationTime = 'revocationTime',
  Revoked = 'revoked',
  SchemaId = 'schemaId',
  Time = 'time',
  TimeCreated = 'timeCreated',
  Txid = 'txid'
}

export type AttestationScalarWhereInput = {
  AND?: InputMaybe<Array<AttestationScalarWhereInput>>;
  NOT?: InputMaybe<Array<AttestationScalarWhereInput>>;
  OR?: InputMaybe<Array<AttestationScalarWhereInput>>;
  attester?: InputMaybe<StringFilter>;
  data?: InputMaybe<StringFilter>;
  decodedDataJson?: InputMaybe<StringFilter>;
  expirationTime?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  ipfsHash?: InputMaybe<StringFilter>;
  isOffchain?: InputMaybe<BoolFilter>;
  recipient?: InputMaybe<StringFilter>;
  refUID?: InputMaybe<StringFilter>;
  revocable?: InputMaybe<BoolFilter>;
  revocationTime?: InputMaybe<IntFilter>;
  revoked?: InputMaybe<BoolFilter>;
  schemaId?: InputMaybe<StringFilter>;
  time?: InputMaybe<IntFilter>;
  timeCreated?: InputMaybe<IntFilter>;
  txid?: InputMaybe<StringFilter>;
};

export type AttestationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AttestationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AttestationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AttestationScalarWhereWithAggregatesInput>>;
  attester?: InputMaybe<StringWithAggregatesFilter>;
  data?: InputMaybe<StringWithAggregatesFilter>;
  decodedDataJson?: InputMaybe<StringWithAggregatesFilter>;
  expirationTime?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  ipfsHash?: InputMaybe<StringWithAggregatesFilter>;
  isOffchain?: InputMaybe<BoolWithAggregatesFilter>;
  recipient?: InputMaybe<StringWithAggregatesFilter>;
  refUID?: InputMaybe<StringWithAggregatesFilter>;
  revocable?: InputMaybe<BoolWithAggregatesFilter>;
  revocationTime?: InputMaybe<IntWithAggregatesFilter>;
  revoked?: InputMaybe<BoolWithAggregatesFilter>;
  schemaId?: InputMaybe<StringWithAggregatesFilter>;
  time?: InputMaybe<IntWithAggregatesFilter>;
  timeCreated?: InputMaybe<IntWithAggregatesFilter>;
  txid?: InputMaybe<StringWithAggregatesFilter>;
};

export type AttestationSumAggregate = {
  __typename?: 'AttestationSumAggregate';
  expirationTime?: Maybe<Scalars['Int']['output']>;
  revocationTime?: Maybe<Scalars['Int']['output']>;
  time?: Maybe<Scalars['Int']['output']>;
  timeCreated?: Maybe<Scalars['Int']['output']>;
};

export type AttestationSumOrderByAggregateInput = {
  expirationTime?: InputMaybe<SortOrder>;
  revocationTime?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  timeCreated?: InputMaybe<SortOrder>;
};

export type AttestationUpdateInput = {
  attester?: InputMaybe<StringFieldUpdateOperationsInput>;
  data?: InputMaybe<StringFieldUpdateOperationsInput>;
  decodedDataJson?: InputMaybe<StringFieldUpdateOperationsInput>;
  expirationTime?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ipfsHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  isOffchain?: InputMaybe<BoolFieldUpdateOperationsInput>;
  recipient?: InputMaybe<StringFieldUpdateOperationsInput>;
  refUID?: InputMaybe<StringFieldUpdateOperationsInput>;
  revocable?: InputMaybe<BoolFieldUpdateOperationsInput>;
  revocationTime?: InputMaybe<IntFieldUpdateOperationsInput>;
  revoked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  schema?: InputMaybe<SchemaUpdateOneRequiredWithoutAttestationsNestedInput>;
  time?: InputMaybe<IntFieldUpdateOperationsInput>;
  timeCreated?: InputMaybe<IntFieldUpdateOperationsInput>;
  txid?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AttestationUpdateManyMutationInput = {
  attester?: InputMaybe<StringFieldUpdateOperationsInput>;
  data?: InputMaybe<StringFieldUpdateOperationsInput>;
  decodedDataJson?: InputMaybe<StringFieldUpdateOperationsInput>;
  expirationTime?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ipfsHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  isOffchain?: InputMaybe<BoolFieldUpdateOperationsInput>;
  recipient?: InputMaybe<StringFieldUpdateOperationsInput>;
  refUID?: InputMaybe<StringFieldUpdateOperationsInput>;
  revocable?: InputMaybe<BoolFieldUpdateOperationsInput>;
  revocationTime?: InputMaybe<IntFieldUpdateOperationsInput>;
  revoked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  time?: InputMaybe<IntFieldUpdateOperationsInput>;
  timeCreated?: InputMaybe<IntFieldUpdateOperationsInput>;
  txid?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AttestationUpdateManyWithWhereWithoutSchemaInput = {
  data: AttestationUpdateManyMutationInput;
  where: AttestationScalarWhereInput;
};

export type AttestationUpdateManyWithoutSchemaNestedInput = {
  connect?: InputMaybe<Array<AttestationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AttestationCreateOrConnectWithoutSchemaInput>>;
  create?: InputMaybe<Array<AttestationCreateWithoutSchemaInput>>;
  createMany?: InputMaybe<AttestationCreateManySchemaInputEnvelope>;
  delete?: InputMaybe<Array<AttestationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AttestationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AttestationWhereUniqueInput>>;
  set?: InputMaybe<Array<AttestationWhereUniqueInput>>;
  update?: InputMaybe<Array<AttestationUpdateWithWhereUniqueWithoutSchemaInput>>;
  updateMany?: InputMaybe<Array<AttestationUpdateManyWithWhereWithoutSchemaInput>>;
  upsert?: InputMaybe<Array<AttestationUpsertWithWhereUniqueWithoutSchemaInput>>;
};

export type AttestationUpdateWithWhereUniqueWithoutSchemaInput = {
  data: AttestationUpdateWithoutSchemaInput;
  where: AttestationWhereUniqueInput;
};

export type AttestationUpdateWithoutSchemaInput = {
  attester?: InputMaybe<StringFieldUpdateOperationsInput>;
  data?: InputMaybe<StringFieldUpdateOperationsInput>;
  decodedDataJson?: InputMaybe<StringFieldUpdateOperationsInput>;
  expirationTime?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  ipfsHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  isOffchain?: InputMaybe<BoolFieldUpdateOperationsInput>;
  recipient?: InputMaybe<StringFieldUpdateOperationsInput>;
  refUID?: InputMaybe<StringFieldUpdateOperationsInput>;
  revocable?: InputMaybe<BoolFieldUpdateOperationsInput>;
  revocationTime?: InputMaybe<IntFieldUpdateOperationsInput>;
  revoked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  time?: InputMaybe<IntFieldUpdateOperationsInput>;
  timeCreated?: InputMaybe<IntFieldUpdateOperationsInput>;
  txid?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AttestationUpsertWithWhereUniqueWithoutSchemaInput = {
  create: AttestationCreateWithoutSchemaInput;
  update: AttestationUpdateWithoutSchemaInput;
  where: AttestationWhereUniqueInput;
};

export type AttestationWhereInput = {
  AND?: InputMaybe<Array<AttestationWhereInput>>;
  NOT?: InputMaybe<Array<AttestationWhereInput>>;
  OR?: InputMaybe<Array<AttestationWhereInput>>;
  attester?: InputMaybe<StringFilter>;
  data?: InputMaybe<StringFilter>;
  decodedDataJson?: InputMaybe<StringFilter>;
  expirationTime?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  ipfsHash?: InputMaybe<StringFilter>;
  isOffchain?: InputMaybe<BoolFilter>;
  recipient?: InputMaybe<StringFilter>;
  refUID?: InputMaybe<StringFilter>;
  revocable?: InputMaybe<BoolFilter>;
  revocationTime?: InputMaybe<IntFilter>;
  revoked?: InputMaybe<BoolFilter>;
  schema?: InputMaybe<SchemaRelationFilter>;
  schemaId?: InputMaybe<StringFilter>;
  time?: InputMaybe<IntFilter>;
  timeCreated?: InputMaybe<IntFilter>;
  txid?: InputMaybe<StringFilter>;
};

export type AttestationWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export enum Audience {
  All = 'all',
  Farcaster = 'farcaster'
}

export type AudioVariants = {
  __typename?: 'AudioVariants';
  original?: Maybe<Scalars['String']['output']>;
};

export enum Blockchain {
  Ethereum = 'ethereum'
}

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type Boolean_Comparator_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ConnectedAddress = {
  __typename?: 'ConnectedAddress';
  address?: Maybe<Scalars['Address']['output']>;
  blockchain?: Maybe<Scalars['String']['output']>;
  chainId?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['Time']['output']>;
};

export type ContractMetadata = {
  __typename?: 'ContractMetadata';
  /** Description of the token, mirrored from the smart contract */
  description?: Maybe<Scalars['String']['output']>;
  externalLink?: Maybe<Scalars['String']['output']>;
  /** Royalties recipient address, mirrored from the smart contract */
  feeRecipient?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  /** Name of the token, mirrored from the smart contract */
  name?: Maybe<Scalars['String']['output']>;
  sellerFeeBasisPoints?: Maybe<Scalars['Int']['output']>;
};

export type Date_Range_Comparator_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
};

export type Domain = {
  __typename?: 'Domain';
  /** Avatar of the domain */
  avatar?: Maybe<Scalars['String']['output']>;
  /** Blockchain where the NFT sale took place */
  blockchain: Blockchain;
  /** Unique identifier for the blockchain */
  chainId?: Maybe<Scalars['String']['output']>;
  /** Block number when the domain was created */
  createdAtBlockNumber?: Maybe<Scalars['Int']['output']>;
  /** Timestamp when the domain was created */
  createdAtBlockTimestamp?: Maybe<Scalars['Time']['output']>;
  /** DApp name associated with the domain (e.g. ENS) */
  dappName?: Maybe<DomainDappName>;
  /** DApp slug (contract version) associated with the domain */
  dappSlug?: Maybe<DomainDappSlug>;
  /** Timestamp when the domain registration expires */
  expiryTimestamp?: Maybe<Scalars['Time']['output']>;
  /** Domain registration cost in decimals */
  formattedRegistrationCost?: Maybe<Scalars['Float']['output']>;
  /** Domain registration cost in native blockchain token in decimals */
  formattedRegistrationCostInNativeToken?: Maybe<Scalars['Float']['output']>;
  /** Domain registration cost in USDC in decimals */
  formattedRegistrationCostInUSDC?: Maybe<Scalars['Float']['output']>;
  /** Airstack unique identifier for the data point */
  id?: Maybe<Scalars['ID']['output']>;
  /** Domain is name wrapped or not */
  isNameWrapped?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates if the domain is set to be primary - true or false */
  isPrimary?: Maybe<Scalars['Boolean']['output']>;
  /** Airstack unique domain hash */
  labelHash?: Maybe<Scalars['String']['output']>;
  /** Domain name without the domain ending, e.g. vitalik instead of vitalik.eth */
  labelName?: Maybe<Scalars['String']['output']>;
  /** Block number when the domain was last updated */
  lastUpdatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  /** Timestamp when the domain was last updated */
  lastUpdatedBlockTimestamp?: Maybe<Scalars['Time']['output']>;
  /** Manager of Domain */
  manager: Scalars['Address']['output'];
  /** Manager wallet related information, including address, domains, social profile, other token balances, and transfer history */
  managerDetails?: Maybe<Wallet>;
  /** Multichain associated with the domain */
  multiChainAddresses?: Maybe<Array<DomainMultiChainAddress>>;
  /** Full domain name, e.g. vitalik.eth */
  name?: Maybe<Scalars['String']['output']>;
  /** Owner of token associated with the domain */
  owner: Scalars['Address']['output'];
  /** Owner wallet related information, including address, domains, social profile, other token balances, and transfer history */
  ownerDetails?: Maybe<Wallet>;
  /** Parent domain name, if the entity is a subdomain */
  parent?: Maybe<Scalars['String']['output']>;
  /** Nested query - can retrieve payment token data (name, symbol, etc.) */
  paymentToken?: Maybe<Token>;
  /** payment amount in blockchain native token for the domain */
  paymentTokenCostInNativeToken?: Maybe<Scalars['Float']['output']>;
  /** payment amount in USDC for the domain */
  paymentTokenCostInUSDC?: Maybe<Scalars['Float']['output']>;
  /** Domain registration cost */
  registrationCost?: Maybe<Scalars['String']['output']>;
  /** Domain registration cost in blockchain native token */
  registrationCostInNativeToken?: Maybe<Scalars['String']['output']>;
  /** Domain registration cost in USDC */
  registrationCostInUSDC?: Maybe<Scalars['String']['output']>;
  /** Blockchain address to which the domain is resolved */
  resolvedAddress?: Maybe<Scalars['Address']['output']>;
  /** Nested query - on-chain resolvedAddress wallet related information, including address, domains, social profile, other token balances, and transfer history */
  resolvedAddressDetails?: Maybe<Wallet>;
  /** Resolver address associated with Domain */
  resolverAddress?: Maybe<Scalars['Address']['output']>;
  /** Count of subdomains linked to the domain */
  subDomainCount?: Maybe<Scalars['Int']['output']>;
  /** Nested query allowing to retrieve subdomain information associated with the domain */
  subDomains?: Maybe<Array<Maybe<Domain>>>;
  /** Texts associated with the domain */
  texts?: Maybe<Array<DomainTexts>>;
  /** Token Address associated with the domain, if applicable */
  tokenAddress: Scalars['Address']['output'];
  /** Domain Token ID associated with the domain, if applicable */
  tokenId?: Maybe<Scalars['String']['output']>;
  /** Token nft associated with the domain, if applicable */
  tokenNft?: Maybe<TokenNft>;
  /** Time-to-live value for the domain */
  ttl?: Maybe<Scalars['String']['output']>;
};


export type DomainSubDomainsArgs = {
  input?: InputMaybe<DomainsNestedInput>;
};

export enum DomainDappName {
  Ens = 'ens'
}

export type DomainDappName_Comparator_Exp = {
  _eq?: InputMaybe<DomainDappName>;
  _in?: InputMaybe<Array<DomainDappName>>;
};

export enum DomainDappSlug {
  EnsV1 = 'ens_v1'
}

export type DomainDappSlug_Comparator_Exp = {
  _eq?: InputMaybe<DomainDappSlug>;
  _in?: InputMaybe<Array<DomainDappSlug>>;
};

export type DomainFilter = {
  isPrimary?: InputMaybe<Boolean_Comparator_Exp>;
  lastUpdatedBlockTimestamp?: InputMaybe<Time_Comparator_Exp>;
  name?: InputMaybe<String_Comparator_Exp>;
  owner?: InputMaybe<Identity_Comparator_Exp>;
  resolvedAddress?: InputMaybe<Address_Comparator_Exp>;
};

export type DomainMultiChainAddress = {
  __typename?: 'DomainMultiChainAddress';
  /** address */
  address?: Maybe<Scalars['String']['output']>;
  /** symbol according to SLIP-0044 */
  symbol?: Maybe<Scalars['String']['output']>;
};

export type DomainOrderBy = {
  createdAtBlockTimestamp?: InputMaybe<OrderBy>;
  expiryTimestamp?: InputMaybe<OrderBy>;
  lastUpdatedBlockTimestamp?: InputMaybe<OrderBy>;
};

export type DomainTexts = {
  __typename?: 'DomainTexts';
  /** key of the text */
  key?: Maybe<Scalars['String']['output']>;
  /** value of the text */
  value?: Maybe<Scalars['String']['output']>;
};

export type DomainsInput = {
  blockchain: Blockchain;
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter: DomainFilter;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<DomainOrderBy>>;
};

export type DomainsNestedInput = {
  blockchain?: InputMaybe<Blockchain>;
  filter?: InputMaybe<DomainFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<DomainOrderBy>>>;
};

export type DomainsOutput = {
  __typename?: 'DomainsOutput';
  Domain?: Maybe<Array<Domain>>;
  pageInfo?: Maybe<PageInfo>;
};

export type EnsName = {
  __typename?: 'EnsName';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
};

export type EnsNameAvgAggregate = {
  __typename?: 'EnsNameAvgAggregate';
  timestamp?: Maybe<Scalars['Float']['output']>;
};

export type EnsNameAvgOrderByAggregateInput = {
  timestamp?: InputMaybe<SortOrder>;
};

export type EnsNameCountAggregate = {
  __typename?: 'EnsNameCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  timestamp: Scalars['Int']['output'];
};

export type EnsNameCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export type EnsNameCreateInput = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  timestamp: Scalars['Int']['input'];
};

export type EnsNameCreateManyInput = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  timestamp: Scalars['Int']['input'];
};

export type EnsNameGroupBy = {
  __typename?: 'EnsNameGroupBy';
  _avg?: Maybe<EnsNameAvgAggregate>;
  _count?: Maybe<EnsNameCountAggregate>;
  _max?: Maybe<EnsNameMaxAggregate>;
  _min?: Maybe<EnsNameMinAggregate>;
  _sum?: Maybe<EnsNameSumAggregate>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
};

export type EnsNameMaxAggregate = {
  __typename?: 'EnsNameMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['Int']['output']>;
};

export type EnsNameMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export type EnsNameMinAggregate = {
  __typename?: 'EnsNameMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['Int']['output']>;
};

export type EnsNameMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export type EnsNameOrderByWithAggregationInput = {
  _avg?: InputMaybe<EnsNameAvgOrderByAggregateInput>;
  _count?: InputMaybe<EnsNameCountOrderByAggregateInput>;
  _max?: InputMaybe<EnsNameMaxOrderByAggregateInput>;
  _min?: InputMaybe<EnsNameMinOrderByAggregateInput>;
  _sum?: InputMaybe<EnsNameSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export type EnsNameOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export enum EnsNameScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Timestamp = 'timestamp'
}

export type EnsNameScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<EnsNameScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<EnsNameScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<EnsNameScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  timestamp?: InputMaybe<IntWithAggregatesFilter>;
};

export type EnsNameSumAggregate = {
  __typename?: 'EnsNameSumAggregate';
  timestamp?: Maybe<Scalars['Int']['output']>;
};

export type EnsNameSumOrderByAggregateInput = {
  timestamp?: InputMaybe<SortOrder>;
};

export type EnsNameUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type EnsNameUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type EnsNameWhereInput = {
  AND?: InputMaybe<Array<EnsNameWhereInput>>;
  NOT?: InputMaybe<Array<EnsNameWhereInput>>;
  OR?: InputMaybe<Array<EnsNameWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<IntFilter>;
};

export type EnsNameWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export enum EveryBlockchain {
  All = 'ALL'
}

export type FarcasterCast = {
  __typename?: 'FarcasterCast';
  castedAtTimestamp?: Maybe<Scalars['Time']['output']>;
  castedBy?: Maybe<Social>;
  channel?: Maybe<FarcasterChannel>;
  embeds?: Maybe<Array<Maybe<Scalars['Map']['output']>>>;
  fid?: Maybe<Scalars['String']['output']>;
  frame?: Maybe<FarcasterFrame>;
  hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mentions?: Maybe<Array<Mentions>>;
  numberOfLikes?: Maybe<Scalars['Int']['output']>;
  numberOfRecasts?: Maybe<Scalars['Int']['output']>;
  numberOfReplies?: Maybe<Scalars['Int']['output']>;
  parentCast?: Maybe<FarcasterCast>;
  parentFid?: Maybe<Scalars['String']['output']>;
  parentHash?: Maybe<Scalars['String']['output']>;
  quotedCast?: Maybe<Array<Maybe<FarcasterCast>>>;
  rawText?: Maybe<Scalars['String']['output']>;
  rootParentUrl?: Maybe<Scalars['String']['output']>;
  socialCapitalValue?: Maybe<SocialCapitalValue>;
  text?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type FarcasterCastFilter = {
  castedAtTimestamp?: InputMaybe<Time_Comparator_Exp>;
  castedBy?: InputMaybe<Identity_Comparator_Exp>;
  frameUrl?: InputMaybe<String_Eq_In_Comparator_Exp>;
  hasEmbeds?: InputMaybe<Boolean_Comparator_Exp>;
  hasFrames?: InputMaybe<Boolean_Comparator_Exp>;
  hasMentions?: InputMaybe<Boolean_Comparator_Exp>;
  hash?: InputMaybe<String_Eq_In_Comparator_Exp>;
  rootParentUrl?: InputMaybe<String_Eq_In_Comparator_Exp>;
  url?: InputMaybe<String_Eq_In_Comparator_Exp>;
};

export type FarcasterCastInput = {
  blockchain: EveryBlockchain;
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter: FarcasterCastFilter;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type FarcasterCastOutput = {
  __typename?: 'FarcasterCastOutput';
  Cast?: Maybe<Array<FarcasterCast>>;
  pageInfo?: Maybe<PageInfo>;
};

export type FarcasterChannel = {
  __typename?: 'FarcasterChannel';
  channelId: Scalars['String']['output'];
  createdAtTimestamp: Scalars['Time']['output'];
  dappName: Scalars['String']['output'];
  dappSlug: Scalars['String']['output'];
  description: Scalars['String']['output'];
  followerCount?: Maybe<Scalars['Int']['output']>;
  /** Airstack unique identifier for the data point */
  id: Scalars['ID']['output'];
  imageUrl: Scalars['String']['output'];
  isModerationEnabled?: Maybe<Scalars['Boolean']['output']>;
  leadIds?: Maybe<Array<Scalars['String']['output']>>;
  leadProfiles?: Maybe<Array<Social>>;
  moderatorIds?: Maybe<Array<Scalars['String']['output']>>;
  moderatorProfiles?: Maybe<Array<Social>>;
  name: Scalars['String']['output'];
  participants?: Maybe<Array<FarcasterChannelParticipant>>;
  url: Scalars['String']['output'];
};


export type FarcasterChannelLeadProfilesArgs = {
  input?: InputMaybe<SocialsNestedInput>;
};


export type FarcasterChannelModeratorProfilesArgs = {
  input?: InputMaybe<SocialsNestedInput>;
};


export type FarcasterChannelParticipantsArgs = {
  input?: InputMaybe<FarcasterChannelParticipantNestedInput>;
};

export enum FarcasterChannelActionType {
  Cast = 'cast',
  Follow = 'follow',
  Reply = 'reply'
}

export type FarcasterChannelActionType_Comparator_Exp = {
  _eq?: InputMaybe<FarcasterChannelActionType>;
  _in?: InputMaybe<Array<FarcasterChannelActionType>>;
};

export type FarcasterChannelFilter = {
  channelId?: InputMaybe<String_Comparator_Exp>;
  createdAtTimestamp?: InputMaybe<Time_Comparator_Exp>;
  leadId?: InputMaybe<String_Comparator_Exp>;
  leadIdentity?: InputMaybe<Identity_Comparator_Exp>;
  moderatorId?: InputMaybe<String_Comparator_Exp>;
  moderatorIdentity?: InputMaybe<Identity_Comparator_Exp>;
  name?: InputMaybe<Regex_String_Comparator_Exp>;
  url?: InputMaybe<String_Comparator_Exp>;
};

export type FarcasterChannelNestedInput = {
  blockchain?: InputMaybe<EveryBlockchain>;
  filter?: InputMaybe<FarcasterChannelFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<FarcasterChannelOrderBy>>>;
};

export type FarcasterChannelOrderBy = {
  createdAtTimestamp?: InputMaybe<OrderBy>;
  followerCount?: InputMaybe<OrderBy>;
};

export type FarcasterChannelParticipant = {
  __typename?: 'FarcasterChannelParticipant';
  channel?: Maybe<FarcasterChannel>;
  channelActions?: Maybe<Array<FarcasterChannelActionType>>;
  channelId: Scalars['String']['output'];
  channelName: Scalars['String']['output'];
  dappName: Scalars['String']['output'];
  dappSlug: Scalars['String']['output'];
  /** Airstack unique identifier for the data point */
  id?: Maybe<Scalars['ID']['output']>;
  lastActionTimestamp: Scalars['Time']['output'];
  lastCastedTimestamp?: Maybe<Scalars['Time']['output']>;
  lastFollowedTimestamp?: Maybe<Scalars['Time']['output']>;
  lastRepliedTimestamp?: Maybe<Scalars['Time']['output']>;
  participant?: Maybe<Social>;
  participantId: Scalars['String']['output'];
};


export type FarcasterChannelParticipantChannelArgs = {
  input?: InputMaybe<FarcasterChannelNestedInput>;
};


export type FarcasterChannelParticipantParticipantArgs = {
  input?: InputMaybe<SocialsNestedInput>;
};

export type FarcasterChannelParticipantFilter = {
  channelActions?: InputMaybe<FarcasterChannelActionType_Comparator_Exp>;
  channelId?: InputMaybe<String_Comparator_Exp>;
  channelName?: InputMaybe<Regex_String_Comparator_Exp>;
  lastActionTimestamp?: InputMaybe<Time_Comparator_Exp>;
  participant?: InputMaybe<Identity_Comparator_Exp>;
};

export type FarcasterChannelParticipantNestedInput = {
  blockchain?: InputMaybe<EveryBlockchain>;
  filter?: InputMaybe<FarcasterChannelParticipantFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<FarcasterChannelParticipantOrderBy>>>;
};

export type FarcasterChannelParticipantOrderBy = {
  lastActionTimestamp?: InputMaybe<OrderBy>;
};

export type FarcasterChannelParticipantsInput = {
  blockchain: EveryBlockchain;
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter: FarcasterChannelParticipantFilter;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<FarcasterChannelParticipantOrderBy>>;
};

export type FarcasterChannelParticipantsOutput = {
  __typename?: 'FarcasterChannelParticipantsOutput';
  FarcasterChannelParticipant?: Maybe<Array<FarcasterChannelParticipant>>;
  pageInfo?: Maybe<PageInfo>;
};

export type FarcasterChannelsInput = {
  blockchain: EveryBlockchain;
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FarcasterChannelFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<FarcasterChannelOrderBy>>;
};

export type FarcasterChannelsOutput = {
  __typename?: 'FarcasterChannelsOutput';
  FarcasterChannel?: Maybe<Array<FarcasterChannel>>;
  pageInfo?: Maybe<PageInfo>;
};

export type FarcasterFrame = {
  __typename?: 'FarcasterFrame';
  buttons?: Maybe<Array<FrameButton>>;
  castedAtTimestamp?: Maybe<Scalars['Time']['output']>;
  frameHash?: Maybe<Scalars['String']['output']>;
  frameUrl?: Maybe<Scalars['String']['output']>;
  imageAspectRatio?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  inputText?: Maybe<Scalars['String']['output']>;
  postUrl?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type FarcasterFrameMessageInput = {
  filter: FarcasterFrameMessageInputFilter;
};

export type FarcasterFrameMessageInputFilter = {
  messageBytes?: InputMaybe<Scalars['String']['input']>;
};

export type FarcasterFrameMessageOutput = {
  __typename?: 'FarcasterFrameMessageOutput';
  castedBy?: Maybe<Social>;
  castedByFid?: Maybe<Scalars['Int']['output']>;
  interactedBy?: Maybe<Social>;
  interactedByFid?: Maybe<Scalars['Int']['output']>;
  isValid?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<FrameMessage>;
  messageByte?: Maybe<Scalars['String']['output']>;
  messageRaw?: Maybe<Scalars['Map']['output']>;
};

export type FarcasterQuotedRecastsFilter = {
  parentCastedBy?: InputMaybe<Identity_Comparator_Exp>;
  parentHash?: InputMaybe<String_Eq_In_Comparator_Exp>;
  parentUrl?: InputMaybe<String_Eq_In_Comparator_Exp>;
  recastedBy?: InputMaybe<Identity_Comparator_Exp>;
};

export type FarcasterQuotedRecastsInput = {
  blockchain: EveryBlockchain;
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter: FarcasterQuotedRecastsFilter;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type FarcasterQuotedRecastsOutput = {
  __typename?: 'FarcasterQuotedRecastsOutput';
  QuotedRecast?: Maybe<Array<FarcasterCast>>;
  pageInfo?: Maybe<PageInfo>;
};

export type FarcasterReaction = {
  __typename?: 'FarcasterReaction';
  cast?: Maybe<FarcasterCast>;
  castHash?: Maybe<Scalars['String']['output']>;
  reactedBy?: Maybe<Social>;
};

export enum FarcasterReactionCriteria {
  Liked = 'liked',
  Recasted = 'recasted',
  Replied = 'replied'
}

export type FarcasterReactionsFilter = {
  castHash?: InputMaybe<String_Eq_In_Comparator_Exp>;
  castUrl?: InputMaybe<String_Eq_In_Comparator_Exp>;
  channelId?: InputMaybe<String_Comparator_Exp>;
  criteria: FarcasterReactionCriteria;
  frameUrl?: InputMaybe<String_Eq_In_Comparator_Exp>;
  reactedBy?: InputMaybe<Identity_Comparator_Exp>;
};

export type FarcasterReactionsInput = {
  blockchain: EveryBlockchain;
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter: FarcasterReactionsFilter;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type FarcasterReactionsOutput = {
  __typename?: 'FarcasterReactionsOutput';
  Criteria?: Maybe<FarcasterReactionCriteria>;
  Reaction?: Maybe<Array<FarcasterReaction>>;
  pageInfo?: Maybe<PageInfo>;
};

export type FarcasterRepliesFilter = {
  hash?: InputMaybe<String_Eq_In_Comparator_Exp>;
  parentCastedBy?: InputMaybe<Identity_Comparator_Exp>;
  parentHash?: InputMaybe<String_Eq_In_Comparator_Exp>;
  parentUrl?: InputMaybe<String_Eq_In_Comparator_Exp>;
  repliedBy?: InputMaybe<Identity_Comparator_Exp>;
};

export type FarcasterRepliesInput = {
  blockchain: EveryBlockchain;
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter: FarcasterRepliesFilter;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type FarcasterRepliesOutput = {
  __typename?: 'FarcasterRepliesOutput';
  Reply?: Maybe<Array<FarcasterCast>>;
  pageInfo?: Maybe<PageInfo>;
};

export type Float_Comparator_Exp = {
  _eq?: InputMaybe<Scalars['Float']['input']>;
  _gt?: InputMaybe<Scalars['Float']['input']>;
  _gte?: InputMaybe<Scalars['Float']['input']>;
  _in?: InputMaybe<Array<Scalars['Float']['input']>>;
  _lt?: InputMaybe<Scalars['Float']['input']>;
  _lte?: InputMaybe<Scalars['Float']['input']>;
  _ne?: InputMaybe<Scalars['Float']['input']>;
  _nin?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FrameButton = {
  __typename?: 'FrameButton';
  action?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  target?: Maybe<Scalars['String']['output']>;
};

export type FrameMessage = {
  __typename?: 'FrameMessage';
  data?: Maybe<FrameMessageData>;
  hash?: Maybe<Scalars['String']['output']>;
  hashScheme?: Maybe<Scalars['String']['output']>;
  signature?: Maybe<Scalars['String']['output']>;
  signatureScheme?: Maybe<Scalars['String']['output']>;
  signer?: Maybe<Scalars['String']['output']>;
};

export type FrameMessageActionBody = {
  __typename?: 'FrameMessageActionBody';
  address?: Maybe<Scalars['String']['output']>;
  buttonIndex?: Maybe<Scalars['Int']['output']>;
  castId?: Maybe<FrameMessageCastId>;
  inputText?: Maybe<Scalars['String']['output']>;
  inputTextDecoded?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  stateDecoded?: Maybe<Scalars['Any']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  transactionId?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  urlDecoded?: Maybe<Scalars['String']['output']>;
};

export type FrameMessageCastId = {
  __typename?: 'FrameMessageCastId';
  fid?: Maybe<Scalars['Int']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
};

export type FrameMessageData = {
  __typename?: 'FrameMessageData';
  fid?: Maybe<Scalars['Int']['output']>;
  frameActionBody?: Maybe<FrameMessageActionBody>;
  network?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['Time']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Identity_Comparator_Exp = {
  _eq?: InputMaybe<Scalars['Identity']['input']>;
  _in?: InputMaybe<Array<Scalars['Identity']['input']>>;
};

export type ImageSizes = {
  __typename?: 'ImageSizes';
  extraSmall?: Maybe<Scalars['String']['output']>;
  large?: Maybe<Scalars['String']['output']>;
  medium?: Maybe<Scalars['String']['output']>;
  original?: Maybe<Scalars['String']['output']>;
  small?: Maybe<Scalars['String']['output']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Int_Comparator_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _ne?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Int_String_Comparator_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _ne?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type LogoSizes = {
  __typename?: 'LogoSizes';
  external?: Maybe<Scalars['String']['output']>;
  large?: Maybe<Scalars['String']['output']>;
  medium?: Maybe<Scalars['String']['output']>;
  original?: Maybe<Scalars['String']['output']>;
  small?: Maybe<Scalars['String']['output']>;
};

export type Media = {
  __typename?: 'Media';
  animation_url?: Maybe<AnimationUrlVariants>;
  audio?: Maybe<AudioVariants>;
  image?: Maybe<ImageSizes>;
  json?: Maybe<Scalars['String']['output']>;
  video?: Maybe<VideoVariants>;
};

export type Mentions = {
  __typename?: 'Mentions';
  fid?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  profile?: Maybe<Social>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyAttestation: AffectedRowsOutput;
  createManyEnsName: AffectedRowsOutput;
  createManyOffchainRevocation: AffectedRowsOutput;
  createManySchema: AffectedRowsOutput;
  createManySchemaName: AffectedRowsOutput;
  createManyServiceStat: AffectedRowsOutput;
  createManyTimestamp: AffectedRowsOutput;
  createOneAttestation: Attestation;
  createOneEnsName: EnsName;
  createOneOffchainRevocation: OffchainRevocation;
  createOneSchema: Schema;
  createOneSchemaName: SchemaName;
  createOneServiceStat: ServiceStat;
  createOneTimestamp: Timestamp;
  deleteManyAttestation: AffectedRowsOutput;
  deleteManyEnsName: AffectedRowsOutput;
  deleteManyOffchainRevocation: AffectedRowsOutput;
  deleteManySchema: AffectedRowsOutput;
  deleteManySchemaName: AffectedRowsOutput;
  deleteManyServiceStat: AffectedRowsOutput;
  deleteManyTimestamp: AffectedRowsOutput;
  deleteOneAttestation?: Maybe<Attestation>;
  deleteOneEnsName?: Maybe<EnsName>;
  deleteOneOffchainRevocation?: Maybe<OffchainRevocation>;
  deleteOneSchema?: Maybe<Schema>;
  deleteOneSchemaName?: Maybe<SchemaName>;
  deleteOneServiceStat?: Maybe<ServiceStat>;
  deleteOneTimestamp?: Maybe<Timestamp>;
  updateManyAttestation: AffectedRowsOutput;
  updateManyEnsName: AffectedRowsOutput;
  updateManyOffchainRevocation: AffectedRowsOutput;
  updateManySchema: AffectedRowsOutput;
  updateManySchemaName: AffectedRowsOutput;
  updateManyServiceStat: AffectedRowsOutput;
  updateManyTimestamp: AffectedRowsOutput;
  updateOneAttestation?: Maybe<Attestation>;
  updateOneEnsName?: Maybe<EnsName>;
  updateOneOffchainRevocation?: Maybe<OffchainRevocation>;
  updateOneSchema?: Maybe<Schema>;
  updateOneSchemaName?: Maybe<SchemaName>;
  updateOneServiceStat?: Maybe<ServiceStat>;
  updateOneTimestamp?: Maybe<Timestamp>;
  upsertOneAttestation: Attestation;
  upsertOneEnsName: EnsName;
  upsertOneOffchainRevocation: OffchainRevocation;
  upsertOneSchema: Schema;
  upsertOneSchemaName: SchemaName;
  upsertOneServiceStat: ServiceStat;
  upsertOneTimestamp: Timestamp;
};


export type MutationCreateManyAttestationArgs = {
  data: Array<AttestationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyEnsNameArgs = {
  data: Array<EnsNameCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyOffchainRevocationArgs = {
  data: Array<OffchainRevocationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManySchemaArgs = {
  data: Array<SchemaCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManySchemaNameArgs = {
  data: Array<SchemaNameCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyServiceStatArgs = {
  data: Array<ServiceStatCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyTimestampArgs = {
  data: Array<TimestampCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOneAttestationArgs = {
  data: AttestationCreateInput;
};


export type MutationCreateOneEnsNameArgs = {
  data: EnsNameCreateInput;
};


export type MutationCreateOneOffchainRevocationArgs = {
  data: OffchainRevocationCreateInput;
};


export type MutationCreateOneSchemaArgs = {
  data: SchemaCreateInput;
};


export type MutationCreateOneSchemaNameArgs = {
  data: SchemaNameCreateInput;
};


export type MutationCreateOneServiceStatArgs = {
  data: ServiceStatCreateInput;
};


export type MutationCreateOneTimestampArgs = {
  data: TimestampCreateInput;
};


export type MutationDeleteManyAttestationArgs = {
  where?: InputMaybe<AttestationWhereInput>;
};


export type MutationDeleteManyEnsNameArgs = {
  where?: InputMaybe<EnsNameWhereInput>;
};


export type MutationDeleteManyOffchainRevocationArgs = {
  where?: InputMaybe<OffchainRevocationWhereInput>;
};


export type MutationDeleteManySchemaArgs = {
  where?: InputMaybe<SchemaWhereInput>;
};


export type MutationDeleteManySchemaNameArgs = {
  where?: InputMaybe<SchemaNameWhereInput>;
};


export type MutationDeleteManyServiceStatArgs = {
  where?: InputMaybe<ServiceStatWhereInput>;
};


export type MutationDeleteManyTimestampArgs = {
  where?: InputMaybe<TimestampWhereInput>;
};


export type MutationDeleteOneAttestationArgs = {
  where: AttestationWhereUniqueInput;
};


export type MutationDeleteOneEnsNameArgs = {
  where: EnsNameWhereUniqueInput;
};


export type MutationDeleteOneOffchainRevocationArgs = {
  where: OffchainRevocationWhereUniqueInput;
};


export type MutationDeleteOneSchemaArgs = {
  where: SchemaWhereUniqueInput;
};


export type MutationDeleteOneSchemaNameArgs = {
  where: SchemaNameWhereUniqueInput;
};


export type MutationDeleteOneServiceStatArgs = {
  where: ServiceStatWhereUniqueInput;
};


export type MutationDeleteOneTimestampArgs = {
  where: TimestampWhereUniqueInput;
};


export type MutationUpdateManyAttestationArgs = {
  data: AttestationUpdateManyMutationInput;
  where?: InputMaybe<AttestationWhereInput>;
};


export type MutationUpdateManyEnsNameArgs = {
  data: EnsNameUpdateManyMutationInput;
  where?: InputMaybe<EnsNameWhereInput>;
};


export type MutationUpdateManyOffchainRevocationArgs = {
  data: OffchainRevocationUpdateManyMutationInput;
  where?: InputMaybe<OffchainRevocationWhereInput>;
};


export type MutationUpdateManySchemaArgs = {
  data: SchemaUpdateManyMutationInput;
  where?: InputMaybe<SchemaWhereInput>;
};


export type MutationUpdateManySchemaNameArgs = {
  data: SchemaNameUpdateManyMutationInput;
  where?: InputMaybe<SchemaNameWhereInput>;
};


export type MutationUpdateManyServiceStatArgs = {
  data: ServiceStatUpdateManyMutationInput;
  where?: InputMaybe<ServiceStatWhereInput>;
};


export type MutationUpdateManyTimestampArgs = {
  data: TimestampUpdateManyMutationInput;
  where?: InputMaybe<TimestampWhereInput>;
};


export type MutationUpdateOneAttestationArgs = {
  data: AttestationUpdateInput;
  where: AttestationWhereUniqueInput;
};


export type MutationUpdateOneEnsNameArgs = {
  data: EnsNameUpdateInput;
  where: EnsNameWhereUniqueInput;
};


export type MutationUpdateOneOffchainRevocationArgs = {
  data: OffchainRevocationUpdateInput;
  where: OffchainRevocationWhereUniqueInput;
};


export type MutationUpdateOneSchemaArgs = {
  data: SchemaUpdateInput;
  where: SchemaWhereUniqueInput;
};


export type MutationUpdateOneSchemaNameArgs = {
  data: SchemaNameUpdateInput;
  where: SchemaNameWhereUniqueInput;
};


export type MutationUpdateOneServiceStatArgs = {
  data: ServiceStatUpdateInput;
  where: ServiceStatWhereUniqueInput;
};


export type MutationUpdateOneTimestampArgs = {
  data: TimestampUpdateInput;
  where: TimestampWhereUniqueInput;
};


export type MutationUpsertOneAttestationArgs = {
  create: AttestationCreateInput;
  update: AttestationUpdateInput;
  where: AttestationWhereUniqueInput;
};


export type MutationUpsertOneEnsNameArgs = {
  create: EnsNameCreateInput;
  update: EnsNameUpdateInput;
  where: EnsNameWhereUniqueInput;
};


export type MutationUpsertOneOffchainRevocationArgs = {
  create: OffchainRevocationCreateInput;
  update: OffchainRevocationUpdateInput;
  where: OffchainRevocationWhereUniqueInput;
};


export type MutationUpsertOneSchemaArgs = {
  create: SchemaCreateInput;
  update: SchemaUpdateInput;
  where: SchemaWhereUniqueInput;
};


export type MutationUpsertOneSchemaNameArgs = {
  create: SchemaNameCreateInput;
  update: SchemaNameUpdateInput;
  where: SchemaNameWhereUniqueInput;
};


export type MutationUpsertOneServiceStatArgs = {
  create: ServiceStatCreateInput;
  update: ServiceStatUpdateInput;
  where: ServiceStatWhereUniqueInput;
};


export type MutationUpsertOneTimestampArgs = {
  create: TimestampCreateInput;
  update: TimestampUpdateInput;
  where: TimestampWhereUniqueInput;
};

export type NativeBalance = {
  __typename?: 'NativeBalance';
  /** Token amount the address currently holds */
  amount: Scalars['String']['output'];
  /** Blockchain where the token smart contract is deployed */
  blockchain?: Maybe<NativeBalanceBlockchain>;
  /** Unique identifier for the blockchain */
  chainId: Scalars['String']['output'];
  /** Formatted token balance in decimals */
  formattedAmount?: Maybe<Scalars['Float']['output']>;
  /** Airstack unique identifier for the data point */
  id: Scalars['ID']['output'];
  /** Block number of the latest token balance change happened */
  lastUpdatedBlock: Scalars['Int']['output'];
  /** Timestamp of the latest token balance change happened */
  lastUpdatedTimestamp?: Maybe<Scalars['Time']['output']>;
  /** Nested Query allowing to retrieve address, domain names, social profiles of the owner */
  owner: Wallet;
};

export enum NativeBalanceBlockchain {
  Degen = 'degen'
}

export type NativeBalanceFilter = {
  formattedAmount?: InputMaybe<Float_Comparator_Exp>;
  lastUpdatedTimestamp?: InputMaybe<Time_Comparator_Exp>;
  owner?: InputMaybe<Identity_Comparator_Exp>;
};

export type NativeBalanceOrderBy = {
  lastUpdatedTimestamp?: InputMaybe<OrderBy>;
};

export type NativeBalancesInput = {
  blockchain: NativeBalanceBlockchain;
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter: NativeBalanceFilter;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<NativeBalanceOrderBy>>;
};

export type NativeBalancesOutput = {
  __typename?: 'NativeBalancesOutput';
  NativeBalance?: Maybe<Array<NativeBalance>>;
  pageInfo?: Maybe<PageInfo>;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NftAttribute = {
  __typename?: 'NftAttribute';
  displayType?: Maybe<Scalars['String']['output']>;
  maxValue?: Maybe<Scalars['String']['output']>;
  /** NFT attribute type as defined in the smart contract, e.g. background */
  trait_type?: Maybe<Scalars['String']['output']>;
  /** NFT attribute value as defined in the smart contract, e.g. blue */
  value?: Maybe<Scalars['String']['output']>;
};

export type NftAttributeFilter = {
  trait_type?: InputMaybe<String_Comparator_Exp>;
  value?: InputMaybe<String_Comparator_Exp>;
};

export type NftAttributesInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter: NftAttributeFilter;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type NftAttributesOutput = {
  __typename?: 'NftAttributesOutput';
  NftAttribute?: Maybe<Array<NftAttribute>>;
  pageInfo?: Maybe<PageInfo>;
};

export type NftMetadata = {
  __typename?: 'NftMetadata';
  animationUrl?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Array<NftAttribute>>;
  backgroundColor?: Maybe<Scalars['String']['output']>;
  /** Description of the token, mirrored from the smart contract */
  description?: Maybe<Scalars['String']['output']>;
  externalUrl?: Maybe<Scalars['String']['output']>;
  /** Link to the token image, mirrored from the smart contract */
  image?: Maybe<Scalars['String']['output']>;
  imageData?: Maybe<Scalars['String']['output']>;
  /** Name of the token, mirrored from the smart contract */
  name?: Maybe<Scalars['String']['output']>;
  youtubeUrl?: Maybe<Scalars['String']['output']>;
};

export type NftMetadataFilter = {
  attributes?: InputMaybe<NftAttributeFilter>;
  name?: InputMaybe<String_Comparator_Exp>;
};

export type NftMetadataOrderBy = {
  attributes?: InputMaybe<OrderBy>;
};

export type NftMetadatasInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter: NftMetadataFilter;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<NftMetadataOrderBy>>;
};

export type NftMetadatasOutput = {
  __typename?: 'NftMetadatasOutput';
  NftMetadata?: Maybe<Array<NftMetadata>>;
  pageInfo?: Maybe<PageInfo>;
};

export type OffchainRevocation = {
  __typename?: 'OffchainRevocation';
  from: Scalars['String']['output'];
  id: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  txid: Scalars['String']['output'];
  uid: Scalars['String']['output'];
};

export type OffchainRevocationAvgAggregate = {
  __typename?: 'OffchainRevocationAvgAggregate';
  timestamp?: Maybe<Scalars['Float']['output']>;
};

export type OffchainRevocationAvgOrderByAggregateInput = {
  timestamp?: InputMaybe<SortOrder>;
};

export type OffchainRevocationCountAggregate = {
  __typename?: 'OffchainRevocationCountAggregate';
  _all: Scalars['Int']['output'];
  from: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  timestamp: Scalars['Int']['output'];
  txid: Scalars['Int']['output'];
  uid: Scalars['Int']['output'];
};

export type OffchainRevocationCountOrderByAggregateInput = {
  from?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  txid?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
};

export type OffchainRevocationCreateInput = {
  from: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  timestamp: Scalars['Int']['input'];
  txid: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};

export type OffchainRevocationCreateManyInput = {
  from: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  timestamp: Scalars['Int']['input'];
  txid: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};

export type OffchainRevocationGroupBy = {
  __typename?: 'OffchainRevocationGroupBy';
  _avg?: Maybe<OffchainRevocationAvgAggregate>;
  _count?: Maybe<OffchainRevocationCountAggregate>;
  _max?: Maybe<OffchainRevocationMaxAggregate>;
  _min?: Maybe<OffchainRevocationMinAggregate>;
  _sum?: Maybe<OffchainRevocationSumAggregate>;
  from: Scalars['String']['output'];
  id: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  txid: Scalars['String']['output'];
  uid: Scalars['String']['output'];
};

export type OffchainRevocationMaxAggregate = {
  __typename?: 'OffchainRevocationMaxAggregate';
  from?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['Int']['output']>;
  txid?: Maybe<Scalars['String']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
};

export type OffchainRevocationMaxOrderByAggregateInput = {
  from?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  txid?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
};

export type OffchainRevocationMinAggregate = {
  __typename?: 'OffchainRevocationMinAggregate';
  from?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['Int']['output']>;
  txid?: Maybe<Scalars['String']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
};

export type OffchainRevocationMinOrderByAggregateInput = {
  from?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  txid?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
};

export type OffchainRevocationOrderByWithAggregationInput = {
  _avg?: InputMaybe<OffchainRevocationAvgOrderByAggregateInput>;
  _count?: InputMaybe<OffchainRevocationCountOrderByAggregateInput>;
  _max?: InputMaybe<OffchainRevocationMaxOrderByAggregateInput>;
  _min?: InputMaybe<OffchainRevocationMinOrderByAggregateInput>;
  _sum?: InputMaybe<OffchainRevocationSumOrderByAggregateInput>;
  from?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  txid?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
};

export type OffchainRevocationOrderByWithRelationInput = {
  from?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  txid?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
};

export enum OffchainRevocationScalarFieldEnum {
  From = 'from',
  Id = 'id',
  Timestamp = 'timestamp',
  Txid = 'txid',
  Uid = 'uid'
}

export type OffchainRevocationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<OffchainRevocationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<OffchainRevocationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<OffchainRevocationScalarWhereWithAggregatesInput>>;
  from?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  timestamp?: InputMaybe<IntWithAggregatesFilter>;
  txid?: InputMaybe<StringWithAggregatesFilter>;
  uid?: InputMaybe<StringWithAggregatesFilter>;
};

export type OffchainRevocationSumAggregate = {
  __typename?: 'OffchainRevocationSumAggregate';
  timestamp?: Maybe<Scalars['Int']['output']>;
};

export type OffchainRevocationSumOrderByAggregateInput = {
  timestamp?: InputMaybe<SortOrder>;
};

export type OffchainRevocationUpdateInput = {
  from?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<IntFieldUpdateOperationsInput>;
  txid?: InputMaybe<StringFieldUpdateOperationsInput>;
  uid?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type OffchainRevocationUpdateManyMutationInput = {
  from?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<IntFieldUpdateOperationsInput>;
  txid?: InputMaybe<StringFieldUpdateOperationsInput>;
  uid?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type OffchainRevocationWhereInput = {
  AND?: InputMaybe<Array<OffchainRevocationWhereInput>>;
  NOT?: InputMaybe<Array<OffchainRevocationWhereInput>>;
  OR?: InputMaybe<Array<OffchainRevocationWhereInput>>;
  from?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<IntFilter>;
  txid?: InputMaybe<StringFilter>;
  uid?: InputMaybe<StringFilter>;
};

export type OffchainRevocationWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export enum OrderBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum OrderByAsIntString {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  nextCursor: Scalars['String']['output'];
  prevCursor: Scalars['String']['output'];
};

export type Poap = {
  __typename?: 'Poap';
  attendee?: Maybe<PoapAttendee>;
  /** Blockchain associated with the Poap */
  blockchain?: Maybe<EveryBlockchain>;
  /** Unique identifier for the blockchain */
  chainId?: Maybe<Scalars['String']['output']>;
  /** Block Number when POAP was created */
  createdAtBlockNumber?: Maybe<Scalars['Int']['output']>;
  /** Time when POAP was created */
  createdAtBlockTimestamp?: Maybe<Scalars['Time']['output']>;
  /** Poap DApp name */
  dappName?: Maybe<PoapDappName>;
  /** Poap DApp slug (contract version) */
  dappSlug?: Maybe<PoapDappSlug>;
  /** Airstack unique dapp version number */
  dappVersion?: Maybe<Scalars['String']['output']>;
  /** Poap event id */
  eventId?: Maybe<Scalars['String']['output']>;
  /** Airstack unique identifier for the data point */
  id?: Maybe<Scalars['ID']['output']>;
  mintHash?: Maybe<Scalars['String']['output']>;
  mintOrder?: Maybe<Scalars['Int']['output']>;
  owner: Wallet;
  poapEvent?: Maybe<PoapEvent>;
  /** POAP Contract Address */
  tokenAddress?: Maybe<Scalars['String']['output']>;
  tokenId?: Maybe<Scalars['String']['output']>;
  tokenUri?: Maybe<Scalars['String']['output']>;
  transferCount?: Maybe<Scalars['Int']['output']>;
};

export type PoapAttendee = {
  __typename?: 'PoapAttendee';
  owner: Wallet;
  totalPoapOwned?: Maybe<Scalars['Int']['output']>;
};

export type PoapAttendeesOutput = {
  __typename?: 'PoapAttendeesOutput';
  PoapAttendee?: Maybe<Array<PoapAttendee>>;
  pageInfo?: Maybe<PageInfo>;
};

export enum PoapDappName {
  Poap = 'poap'
}

export type PoapDappName_Comparator_Exp = {
  _eq?: InputMaybe<PoapDappName>;
  _in?: InputMaybe<Array<PoapDappName>>;
};

export enum PoapDappSlug {
  PoapGnosis = 'poap_gnosis',
  PoapMainnet = 'poap_mainnet'
}

export type PoapDappSlug_Comparator_Exp = {
  _eq?: InputMaybe<PoapDappSlug>;
  _in?: InputMaybe<Array<PoapDappSlug>>;
};

export type PoapEvent = {
  __typename?: 'PoapEvent';
  /** Blockchain where the marketplace data is calculated from */
  blockchain?: Maybe<EveryBlockchain>;
  /** Unique identifier for the blockchain */
  chainId?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  contentType?: Maybe<Scalars['String']['output']>;
  contentValue?: Maybe<Media>;
  country?: Maybe<Scalars['String']['output']>;
  dappName?: Maybe<PoapDappName>;
  dappSlug: PoapDappSlug;
  dappVersion?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['Time']['output']>;
  eventId?: Maybe<Scalars['String']['output']>;
  eventName?: Maybe<Scalars['String']['output']>;
  /** The Event URL */
  eventURL?: Maybe<Scalars['String']['output']>;
  /** Airstack unique identifier for the data point */
  id: Scalars['ID']['output'];
  /** If Event is Virtual or not */
  isVirtualEvent?: Maybe<Scalars['Boolean']['output']>;
  metadata?: Maybe<Scalars['Map']['output']>;
  poaps?: Maybe<Array<Poap>>;
  startDate?: Maybe<Scalars['Time']['output']>;
  tokenMints?: Maybe<Scalars['Int']['output']>;
};


export type PoapEventPoapsArgs = {
  input?: InputMaybe<PoapsNestedInput>;
};

export type PoapEventFilter = {
  city?: InputMaybe<String_Comparator_Exp>;
  country?: InputMaybe<String_Comparator_Exp>;
  dappName?: InputMaybe<PoapDappName_Comparator_Exp>;
  dappSlug?: InputMaybe<PoapDappSlug_Comparator_Exp>;
  endDate?: InputMaybe<String_Comparator_Exp>;
  eventId?: InputMaybe<String_Comparator_Exp>;
  eventName?: InputMaybe<Regex_String_Comparator_Exp>;
  isVirtualEvent?: InputMaybe<Boolean_Comparator_Exp>;
  startDate?: InputMaybe<String_Comparator_Exp>;
  tokenMints?: InputMaybe<Int_Comparator_Exp>;
};

export type PoapEventOrderBy = {
  endDate?: InputMaybe<OrderBy>;
  startDate?: InputMaybe<OrderBy>;
  tokenMints?: InputMaybe<OrderBy>;
};

export type PoapEventsInput = {
  blockchain: EveryBlockchain;
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter: PoapEventFilter;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<PoapEventOrderBy>>;
};

export type PoapEventsOutput = {
  __typename?: 'PoapEventsOutput';
  PoapEvent?: Maybe<Array<PoapEvent>>;
  pageInfo?: Maybe<PageInfo>;
};

export type PoapFilter = {
  createdAtBlockNumber?: InputMaybe<Int_Comparator_Exp>;
  dappName?: InputMaybe<PoapDappName_Comparator_Exp>;
  dappSlug?: InputMaybe<PoapDappSlug_Comparator_Exp>;
  eventId?: InputMaybe<String_Comparator_Exp>;
  owner?: InputMaybe<Identity_Comparator_Exp>;
  tokenId?: InputMaybe<String_Comparator_Exp>;
};

export type PoapOrderBy = {
  createdAtBlockNumber?: InputMaybe<OrderBy>;
};

export type PoapsInput = {
  blockchain: EveryBlockchain;
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter: PoapFilter;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<PoapOrderBy>>;
};

export type PoapsNestedInput = {
  blockchain?: InputMaybe<EveryBlockchain>;
  filter?: InputMaybe<PoapFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<PoapOrderBy>>>;
};

export type PoapsOutput = {
  __typename?: 'PoapsOutput';
  Poap?: Maybe<Array<Poap>>;
  pageInfo?: Maybe<PageInfo>;
};

export type PopularDapp = {
  __typename?: 'PopularDapp';
  address?: Maybe<Scalars['String']['output']>;
  blockchain?: Maybe<Scalars['String']['output']>;
  chainId?: Maybe<Scalars['String']['output']>;
  criteria?: Maybe<Scalars['String']['output']>;
  criteriaCount?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  lastTransactionBlockNumber?: Maybe<Scalars['Int']['output']>;
  lastTransactionHash?: Maybe<Scalars['String']['output']>;
  lastTransactionTimestamp?: Maybe<Scalars['Time']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  timeFrom?: Maybe<Scalars['Time']['output']>;
  timeTo?: Maybe<Scalars['Time']['output']>;
  userbase?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export enum PopularDappsCriteria {
  GasSpent = 'GAS_SPENT',
  TotalTransactions = 'TOTAL_TRANSACTIONS',
  UniqueUsers = 'UNIQUE_USERS'
}

export type PopularDappsInput = {
  blockchain: TrendingBlockchain;
  criteria: PopularDappsCriteria;
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TrendingFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  timeFrame: TimeFrame;
  userbase: Audience;
};

export type PopularDappsOutput = {
  __typename?: 'PopularDappsOutput';
  PopularDapps?: Maybe<Array<PopularDapp>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ProjectDetails = {
  __typename?: 'ProjectDetails';
  collectionName?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discordUrl?: Maybe<Scalars['String']['output']>;
  externalUrl?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  twitterUrl?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  Accounts?: Maybe<AccountsOutput>;
  Domains?: Maybe<DomainsOutput>;
  FarcasterCasts?: Maybe<FarcasterCastOutput>;
  FarcasterChannelParticipants?: Maybe<FarcasterChannelParticipantsOutput>;
  FarcasterChannels?: Maybe<FarcasterChannelsOutput>;
  FarcasterQuotedRecasts?: Maybe<FarcasterQuotedRecastsOutput>;
  FarcasterReactions?: Maybe<FarcasterReactionsOutput>;
  FarcasterReplies?: Maybe<FarcasterRepliesOutput>;
  FarcasterValidateFrameMessage?: Maybe<FarcasterFrameMessageOutput>;
  PoapEvents?: Maybe<PoapEventsOutput>;
  Poaps?: Maybe<PoapsOutput>;
  Snapshots?: Maybe<SnapshotsOutput>;
  SocialFollowers?: Maybe<SocialFollowerOutput>;
  SocialFollowings?: Maybe<SocialFollowingOutput>;
  Socials?: Maybe<SocialsOutput>;
  TokenBalances?: Maybe<TokenBalancesOutput>;
  TokenNfts?: Maybe<TokenNftsOutput>;
  TokenTransfers?: Maybe<TokenTransfersOutput>;
  Tokens?: Maybe<TokensOutput>;
  TrendingCasts?: Maybe<TrendingCastsOutput>;
  TrendingMints?: Maybe<TrendingMintsOutput>;
  TrendingSwaps?: Maybe<TrendingSwapsOutput>;
  TrendingTokens?: Maybe<TrendingTokensOutput>;
  Wallet?: Maybe<Wallet>;
  XMTPs?: Maybe<XmtPsOutput>;
  aggregateAttestation: AggregateAttestation;
  aggregateEnsName: AggregateEnsName;
  aggregateOffchainRevocation: AggregateOffchainRevocation;
  aggregateSchema: AggregateSchema;
  aggregateSchemaName: AggregateSchemaName;
  aggregateServiceStat: AggregateServiceStat;
  aggregateTimestamp: AggregateTimestamp;
  attestation?: Maybe<Attestation>;
  attestations: Array<Attestation>;
  ensName?: Maybe<EnsName>;
  ensNames: Array<EnsName>;
  findFirstAttestation?: Maybe<Attestation>;
  findFirstAttestationOrThrow?: Maybe<Attestation>;
  findFirstEnsName?: Maybe<EnsName>;
  findFirstEnsNameOrThrow?: Maybe<EnsName>;
  findFirstOffchainRevocation?: Maybe<OffchainRevocation>;
  findFirstOffchainRevocationOrThrow?: Maybe<OffchainRevocation>;
  findFirstSchema?: Maybe<Schema>;
  findFirstSchemaName?: Maybe<SchemaName>;
  findFirstSchemaNameOrThrow?: Maybe<SchemaName>;
  findFirstSchemaOrThrow?: Maybe<Schema>;
  findFirstServiceStat?: Maybe<ServiceStat>;
  findFirstServiceStatOrThrow?: Maybe<ServiceStat>;
  findFirstTimestamp?: Maybe<Timestamp>;
  findFirstTimestampOrThrow?: Maybe<Timestamp>;
  getAttestation?: Maybe<Attestation>;
  getEnsName?: Maybe<EnsName>;
  getOffchainRevocation?: Maybe<OffchainRevocation>;
  getSchema?: Maybe<Schema>;
  getSchemaName?: Maybe<SchemaName>;
  getServiceStat?: Maybe<ServiceStat>;
  getTimestamp?: Maybe<Timestamp>;
  groupByAttestation: Array<AttestationGroupBy>;
  groupByEnsName: Array<EnsNameGroupBy>;
  groupByOffchainRevocation: Array<OffchainRevocationGroupBy>;
  groupBySchema: Array<SchemaGroupBy>;
  groupBySchemaName: Array<SchemaNameGroupBy>;
  groupByServiceStat: Array<ServiceStatGroupBy>;
  groupByTimestamp: Array<TimestampGroupBy>;
  offchainRevocation?: Maybe<OffchainRevocation>;
  offchainRevocations: Array<OffchainRevocation>;
  schema?: Maybe<Schema>;
  schemaName?: Maybe<SchemaName>;
  schemaNames: Array<SchemaName>;
  schemata: Array<Schema>;
  serviceStat?: Maybe<ServiceStat>;
  serviceStats: Array<ServiceStat>;
  timestamp?: Maybe<Timestamp>;
  timestamps: Array<Timestamp>;
};


export type QueryAccountsArgs = {
  input: AccountsInput;
};


export type QueryDomainsArgs = {
  input: DomainsInput;
};


export type QueryFarcasterCastsArgs = {
  input: FarcasterCastInput;
};


export type QueryFarcasterChannelParticipantsArgs = {
  input: FarcasterChannelParticipantsInput;
};


export type QueryFarcasterChannelsArgs = {
  input: FarcasterChannelsInput;
};


export type QueryFarcasterQuotedRecastsArgs = {
  input: FarcasterQuotedRecastsInput;
};


export type QueryFarcasterReactionsArgs = {
  input: FarcasterReactionsInput;
};


export type QueryFarcasterRepliesArgs = {
  input: FarcasterRepliesInput;
};


export type QueryFarcasterValidateFrameMessageArgs = {
  input: FarcasterFrameMessageInput;
};


export type QueryPoapEventsArgs = {
  input: PoapEventsInput;
};


export type QueryPoapsArgs = {
  input: PoapsInput;
};


export type QuerySnapshotsArgs = {
  input: SnapshotsInput;
};


export type QuerySocialFollowersArgs = {
  input: SocialFollowerInput;
};


export type QuerySocialFollowingsArgs = {
  input: SocialFollowingInput;
};


export type QuerySocialsArgs = {
  input: SocialsInput;
};


export type QueryTokenBalancesArgs = {
  input: TokenBalancesInput;
};


export type QueryTokenNftsArgs = {
  input: TokenNftsInput;
};


export type QueryTokenTransfersArgs = {
  input: TokenTransfersInput;
};


export type QueryTokensArgs = {
  input: TokensInput;
};


export type QueryTrendingCastsArgs = {
  input: TrendingCastsInput;
};


export type QueryTrendingMintsArgs = {
  input: TrendingMintsInput;
};


export type QueryTrendingSwapsArgs = {
  input: TrendingSwapsInput;
};


export type QueryTrendingTokensArgs = {
  input: TrendingTokensInput;
};


export type QueryWalletArgs = {
  input: WalletInput;
};


export type QueryXmtPsArgs = {
  input: XmtPsInput;
};


export type QueryAggregateAttestationArgs = {
  cursor?: InputMaybe<AttestationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AttestationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AttestationWhereInput>;
};


export type QueryAggregateEnsNameArgs = {
  cursor?: InputMaybe<EnsNameWhereUniqueInput>;
  orderBy?: InputMaybe<Array<EnsNameOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EnsNameWhereInput>;
};


export type QueryAggregateOffchainRevocationArgs = {
  cursor?: InputMaybe<OffchainRevocationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<OffchainRevocationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OffchainRevocationWhereInput>;
};


export type QueryAggregateSchemaArgs = {
  cursor?: InputMaybe<SchemaWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SchemaOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SchemaWhereInput>;
};


export type QueryAggregateSchemaNameArgs = {
  cursor?: InputMaybe<SchemaNameWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SchemaNameOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SchemaNameWhereInput>;
};


export type QueryAggregateServiceStatArgs = {
  cursor?: InputMaybe<ServiceStatWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ServiceStatOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ServiceStatWhereInput>;
};


export type QueryAggregateTimestampArgs = {
  cursor?: InputMaybe<TimestampWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TimestampOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TimestampWhereInput>;
};


export type QueryAttestationArgs = {
  where: AttestationWhereUniqueInput;
};


export type QueryAttestationsArgs = {
  cursor?: InputMaybe<AttestationWhereUniqueInput>;
  distinct?: InputMaybe<Array<AttestationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AttestationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AttestationWhereInput>;
};


export type QueryEnsNameArgs = {
  where: EnsNameWhereUniqueInput;
};


export type QueryEnsNamesArgs = {
  cursor?: InputMaybe<EnsNameWhereUniqueInput>;
  distinct?: InputMaybe<Array<EnsNameScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EnsNameOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EnsNameWhereInput>;
};


export type QueryFindFirstAttestationArgs = {
  cursor?: InputMaybe<AttestationWhereUniqueInput>;
  distinct?: InputMaybe<Array<AttestationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AttestationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AttestationWhereInput>;
};


export type QueryFindFirstAttestationOrThrowArgs = {
  cursor?: InputMaybe<AttestationWhereUniqueInput>;
  distinct?: InputMaybe<Array<AttestationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AttestationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AttestationWhereInput>;
};


export type QueryFindFirstEnsNameArgs = {
  cursor?: InputMaybe<EnsNameWhereUniqueInput>;
  distinct?: InputMaybe<Array<EnsNameScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EnsNameOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EnsNameWhereInput>;
};


export type QueryFindFirstEnsNameOrThrowArgs = {
  cursor?: InputMaybe<EnsNameWhereUniqueInput>;
  distinct?: InputMaybe<Array<EnsNameScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EnsNameOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EnsNameWhereInput>;
};


export type QueryFindFirstOffchainRevocationArgs = {
  cursor?: InputMaybe<OffchainRevocationWhereUniqueInput>;
  distinct?: InputMaybe<Array<OffchainRevocationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OffchainRevocationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OffchainRevocationWhereInput>;
};


export type QueryFindFirstOffchainRevocationOrThrowArgs = {
  cursor?: InputMaybe<OffchainRevocationWhereUniqueInput>;
  distinct?: InputMaybe<Array<OffchainRevocationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OffchainRevocationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OffchainRevocationWhereInput>;
};


export type QueryFindFirstSchemaArgs = {
  cursor?: InputMaybe<SchemaWhereUniqueInput>;
  distinct?: InputMaybe<Array<SchemaScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SchemaOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SchemaWhereInput>;
};


export type QueryFindFirstSchemaNameArgs = {
  cursor?: InputMaybe<SchemaNameWhereUniqueInput>;
  distinct?: InputMaybe<Array<SchemaNameScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SchemaNameOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SchemaNameWhereInput>;
};


export type QueryFindFirstSchemaNameOrThrowArgs = {
  cursor?: InputMaybe<SchemaNameWhereUniqueInput>;
  distinct?: InputMaybe<Array<SchemaNameScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SchemaNameOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SchemaNameWhereInput>;
};


export type QueryFindFirstSchemaOrThrowArgs = {
  cursor?: InputMaybe<SchemaWhereUniqueInput>;
  distinct?: InputMaybe<Array<SchemaScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SchemaOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SchemaWhereInput>;
};


export type QueryFindFirstServiceStatArgs = {
  cursor?: InputMaybe<ServiceStatWhereUniqueInput>;
  distinct?: InputMaybe<Array<ServiceStatScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ServiceStatOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ServiceStatWhereInput>;
};


export type QueryFindFirstServiceStatOrThrowArgs = {
  cursor?: InputMaybe<ServiceStatWhereUniqueInput>;
  distinct?: InputMaybe<Array<ServiceStatScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ServiceStatOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ServiceStatWhereInput>;
};


export type QueryFindFirstTimestampArgs = {
  cursor?: InputMaybe<TimestampWhereUniqueInput>;
  distinct?: InputMaybe<Array<TimestampScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TimestampOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TimestampWhereInput>;
};


export type QueryFindFirstTimestampOrThrowArgs = {
  cursor?: InputMaybe<TimestampWhereUniqueInput>;
  distinct?: InputMaybe<Array<TimestampScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TimestampOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TimestampWhereInput>;
};


export type QueryGetAttestationArgs = {
  where: AttestationWhereUniqueInput;
};


export type QueryGetEnsNameArgs = {
  where: EnsNameWhereUniqueInput;
};


export type QueryGetOffchainRevocationArgs = {
  where: OffchainRevocationWhereUniqueInput;
};


export type QueryGetSchemaArgs = {
  where: SchemaWhereUniqueInput;
};


export type QueryGetSchemaNameArgs = {
  where: SchemaNameWhereUniqueInput;
};


export type QueryGetServiceStatArgs = {
  where: ServiceStatWhereUniqueInput;
};


export type QueryGetTimestampArgs = {
  where: TimestampWhereUniqueInput;
};


export type QueryGroupByAttestationArgs = {
  by: Array<AttestationScalarFieldEnum>;
  having?: InputMaybe<AttestationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AttestationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AttestationWhereInput>;
};


export type QueryGroupByEnsNameArgs = {
  by: Array<EnsNameScalarFieldEnum>;
  having?: InputMaybe<EnsNameScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<EnsNameOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EnsNameWhereInput>;
};


export type QueryGroupByOffchainRevocationArgs = {
  by: Array<OffchainRevocationScalarFieldEnum>;
  having?: InputMaybe<OffchainRevocationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<OffchainRevocationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OffchainRevocationWhereInput>;
};


export type QueryGroupBySchemaArgs = {
  by: Array<SchemaScalarFieldEnum>;
  having?: InputMaybe<SchemaScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SchemaOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SchemaWhereInput>;
};


export type QueryGroupBySchemaNameArgs = {
  by: Array<SchemaNameScalarFieldEnum>;
  having?: InputMaybe<SchemaNameScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SchemaNameOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SchemaNameWhereInput>;
};


export type QueryGroupByServiceStatArgs = {
  by: Array<ServiceStatScalarFieldEnum>;
  having?: InputMaybe<ServiceStatScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ServiceStatOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ServiceStatWhereInput>;
};


export type QueryGroupByTimestampArgs = {
  by: Array<TimestampScalarFieldEnum>;
  having?: InputMaybe<TimestampScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TimestampOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TimestampWhereInput>;
};


export type QueryOffchainRevocationArgs = {
  where: OffchainRevocationWhereUniqueInput;
};


export type QueryOffchainRevocationsArgs = {
  cursor?: InputMaybe<OffchainRevocationWhereUniqueInput>;
  distinct?: InputMaybe<Array<OffchainRevocationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OffchainRevocationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OffchainRevocationWhereInput>;
};


export type QuerySchemaArgs = {
  where: SchemaWhereUniqueInput;
};


export type QuerySchemaNameArgs = {
  where: SchemaNameWhereUniqueInput;
};


export type QuerySchemaNamesArgs = {
  cursor?: InputMaybe<SchemaNameWhereUniqueInput>;
  distinct?: InputMaybe<Array<SchemaNameScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SchemaNameOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SchemaNameWhereInput>;
};


export type QuerySchemataArgs = {
  cursor?: InputMaybe<SchemaWhereUniqueInput>;
  distinct?: InputMaybe<Array<SchemaScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SchemaOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SchemaWhereInput>;
};


export type QueryServiceStatArgs = {
  where: ServiceStatWhereUniqueInput;
};


export type QueryServiceStatsArgs = {
  cursor?: InputMaybe<ServiceStatWhereUniqueInput>;
  distinct?: InputMaybe<Array<ServiceStatScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ServiceStatOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ServiceStatWhereInput>;
};


export type QueryTimestampArgs = {
  where: TimestampWhereUniqueInput;
};


export type QueryTimestampsArgs = {
  cursor?: InputMaybe<TimestampWhereUniqueInput>;
  distinct?: InputMaybe<Array<TimestampScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TimestampOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TimestampWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Range_Comparator_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
};

export type Regex_String_Comparator_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _ne?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  _regex?: InputMaybe<Scalars['String']['input']>;
  _regex_in?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Schema = {
  __typename?: 'Schema';
  _count?: Maybe<SchemaCount>;
  attestations: Array<Attestation>;
  creator: Scalars['String']['output'];
  id: Scalars['String']['output'];
  index: Scalars['String']['output'];
  resolver: Scalars['String']['output'];
  revocable: Scalars['Boolean']['output'];
  schema: Scalars['String']['output'];
  schemaNames: Array<SchemaName>;
  time: Scalars['Int']['output'];
  txid: Scalars['String']['output'];
};


export type SchemaAttestationsArgs = {
  cursor?: InputMaybe<AttestationWhereUniqueInput>;
  distinct?: InputMaybe<Array<AttestationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AttestationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AttestationWhereInput>;
};


export type SchemaSchemaNamesArgs = {
  cursor?: InputMaybe<SchemaNameWhereUniqueInput>;
  distinct?: InputMaybe<Array<SchemaNameScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SchemaNameOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SchemaNameWhereInput>;
};

export type SchemaAvgAggregate = {
  __typename?: 'SchemaAvgAggregate';
  time?: Maybe<Scalars['Float']['output']>;
};

export type SchemaAvgOrderByAggregateInput = {
  time?: InputMaybe<SortOrder>;
};

export type SchemaCount = {
  __typename?: 'SchemaCount';
  attestations: Scalars['Int']['output'];
  schemaNames: Scalars['Int']['output'];
};

export type SchemaCountAggregate = {
  __typename?: 'SchemaCountAggregate';
  _all: Scalars['Int']['output'];
  creator: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  index: Scalars['Int']['output'];
  resolver: Scalars['Int']['output'];
  revocable: Scalars['Int']['output'];
  schema: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
  txid: Scalars['Int']['output'];
};

export type SchemaCountOrderByAggregateInput = {
  creator?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  index?: InputMaybe<SortOrder>;
  resolver?: InputMaybe<SortOrder>;
  revocable?: InputMaybe<SortOrder>;
  schema?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  txid?: InputMaybe<SortOrder>;
};

export type SchemaCreateInput = {
  attestations?: InputMaybe<AttestationCreateNestedManyWithoutSchemaInput>;
  creator: Scalars['String']['input'];
  id: Scalars['String']['input'];
  index: Scalars['String']['input'];
  resolver: Scalars['String']['input'];
  revocable: Scalars['Boolean']['input'];
  schema: Scalars['String']['input'];
  schemaNames?: InputMaybe<SchemaNameCreateNestedManyWithoutSchemaInput>;
  time: Scalars['Int']['input'];
  txid: Scalars['String']['input'];
};

export type SchemaCreateManyInput = {
  creator: Scalars['String']['input'];
  id: Scalars['String']['input'];
  index: Scalars['String']['input'];
  resolver: Scalars['String']['input'];
  revocable: Scalars['Boolean']['input'];
  schema: Scalars['String']['input'];
  time: Scalars['Int']['input'];
  txid: Scalars['String']['input'];
};

export type SchemaCreateNestedOneWithoutAttestationsInput = {
  connect?: InputMaybe<SchemaWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SchemaCreateOrConnectWithoutAttestationsInput>;
  create?: InputMaybe<SchemaCreateWithoutAttestationsInput>;
};

export type SchemaCreateNestedOneWithoutSchemaNamesInput = {
  connect?: InputMaybe<SchemaWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SchemaCreateOrConnectWithoutSchemaNamesInput>;
  create?: InputMaybe<SchemaCreateWithoutSchemaNamesInput>;
};

export type SchemaCreateOrConnectWithoutAttestationsInput = {
  create: SchemaCreateWithoutAttestationsInput;
  where: SchemaWhereUniqueInput;
};

export type SchemaCreateOrConnectWithoutSchemaNamesInput = {
  create: SchemaCreateWithoutSchemaNamesInput;
  where: SchemaWhereUniqueInput;
};

export type SchemaCreateWithoutAttestationsInput = {
  creator: Scalars['String']['input'];
  id: Scalars['String']['input'];
  index: Scalars['String']['input'];
  resolver: Scalars['String']['input'];
  revocable: Scalars['Boolean']['input'];
  schema: Scalars['String']['input'];
  schemaNames?: InputMaybe<SchemaNameCreateNestedManyWithoutSchemaInput>;
  time: Scalars['Int']['input'];
  txid: Scalars['String']['input'];
};

export type SchemaCreateWithoutSchemaNamesInput = {
  attestations?: InputMaybe<AttestationCreateNestedManyWithoutSchemaInput>;
  creator: Scalars['String']['input'];
  id: Scalars['String']['input'];
  index: Scalars['String']['input'];
  resolver: Scalars['String']['input'];
  revocable: Scalars['Boolean']['input'];
  schema: Scalars['String']['input'];
  time: Scalars['Int']['input'];
  txid: Scalars['String']['input'];
};

export type SchemaGroupBy = {
  __typename?: 'SchemaGroupBy';
  _avg?: Maybe<SchemaAvgAggregate>;
  _count?: Maybe<SchemaCountAggregate>;
  _max?: Maybe<SchemaMaxAggregate>;
  _min?: Maybe<SchemaMinAggregate>;
  _sum?: Maybe<SchemaSumAggregate>;
  creator: Scalars['String']['output'];
  id: Scalars['String']['output'];
  index: Scalars['String']['output'];
  resolver: Scalars['String']['output'];
  revocable: Scalars['Boolean']['output'];
  schema: Scalars['String']['output'];
  time: Scalars['Int']['output'];
  txid: Scalars['String']['output'];
};

export type SchemaMaxAggregate = {
  __typename?: 'SchemaMaxAggregate';
  creator?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  index?: Maybe<Scalars['String']['output']>;
  resolver?: Maybe<Scalars['String']['output']>;
  revocable?: Maybe<Scalars['Boolean']['output']>;
  schema?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['Int']['output']>;
  txid?: Maybe<Scalars['String']['output']>;
};

export type SchemaMaxOrderByAggregateInput = {
  creator?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  index?: InputMaybe<SortOrder>;
  resolver?: InputMaybe<SortOrder>;
  revocable?: InputMaybe<SortOrder>;
  schema?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  txid?: InputMaybe<SortOrder>;
};

export type SchemaMinAggregate = {
  __typename?: 'SchemaMinAggregate';
  creator?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  index?: Maybe<Scalars['String']['output']>;
  resolver?: Maybe<Scalars['String']['output']>;
  revocable?: Maybe<Scalars['Boolean']['output']>;
  schema?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['Int']['output']>;
  txid?: Maybe<Scalars['String']['output']>;
};

export type SchemaMinOrderByAggregateInput = {
  creator?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  index?: InputMaybe<SortOrder>;
  resolver?: InputMaybe<SortOrder>;
  revocable?: InputMaybe<SortOrder>;
  schema?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  txid?: InputMaybe<SortOrder>;
};

export type SchemaName = {
  __typename?: 'SchemaName';
  attesterAddress: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isCreator: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  schema: Schema;
  schemaId: Scalars['String']['output'];
  time: Scalars['Int']['output'];
};

export type SchemaNameAvgAggregate = {
  __typename?: 'SchemaNameAvgAggregate';
  time?: Maybe<Scalars['Float']['output']>;
};

export type SchemaNameAvgOrderByAggregateInput = {
  time?: InputMaybe<SortOrder>;
};

export type SchemaNameCountAggregate = {
  __typename?: 'SchemaNameCountAggregate';
  _all: Scalars['Int']['output'];
  attesterAddress: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isCreator: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  schemaId: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
};

export type SchemaNameCountOrderByAggregateInput = {
  attesterAddress?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isCreator?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  schemaId?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
};

export type SchemaNameCreateInput = {
  attesterAddress: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isCreator: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  schema: SchemaCreateNestedOneWithoutSchemaNamesInput;
  time: Scalars['Int']['input'];
};

export type SchemaNameCreateManyInput = {
  attesterAddress: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isCreator: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  schemaId: Scalars['String']['input'];
  time: Scalars['Int']['input'];
};

export type SchemaNameCreateManySchemaInput = {
  attesterAddress: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isCreator: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  time: Scalars['Int']['input'];
};

export type SchemaNameCreateManySchemaInputEnvelope = {
  data: Array<SchemaNameCreateManySchemaInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SchemaNameCreateNestedManyWithoutSchemaInput = {
  connect?: InputMaybe<Array<SchemaNameWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SchemaNameCreateOrConnectWithoutSchemaInput>>;
  create?: InputMaybe<Array<SchemaNameCreateWithoutSchemaInput>>;
  createMany?: InputMaybe<SchemaNameCreateManySchemaInputEnvelope>;
};

export type SchemaNameCreateOrConnectWithoutSchemaInput = {
  create: SchemaNameCreateWithoutSchemaInput;
  where: SchemaNameWhereUniqueInput;
};

export type SchemaNameCreateWithoutSchemaInput = {
  attesterAddress: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isCreator: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  time: Scalars['Int']['input'];
};

export type SchemaNameGroupBy = {
  __typename?: 'SchemaNameGroupBy';
  _avg?: Maybe<SchemaNameAvgAggregate>;
  _count?: Maybe<SchemaNameCountAggregate>;
  _max?: Maybe<SchemaNameMaxAggregate>;
  _min?: Maybe<SchemaNameMinAggregate>;
  _sum?: Maybe<SchemaNameSumAggregate>;
  attesterAddress: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isCreator: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  schemaId: Scalars['String']['output'];
  time: Scalars['Int']['output'];
};

export type SchemaNameListRelationFilter = {
  every?: InputMaybe<SchemaNameWhereInput>;
  none?: InputMaybe<SchemaNameWhereInput>;
  some?: InputMaybe<SchemaNameWhereInput>;
};

export type SchemaNameMaxAggregate = {
  __typename?: 'SchemaNameMaxAggregate';
  attesterAddress?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isCreator?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  schemaId?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['Int']['output']>;
};

export type SchemaNameMaxOrderByAggregateInput = {
  attesterAddress?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isCreator?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  schemaId?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
};

export type SchemaNameMinAggregate = {
  __typename?: 'SchemaNameMinAggregate';
  attesterAddress?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isCreator?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  schemaId?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['Int']['output']>;
};

export type SchemaNameMinOrderByAggregateInput = {
  attesterAddress?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isCreator?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  schemaId?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
};

export type SchemaNameOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SchemaNameOrderByWithAggregationInput = {
  _avg?: InputMaybe<SchemaNameAvgOrderByAggregateInput>;
  _count?: InputMaybe<SchemaNameCountOrderByAggregateInput>;
  _max?: InputMaybe<SchemaNameMaxOrderByAggregateInput>;
  _min?: InputMaybe<SchemaNameMinOrderByAggregateInput>;
  _sum?: InputMaybe<SchemaNameSumOrderByAggregateInput>;
  attesterAddress?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isCreator?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  schemaId?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
};

export type SchemaNameOrderByWithRelationInput = {
  attesterAddress?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isCreator?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  schema?: InputMaybe<SchemaOrderByWithRelationInput>;
  schemaId?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
};

export enum SchemaNameScalarFieldEnum {
  AttesterAddress = 'attesterAddress',
  Id = 'id',
  IsCreator = 'isCreator',
  Name = 'name',
  SchemaId = 'schemaId',
  Time = 'time'
}

export type SchemaNameScalarWhereInput = {
  AND?: InputMaybe<Array<SchemaNameScalarWhereInput>>;
  NOT?: InputMaybe<Array<SchemaNameScalarWhereInput>>;
  OR?: InputMaybe<Array<SchemaNameScalarWhereInput>>;
  attesterAddress?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isCreator?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  schemaId?: InputMaybe<StringFilter>;
  time?: InputMaybe<IntFilter>;
};

export type SchemaNameScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SchemaNameScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SchemaNameScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SchemaNameScalarWhereWithAggregatesInput>>;
  attesterAddress?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  isCreator?: InputMaybe<BoolWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  schemaId?: InputMaybe<StringWithAggregatesFilter>;
  time?: InputMaybe<IntWithAggregatesFilter>;
};

export type SchemaNameSumAggregate = {
  __typename?: 'SchemaNameSumAggregate';
  time?: Maybe<Scalars['Int']['output']>;
};

export type SchemaNameSumOrderByAggregateInput = {
  time?: InputMaybe<SortOrder>;
};

export type SchemaNameUpdateInput = {
  attesterAddress?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isCreator?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  schema?: InputMaybe<SchemaUpdateOneRequiredWithoutSchemaNamesNestedInput>;
  time?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SchemaNameUpdateManyMutationInput = {
  attesterAddress?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isCreator?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  time?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SchemaNameUpdateManyWithWhereWithoutSchemaInput = {
  data: SchemaNameUpdateManyMutationInput;
  where: SchemaNameScalarWhereInput;
};

export type SchemaNameUpdateManyWithoutSchemaNestedInput = {
  connect?: InputMaybe<Array<SchemaNameWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SchemaNameCreateOrConnectWithoutSchemaInput>>;
  create?: InputMaybe<Array<SchemaNameCreateWithoutSchemaInput>>;
  createMany?: InputMaybe<SchemaNameCreateManySchemaInputEnvelope>;
  delete?: InputMaybe<Array<SchemaNameWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SchemaNameScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SchemaNameWhereUniqueInput>>;
  set?: InputMaybe<Array<SchemaNameWhereUniqueInput>>;
  update?: InputMaybe<Array<SchemaNameUpdateWithWhereUniqueWithoutSchemaInput>>;
  updateMany?: InputMaybe<Array<SchemaNameUpdateManyWithWhereWithoutSchemaInput>>;
  upsert?: InputMaybe<Array<SchemaNameUpsertWithWhereUniqueWithoutSchemaInput>>;
};

export type SchemaNameUpdateWithWhereUniqueWithoutSchemaInput = {
  data: SchemaNameUpdateWithoutSchemaInput;
  where: SchemaNameWhereUniqueInput;
};

export type SchemaNameUpdateWithoutSchemaInput = {
  attesterAddress?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isCreator?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  time?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SchemaNameUpsertWithWhereUniqueWithoutSchemaInput = {
  create: SchemaNameCreateWithoutSchemaInput;
  update: SchemaNameUpdateWithoutSchemaInput;
  where: SchemaNameWhereUniqueInput;
};

export type SchemaNameWhereInput = {
  AND?: InputMaybe<Array<SchemaNameWhereInput>>;
  NOT?: InputMaybe<Array<SchemaNameWhereInput>>;
  OR?: InputMaybe<Array<SchemaNameWhereInput>>;
  attesterAddress?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isCreator?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  schema?: InputMaybe<SchemaRelationFilter>;
  schemaId?: InputMaybe<StringFilter>;
  time?: InputMaybe<IntFilter>;
};

export type SchemaNameWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type SchemaOrderByWithAggregationInput = {
  _avg?: InputMaybe<SchemaAvgOrderByAggregateInput>;
  _count?: InputMaybe<SchemaCountOrderByAggregateInput>;
  _max?: InputMaybe<SchemaMaxOrderByAggregateInput>;
  _min?: InputMaybe<SchemaMinOrderByAggregateInput>;
  _sum?: InputMaybe<SchemaSumOrderByAggregateInput>;
  creator?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  index?: InputMaybe<SortOrder>;
  resolver?: InputMaybe<SortOrder>;
  revocable?: InputMaybe<SortOrder>;
  schema?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  txid?: InputMaybe<SortOrder>;
};

export type SchemaOrderByWithRelationInput = {
  attestations?: InputMaybe<AttestationOrderByRelationAggregateInput>;
  creator?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  index?: InputMaybe<SortOrder>;
  resolver?: InputMaybe<SortOrder>;
  revocable?: InputMaybe<SortOrder>;
  schema?: InputMaybe<SortOrder>;
  schemaNames?: InputMaybe<SchemaNameOrderByRelationAggregateInput>;
  time?: InputMaybe<SortOrder>;
  txid?: InputMaybe<SortOrder>;
};

export type SchemaRelationFilter = {
  is?: InputMaybe<SchemaWhereInput>;
  isNot?: InputMaybe<SchemaWhereInput>;
};

export enum SchemaScalarFieldEnum {
  Creator = 'creator',
  Id = 'id',
  Index = 'index',
  Resolver = 'resolver',
  Revocable = 'revocable',
  Schema = 'schema',
  Time = 'time',
  Txid = 'txid'
}

export type SchemaScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SchemaScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SchemaScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SchemaScalarWhereWithAggregatesInput>>;
  creator?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  index?: InputMaybe<StringWithAggregatesFilter>;
  resolver?: InputMaybe<StringWithAggregatesFilter>;
  revocable?: InputMaybe<BoolWithAggregatesFilter>;
  schema?: InputMaybe<StringWithAggregatesFilter>;
  time?: InputMaybe<IntWithAggregatesFilter>;
  txid?: InputMaybe<StringWithAggregatesFilter>;
};

export type SchemaSumAggregate = {
  __typename?: 'SchemaSumAggregate';
  time?: Maybe<Scalars['Int']['output']>;
};

export type SchemaSumOrderByAggregateInput = {
  time?: InputMaybe<SortOrder>;
};

export type SchemaUpdateInput = {
  attestations?: InputMaybe<AttestationUpdateManyWithoutSchemaNestedInput>;
  creator?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  index?: InputMaybe<StringFieldUpdateOperationsInput>;
  resolver?: InputMaybe<StringFieldUpdateOperationsInput>;
  revocable?: InputMaybe<BoolFieldUpdateOperationsInput>;
  schema?: InputMaybe<StringFieldUpdateOperationsInput>;
  schemaNames?: InputMaybe<SchemaNameUpdateManyWithoutSchemaNestedInput>;
  time?: InputMaybe<IntFieldUpdateOperationsInput>;
  txid?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SchemaUpdateManyMutationInput = {
  creator?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  index?: InputMaybe<StringFieldUpdateOperationsInput>;
  resolver?: InputMaybe<StringFieldUpdateOperationsInput>;
  revocable?: InputMaybe<BoolFieldUpdateOperationsInput>;
  schema?: InputMaybe<StringFieldUpdateOperationsInput>;
  time?: InputMaybe<IntFieldUpdateOperationsInput>;
  txid?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SchemaUpdateOneRequiredWithoutAttestationsNestedInput = {
  connect?: InputMaybe<SchemaWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SchemaCreateOrConnectWithoutAttestationsInput>;
  create?: InputMaybe<SchemaCreateWithoutAttestationsInput>;
  update?: InputMaybe<SchemaUpdateWithoutAttestationsInput>;
  upsert?: InputMaybe<SchemaUpsertWithoutAttestationsInput>;
};

export type SchemaUpdateOneRequiredWithoutSchemaNamesNestedInput = {
  connect?: InputMaybe<SchemaWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SchemaCreateOrConnectWithoutSchemaNamesInput>;
  create?: InputMaybe<SchemaCreateWithoutSchemaNamesInput>;
  update?: InputMaybe<SchemaUpdateWithoutSchemaNamesInput>;
  upsert?: InputMaybe<SchemaUpsertWithoutSchemaNamesInput>;
};

export type SchemaUpdateWithoutAttestationsInput = {
  creator?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  index?: InputMaybe<StringFieldUpdateOperationsInput>;
  resolver?: InputMaybe<StringFieldUpdateOperationsInput>;
  revocable?: InputMaybe<BoolFieldUpdateOperationsInput>;
  schema?: InputMaybe<StringFieldUpdateOperationsInput>;
  schemaNames?: InputMaybe<SchemaNameUpdateManyWithoutSchemaNestedInput>;
  time?: InputMaybe<IntFieldUpdateOperationsInput>;
  txid?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SchemaUpdateWithoutSchemaNamesInput = {
  attestations?: InputMaybe<AttestationUpdateManyWithoutSchemaNestedInput>;
  creator?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  index?: InputMaybe<StringFieldUpdateOperationsInput>;
  resolver?: InputMaybe<StringFieldUpdateOperationsInput>;
  revocable?: InputMaybe<BoolFieldUpdateOperationsInput>;
  schema?: InputMaybe<StringFieldUpdateOperationsInput>;
  time?: InputMaybe<IntFieldUpdateOperationsInput>;
  txid?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SchemaUpsertWithoutAttestationsInput = {
  create: SchemaCreateWithoutAttestationsInput;
  update: SchemaUpdateWithoutAttestationsInput;
};

export type SchemaUpsertWithoutSchemaNamesInput = {
  create: SchemaCreateWithoutSchemaNamesInput;
  update: SchemaUpdateWithoutSchemaNamesInput;
};

export type SchemaWhereInput = {
  AND?: InputMaybe<Array<SchemaWhereInput>>;
  NOT?: InputMaybe<Array<SchemaWhereInput>>;
  OR?: InputMaybe<Array<SchemaWhereInput>>;
  attestations?: InputMaybe<AttestationListRelationFilter>;
  creator?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  index?: InputMaybe<StringFilter>;
  resolver?: InputMaybe<StringFilter>;
  revocable?: InputMaybe<BoolFilter>;
  schema?: InputMaybe<StringFilter>;
  schemaNames?: InputMaybe<SchemaNameListRelationFilter>;
  time?: InputMaybe<IntFilter>;
  txid?: InputMaybe<StringFilter>;
};

export type SchemaWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceStat = {
  __typename?: 'ServiceStat';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ServiceStatCountAggregate = {
  __typename?: 'ServiceStatCountAggregate';
  _all: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  value: Scalars['Int']['output'];
};

export type ServiceStatCountOrderByAggregateInput = {
  name?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type ServiceStatCreateInput = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type ServiceStatCreateManyInput = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type ServiceStatGroupBy = {
  __typename?: 'ServiceStatGroupBy';
  _count?: Maybe<ServiceStatCountAggregate>;
  _max?: Maybe<ServiceStatMaxAggregate>;
  _min?: Maybe<ServiceStatMinAggregate>;
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ServiceStatMaxAggregate = {
  __typename?: 'ServiceStatMaxAggregate';
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type ServiceStatMaxOrderByAggregateInput = {
  name?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type ServiceStatMinAggregate = {
  __typename?: 'ServiceStatMinAggregate';
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type ServiceStatMinOrderByAggregateInput = {
  name?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type ServiceStatOrderByWithAggregationInput = {
  _count?: InputMaybe<ServiceStatCountOrderByAggregateInput>;
  _max?: InputMaybe<ServiceStatMaxOrderByAggregateInput>;
  _min?: InputMaybe<ServiceStatMinOrderByAggregateInput>;
  name?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type ServiceStatOrderByWithRelationInput = {
  name?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export enum ServiceStatScalarFieldEnum {
  Name = 'name',
  Value = 'value'
}

export type ServiceStatScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ServiceStatScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ServiceStatScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ServiceStatScalarWhereWithAggregatesInput>>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  value?: InputMaybe<StringWithAggregatesFilter>;
};

export type ServiceStatUpdateInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ServiceStatUpdateManyMutationInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ServiceStatWhereInput = {
  AND?: InputMaybe<Array<ServiceStatWhereInput>>;
  NOT?: InputMaybe<Array<ServiceStatWhereInput>>;
  OR?: InputMaybe<Array<ServiceStatWhereInput>>;
  name?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringFilter>;
};

export type ServiceStatWhereUniqueInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Simple_String_Comparator_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  _ne?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Snapshot = {
  __typename?: 'Snapshot';
  amount?: Maybe<Scalars['String']['output']>;
  blockchain?: Maybe<TokenBlockchain>;
  chainId?: Maybe<Scalars['String']['output']>;
  endBlockNumber?: Maybe<Scalars['Int']['output']>;
  endBlockTimestamp?: Maybe<Scalars['Time']['output']>;
  formattedAmount?: Maybe<Scalars['Float']['output']>;
  /** Airstack unique identifier for the data point */
  id: Scalars['ID']['output'];
  owner: Wallet;
  startBlockNumber?: Maybe<Scalars['Int']['output']>;
  startBlockTimestamp?: Maybe<Scalars['Time']['output']>;
  token?: Maybe<Token>;
  tokenAddress: Scalars['Address']['output'];
  tokenId?: Maybe<Scalars['String']['output']>;
  tokenNft?: Maybe<TokenNft>;
  tokenType?: Maybe<TokenType>;
};

export enum SnapshotBlockchain {
  Base = 'base',
  Ethereum = 'ethereum',
  Gold = 'gold',
  Zora = 'zora'
}

export type SnapshotFilter = {
  blockNumber?: InputMaybe<Range_Comparator_Exp>;
  date?: InputMaybe<Date_Range_Comparator_Exp>;
  owner?: InputMaybe<Identity_Comparator_Exp>;
  timestamp?: InputMaybe<Time_Range_Comparator_Exp>;
  tokenAddress?: InputMaybe<Address_Comparator_Exp>;
  tokenId?: InputMaybe<String_Comparator_Exp>;
  tokenType?: InputMaybe<TokenType_Comparator_Exp>;
};

export type SnapshotsInput = {
  blockchain: SnapshotBlockchain;
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter: SnapshotFilter;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type SnapshotsOutput = {
  __typename?: 'SnapshotsOutput';
  Snapshot?: Maybe<Array<Snapshot>>;
  pageInfo?: Maybe<PageInfo>;
};

export type Social = {
  __typename?: 'Social';
  /** Blockchain associated with the social identity */
  blockchain?: Maybe<Blockchain>;
  /** Unique identifier for the blockchain */
  chainId?: Maybe<Scalars['String']['output']>;
  connectedAddresses?: Maybe<Array<ConnectedAddress>>;
  coverImageContentValue?: Maybe<Media>;
  coverImageURI?: Maybe<Scalars['String']['output']>;
  /** Social DApp name */
  dappName?: Maybe<SocialDappName>;
  /** Social DApp slug (contract version) */
  dappSlug?: Maybe<SocialDappSlug>;
  /** Airstack unique dapp version number */
  dappVersion?: Maybe<Scalars['String']['output']>;
  fnames?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  followerCount?: Maybe<Scalars['Int']['output']>;
  followerTokenAddress?: Maybe<Scalars['Address']['output']>;
  followers?: Maybe<SocialFollowerOutput>;
  followingCount?: Maybe<Scalars['Int']['output']>;
  followings?: Maybe<SocialFollowingOutput>;
  handleTokenAddress?: Maybe<Scalars['Address']['output']>;
  handleTokenId?: Maybe<Scalars['String']['output']>;
  /** Airstack unique identifier for the data point */
  id?: Maybe<Scalars['ID']['output']>;
  /** Blockchain address, ENS domain name, social identity such as Farcaster (for Farcaster use 'fc_fid:' prefix followed by the Farcaster user ID like fc_fid:5650, or use 'fc_fname:' prefix followed by the Farcaster user ID like 'fc_fname:vbuterin') or Lens (e.g. 'stani.lens) */
  identity?: Maybe<Scalars['Identity']['output']>;
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  isFarcasterPowerUser?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  metadataURI?: Maybe<Scalars['String']['output']>;
  profileBio?: Maybe<Scalars['String']['output']>;
  profileCreatedAtBlockNumber?: Maybe<Scalars['Int']['output']>;
  profileCreatedAtBlockTimestamp?: Maybe<Scalars['Time']['output']>;
  profileDisplayName?: Maybe<Scalars['String']['output']>;
  profileHandle?: Maybe<Scalars['String']['output']>;
  profileImage?: Maybe<Scalars['String']['output']>;
  profileImageContentValue?: Maybe<Media>;
  profileLastUpdatedAtBlockNumber?: Maybe<Scalars['Int']['output']>;
  profileLastUpdatedAtBlockTimestamp?: Maybe<Scalars['Time']['output']>;
  profileMetadata?: Maybe<Scalars['Map']['output']>;
  profileName?: Maybe<Scalars['String']['output']>;
  profileTokenAddress?: Maybe<Scalars['String']['output']>;
  profileTokenId?: Maybe<Scalars['String']['output']>;
  profileTokenIdHex?: Maybe<Scalars['String']['output']>;
  profileTokenUri?: Maybe<Scalars['String']['output']>;
  profileUrl?: Maybe<Scalars['String']['output']>;
  socialCapital?: Maybe<SocialCapital>;
  twitterUserName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Time']['output']>;
  userAddress?: Maybe<Scalars['Address']['output']>;
  userAddressDetails?: Maybe<Wallet>;
  userAssociatedAddressDetails?: Maybe<Array<Wallet>>;
  /** blockchain addresses associated with the social profile */
  userAssociatedAddresses?: Maybe<Array<Scalars['Address']['output']>>;
  userCreatedAtBlockNumber?: Maybe<Scalars['Int']['output']>;
  userCreatedAtBlockTimestamp?: Maybe<Scalars['Time']['output']>;
  userHomeURL?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  userLastUpdatedAtBlockNumber?: Maybe<Scalars['Int']['output']>;
  userLastUpdatedAtBlockTimestamp?: Maybe<Scalars['Time']['output']>;
  userRecoveryAddress?: Maybe<Scalars['Address']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};


export type SocialFollowersArgs = {
  input?: InputMaybe<SocialFollowerNestedInput>;
};


export type SocialFollowingsArgs = {
  input?: InputMaybe<SocialFollowingNestedInput>;
};

export type SocialCapital = {
  __typename?: 'SocialCapital';
  socialCapitalRank?: Maybe<Scalars['Int']['output']>;
  socialCapitalScore?: Maybe<Scalars['Float']['output']>;
  socialCapitalScoreRaw?: Maybe<Scalars['String']['output']>;
};

export type SocialCapitalValue = {
  __typename?: 'SocialCapitalValue';
  formattedValue?: Maybe<Scalars['Float']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  rawValue?: Maybe<Scalars['String']['output']>;
};

export enum SocialDappName {
  Farcaster = 'farcaster',
  Lens = 'lens'
}

export type SocialDappName_Comparator_Exp = {
  _eq?: InputMaybe<SocialDappName>;
  _in?: InputMaybe<Array<SocialDappName>>;
};

export enum SocialDappSlug {
  FarcasterGoerli = 'farcaster_goerli',
  FarcasterOptimism = 'farcaster_optimism',
  FarcasterV2Optimism = 'farcaster_v2_optimism',
  FarcasterV3Optimism = 'farcaster_v3_optimism',
  LensPolygon = 'lens_polygon',
  LensV2Polygon = 'lens_v2_polygon'
}

export type SocialDappSlug_Comparator_Exp = {
  _eq?: InputMaybe<SocialDappSlug>;
  _in?: InputMaybe<Array<SocialDappSlug>>;
};

export type SocialFilter = {
  dappName?: InputMaybe<SocialDappName_Comparator_Exp>;
  dappSlug?: InputMaybe<SocialDappSlug_Comparator_Exp>;
  followerCount?: InputMaybe<Int_Comparator_Exp>;
  followingCount?: InputMaybe<Int_Comparator_Exp>;
  identity?: InputMaybe<Identity_Comparator_Exp>;
  isDefault?: InputMaybe<Boolean_Comparator_Exp>;
  profileCreatedAtBlockTimestamp?: InputMaybe<Time_Comparator_Exp>;
  profileName?: InputMaybe<Regex_String_Comparator_Exp>;
  socialCapitalRank?: InputMaybe<Int_Comparator_Exp>;
  socialCapitalScore?: InputMaybe<Float_Comparator_Exp>;
  updatedAt?: InputMaybe<Time_Comparator_Exp>;
  userAssociatedAddresses?: InputMaybe<Address_Comparator_Exp>;
  userId?: InputMaybe<String_Comparator_Exp>;
};

export type SocialFollower = {
  __typename?: 'SocialFollower';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  blockchain?: Maybe<EveryBlockchain>;
  dappName?: Maybe<Scalars['String']['output']>;
  dappSlug?: Maybe<Scalars['String']['output']>;
  followerAddress?: Maybe<Wallet>;
  followerProfileId?: Maybe<Scalars['String']['output']>;
  followerSince?: Maybe<Scalars['Time']['output']>;
  followerTokenId?: Maybe<Scalars['String']['output']>;
  followingAddress?: Maybe<Wallet>;
  followingProfileId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SocialFollowerFilter = {
  blockNumber?: InputMaybe<Int_Comparator_Exp>;
  dappName?: InputMaybe<SocialDappName_Comparator_Exp>;
  dappSlug?: InputMaybe<SocialDappSlug_Comparator_Exp>;
  followerProfileId?: InputMaybe<String_Comparator_Exp>;
  followerSince?: InputMaybe<Time_Comparator_Exp>;
  followingProfileId?: InputMaybe<String_Comparator_Exp>;
  identity?: InputMaybe<Identity_Comparator_Exp>;
};

export type SocialFollowerInput = {
  blockchain: EveryBlockchain;
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter: SocialFollowerFilter;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<SocialFollowerOrderBy>>;
};

export type SocialFollowerNestedInput = {
  blockchain?: InputMaybe<EveryBlockchain>;
  filter?: InputMaybe<SocialFollowerFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<SocialFollowerOrderBy>>>;
};

export type SocialFollowerOrderBy = {
  blockNumber?: InputMaybe<OrderBy>;
  followerSince?: InputMaybe<OrderBy>;
};

export type SocialFollowerOutput = {
  __typename?: 'SocialFollowerOutput';
  Follower?: Maybe<Array<SocialFollower>>;
  pageInfo?: Maybe<PageInfo>;
};

export type SocialFollowing = {
  __typename?: 'SocialFollowing';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  blockchain?: Maybe<EveryBlockchain>;
  dappName?: Maybe<Scalars['String']['output']>;
  dappSlug?: Maybe<Scalars['String']['output']>;
  followerAddress?: Maybe<Wallet>;
  followerProfileId?: Maybe<Scalars['String']['output']>;
  followerTokenId?: Maybe<Scalars['String']['output']>;
  followingAddress?: Maybe<Wallet>;
  followingProfileId?: Maybe<Scalars['String']['output']>;
  followingSince?: Maybe<Scalars['Time']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SocialFollowingFilter = {
  blockNumber?: InputMaybe<Int_Comparator_Exp>;
  dappName?: InputMaybe<SocialDappName_Comparator_Exp>;
  dappSlug?: InputMaybe<SocialDappSlug_Comparator_Exp>;
  followerProfileId?: InputMaybe<String_Comparator_Exp>;
  followingProfileId?: InputMaybe<String_Comparator_Exp>;
  followingSince?: InputMaybe<Time_Comparator_Exp>;
  identity?: InputMaybe<Identity_Comparator_Exp>;
};

export type SocialFollowingInput = {
  blockchain: EveryBlockchain;
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter: SocialFollowingFilter;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<SocialFollowingOrderBy>>;
};

export type SocialFollowingNestedInput = {
  blockchain?: InputMaybe<EveryBlockchain>;
  filter?: InputMaybe<SocialFollowingFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<SocialFollowingOrderBy>>>;
};

export type SocialFollowingOrderBy = {
  blockNumber?: InputMaybe<OrderBy>;
  followingSince?: InputMaybe<OrderBy>;
};

export type SocialFollowingOutput = {
  __typename?: 'SocialFollowingOutput';
  Following?: Maybe<Array<SocialFollowing>>;
  pageInfo?: Maybe<PageInfo>;
};

export type SocialOrderBy = {
  followerCount?: InputMaybe<OrderBy>;
  followingCount?: InputMaybe<OrderBy>;
  profileCreatedAtBlockTimestamp?: InputMaybe<OrderBy>;
  socialCapitalRank?: InputMaybe<OrderBy>;
  socialCapitalScore?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

export type SocialsInput = {
  blockchain: Blockchain;
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter: SocialFilter;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<SocialOrderBy>>;
};

export type SocialsNestedInput = {
  blockchain?: InputMaybe<Blockchain>;
  filter?: InputMaybe<SocialFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type SocialsOutput = {
  __typename?: 'SocialsOutput';
  Social?: Maybe<Array<Social>>;
  pageInfo?: Maybe<PageInfo>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type String_Comparator_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _ne?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type String_Eq_Comparator_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
};

export type String_Eq_In_Comparator_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum TimeFrame {
  EightHours = 'eight_hours',
  OneDay = 'one_day',
  OneHour = 'one_hour',
  SevenDays = 'seven_days',
  TwoDays = 'two_days',
  TwoHours = 'two_hours'
}

export type Time_Comparator_Exp = {
  _eq?: InputMaybe<Scalars['Time']['input']>;
  _gt?: InputMaybe<Scalars['Time']['input']>;
  _gte?: InputMaybe<Scalars['Time']['input']>;
  _in?: InputMaybe<Array<Scalars['Time']['input']>>;
  _lt?: InputMaybe<Scalars['Time']['input']>;
  _lte?: InputMaybe<Scalars['Time']['input']>;
  _ne?: InputMaybe<Scalars['Time']['input']>;
  _nin?: InputMaybe<Array<Scalars['Time']['input']>>;
};

export type Time_Range_Comparator_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
};

export type Timestamp = {
  __typename?: 'Timestamp';
  from: Scalars['String']['output'];
  id: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  tree: Scalars['String']['output'];
  txid: Scalars['String']['output'];
};

export type TimestampAvgAggregate = {
  __typename?: 'TimestampAvgAggregate';
  timestamp?: Maybe<Scalars['Float']['output']>;
};

export type TimestampAvgOrderByAggregateInput = {
  timestamp?: InputMaybe<SortOrder>;
};

export type TimestampCountAggregate = {
  __typename?: 'TimestampCountAggregate';
  _all: Scalars['Int']['output'];
  from: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  timestamp: Scalars['Int']['output'];
  tree: Scalars['Int']['output'];
  txid: Scalars['Int']['output'];
};

export type TimestampCountOrderByAggregateInput = {
  from?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  tree?: InputMaybe<SortOrder>;
  txid?: InputMaybe<SortOrder>;
};

export type TimestampCreateInput = {
  from: Scalars['String']['input'];
  id: Scalars['String']['input'];
  timestamp: Scalars['Int']['input'];
  tree?: InputMaybe<Scalars['String']['input']>;
  txid: Scalars['String']['input'];
};

export type TimestampCreateManyInput = {
  from: Scalars['String']['input'];
  id: Scalars['String']['input'];
  timestamp: Scalars['Int']['input'];
  tree?: InputMaybe<Scalars['String']['input']>;
  txid: Scalars['String']['input'];
};

export type TimestampGroupBy = {
  __typename?: 'TimestampGroupBy';
  _avg?: Maybe<TimestampAvgAggregate>;
  _count?: Maybe<TimestampCountAggregate>;
  _max?: Maybe<TimestampMaxAggregate>;
  _min?: Maybe<TimestampMinAggregate>;
  _sum?: Maybe<TimestampSumAggregate>;
  from: Scalars['String']['output'];
  id: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  tree: Scalars['String']['output'];
  txid: Scalars['String']['output'];
};

export type TimestampMaxAggregate = {
  __typename?: 'TimestampMaxAggregate';
  from?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['Int']['output']>;
  tree?: Maybe<Scalars['String']['output']>;
  txid?: Maybe<Scalars['String']['output']>;
};

export type TimestampMaxOrderByAggregateInput = {
  from?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  tree?: InputMaybe<SortOrder>;
  txid?: InputMaybe<SortOrder>;
};

export type TimestampMinAggregate = {
  __typename?: 'TimestampMinAggregate';
  from?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['Int']['output']>;
  tree?: Maybe<Scalars['String']['output']>;
  txid?: Maybe<Scalars['String']['output']>;
};

export type TimestampMinOrderByAggregateInput = {
  from?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  tree?: InputMaybe<SortOrder>;
  txid?: InputMaybe<SortOrder>;
};

export type TimestampOrderByWithAggregationInput = {
  _avg?: InputMaybe<TimestampAvgOrderByAggregateInput>;
  _count?: InputMaybe<TimestampCountOrderByAggregateInput>;
  _max?: InputMaybe<TimestampMaxOrderByAggregateInput>;
  _min?: InputMaybe<TimestampMinOrderByAggregateInput>;
  _sum?: InputMaybe<TimestampSumOrderByAggregateInput>;
  from?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  tree?: InputMaybe<SortOrder>;
  txid?: InputMaybe<SortOrder>;
};

export type TimestampOrderByWithRelationInput = {
  from?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  tree?: InputMaybe<SortOrder>;
  txid?: InputMaybe<SortOrder>;
};

export enum TimestampScalarFieldEnum {
  From = 'from',
  Id = 'id',
  Timestamp = 'timestamp',
  Tree = 'tree',
  Txid = 'txid'
}

export type TimestampScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TimestampScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TimestampScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TimestampScalarWhereWithAggregatesInput>>;
  from?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  timestamp?: InputMaybe<IntWithAggregatesFilter>;
  tree?: InputMaybe<StringWithAggregatesFilter>;
  txid?: InputMaybe<StringWithAggregatesFilter>;
};

export type TimestampSumAggregate = {
  __typename?: 'TimestampSumAggregate';
  timestamp?: Maybe<Scalars['Int']['output']>;
};

export type TimestampSumOrderByAggregateInput = {
  timestamp?: InputMaybe<SortOrder>;
};

export type TimestampUpdateInput = {
  from?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<IntFieldUpdateOperationsInput>;
  tree?: InputMaybe<StringFieldUpdateOperationsInput>;
  txid?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TimestampUpdateManyMutationInput = {
  from?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<IntFieldUpdateOperationsInput>;
  tree?: InputMaybe<StringFieldUpdateOperationsInput>;
  txid?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TimestampWhereInput = {
  AND?: InputMaybe<Array<TimestampWhereInput>>;
  NOT?: InputMaybe<Array<TimestampWhereInput>>;
  OR?: InputMaybe<Array<TimestampWhereInput>>;
  from?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<IntFilter>;
  tree?: InputMaybe<StringFilter>;
  txid?: InputMaybe<StringFilter>;
};

export type TimestampWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Token = {
  __typename?: 'Token';
  /** Smart contract address of the token */
  address: Scalars['Address']['output'];
  /** Base URI of the token contract */
  baseURI?: Maybe<Scalars['String']['output']>;
  /** Blockchain where the token smart contract is deployed */
  blockchain?: Maybe<TokenBlockchain>;
  /** Unique identifier for the blockchain */
  chainId?: Maybe<Scalars['String']['output']>;
  /** Token contract metadata object */
  contractMetaData?: Maybe<ContractMetadata>;
  /** URI for the token's contract metadata */
  contractMetaDataURI?: Maybe<Scalars['String']['output']>;
  /** The number of decimal places this token uses, default to 18 */
  decimals?: Maybe<Scalars['Int']['output']>;
  /** Airstack unique identifier for the contract */
  id?: Maybe<Scalars['ID']['output']>;
  /** Indicates if the token is set to be spam - true or false */
  isSpam?: Maybe<Scalars['Boolean']['output']>;
  /** Block number of the token's most recent transfer */
  lastTransferBlock?: Maybe<Scalars['Int']['output']>;
  /** Transaction hash of the token's most recent transfer */
  lastTransferHash?: Maybe<Scalars['String']['output']>;
  /** Timestamp of the token's most recent transfer */
  lastTransferTimestamp?: Maybe<Scalars['Time']['output']>;
  /** Logo image for the contract in various sizes (if available) */
  logo?: Maybe<LogoSizes>;
  /** Name of the token, mirrored from the smart contract */
  name?: Maybe<Scalars['String']['output']>;
  /** The owner of the token contract */
  owner?: Maybe<Wallet>;
  /** off-chain data for the token project */
  projectDetails?: Maybe<ProjectDetails>;
  /** Token contract metadata as it appears inside the contract */
  rawContractMetaData?: Maybe<Scalars['Map']['output']>;
  /** Symbol of the token, mirrored from the smart contract */
  symbol?: Maybe<Scalars['String']['output']>;
  /** Nested Query - allows querying the tokenBalance information */
  tokenBalances?: Maybe<Array<TokenBalance>>;
  /** Nested Query - allows querying the tokenNFTs information */
  tokenNfts?: Maybe<Array<TokenNft>>;
  /** Returns count of all NFT token attribute types and values for the given smart contract */
  tokenTraits?: Maybe<Scalars['Map']['output']>;
  /** Amount of tokens in the protocol */
  totalSupply?: Maybe<Scalars['String']['output']>;
  /** Token type: ERC20, ERC721, or ERC1155 */
  type?: Maybe<TokenType>;
};


export type TokenTokenBalancesArgs = {
  input?: InputMaybe<TokenBalancesNestedInput>;
};


export type TokenTokenNftsArgs = {
  input?: InputMaybe<TokenNftsNestedInput>;
};

export type TokenBalance = {
  __typename?: 'TokenBalance';
  /** Token amount the address currently holds */
  amount: Scalars['String']['output'];
  /** Blockchain where the token smart contract is deployed */
  blockchain?: Maybe<TokenBlockchain>;
  /** Unique identifier for the blockchain */
  chainId: Scalars['String']['output'];
  /** Formatted token balance in decimals */
  formattedAmount?: Maybe<Scalars['Float']['output']>;
  /** Airstack unique identifier for the data point */
  id: Scalars['ID']['output'];
  /** Block number of the latest token balance change happened */
  lastUpdatedBlock: Scalars['Int']['output'];
  /** Timestamp of the latest token balance change happened */
  lastUpdatedTimestamp?: Maybe<Scalars['Time']['output']>;
  /** Nested Query allowing to retrieve address, domain names, social profiles of the owner */
  owner: Wallet;
  /** Nested Query - allows retrieving token contract level data */
  token?: Maybe<Token>;
  /** Smart contract address of the token */
  tokenAddress: Scalars['Address']['output'];
  /** Unique NFT token ID */
  tokenId?: Maybe<Scalars['String']['output']>;
  /** Nested Query - allows retrieving token NFT contract level data, such as images, traits, and so on */
  tokenNfts?: Maybe<TokenNft>;
  /** Nested Query - allows retrieving token transfer history */
  tokenTransfers?: Maybe<Array<TokenTransfer>>;
  /** Token type: ERC20, ERC721, or ERC1155 */
  tokenType?: Maybe<TokenType>;
};


export type TokenBalanceTokenTransfersArgs = {
  input?: InputMaybe<TokenTransfersNestedInput>;
};

export type TokenBalanceFilter = {
  formattedAmount?: InputMaybe<Float_Comparator_Exp>;
  lastUpdatedTimestamp?: InputMaybe<Time_Comparator_Exp>;
  owner?: InputMaybe<Identity_Comparator_Exp>;
  tokenAddress?: InputMaybe<Address_Comparator_Exp>;
  tokenId?: InputMaybe<String_Comparator_Exp>;
  tokenType?: InputMaybe<TokenType_Comparator_Exp>;
};

export type TokenBalanceOrderBy = {
  lastUpdatedTimestamp?: InputMaybe<OrderBy>;
};

export type TokenBalancesInput = {
  blockchain: TokenBlockchain;
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter: TokenBalanceFilter;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<TokenBalanceOrderBy>>;
};

export type TokenBalancesNestedInput = {
  blockchain?: InputMaybe<TokenBlockchain>;
  filter?: InputMaybe<TokenBalanceFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<TokenBalanceOrderBy>>>;
};

export type TokenBalancesOutput = {
  __typename?: 'TokenBalancesOutput';
  TokenBalance?: Maybe<Array<TokenBalance>>;
  pageInfo?: Maybe<PageInfo>;
};

export enum TokenBlockchain {
  Base = 'base',
  Degen = 'degen',
  Ethereum = 'ethereum',
  Gold = 'gold',
  Ham = 'ham',
  Zora = 'zora'
}

export type TokenFilter = {
  address?: InputMaybe<Address_Comparator_Exp>;
  isSpam?: InputMaybe<Boolean_Comparator_Exp>;
  name?: InputMaybe<String_Comparator_Exp>;
  owner?: InputMaybe<Identity_Comparator_Exp>;
  symbol?: InputMaybe<String_Comparator_Exp>;
  type?: InputMaybe<TokenType_Comparator_Exp>;
};

export type TokenNft = {
  __typename?: 'TokenNft';
  /** Smart contract address of the token */
  address: Scalars['Address']['output'];
  /** Blockchain where the token smart contract is deployed */
  blockchain?: Maybe<TokenBlockchain>;
  /** Unique identifier for the blockchain */
  chainId: Scalars['String']['output'];
  /** Content type of the NFT token (image, video, audio, etc.) */
  contentType?: Maybe<Scalars['String']['output']>;
  /** NFT Media - resized images, animation, videos, etc. */
  contentValue?: Maybe<Media>;
  /** Nested Query - allows querying the erc6551 account */
  erc6551Accounts?: Maybe<Array<Account>>;
  /** Airstack unique identifier for the NFT token */
  id: Scalars['ID']['output'];
  /** Block number of the NFT token most recent transfer */
  lastTransferBlock?: Maybe<Scalars['Int']['output']>;
  /** Transaction hash of the NFT token most recent transfer */
  lastTransferHash?: Maybe<Scalars['String']['output']>;
  /** Timestamp of the NFT token most recent transfer */
  lastTransferTimestamp?: Maybe<Scalars['Time']['output']>;
  /** NFT token metadata and attributes */
  metaData?: Maybe<NftMetadata>;
  /** NFT token metadata, mirrored from the smart contract */
  rawMetaData?: Maybe<Scalars['Map']['output']>;
  /** Nested Query - allows retrieving token contract level data */
  token?: Maybe<Token>;
  /** Nested Query - allows querying the tokenBalance information */
  tokenBalances?: Maybe<Array<TokenBalance>>;
  /** Unique NFT token ID */
  tokenId: Scalars['String']['output'];
  /** Nested Query - allows querying the tokenTransfer information */
  tokenTransfers?: Maybe<Array<TokenTransfer>>;
  /** NFT token URI */
  tokenURI?: Maybe<Scalars['String']['output']>;
  /** Amount of NFT tokens in the protocol */
  totalSupply?: Maybe<Scalars['String']['output']>;
  /** NFT Token type: ERC721, or ERC1155 */
  type?: Maybe<TokenType>;
};


export type TokenNftErc6551AccountsArgs = {
  input?: InputMaybe<AccountsNestedInput>;
};


export type TokenNftTokenBalancesArgs = {
  input?: InputMaybe<TokenBalancesNestedInput>;
};


export type TokenNftTokenTransfersArgs = {
  input?: InputMaybe<TokenTransfersNestedInput>;
};

export type TokenNftFilter = {
  address?: InputMaybe<Address_Comparator_Exp>;
  metaData?: InputMaybe<NftMetadataFilter>;
  tokenId?: InputMaybe<String_Comparator_Exp>;
};

export type TokenNftOrderBy = {
  tokenId?: InputMaybe<OrderBy>;
};

export type TokenNftsInput = {
  blockchain: TokenBlockchain;
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter: TokenNftFilter;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<TokenNftOrderBy>>;
};

export type TokenNftsNestedInput = {
  blockchain?: InputMaybe<TokenBlockchain>;
  filter?: InputMaybe<TokenNftFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<TokenNftOrderBy>>>;
};

export type TokenNftsOutput = {
  __typename?: 'TokenNftsOutput';
  TokenNft?: Maybe<Array<TokenNft>>;
  pageInfo?: Maybe<PageInfo>;
};

export type TokenTransfer = {
  __typename?: 'TokenTransfer';
  /** Token amount in the transfer */
  amount?: Maybe<Scalars['String']['output']>;
  /** Token amounts in the transfer, if applicable. This mostly occurs in ERC1155 batch transfers */
  amounts?: Maybe<Array<Scalars['String']['output']>>;
  /** Block number of the token transfer */
  blockNumber?: Maybe<Scalars['Int']['output']>;
  /** Block timestamp of the token transfer */
  blockTimestamp?: Maybe<Scalars['Time']['output']>;
  /** Blockchain where the token transfer took place */
  blockchain?: Maybe<TokenBlockchain>;
  /** Unique identifier for the blockchain */
  chainId?: Maybe<Scalars['String']['output']>;
  /** Formatted transfer amount in decimals */
  formattedAmount?: Maybe<Scalars['Float']['output']>;
  /** Nested query - sender wallet related information, including address, domains, social profile, other token balances, and transfer history */
  from?: Maybe<Wallet>;
  /** Airstack unique identifier for the data point */
  id?: Maybe<Scalars['ID']['output']>;
  /** Nested query - operator wallet (if the transaction was facilitated via smart contract) related information, including address, domains, social profile, other token balances, and transfer history */
  operator?: Maybe<Wallet>;
  /** Nested query - recipient wallet related information, including address, domains, social profile, other token balances, and transfer history */
  to?: Maybe<Wallet>;
  /** Nested Query - allows retrieving token contract level data */
  token?: Maybe<Token>;
  /** Transferred token smart contract address */
  tokenAddress?: Maybe<Scalars['Address']['output']>;
  /** Unique NFT token ID */
  tokenId?: Maybe<Scalars['String']['output']>;
  /** Unique NFT token IDs if multiple NFTs were a part of the transfer */
  tokenIds?: Maybe<Array<Scalars['String']['output']>>;
  /** Nested Query - allows retrieving token Token NFT level data, such as images, traits, and so on for each unique NFT in the transfer */
  tokenNft?: Maybe<TokenNft>;
  /** Token type: ERC20, ERC721, or ERC1155 */
  tokenType?: Maybe<TokenType>;
  /** Token transfer transction hash */
  transactionHash: Scalars['String']['output'];
  /** Type of the token transfer */
  type?: Maybe<TokenTransferType>;
};

export type TokenTransferFilter = {
  blockTimestamp?: InputMaybe<Time_Comparator_Exp>;
  formattedAmount?: InputMaybe<Float_Comparator_Exp>;
  from?: InputMaybe<Identity_Comparator_Exp>;
  operator?: InputMaybe<Identity_Comparator_Exp>;
  to?: InputMaybe<Identity_Comparator_Exp>;
  tokenAddress?: InputMaybe<Address_Comparator_Exp>;
  tokenId?: InputMaybe<String_Comparator_Exp>;
  tokenType?: InputMaybe<TokenType_Comparator_Exp>;
  transactionHash?: InputMaybe<String_Comparator_Exp>;
  type?: InputMaybe<TokenTransferType_Comparator_Exp>;
};

export type TokenTransferOrderBy = {
  blockTimestamp?: InputMaybe<OrderBy>;
};

export enum TokenTransferType {
  Burn = 'BURN',
  Mint = 'MINT',
  Transfer = 'TRANSFER'
}

export type TokenTransferType_Comparator_Exp = {
  _eq?: InputMaybe<TokenTransferType>;
  _in?: InputMaybe<Array<TokenTransferType>>;
};

export type TokenTransfersInput = {
  blockchain: TokenBlockchain;
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter: TokenTransferFilter;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<TokenTransferOrderBy>>;
};

export type TokenTransfersNestedInput = {
  blockchain?: InputMaybe<TokenBlockchain>;
  filter?: InputMaybe<TokenTransferFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<TokenTransferOrderBy>>>;
};

export type TokenTransfersOutput = {
  __typename?: 'TokenTransfersOutput';
  TokenTransfer?: Maybe<Array<TokenTransfer>>;
  pageInfo?: Maybe<PageInfo>;
};

export enum TokenType {
  Erc20 = 'ERC20',
  Erc721 = 'ERC721',
  Erc1155 = 'ERC1155'
}

export type TokenType_Comparator_Exp = {
  _eq?: InputMaybe<TokenType>;
  _in?: InputMaybe<Array<TokenType>>;
};

export type TokensInput = {
  blockchain: TokenBlockchain;
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter: TokenFilter;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type TokensOutput = {
  __typename?: 'TokensOutput';
  Token?: Maybe<Array<Token>>;
  pageInfo?: Maybe<PageInfo>;
};

export enum TrendingBlockchain {
  Base = 'base',
  Degen = 'degen'
}

export type TrendingCast = {
  __typename?: 'TrendingCast';
  cast?: Maybe<FarcasterCast>;
  channel?: Maybe<FarcasterChannel>;
  criteria?: Maybe<Scalars['String']['output']>;
  criteriaCount?: Maybe<Scalars['Float']['output']>;
  fid?: Maybe<Scalars['Int']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  rootParentUrl?: Maybe<Scalars['String']['output']>;
  socialCapitalValueFormatted?: Maybe<Scalars['Float']['output']>;
  socialCapitalValueRaw?: Maybe<Scalars['String']['output']>;
  timeFrom?: Maybe<Scalars['Time']['output']>;
  timeTo?: Maybe<Scalars['Time']['output']>;
};

export type TrendingCastFilter = {
  fid?: InputMaybe<TrendingCast_Int_Comparator_Exp>;
  rootParentUrl?: InputMaybe<String_Eq_Comparator_Exp>;
};

export enum TrendingCastTimeFrame {
  EightHours = 'eight_hours',
  FourHours = 'four_hours',
  OneDay = 'one_day',
  OneHour = 'one_hour',
  SevenDays = 'seven_days',
  TwelveHours = 'twelve_hours',
  TwoDays = 'two_days',
  TwoHours = 'two_hours'
}

export type TrendingCast_Int_Comparator_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
};

export enum TrendingCastsCriteria {
  Likes = 'likes',
  LikesRecastsReplies = 'likes_recasts_replies',
  Recasts = 'recasts',
  Replies = 'replies',
  SocialCapitalValue = 'social_capital_value'
}

export type TrendingCastsInput = {
  blockchain: EveryBlockchain;
  criteria: TrendingCastsCriteria;
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TrendingCastFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  timeFrame: TrendingCastTimeFrame;
};

export type TrendingCastsOutput = {
  __typename?: 'TrendingCastsOutput';
  TrendingCast?: Maybe<Array<TrendingCast>>;
  pageInfo?: Maybe<PageInfo>;
};

export type TrendingFilter = {
  address?: InputMaybe<Trending_Comparator_Exp>;
};

export type TrendingMint = {
  __typename?: 'TrendingMint';
  address?: Maybe<Scalars['String']['output']>;
  audience?: Maybe<Scalars['String']['output']>;
  blockchain?: Maybe<Scalars['String']['output']>;
  chainId?: Maybe<Scalars['String']['output']>;
  criteria?: Maybe<Scalars['String']['output']>;
  criteriaCount?: Maybe<Scalars['Int']['output']>;
  erc1155TokenID?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  timeFrom?: Maybe<Scalars['Time']['output']>;
  timeTo?: Maybe<Scalars['Time']['output']>;
  token?: Maybe<Token>;
};

export enum TrendingMintsCriteria {
  TotalMints = 'total_mints',
  UniqueWallets = 'unique_wallets'
}

export type TrendingMintsInput = {
  audience: Audience;
  blockchain: TrendingBlockchain;
  criteria: TrendingMintsCriteria;
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TrendingFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  timeFrame: TimeFrame;
};

export type TrendingMintsOutput = {
  __typename?: 'TrendingMintsOutput';
  TrendingMint?: Maybe<Array<TrendingMint>>;
  pageInfo?: Maybe<PageInfo>;
};

export type TrendingSwap = {
  __typename?: 'TrendingSwap';
  address?: Maybe<Scalars['String']['output']>;
  blockchain?: Maybe<Scalars['String']['output']>;
  buyTransactionCount?: Maybe<Scalars['Int']['output']>;
  buyVolume?: Maybe<Scalars['Float']['output']>;
  chainId?: Maybe<Scalars['String']['output']>;
  criteria?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  sellTransactionCount?: Maybe<Scalars['Int']['output']>;
  sellVolume?: Maybe<Scalars['Float']['output']>;
  timeFrom?: Maybe<Scalars['Time']['output']>;
  timeTo?: Maybe<Scalars['Time']['output']>;
  token?: Maybe<Token>;
  totalTransactionCount?: Maybe<Scalars['Int']['output']>;
  totalUniqueWallets?: Maybe<Scalars['Int']['output']>;
  totalVolume?: Maybe<Scalars['Float']['output']>;
  uniqueBuyWallets?: Maybe<Scalars['Int']['output']>;
  uniqueSellWallets?: Maybe<Scalars['Int']['output']>;
};

export enum TrendingSwapsBlockchain {
  Base = 'base',
  Ethereum = 'ethereum'
}

export enum TrendingSwapsCriteria {
  BuyTransactionCount = 'buy_transaction_count',
  BuyVolume = 'buy_volume',
  SellTransactionCount = 'sell_transaction_count',
  SellVolume = 'sell_volume',
  TotalTransactionCount = 'total_transaction_count',
  TotalUniqueWallets = 'total_unique_wallets',
  TotalVolume = 'total_volume',
  UniqueBuyWallets = 'unique_buy_wallets',
  UniqueSellWallets = 'unique_sell_wallets'
}

export type TrendingSwapsFilter = {
  address?: InputMaybe<Trending_Comparator_Exp>;
};

export type TrendingSwapsInput = {
  blockchain: TrendingSwapsBlockchain;
  criteria: TrendingSwapsCriteria;
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TrendingSwapsFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  timeFrame: TimeFrame;
};

export type TrendingSwapsOutput = {
  __typename?: 'TrendingSwapsOutput';
  TrendingSwap?: Maybe<Array<TrendingSwap>>;
  pageInfo?: Maybe<PageInfo>;
};

export type TrendingToken = {
  __typename?: 'TrendingToken';
  address?: Maybe<Scalars['String']['output']>;
  audience?: Maybe<Scalars['String']['output']>;
  blockchain?: Maybe<Scalars['String']['output']>;
  chainId?: Maybe<Scalars['String']['output']>;
  criteria?: Maybe<Scalars['String']['output']>;
  criteriaCount?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  timeFrom?: Maybe<Scalars['Time']['output']>;
  timeTo?: Maybe<Scalars['Time']['output']>;
  token?: Maybe<Token>;
  uniqueHolders?: Maybe<Scalars['Int']['output']>;
};

export enum TrendingTokensCriteria {
  TotalTransfers = 'total_transfers',
  UniqueHolders = 'unique_holders',
  UniqueWallets = 'unique_wallets'
}

export type TrendingTokensFilter = {
  address?: InputMaybe<Trending_Comparator_Exp>;
};

export type TrendingTokensInput = {
  audience: Audience;
  blockchain: TrendingBlockchain;
  criteria: TrendingTokensCriteria;
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TrendingTokensFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  swappable?: InputMaybe<Boolean_Comparator_Exp>;
  timeFrame: TimeFrame;
  transferType: TrendingTokensTransferType;
};

export type TrendingTokensOutput = {
  __typename?: 'TrendingTokensOutput';
  TrendingToken?: Maybe<Array<TrendingToken>>;
  pageInfo?: Maybe<PageInfo>;
};

export enum TrendingTokensTransferType {
  All = 'all',
  SelfInitiated = 'self_initiated'
}

export type Trending_Comparator_Exp = {
  _eq?: InputMaybe<Scalars['Address']['input']>;
  _in?: InputMaybe<Array<Scalars['Address']['input']>>;
};

export type VideoVariants = {
  __typename?: 'VideoVariants';
  original?: Maybe<Scalars['String']['output']>;
};

export type Wallet = {
  __typename?: 'Wallet';
  /** Represent On-chain smart-contract accounts */
  accounts?: Maybe<Array<Account>>;
  /** Returns addresses associated with the identity input */
  addresses?: Maybe<Array<Scalars['Address']['output']>>;
  /** Blockchain associated with the provided identity */
  blockchain?: Maybe<TokenBlockchain>;
  /** Nested query - allows querying domains owned by the address */
  domains?: Maybe<Array<Domain>>;
  /** Blockchain address, ENS domain name, social identity such as Farcaster (for Farcaster use 'fc_fid:' prefix followed by the Farcaster user ID like fc_fid:5650, or use 'fc_fname:' prefix followed by the Farcaster user ID like 'fc_fname:vbuterin') or Lens (e.g. 'stani.lens) */
  identity: Scalars['Identity']['output'];
  /** Returns Poaps owned by the address */
  poaps?: Maybe<Array<Poap>>;
  /** Nested query - allows returning primary domains, if applicable */
  primaryDomain?: Maybe<Domain>;
  socialFollowers?: Maybe<SocialFollowerOutput>;
  socialFollowings?: Maybe<SocialFollowingOutput>;
  /** Returns social profile information related to the address */
  socials?: Maybe<Array<Social>>;
  /** Nested query - allows returning token balances */
  tokenBalances?: Maybe<Array<TokenBalance>>;
  /** Nested query - allows returning token transfers and related information */
  tokenTransfers?: Maybe<Array<TokenTransfer>>;
  /** Nested query - allows querying the XMTP enabled addresses */
  xmtp?: Maybe<Array<Xmtp>>;
};


export type WalletAccountsArgs = {
  input?: InputMaybe<AccountsNestedInput>;
};


export type WalletDomainsArgs = {
  input?: InputMaybe<DomainsNestedInput>;
};


export type WalletPoapsArgs = {
  input?: InputMaybe<PoapsNestedInput>;
};


export type WalletSocialFollowersArgs = {
  input?: InputMaybe<SocialFollowerNestedInput>;
};


export type WalletSocialFollowingsArgs = {
  input?: InputMaybe<SocialFollowingNestedInput>;
};


export type WalletSocialsArgs = {
  input?: InputMaybe<SocialsNestedInput>;
};


export type WalletTokenBalancesArgs = {
  input?: InputMaybe<TokenBalancesNestedInput>;
};


export type WalletTokenTransfersArgs = {
  input?: InputMaybe<TokenTransfersNestedInput>;
};


export type WalletXmtpArgs = {
  input?: InputMaybe<XmtPsNestedInput>;
};

export type WalletInput = {
  blockchain: TokenBlockchain;
  identity: Scalars['Identity']['input'];
};

export type Xmtp = {
  __typename?: 'XMTP';
  blockchain?: Maybe<EveryBlockchain>;
  /** Airstack unique identifier for the data point */
  id?: Maybe<Scalars['ID']['output']>;
  isXMTPEnabled?: Maybe<Scalars['Boolean']['output']>;
  owner?: Maybe<Wallet>;
};

export type XmtpFilter = {
  owner?: InputMaybe<Identity_Comparator_Exp>;
};

export type XmtPsInput = {
  blockchain: EveryBlockchain;
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter: XmtpFilter;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type XmtPsNestedInput = {
  blockchain?: InputMaybe<EveryBlockchain>;
  filter?: InputMaybe<XmtpFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type XmtPsOutput = {
  __typename?: 'XMTPsOutput';
  XMTP?: Maybe<Array<Xmtp>>;
  pageInfo?: Maybe<PageInfo>;
};

export type FarcasterQueryQueryVariables = Exact<{
  dappName: SocialDappName;
  userAssociatedAddresses: Scalars['Address']['input'];
  blockchain: Blockchain;
}>;


export type FarcasterQueryQuery = { __typename?: 'Query', Socials?: { __typename?: 'SocialsOutput', Social?: Array<{ __typename?: 'Social', userId?: string | null, followerCount?: number | null, followingCount?: number | null, isFarcasterPowerUser?: boolean | null, profileHandle?: string | null }> | null } | null };

export type PoapQueryQueryVariables = Exact<{
  identity: Scalars['Identity']['input'];
  blockchain: TokenBlockchain;
}>;


export type PoapQueryQuery = { __typename?: 'Query', Wallet?: { __typename?: 'Wallet', poaps?: Array<{ __typename?: 'Poap', poapEvent?: { __typename?: 'PoapEvent', eventId?: string | null, eventName?: string | null, tokenMints?: number | null, isVirtualEvent?: boolean | null } | null }> | null } | null };

export type SchemaQueryVariables = Exact<{
  where: SchemaWhereUniqueInput;
  attestationsWhere2?: InputMaybe<AttestationWhereInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SchemaQuery = { __typename?: 'Query', schema?: { __typename?: 'Schema', attestations: Array<{ __typename?: 'Attestation', id: string, attester: string, decodedDataJson: string, txid: string, revoked: boolean, timeCreated: number }> } | null };


export const FarcasterQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FarcasterQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dappName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SocialDappName"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userAssociatedAddresses"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"blockchain"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Blockchain"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Socials"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"dappName"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dappName"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"userAssociatedAddresses"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userAssociatedAddresses"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"blockchain"},"value":{"kind":"Variable","name":{"kind":"Name","value":"blockchain"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Social"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"followerCount"}},{"kind":"Field","name":{"kind":"Name","value":"followingCount"}},{"kind":"Field","name":{"kind":"Name","value":"isFarcasterPowerUser"}},{"kind":"Field","name":{"kind":"Name","value":"profileHandle"}}]}}]}}]}}]} as unknown as DocumentNode<FarcasterQueryQuery, FarcasterQueryQueryVariables>;
export const PoapQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PoapQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"identity"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Identity"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"blockchain"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TokenBlockchain"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Wallet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"identity"},"value":{"kind":"Variable","name":{"kind":"Name","value":"identity"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"blockchain"},"value":{"kind":"Variable","name":{"kind":"Name","value":"blockchain"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poaps"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"order"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAtBlockNumber"},"value":{"kind":"EnumValue","value":"ASC"}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"100"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poapEvent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventId"}},{"kind":"Field","name":{"kind":"Name","value":"eventName"}},{"kind":"Field","name":{"kind":"Name","value":"tokenMints"}},{"kind":"Field","name":{"kind":"Name","value":"isVirtualEvent"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PoapQueryQuery, PoapQueryQueryVariables>;
export const SchemaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Schema"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SchemaWhereUniqueInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attestationsWhere2"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AttestationWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schema"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attestations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attestationsWhere2"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attester"}},{"kind":"Field","name":{"kind":"Name","value":"decodedDataJson"}},{"kind":"Field","name":{"kind":"Name","value":"txid"}},{"kind":"Field","name":{"kind":"Name","value":"revoked"}},{"kind":"Field","name":{"kind":"Name","value":"timeCreated"}}]}}]}}]}}]} as unknown as DocumentNode<SchemaQuery, SchemaQueryVariables>;