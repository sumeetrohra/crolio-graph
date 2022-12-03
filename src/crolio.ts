import {
  BucketCreated as BucketCreatedEvent,
  InvestedInBucket as InvestedInBucketEvent,
  WithdrawnFromBucket as WithdrawnFromBucketEvent
} from "../generated/Crolio/Crolio"
import {
  BucketCreated,
  InvestedInBucket,
  WithdrawnFromBucket
} from "../generated/schema"

export function handleBucketCreated(event: BucketCreatedEvent): void {
  let entity = new BucketCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.bucketId = event.params.bucketId
  entity.bucketName = event.params.bucketName
  entity.description = event.params.description
  entity.tokens = event.params.tokens
  entity.weightages = event.params.weightages
  entity.creator = event.params.creator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInvestedInBucket(event: InvestedInBucketEvent): void {
  let entity = new InvestedInBucket(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.bucketId = event.params.bucketId
  entity.amountInvested = event.params.amountInvested
  entity.investorAddress = event.params.investorAddress
  entity.tokens = event.params.tokens
  entity.holdingsBought = event.params.holdingsBought

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawnFromBucket(
  event: WithdrawnFromBucketEvent
): void {
  let entity = new WithdrawnFromBucket(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.bucketId = event.params.bucketId
  entity.amountOut = event.params.amountOut
  entity.investorAddress = event.params.investorAddress
  entity.tokens = event.params.tokens
  entity.holdingsSold = event.params.holdingsSold

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
