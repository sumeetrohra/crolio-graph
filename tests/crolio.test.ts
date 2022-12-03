import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { BucketCreated } from "../generated/schema"
import { BucketCreated as BucketCreatedEvent } from "../generated/Crolio/Crolio"
import { handleBucketCreated } from "../src/crolio"
import { createBucketCreatedEvent } from "./crolio-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let bucketId = BigInt.fromI32(234)
    let bucketName = "Example string value"
    let description = "Example string value"
    let tokens = [
      Address.fromString("0x0000000000000000000000000000000000000001")
    ]
    let weightages = [BigInt.fromI32(234)]
    let creator = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newBucketCreatedEvent = createBucketCreatedEvent(
      bucketId,
      bucketName,
      description,
      tokens,
      weightages,
      creator
    )
    handleBucketCreated(newBucketCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BucketCreated created and stored", () => {
    assert.entityCount("BucketCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BucketCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "bucketId",
      "234"
    )
    assert.fieldEquals(
      "BucketCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "bucketName",
      "Example string value"
    )
    assert.fieldEquals(
      "BucketCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "description",
      "Example string value"
    )
    assert.fieldEquals(
      "BucketCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokens",
      "[0x0000000000000000000000000000000000000001]"
    )
    assert.fieldEquals(
      "BucketCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "weightages",
      "[234]"
    )
    assert.fieldEquals(
      "BucketCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "creator",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
