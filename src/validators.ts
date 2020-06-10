import { celebrate, Joi } from "celebrate";

class Validators {
  private run(obj = {}) {
    return celebrate(obj, {
      abortEarly: false,
    });
  }

  /**
   * [POST] /companies
   */
  public companiesCreate() {
    const validations = {
      body: Joi.object().keys({
        user_id: Joi.number().required(),
        name: Joi.string().required(),
        description: Joi.string().required(),
      }),
    };
    return this.run(validations);
  }
}

export default new Validators();
