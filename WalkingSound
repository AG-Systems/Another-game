
var Steps : AudioClip[];


 


private var isWalking : boolean = false;


 


private var controller : CharacterController;


 


 


 


function Awake()


 


{


 


    controller = GetComponent(CharacterController);


 


}


 


 


 


function Update()


 


{


    


 


    if(controller.velocity.sqrMagnitude > 0.15 )


 


    {


 


        isWalking = true;


 


    }


 


    else


 


    {


 


        isWalking = false;


 


    }


 


}


 


 


 


InvokeRepeating("Walking", 1.0, 0.6);


 


 


 


function Walking()


 


{


 


    if(isWalking)


 


    {


 


        AudioSource.PlayClipAtPoint(Steps[Random.Range(0,Steps.length)], gameObject.transform.position);


    }


}
