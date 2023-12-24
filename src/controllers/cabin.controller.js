import Cabin from '../models/cabin.js';

const cabinCtrlDev = {};
const cabinCtrl = {};

// Controllers


// Dev endpoints
cabinCtrlDev.getCabins = (req, res) => {
    res.send("Cabins dev");
}

cabinCtrlDev.createCabin = async (req, res) => {
    // To get the data from the request body
    const cabinData = req.body;

    try {
        // Create a new cabin
        const newCabin = new Cabin({
            name: cabinData.name,
            maxCount: cabinData.maxCount,
            rentPerNight: cabinData.rentPerNight,
            image: cabinData.image,
            currentBookings: cabinData.currentBookings,
            cabinType: cabinData.cabinType,
            cabinDescription: cabinData.cabinDescription,
            timestamps: true
        });

        const cabinSaved = await newCabin.save();

        console.log(cabinSaved);
        res.json({
            message: 'Cabin dev saved',
            cabin: cabinSaved
        });

    } catch (err) {
        res.status(500).json({err: 'Server error'});
    }

}


// Production endpoints
cabinCtrl.getCabins = async (req, res) => {

    try{
        const cabins = await Cabin.find();
        res.json({
            Cabins: cabins
        });
    }catch (err){
        res.status(500).json({err: err.message});
    }

}

cabinCtrl.createCabin = async (req, res) => {
    const cabinData = req.body;

    try {
        // Create a new cabin
        const newCabin = new Cabin({
            name: cabinData.name,
            maxCount: cabinData.maxCount,
            rentPerNight: cabinData.rentPerNight,
            image: cabinData.image,
            currentBookings: cabinData.currentBookings,
            cabinType: cabinData.cabinType,
            cabinDescription: cabinData.cabinDescription,
            timestamps: true
        });

        const cabinSaved = await newCabin.save();

        console.log(cabinSaved);
        res.json({
            message: 'Cabin saved',
            cabin: cabinSaved
        });

    } catch (err) {
        res.status(500).json({err: 'Server error'});
    }
}

export default {
    cabinCtrlDev,
    cabinCtrl
};