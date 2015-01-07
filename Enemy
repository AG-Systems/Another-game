 var hits : int;
 var rayRange : float;
 var speed : float = 6.0;
 var rotation : float = 8.0; 
 var fieldOfViewRange : float = 68.0; 
 var minPlayerDetectDistance : float = 4.0;
 
 var status : int = 0;
 private var csp = false;
 private var repos = false;
 
 /////////////////////
 // STATUS KEY:
 // 0 = sleep         
 // 1 = chase           
 // 2 = randomWonder. 
 /////////////////////
 
 var player : Transform;
 var target : Transform;
 private var myTransform : Transform;
 private var spawnPos : Vector3;
 
 private var rayDirection = Vector3.zero;
 
 static var reset = false;
 
 function Start()
 {
     myTransform = transform;
     spawnPos = transform.position;
         
     status = 0;
     
     // Error checks
     
     if(player == null)
         Debug.LogError("Player is not set on " + this.name);
         
     if(target == null)
         Debug.LogError("target is not set on " + this.name);
 }
 
 function Update()
 {
     // Setting local variables 
     
     var hit : RaycastHit;
     var dtt = Vector3.Distance(transform.position, target.position);
     var distanceToPlayer = Vector3.Distance(transform.position, player.position);
     
     rayDirection = player.position - transform.position;
     
     // Failsafe 
     
     if((status != 2) && (Physics.Raycast(transform.position, transform.forward, hit, 2)))
     {
         target.position = transform.position;
     }
     if(transform.position.y <= -20)
     {
         transform.position = spawnPos;
     }
     
     // Catch the player if he is within view 
     
     if((Vector3.Angle(rayDirection, transform.forward)) < fieldOfViewRange)
     { 
         if (Physics.Raycast (transform.position, rayDirection, hit, rayRange)) 
         {
             if ((hit.transform.tag == "Player") && (hit.transform.tag != "Wall"))
             {
                 target.position = player.position;    
                 csp = true;        
             }
             else
             {
                 csp = false;
             }
         }
     }
     
     // Catch the player if he sneaks up behind 
     
     if(Physics.Raycast (transform.position, rayDirection, hit))
     { 
         Debug.DrawRay(transform.position, rayDirection, Color.green);
         
         if((hit.transform.tag != "Player") && (distanceToPlayer <= minPlayerDetectDistance))
         {
             target.position = player.position;
         }
     }
     
     // Status setting 
     
     if(dtt <= 3 && csp)
     {
         status = 0;
     }
     if(dtt > 3 && csp)
     {
         status = 1;
     }
     if(dtt <= 3 && !csp)
     {
         status = 2;
     }
     
     // Status Control
     
     if(csp)
         hits = 0;
     
     switch(status)
     {
         case 0:
             break;
         
         case 1: 
             myTransform.rotation = Quaternion.Slerp(myTransform.rotation, 
                                    Quaternion.LookRotation(target.position - myTransform.position),
                                    rotation * Time.deltaTime);
             
             myTransform.position += myTransform.forward * speed * Time.deltaTime * 2;
             
             break;
             
         case 2:
             RandomWonderMode();
             break;
             
         default:
             Debug.LogError("Unrecognised enemy status " + status);
             break;
     }
     
     if(reset)
     {
         Reset();
     }
 }
 
 function RandomWonderMode()
 {
     var pp = player.positon;
     var mp = transform.position;
     var dtt = Vector3.Distance(transform.position, target.position);
     var hit : RaycastHit;
     
     if(!csp)
     {
         if(dtt > 3)
         {
             myTransform.rotation = Quaternion.Slerp(myTransform.rotation, 
                                    Quaternion.LookRotation(target.position - myTransform.position),
                                    rotation * Time.deltaTime);
                                            
             myTransform.position += myTransform.forward * speed * Time.deltaTime;
         }
         else
         {
             repos = true;
         }
         
         if(Physics.Raycast (transform.position, transform.forward, hit, 2) || repos)
         {
             var pos = Vector3(Random.Range(-50,50), 1, Random.Range(-50,50));
             target.position = pos;
             repos = false;
             hits ++;
         }
         
         if(hits > 100 && !csp)
         {
             hits = 0;
             transform.position = spawnPos;
         }
     }
 }
 
 function Reset()
 {
     transform.position = spawnPos;
     hits = 0;
     status = 2;
     reset = false;
     
     // Error checks
     
     if(player == null)
     {
         Debug.LogError("Player is not set on " + this.name);
     }
     if(target == null)
     {
         Debug.LogError("target is not set on " + this.name);
     }
 }
