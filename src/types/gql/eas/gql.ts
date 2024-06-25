/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query FarcasterQuery(\n    $dappName: SocialDappName!\n    $userAssociatedAddresses: Address!\n    $blockchain: Blockchain!\n  ) {\n    Socials(\n      input: {\n        filter: {\n          dappName: { _eq: $dappName }\n          userAssociatedAddresses: { _eq: $userAssociatedAddresses }\n        }\n        blockchain: $blockchain\n      }\n    ) {\n      Social {\n        userId\n        followerCount\n        followingCount\n        isFarcasterPowerUser\n        profileHandle\n        # profileDisplayName\n        # profileImage\n        # profileBio\n        # profileCreatedAtBlockNumber\n      }\n    }\n  }\n": types.FarcasterQueryDocument,
    "\n  query PoapQuery($identity: Identity!, $blockchain: TokenBlockchain!) {\n    Wallet(input: { identity: $identity, blockchain: $blockchain }) {\n      poaps(input: { order: { createdAtBlockNumber: ASC }, limit: 100 }) {\n        poapEvent {\n          eventId\n          eventName\n          tokenMints\n          isVirtualEvent\n        }\n      }\n    }\n  }\n": types.PoapQueryDocument,
    "\n  query Schema(\n    $where: SchemaWhereUniqueInput!\n    $attestationsWhere2: AttestationWhereInput\n    $take: Int\n    $skip: Int\n  ) {\n    schema(where: $where) {\n      attestations(where: $attestationsWhere2, take: $take, skip: $skip) {\n        id\n        attester\n        decodedDataJson\n        txid\n        revoked\n        timeCreated\n      }\n    }\n  }\n": types.SchemaDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FarcasterQuery(\n    $dappName: SocialDappName!\n    $userAssociatedAddresses: Address!\n    $blockchain: Blockchain!\n  ) {\n    Socials(\n      input: {\n        filter: {\n          dappName: { _eq: $dappName }\n          userAssociatedAddresses: { _eq: $userAssociatedAddresses }\n        }\n        blockchain: $blockchain\n      }\n    ) {\n      Social {\n        userId\n        followerCount\n        followingCount\n        isFarcasterPowerUser\n        profileHandle\n        # profileDisplayName\n        # profileImage\n        # profileBio\n        # profileCreatedAtBlockNumber\n      }\n    }\n  }\n"): (typeof documents)["\n  query FarcasterQuery(\n    $dappName: SocialDappName!\n    $userAssociatedAddresses: Address!\n    $blockchain: Blockchain!\n  ) {\n    Socials(\n      input: {\n        filter: {\n          dappName: { _eq: $dappName }\n          userAssociatedAddresses: { _eq: $userAssociatedAddresses }\n        }\n        blockchain: $blockchain\n      }\n    ) {\n      Social {\n        userId\n        followerCount\n        followingCount\n        isFarcasterPowerUser\n        profileHandle\n        # profileDisplayName\n        # profileImage\n        # profileBio\n        # profileCreatedAtBlockNumber\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PoapQuery($identity: Identity!, $blockchain: TokenBlockchain!) {\n    Wallet(input: { identity: $identity, blockchain: $blockchain }) {\n      poaps(input: { order: { createdAtBlockNumber: ASC }, limit: 100 }) {\n        poapEvent {\n          eventId\n          eventName\n          tokenMints\n          isVirtualEvent\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query PoapQuery($identity: Identity!, $blockchain: TokenBlockchain!) {\n    Wallet(input: { identity: $identity, blockchain: $blockchain }) {\n      poaps(input: { order: { createdAtBlockNumber: ASC }, limit: 100 }) {\n        poapEvent {\n          eventId\n          eventName\n          tokenMints\n          isVirtualEvent\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Schema(\n    $where: SchemaWhereUniqueInput!\n    $attestationsWhere2: AttestationWhereInput\n    $take: Int\n    $skip: Int\n  ) {\n    schema(where: $where) {\n      attestations(where: $attestationsWhere2, take: $take, skip: $skip) {\n        id\n        attester\n        decodedDataJson\n        txid\n        revoked\n        timeCreated\n      }\n    }\n  }\n"): (typeof documents)["\n  query Schema(\n    $where: SchemaWhereUniqueInput!\n    $attestationsWhere2: AttestationWhereInput\n    $take: Int\n    $skip: Int\n  ) {\n    schema(where: $where) {\n      attestations(where: $attestationsWhere2, take: $take, skip: $skip) {\n        id\n        attester\n        decodedDataJson\n        txid\n        revoked\n        timeCreated\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;