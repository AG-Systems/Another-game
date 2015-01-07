 //Name this script Flashlight and attach it to your player for instance
 
 var lightSource : Light; //Connect the light source in the Inspector
 static var energy : float = 100; //The energy amount of the flashlight
 static var turnedOn : boolean = false; //Boolean to check whether it's turned on or off
 private var drainSpeed : float = 2.0; //The speed that the energy is drained
 
 function Update () {
     if (Input.GetKeyDown(KeyCode.F)) ToggleFlashlight();
 }
 
 //When the player press F we toggle the flashlight on and off
 function ToggleFlashlight () {
     turnedOn=!turnedOn;
     if (turnedOn && energy>0) {
         TurnOnAndDrainEnergy();
     } else {
         lightSource.enabled = false;
     }
 }
 
 //When the flashlight is turned on we enter a while loop which drains the energy
 function TurnOnAndDrainEnergy () {
     lightSource.enabled = true;
     while (turnedOn && energy>0) {
         energy -= drainSpeed*Time.deltaTime;
         yield;
     }
     lightSource.enabled = false;
 }
 
 //This is called from outside the script to alter the amount of energy
 static function AlterEnergy (amount : int) {
     energy = Mathf.Clamp(energy+amount, 0, 100);
 }
 
