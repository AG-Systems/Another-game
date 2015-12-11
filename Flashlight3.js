//Name this script Flashlight and attach it to your player for instance
 
var lightSource : Light; //Connect the light source in the Inspector
static var maxEnergy : float = 100; //The energy amount of the flashlight
private var currentPower;
var turnedOn : boolean = false; //Boolean to check whether it's turned on or off
var drainSpeed : float = 2.0; //The speed that the energy is drained
private var alpha : float;               
private var duration : float = 0.2;     
private var baseIntensity : float;
var rectHeight: float;
 
function Update () {
    if (Input.GetKeyDown(KeyCode.F)) ToggleFlashlight();
    if(currentPower < maxEnergy/4 && lightSource.enabled){ 
                var phi : float = Time.time / duration * 2 * Mathf.PI;
                var amplitude : float = Mathf.Cos( phi ) * .5 + baseIntensity;
                lightSource.light.intensity = amplitude + Random.Range(0.1, 1.0) ;
        }
        lightSource.light.color = Color(alpha/maxEnergy, alpha/maxEnergy, alpha/maxEnergy, alpha/maxEnergy);
        alpha = currentPower;  
 
        if (turnedOn==true) {
            if(currentPower > 0.0) currentPower -= Time.deltaTime * drainSpeed; 
            if(currentPower <= 0.0) {lightSource.enabled = false;}
        }
        if (turnedOn==false) {
        if(currentPower < maxEnergy) currentPower += Time.deltaTime * drainSpeed/2; 
        }
}
 
//When the player press F we toggle the flashlight on and off
function ToggleFlashlight () {
    turnedOn=!turnedOn;
    if (turnedOn && maxEnergy>0) {
       TurnOnAndDrainEnergy();
    } else {
       lightSource.enabled = false;
    }
}
 
//When the flashlight is turned on we enter a while loop which drains the energy
function TurnOnAndDrainEnergy () {
    lightSource.enabled = true;
    while (turnedOn && maxEnergy>0) {
       maxEnergy -= drainSpeed*Time.deltaTime;
       yield;
    }
    lightSource.enabled = false;
}
 
//This is called from outside the script to alter the amount of energy
static function AlterEnergy (amount : int) {
    maxEnergy = Mathf.Clamp(maxEnergy+amount, 0, 100);
}
 
//Display current battery on your flashlight
function OnGUI () {
      GUI.Label (Rect(70, Screen.height/rectHeight - 75,150,60), "Battery:   " + maxEnergy.ToString("F0") + "%");
}
