import { Schema } from "mongoose";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { ExchangeSetupDto } from "./dto";
import { IExchangeSchema } from "./interfaces";

export const ExchangeSchema = new Schema({
  exchange_name: String,
  exchange_url: String,
  exchange_key: String
})

ExchangeSchema.methods.setup = async function( exchangeSetupDto: ExchangeSetupDto ): Promise<IExchangeSchema> {
  const {
    exchange_name,
    exchange_url,
    exchange_key
  } = exchangeSetupDto;

  this.exchange_name = exchange_name
  this.exchange_url = exchange_url
  this.exchange_key = exchange_key

  try{
    return this.save();
  } catch( error ) {
    console.log(error)
    if( error.code === "23505" )  { // duplicate username error
      throw new ConflictException('Exchange already exists');
    } else {
      throw new InternalServerErrorException();
    }
  }
}
