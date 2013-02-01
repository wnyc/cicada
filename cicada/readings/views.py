from .models import TempAndAudioReading
from django.http import HttpResponse
from django.views.decorators.http import require_http_methods
import json
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
@require_http_methods(["POST"])
def listen(request):
    temp = (float(request.POST['temp']) * 1.8) + 32
    high_freq = request.POST['7000']
    medium_freq = request.POST['4000']
    low_freq = request.POST['2500']
    TempAndAudioReading.objects.create(temp=temp,
                                       high_freq=high_freq,
                                       medium_freq=medium_freq,
                                       low_freq=low_freq)
    return HttpResponse(True)

@require_http_methods(["GET"])
def retrieve_latest(request):
    latest_reading = TempAndAudioReading.objects.latest('created')
    
    result_dict = {}
    result_dict['confidence'] = latest_reading.audio_confidence()
    result_dict['temp'] = latest_reading.temp
    
    json_dict = json.dumps(result_dict)
    json_dict_yeah_p = "llamas(%s)" % json_dict
    return HttpResponse(json_dict_yeah_p, mimetype="application/json")