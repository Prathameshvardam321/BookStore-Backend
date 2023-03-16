import profileModel from "../models/profile.model";


export const addNewData = async (body) => {
    const isProfile = await profileModel.findOne({ userId: body.userId })
    let addressDetails = {
        name: body.name,
        phoneNumber: body.addresses.phoneNumber,
        addressType: body.addresses.addressType,
        fullAddress: body.addresses.fullAddress,
        city: body.addresses.city,
        landmark: body.addresses.landmark,
        state: body.addresses.state,
        pinCode: body.addresses.pinCode
    }
    if (!isProfile) {
        console.log("IND");
        const data = await profileModel.create({
            userId: body.userId,
            addresses: [addressDetails]
        })
        console.log(data);
        return data
    } else {
        isProfile.addresses.push(addressDetails)
        const updateAddress = await profileModel.findOneAndUpdate({ userId: body.userId }, { addresses: isProfile.addresses }, { new: true })
        return updateAddress
    }

}

export const removeAddress = async (body,address) => {
    let addressRemoved
    let flag = false
    const isProfile = await profileModel.findOne({ userId: body.userId })
    isProfile.addresses.forEach(x => {
        if (x.addressType == address) {
            flag = true
            addressRemoved = x
        }
    })
    if (flag) {
        let indexValue = isProfile.addresses.indexOf(addressRemoved)
        isProfile.addresses.splice(indexValue, 1) 
    }
  
    const updateAddress = await profileModel.findOneAndUpdate({ userId: body.userId }, { addresses: isProfile.addresses }, { new: true })
    return updateAddress
}