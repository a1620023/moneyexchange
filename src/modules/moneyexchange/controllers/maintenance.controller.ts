import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common/decorators"
import { CreateCurrencyDTO } from "../dtos/create-currency.dto"
import { UpdateCurrencyDTO } from "../dtos/update-currency.dto"
import { Currency } from "../entities/currency.entity"
import { MaintenanceService } from "../services/maintenance.service"


@Controller('maintenance')
export class MaintenanceController {
    constructor(
        private readonly maintenanceService: MaintenanceService
    ){}
    //

    @Post('mcreatecurrency')
    createCurrencyMaintenance(@Body() createCurrencyDTO: CreateCurrencyDTO): Promise<Currency> {
        return this.maintenanceService.createCurrency(createCurrencyDTO)
   }

   @Put(':id')
    updateCurrencyMaintenance(@Param('id') id: number, @Body() updateCurrencyDTO: UpdateCurrencyDTO): Promise<Currency>{
        return this.maintenanceService.updateCurrency(id, updateCurrencyDTO)
   }

   @Get('mfindallcurrency')
    getallCurrencyMaintenance():Promise<Currency[]> {
        console.log("price: ",this.maintenanceService.findAllCurrency())
    return this.maintenanceService.findAllCurrency()//id, amount, originCuID, destinationCuID, convertedA)
   }

   @Get('mfindcurrencybyid')
    getCurrencyByIDMaintenance(@Body('id') id){
        return this.maintenanceService.findCurrencyByID(id)//id, amount, originCuID, destinationCuID, convertedA)
   }
}