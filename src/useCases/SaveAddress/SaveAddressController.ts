import { Request, Response } from 'express';
import { SaveAddresUseCase } from './SaveAddressUseCase';

export class SaveAddressController {
    

    constructor(private saveAddressUseCase: SaveAddresUseCase){
    }


    async handle(request: Request, response: Response): Promise<Response> {

        const address = request.body;

        const bodyLength = Object.keys(address).length; 

        if (bodyLength < 8) {
            return response.status(400).json({
                res: {
                    message: 'Error : Verify you body info',
                    data: { }
                }
            });
        }


        try {
            await this.saveAddressUseCase.execute(address);

            return response.status(201).json({
                res: {
                    message: 'Success : Endereço cadastrado para o usuário',
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