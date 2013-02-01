from django.db import models

class TempAndAudioReading(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    temp = models.FloatField()
    high_freq = models.FloatField()
    medium_freq = models.FloatField()
    low_freq = models.FloatField()
    
    def audio_confidence(self):
        return 0