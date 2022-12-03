import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  BucketCreated,
  InvestedInBucket,
  WithdrawnFromBucket
} from "../generated/Crolio/Crolio"

export function createBucketCreatedEvent(
  bucketId: BigInt,
  bucketName: string,
  description: string,
  tokens: Array<Address>,
  weightages: Array<BigInt>,
  creator: Address
): BucketCreated {
  let bucketCreatedEvent = changetype<BucketCreated>(newMockEvent())

  bucketCreatedEvent.parameters = new Array()

  bucketCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "bucketId",
      ethereum.Value.fromUnsignedBigInt(bucketId)
    )
  )
  bucketCreatedEvent.parameters.push(
    new ethereum.EventParam("bucketName", ethereum.Value.fromString(bucketName))
  )
  bucketCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  bucketCreatedEvent.parameters.push(
    new ethereum.EventParam("tokens", ethereum.Value.fromAddressArray(tokens))
  )
  bucketCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "weightages",
      ethereum.Value.fromUnsignedBigIntArray(weightages)
    )
  )
  bucketCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )

  return bucketCreatedEvent
}

export function createInvestedInBucketEvent(
  bucketId: BigInt,
  amountInvested: BigInt,
  investorAddress: Address,
  tokens: Array<Address>,
  holdingsBought: Array<BigInt>
): InvestedInBucket {
  let investedInBucketEvent = changetype<InvestedInBucket>(newMockEvent())

  investedInBucketEvent.parameters = new Array()

  investedInBucketEvent.parameters.push(
    new ethereum.EventParam(
      "bucketId",
      ethereum.Value.fromUnsignedBigInt(bucketId)
    )
  )
  investedInBucketEvent.parameters.push(
    new ethereum.EventParam(
      "amountInvested",
      ethereum.Value.fromUnsignedBigInt(amountInvested)
    )
  )
  investedInBucketEvent.parameters.push(
    new ethereum.EventParam(
      "investorAddress",
      ethereum.Value.fromAddress(investorAddress)
    )
  )
  investedInBucketEvent.parameters.push(
    new ethereum.EventParam("tokens", ethereum.Value.fromAddressArray(tokens))
  )
  investedInBucketEvent.parameters.push(
    new ethereum.EventParam(
      "holdingsBought",
      ethereum.Value.fromUnsignedBigIntArray(holdingsBought)
    )
  )

  return investedInBucketEvent
}

export function createWithdrawnFromBucketEvent(
  bucketId: BigInt,
  amountOut: BigInt,
  investorAddress: Address,
  tokens: Array<Address>,
  holdingsSold: Array<BigInt>
): WithdrawnFromBucket {
  let withdrawnFromBucketEvent = changetype<WithdrawnFromBucket>(newMockEvent())

  withdrawnFromBucketEvent.parameters = new Array()

  withdrawnFromBucketEvent.parameters.push(
    new ethereum.EventParam(
      "bucketId",
      ethereum.Value.fromUnsignedBigInt(bucketId)
    )
  )
  withdrawnFromBucketEvent.parameters.push(
    new ethereum.EventParam(
      "amountOut",
      ethereum.Value.fromUnsignedBigInt(amountOut)
    )
  )
  withdrawnFromBucketEvent.parameters.push(
    new ethereum.EventParam(
      "investorAddress",
      ethereum.Value.fromAddress(investorAddress)
    )
  )
  withdrawnFromBucketEvent.parameters.push(
    new ethereum.EventParam("tokens", ethereum.Value.fromAddressArray(tokens))
  )
  withdrawnFromBucketEvent.parameters.push(
    new ethereum.EventParam(
      "holdingsSold",
      ethereum.Value.fromUnsignedBigIntArray(holdingsSold)
    )
  )

  return withdrawnFromBucketEvent
}
