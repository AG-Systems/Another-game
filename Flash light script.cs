using UnityEngine;
using System.Collections;

public class Flashlight : MonoBehaviour
{
	public float fRunTimeFullCharge = 900.0f;
	public AnimationCurve ac = new AnimationCurve();
	
	float fTimer = 0.0f;
	float fMaxIntensity;
	public float chargeLevel; // Can't set level here
	
	public void SetChargeLevel(float fCharge)
	{
		fTimer = (1.0f - Mathf.Clamp01(fCharge)) * fRunTimeFullCharge; 
		Debug.Log (fTimer);
	}
	
	void Start ()
	{
		Light light = GetComponent<Light>();
		fMaxIntensity = light.intensity;
		chargeLevel = 1.0f;
	}
	
	void Update ()
	{
		if (fTimer < 0.0f || fTimer > fRunTimeFullCharge)
			return;
		chargeLevel = fTimer/fRunTimeFullCharge;
		light.intensity = ac.Evaluate (chargeLevel);
		fTimer += Time.deltaTime;
	}
}
