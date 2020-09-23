import { Request, Response } from 'express';
import { SaveAddresUseCase } from './SaveAddressUseCase';
import { ISaveAddressDTO } from './SaveAddressDTO';

export class SaveAddressController {
    
    private address: ISaveAddressDTO;

    constructor(private saveAddressUseCase: SaveAddresUseCase){
    }


    async handle(request: Request, response: Response): Promise<Response> {

        this.address = request.body;

        const bodyLength = Object.keys(this.address).length; 
        
        if (bodyLength === 0) {
            return response.status(400).json({
                res: {
                    message: 'Body cannot be empty',
                    data: { }
                }
            });
        }
        if (bodyLength < 8) {
            return response.status(400).json({
                res: {
                    message: 'Verify you body info',
                    data: { }
                }
            });
        }


        try {
            await this.saveAddressUseCase.execute(this.address);

            return response.status(201).json({
                res: {
                    message: 'Endereço cadastrado para o usuário',
                    data: { }
                }
            });
        }
        catch(error) {
            return response.status(400).json({
                res: {
                    message: error.message || 'Unexpected Error',
                    data: { }
                }
            });
        }
    }

}