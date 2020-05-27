import {Entity, model, property} from '@loopback/repository';

@model()
export class Device extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  deviceId: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  sensors?: string[];

  @property({
    type: 'date',
    required: true,
  })
  create_time: string;

  @property({
    type: 'number',
  })
  userId?: number;

  constructor(data?: Partial<Device>) {
    super(data);
  }
}

export interface DeviceRelations {
  // describe navigational properties here
}

export type DeviceWithRelations = Device & DeviceRelations;
