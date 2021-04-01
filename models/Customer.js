const mongoose = require("mongoose");


const CustomerSchema = mongoose.Schema({
    customerData: {
        customerName: {
            type: String,
            required: [true, "Customer name is required"]
        },
        gender: String,
        identificationNo : Number,
        identificationType: Number,
        title: String,
        nationality: String,
        email: String,
        phone1: {
            type: String,
            required: [true, "Customer contact number is required"]
        },
        phone2: String,
        fax: String
    },

    contract : {
        contractNumber: {
            type: String,
            unique: true
        },
            contractRegDate: String,
            contractActivationDate: String,
            contractModificationDate: String,
            contractStatus: String,
            contractTerminationDate: String,
            disconnectionCount: String,
            lastDisconnectionDate: String       
    },

    property:{
        GISX : {
            type : Number,
            required : [true, "GISX is required"]
        },
        GISY : {
            type : Number,
            required : [true, "GISY is required"]
        },
        transformerName: {
            type: String,
            required: [true, "Transformer name is required"]
        },
        feederName: {
            type: String,
            required: [true, "Feeder name is required"]
        },
        distanceFromSubstation: {
            type: String,
            required: [true, "Please state the distance of property to substation"]
        },
        poleNumber : Number,
        phase: String,
        bookCode: {
            type: String,
            required: [true, "Book code is required"]
        },
        route: String,
        itinerary: String,
        buildingDescription: String,
        activity: String,
        subActivity: String,
        premisesType: String,
        serviceCenter: {
            type: String,
            required: [true, "Service Center name is required"]
        },
        office: {
            type: String,
            required: [true, "Office name is required"]
        },
        region: {
            type: String,
            required: [true, "Region name is required"]
        },
        disconnectable: {
            type: Boolean,
            required: [true, "Transformer name is required"]
        }
    },

    connectionType: {
        connectionType: String,
        meterType: String,
        meteredType: String,
        meteredModel: String,
        meterOwner: String
    },

    tariff: {
        class: String,
        category: String,
        description: String,
        serviceType: String,
        tariff: String
    },

    account: {
        accountNo : {
            type: Number,
            unique: true
        },
        accountStatus: String,
        paymentType: String,
        billingPeriod: String,
        customerIndicator: String
        
    }
})

CustomerSchema.pre("save", function(){
    let dates = new Date();
    const year = dates.getFullYear().toString().substr(2);
    let month = dates.getMonth().toString().length > 1 ? dates.getMonth().toString() : `0${dates.getMonth().toString()}`;
    const bCode = this.property.bookCode;
    const acc = Math.ceil(Math.random() * 900) + 100;
    const SPN = `${year}${month}${bCode}${acc}`
    this.contract.contractNumber = SPN
})



module.exports = mongoose.model("customer", CustomerSchema)