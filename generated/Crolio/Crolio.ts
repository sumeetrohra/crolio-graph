// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BucketCreated extends ethereum.Event {
  get params(): BucketCreated__Params {
    return new BucketCreated__Params(this);
  }
}

export class BucketCreated__Params {
  _event: BucketCreated;

  constructor(event: BucketCreated) {
    this._event = event;
  }

  get bucketId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get bucketName(): string {
    return this._event.parameters[1].value.toString();
  }

  get description(): string {
    return this._event.parameters[2].value.toString();
  }

  get tokens(): Array<Address> {
    return this._event.parameters[3].value.toAddressArray();
  }

  get weightages(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }

  get creator(): Address {
    return this._event.parameters[5].value.toAddress();
  }
}

export class InvestedInBucket extends ethereum.Event {
  get params(): InvestedInBucket__Params {
    return new InvestedInBucket__Params(this);
  }
}

export class InvestedInBucket__Params {
  _event: InvestedInBucket;

  constructor(event: InvestedInBucket) {
    this._event = event;
  }

  get bucketId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amountInvested(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get investorAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get tokens(): Array<Address> {
    return this._event.parameters[3].value.toAddressArray();
  }

  get holdingsBought(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }
}

export class WithdrawnFromBucket extends ethereum.Event {
  get params(): WithdrawnFromBucket__Params {
    return new WithdrawnFromBucket__Params(this);
  }
}

export class WithdrawnFromBucket__Params {
  _event: WithdrawnFromBucket;

  constructor(event: WithdrawnFromBucket) {
    this._event = event;
  }

  get bucketId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amountOut(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get investorAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get tokens(): Array<Address> {
    return this._event.parameters[3].value.toAddressArray();
  }

  get holdingsSold(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }
}

export class Crolio__bucketDetailsResult {
  value0: string;
  value1: string;
  value2: Address;

  constructor(value0: string, value1: string, value2: Address) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    return map;
  }

  getName(): string {
    return this.value0;
  }

  getDescription(): string {
    return this.value1;
  }

  getCreator(): Address {
    return this.value2;
  }
}

export class Crolio__fetchBucketDetailsResultValue0Struct extends ethereum.Tuple {
  get name(): string {
    return this[0].toString();
  }

  get description(): string {
    return this[1].toString();
  }

  get tokens(): Array<Address> {
    return this[2].toAddressArray();
  }

  get weightages(): Array<BigInt> {
    return this[3].toBigIntArray();
  }

  get creator(): Address {
    return this[4].toAddress();
  }
}

export class Crolio__getAllUserInvestmentDetailsResultValue0Struct extends ethereum.Tuple {
  get totalUSDCInvested(): BigInt {
    return this[0].toBigInt();
  }

  get holdings(): Array<BigInt> {
    return this[1].toBigIntArray();
  }
}

export class Crolio extends ethereum.SmartContract {
  static bind(address: Address): Crolio {
    return new Crolio("Crolio", address);
  }

  bucketDetails(param0: BigInt): Crolio__bucketDetailsResult {
    let result = super.call(
      "bucketDetails",
      "bucketDetails(uint256):(string,string,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Crolio__bucketDetailsResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toAddress()
    );
  }

  try_bucketDetails(
    param0: BigInt
  ): ethereum.CallResult<Crolio__bucketDetailsResult> {
    let result = super.tryCall(
      "bucketDetails",
      "bucketDetails(uint256):(string,string,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Crolio__bucketDetailsResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toAddress()
      )
    );
  }

  createBucket(
    name: string,
    description: string,
    tokens: Array<Address>,
    weightage: Array<BigInt>
  ): boolean {
    let result = super.call(
      "createBucket",
      "createBucket(string,string,address[],uint256[]):(bool)",
      [
        ethereum.Value.fromString(name),
        ethereum.Value.fromString(description),
        ethereum.Value.fromAddressArray(tokens),
        ethereum.Value.fromUnsignedBigIntArray(weightage)
      ]
    );

    return result[0].toBoolean();
  }

  try_createBucket(
    name: string,
    description: string,
    tokens: Array<Address>,
    weightage: Array<BigInt>
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "createBucket",
      "createBucket(string,string,address[],uint256[]):(bool)",
      [
        ethereum.Value.fromString(name),
        ethereum.Value.fromString(description),
        ethereum.Value.fromAddressArray(tokens),
        ethereum.Value.fromUnsignedBigIntArray(weightage)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  fetchBucketDetails(
    _bucketId: BigInt
  ): Crolio__fetchBucketDetailsResultValue0Struct {
    let result = super.call(
      "fetchBucketDetails",
      "fetchBucketDetails(uint256):((string,string,address[],uint256[],address))",
      [ethereum.Value.fromUnsignedBigInt(_bucketId)]
    );

    return changetype<Crolio__fetchBucketDetailsResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_fetchBucketDetails(
    _bucketId: BigInt
  ): ethereum.CallResult<Crolio__fetchBucketDetailsResultValue0Struct> {
    let result = super.tryCall(
      "fetchBucketDetails",
      "fetchBucketDetails(uint256):((string,string,address[],uint256[],address))",
      [ethereum.Value.fromUnsignedBigInt(_bucketId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Crolio__fetchBucketDetailsResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getAllUserInvestmentDetails(
    _bucketId: BigInt
  ): Crolio__getAllUserInvestmentDetailsResultValue0Struct {
    let result = super.call(
      "getAllUserInvestmentDetails",
      "getAllUserInvestmentDetails(uint256):((uint256,uint256[]))",
      [ethereum.Value.fromUnsignedBigInt(_bucketId)]
    );

    return changetype<Crolio__getAllUserInvestmentDetailsResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getAllUserInvestmentDetails(
    _bucketId: BigInt
  ): ethereum.CallResult<
    Crolio__getAllUserInvestmentDetailsResultValue0Struct
  > {
    let result = super.tryCall(
      "getAllUserInvestmentDetails",
      "getAllUserInvestmentDetails(uint256):((uint256,uint256[]))",
      [ethereum.Value.fromUnsignedBigInt(_bucketId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Crolio__getAllUserInvestmentDetailsResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  invest(
    _bucketId: BigInt,
    _investValue: BigInt,
    _deadline: BigInt,
    v: i32,
    r: Bytes,
    s: Bytes
  ): boolean {
    let result = super.call(
      "invest",
      "invest(uint256,uint256,uint256,uint8,bytes32,bytes32):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_bucketId),
        ethereum.Value.fromUnsignedBigInt(_investValue),
        ethereum.Value.fromUnsignedBigInt(_deadline),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(v)),
        ethereum.Value.fromFixedBytes(r),
        ethereum.Value.fromFixedBytes(s)
      ]
    );

    return result[0].toBoolean();
  }

  try_invest(
    _bucketId: BigInt,
    _investValue: BigInt,
    _deadline: BigInt,
    v: i32,
    r: Bytes,
    s: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "invest",
      "invest(uint256,uint256,uint256,uint8,bytes32,bytes32):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_bucketId),
        ethereum.Value.fromUnsignedBigInt(_investValue),
        ethereum.Value.fromUnsignedBigInt(_deadline),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(v)),
        ethereum.Value.fromFixedBytes(r),
        ethereum.Value.fromFixedBytes(s)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  supportedTokens(param0: BigInt): Address {
    let result = super.call(
      "supportedTokens",
      "supportedTokens(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_supportedTokens(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "supportedTokens",
      "supportedTokens(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  withdraw(_bucketId: BigInt): boolean {
    let result = super.call("withdraw", "withdraw(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_bucketId)
    ]);

    return result[0].toBoolean();
  }

  try_withdraw(_bucketId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("withdraw", "withdraw(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_bucketId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get swapRouter(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get USDCContract(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateBucketCall extends ethereum.Call {
  get inputs(): CreateBucketCall__Inputs {
    return new CreateBucketCall__Inputs(this);
  }

  get outputs(): CreateBucketCall__Outputs {
    return new CreateBucketCall__Outputs(this);
  }
}

export class CreateBucketCall__Inputs {
  _call: CreateBucketCall;

  constructor(call: CreateBucketCall) {
    this._call = call;
  }

  get name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get description(): string {
    return this._call.inputValues[1].value.toString();
  }

  get tokens(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get weightage(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }
}

export class CreateBucketCall__Outputs {
  _call: CreateBucketCall;

  constructor(call: CreateBucketCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class InvestCall extends ethereum.Call {
  get inputs(): InvestCall__Inputs {
    return new InvestCall__Inputs(this);
  }

  get outputs(): InvestCall__Outputs {
    return new InvestCall__Outputs(this);
  }
}

export class InvestCall__Inputs {
  _call: InvestCall;

  constructor(call: InvestCall) {
    this._call = call;
  }

  get _bucketId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _investValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _deadline(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get v(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class InvestCall__Outputs {
  _call: InvestCall;

  constructor(call: InvestCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get _bucketId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}