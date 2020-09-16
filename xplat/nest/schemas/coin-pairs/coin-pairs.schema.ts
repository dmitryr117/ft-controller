import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import { Schema } from 'mongoose';
import { ICoinPairSchema } from './interfaces';

export const CoinPairSchema = new Schema({
  pair: String
});

CoinPairSchema.setup = async function( coinPairDto ): Promise<ICoinPairSchema> {
  const {
    pair
  } = coinPairDto;

  this.pair = pair;

  try {
    return this.save();
  } catch( error ) {
    console.log( error );
    if ( error.code === "23505" ) {
      // duplicate pair
      throw new ConflictException('Pair already exists');
    } else {
      throw new InternalServerErrorException();
    }
  }
}
