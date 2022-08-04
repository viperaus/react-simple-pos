const GeneralSettings = ({ settings, handleInputChange }) => {
  // general: {
  //   rear_display: {
  //     enabled: false,
  //     connection: '',
  //   },
  //   country: 'Australia',
  //   refund_mode: 'SIMPLE',
  //   debug: 'ERROR',
  // },

  return (
    <>
      <div className="form-group mb-6">
        <label for="settings_general_country" className="form-label inline-block mb-2 pr-1">
          Country:
        </label>
        <select
          name="settings_general_country"
          id="settings_general_country"
          onChange={(e) => {
            settings.general.country = e.target.value
            return handleInputChange()
          }}
          defaultValue={settings.general.country}
        >
          <option value={''}>-- Select --</option>
          <option value={'Australia'}>Australia</option>
          <option value={'USA'}>USA</option>
          <option value={'NZ'}>NZ</option>
        </select>
      </div>
      <div className="form-group mb-6">
        <label for="settings_general_refundmode" className="form-label inline-block mb-2 pr-1">
          Refund Mode:
        </label>
        <select
          name="settings_general_refundmode"
          id="settings_general_refundmode"
          onChange={(e) => {
            settings.general.refund_mode = e.target.value
            return handleInputChange()
          }}
          defaultValue={settings.general.refund_mode}
        >
          <option value={'SIMPLE'}>SIMPLE</option>
          <option value={'COMPLEX'}>COMPLEX</option>
        </select>
      </div>
    </>
  )
}

export default GeneralSettings
