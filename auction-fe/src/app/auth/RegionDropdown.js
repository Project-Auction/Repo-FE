import { MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import SelectField from "../../shared/components/FormElement/Select/SelectField";
import { useHttpClient } from "../../shared/hook/http-client";
import { VALIDATOR_REQUIRED } from "../../utils/Validator";

const RegionDropdown = (props) => {
  const { sendRequest, error, isLoading, clearError } = useHttpClient();

  const [provinces, setProvinces] = useState([]);
  const [cityId, setCityId] = useState();

  const [district, setDistrict] = useState([]);
  const [districtId, setDistrictId] = useState();

  const [ward, setWard] = useState([]);

  const handleChooseCity = (cityId) => {
    setCityId(cityId);
  };

  const handleChooseDistrict = (distinctId) => {
    setDistrictId(distinctId);
  };

  /* Get distinct */
  useEffect(() => {
    const fetchDistrict = async () => {
      const response = await sendRequest(
        `https://vapi.vnappmob.com/api/province/district/${cityId}`,
        "GET"
      );

      setDistrict(response.results);
    };

    fetchDistrict();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityId]);

  /* Get ward */
  useEffect(() => {
    const fetchDistrict = async () => {
      const response = await sendRequest(
        `https://vapi.vnappmob.com/api/province/ward/${districtId}`,
        "GET"
      );

      setWard(response.results);
    };

    fetchDistrict();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [districtId]);

  /* Get provinces */
  useEffect(() => {
    const fetchProvinces = async () => {
      const response = await sendRequest(
        "https://vapi.vnappmob.com/api/province/",
        "GET"
      );

      setProvinces(response.results);
    };

    fetchProvinces();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="form__auth-group">
      <SelectField
        fieldName="province"
        isMui
        label="Choose City"
        className="mr-4"
        validators={[VALIDATOR_REQUIRED("Must be choose your city")]}
      >
        {provinces.map((province) => (
          <MenuItem
            key={province.province_id}
            value={province.province_id}
            onClick={() => handleChooseCity(province.province_id)}
          >
            {province.province_name}
          </MenuItem>
        ))}
      </SelectField>

      <SelectField
        fieldName="province"
        isMui
        label="Choose District"
        className="mr-4"
        validators={[VALIDATOR_REQUIRED("Must be choose your district")]}
      >
        {district.length > 0 &&
          district.map((district) => (
            <MenuItem
              key={district.district_id}
              value={district.district_id}
              onClick={() => handleChooseDistrict(district.district_id)}
            >
              {district.district_name}
            </MenuItem>
          ))}

        {district.length === 0 && <MenuItem>Please choose your city</MenuItem>}
      </SelectField>

      <SelectField fieldName="province" isMui label="Choose Ward">
        {ward.length > 0 &&
          ward.map((ward) => (
            <MenuItem key={ward.ward_id} value={ward.ward_name}>
              {ward.ward_name}
            </MenuItem>
          ))}

        {ward.length === 0 && <MenuItem>Please choose your district</MenuItem>}
      </SelectField>
    </div>
  );
};

export default RegionDropdown;
