# Generated by Django 4.1.13 on 2024-05-20 03:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0002_order_shipment_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='delivery_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='order',
            name='estimated_delivery_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]
