import HttpStatus from 'http-status-codes';
import * as ProfileService from '../services/profile.service'
export const addProfile = async (req, res, next) => {
    try {
      const data = await ProfileService.addNewData(req.body)
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Added profile details'
      });
    } catch (error) {
      next(error);
    }
  };

  export const removeAddress = async (req, res, next) => {
    try {
      const data = await ProfileService.removeAddress(req.body,req.params.address)
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Removed address '
      });
    } catch (error) {
      next(error);
    }
  };