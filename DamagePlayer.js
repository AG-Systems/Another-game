var oneShotDamageAmount : int;
var damageOverTimeAmount : int;
var isDOT : boolean;
var DOTSpeed : float;
 
private var inTrigger : boolean;
 
function OnTriggerEnter (other:Collider){
     Debug.Log("Something entered a damage trigger");
     if (other.gameObject.tag == "Player"){
     Debug.Log("PLayer entered a damage trigger");
     inTrigger = true;
         
          other.BroadcastMessage("ApplyDamage", oneShotDamageAmount); 
          if(isDOT) {
               DoDamage (other.gameObject);
          }
     }
}
     
function OnTriggerExit (other:Collider){
     inTrigger = false;
}
 
function DoDamage (target : GameObject){
     while (inTrigger){
     yield WaitForSeconds (DOTSpeed);
     target.BroadcastMessage("contApplyDamage", damageOverTimeAmount);
     
     }
}
